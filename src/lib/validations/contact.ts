import { z } from "zod";

/**
 * Schéma de validation pour le formulaire de contact
 * Validation stricte côté serveur et client
 */
export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .max(50, "Le prénom ne peut pas dépasser 50 caractères")
    .regex(
      /^[a-zA-ZÀ-ÿ\s'-]+$/,
      "Le prénom ne peut contenir que des lettres, espaces et tirets",
    ),
  lastName: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne peut pas dépasser 50 caractères")
    .regex(
      /^[a-zA-ZÀ-ÿ\s'-]+$/,
      "Le nom ne peut contenir que des lettres, espaces et tirets",
    ),
  email: z
    .string()
    .email("Email invalide")
    .max(100, "L'email ne peut pas dépasser 100 caractères")
    .transform((email) => email.toLowerCase().trim()),
  subject: z.enum(["benevole", "partenariat", "don", "evenement", "autre"], {
    message: "Veuillez sélectionner un sujet valide",
  }),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(2000, "Le message ne peut pas dépasser 2000 caractères"),
  // Champ honeypot pour la protection anti-spam (invisible pour les utilisateurs)
  _honeypot: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Mapping des sujets pour l'affichage
 */
export const subjectLabels: Record<ContactFormData["subject"], string> = {
  benevole: "Devenir bénévole",
  partenariat: "Partenariat",
  don: "Faire un don",
  evenement: "Organiser un événement",
  autre: "Autre",
};
