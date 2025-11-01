"use server";

import ConfirmationEmail from "@/emails/confirmation-email";
import NotificationEmail from "@/emails/notification-email";
import { sendEmail } from "@/lib/email/nodemailer";
import type { ContactFormData } from "@/lib/validations/contact";
import { contactFormSchema } from "@/lib/validations/contact";

/**
 * Type pour la réponse de la Server Action
 */
export type ContactFormResponse =
  | { success: true; message: string }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> };

/**
 * Rate limiting simple basé sur IP (en production, utiliser Redis ou une solution plus robuste)
 * Stocke les timestamps des soumissions par IP
 */
const submissionTimestamps = new Map<string, number[]>();

/**
 * Vérifie si l'IP a dépassé la limite de rate limiting
 * Limite : 3 soumissions par heure
 */
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const oneHour = 60 * 60 * 1000;
  const maxSubmissions = 3;

  const timestamps = submissionTimestamps.get(ip) || [];
  const recentTimestamps = timestamps.filter((ts) => now - ts < oneHour);

  if (recentTimestamps.length >= maxSubmissions) {
    return false;
  }

  recentTimestamps.push(now);
  submissionTimestamps.set(ip, recentTimestamps);

  // Nettoyage des anciennes entrées (toutes les 100 vérifications)
  if (Math.random() < 0.01) {
    for (const [key, values] of submissionTimestamps.entries()) {
      const recent = values.filter((ts) => now - ts < oneHour);
      if (recent.length === 0) {
        submissionTimestamps.delete(key);
      } else {
        submissionTimestamps.set(key, recent);
      }
    }
  }

  return true;
}

/**
 * Server Action pour envoyer le formulaire de contact
 *
 * @param formData - Données du formulaire non validées
 * @returns Résultat de l'envoi avec succès ou erreur
 */
export async function sendContactEmail(
  formData: unknown,
): Promise<ContactFormResponse> {
  try {
    // 1. Protection honeypot anti-spam
    if (
      typeof formData === "object" &&
      formData !== null &&
      "_honeypot" in formData &&
      formData._honeypot
    ) {
      // Si le champ honeypot est rempli, c'est probablement un bot
      console.warn("Spam detected: honeypot field filled");
      // On retourne un succès pour tromper le bot
      return {
        success: true,
        message: "Message envoyé avec succès !",
      };
    }

    // 2. Validation des données avec Zod
    const validationResult = contactFormSchema.safeParse(formData);

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return {
        success: false,
        error: "Veuillez corriger les erreurs dans le formulaire",
        fieldErrors: fieldErrors as Record<string, string[]>,
      };
    }

    const data: ContactFormData = validationResult.data;

    // 3. Rate limiting (optionnel en développement, important en production)
    // Note : En production, utiliser l'IP réelle depuis les headers
    const ip = "dev-ip"; // En production : headers().get("x-forwarded-for") || "unknown"

    if (!checkRateLimit(ip)) {
      return {
        success: false,
        error: "Trop de tentatives. Veuillez réessayer dans une heure.",
      };
    }

    // 4. Vérification des variables d'environnement
    if (!process.env.CONTACT_EMAIL_TO) {
      console.error("CONTACT_EMAIL_TO is not set");
      return {
        success: false,
        error:
          "Configuration du serveur manquante. Veuillez contacter l'administrateur.",
      };
    }

    const fromEmail = process.env.EMAIL_FROM || process.env.EMAIL_USER;

    // 5. Envoi de l'email de notification à l'association
    try {
      await sendEmail({
        to: process.env.CONTACT_EMAIL_TO,
        subject: `[Nouveau message] ${data.firstName} ${data.lastName} - ${data.subject}`,
        reactComponent: NotificationEmail({ data }),
        options: {
          from: `CanDirathon <${fromEmail}>`,
          replyTo: data.email,
        },
      });
    } catch (error) {
      console.error("Failed to send notification email:", error);
      return {
        success: false,
        error:
          "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
      };
    }

    // 6. Envoi de l'email de confirmation à l'utilisateur
    try {
      await sendEmail({
        to: data.email,
        subject: "Confirmation de votre message - CanDirathon",
        reactComponent: ConfirmationEmail({ data }),
        options: {
          from: `CanDirathon <${fromEmail}>`,
        },
      });
    } catch (error) {
      // Note : On ne bloque pas si l'email de confirmation échoue
      console.warn("Failed to send confirmation email:", error);
    }

    // 7. Log de succès (pour monitoring en production)
    console.log("Contact form submitted successfully:", {
      email: data.email,
      subject: data.subject,
      timestamp: new Date().toISOString(),
    });

    return {
      success: true,
      message:
        "Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.",
    };
  } catch (error) {
    console.error("Unexpected error in sendContactEmail:", error);
    return {
      success: false,
      error:
        "Une erreur inattendue est survenue. Veuillez réessayer plus tard.",
    };
  }
}
