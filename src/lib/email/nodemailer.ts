import { render } from "@react-email/components";
import nodemailer from "nodemailer";

/**
 * Crée un transporteur Nodemailer configuré avec les variables d'environnement
 */
export function createTransporter() {
  // Vérification des variables d'environnement requises
  if (!process.env.EMAIL_HOST) {
    throw new Error("EMAIL_HOST environment variable is not set");
  }
  if (!process.env.EMAIL_PORT) {
    throw new Error("EMAIL_PORT environment variable is not set");
  }
  if (!process.env.EMAIL_USER) {
    throw new Error("EMAIL_USER environment variable is not set");
  }
  if (!process.env.EMAIL_PASS) {
    throw new Error("EMAIL_PASS environment variable is not set");
  }

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10),
    secure: process.env.EMAIL_SECURE === "true", // true pour port 465, false pour autres ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

/**
 * Envoie un email en utilisant un template React Email
 *
 * @param to - Adresse email du destinataire
 * @param subject - Sujet de l'email
 * @param reactComponent - Composant React Email à rendre
 * @param options - Options supplémentaires (from, replyTo, etc.)
 */
export async function sendEmail({
  to,
  subject,
  reactComponent,
  options = {},
}: {
  to: string;
  subject: string;
  reactComponent: React.ReactElement;
  options?: {
    from?: string;
    replyTo?: string;
  };
}) {
  const transporter = createTransporter();

  const fromEmail =
    options.from || process.env.EMAIL_FROM || "noreply@candirathon.com";

  // Rendre le composant React en HTML
  const html = await render(reactComponent);

  // Envoyer l'email
  const info = await transporter.sendMail({
    from: fromEmail,
    to,
    subject,
    html,
    replyTo: options.replyTo,
  });

  return info;
}
