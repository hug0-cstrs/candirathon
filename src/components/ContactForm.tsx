"use client";

import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { sendContactEmail } from "@/app/actions/contact";
import { Card, CardContent } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    _honeypot: "", // Champ honeypot anti-spam (invisible)
  });

  const [isPending, startTransition] = useTransition();
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset des erreurs
    setFieldErrors({});

    // Utilisation de useTransition pour une meilleure UX
    startTransition(async () => {
      try {
        const result = await sendContactEmail(formData);

        if (result.success) {
          // Succès : afficher toast de succès et réinitialiser le formulaire
          toast.success(result.message, {
            duration: 5000,
            icon: <CheckCircle2 className="w-5 h-5" />,
          });

          // Reset du formulaire
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
            _honeypot: "",
          });
        } else {
          // Erreur : afficher toast d'erreur et les erreurs de champs
          toast.error(result.error, {
            duration: 4000,
            icon: <AlertCircle className="w-5 h-5" />,
            description: "Veuillez vérifier les champs du formulaire.",
          });

          if (result.fieldErrors) {
            setFieldErrors(result.fieldErrors);
          }
        }
      } catch (error) {
        console.error("Unexpected error:", error);
        toast.error("Une erreur inattendue est survenue.", {
          duration: 4000,
          icon: <AlertCircle className="w-5 h-5" />,
          description: "Veuillez réessayer plus tard.",
        });
      }
    });
  };

  return (
    <Card className="bg-gray-50">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">
                Prénom <span className="text-red-500">*</span>
              </label>
              <Input
                id="firstName"
                placeholder="Votre prénom"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                disabled={isPending}
                required
                aria-invalid={fieldErrors.firstName ? "true" : "false"}
                aria-describedby={
                  fieldErrors.firstName ? "firstName-error" : undefined
                }
              />
              {fieldErrors.firstName && (
                <p
                  id="firstName-error"
                  className="text-sm text-red-600 flex items-center gap-1"
                >
                  <AlertCircle className="w-4 h-4" />
                  {fieldErrors.firstName[0]}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">
                Nom <span className="text-red-500">*</span>
              </label>
              <Input
                id="lastName"
                placeholder="Votre nom"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                disabled={isPending}
                required
                aria-invalid={fieldErrors.lastName ? "true" : "false"}
                aria-describedby={
                  fieldErrors.lastName ? "lastName-error" : undefined
                }
              />
              {fieldErrors.lastName && (
                <p
                  id="lastName-error"
                  className="text-sm text-red-600 flex items-center gap-1"
                >
                  <AlertCircle className="w-4 h-4" />
                  {fieldErrors.lastName[0]}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="votre.email@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              disabled={isPending}
              required
              aria-invalid={fieldErrors.email ? "true" : "false"}
              aria-describedby={fieldErrors.email ? "email-error" : undefined}
            />
            {fieldErrors.email && (
              <p
                id="email-error"
                className="text-sm text-red-600 flex items-center gap-1"
              >
                <AlertCircle className="w-4 h-4" />
                {fieldErrors.email[0]}
              </p>
            )}
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Sujet <span className="text-red-500">*</span>
            </label>
            <Select
              value={formData.subject}
              onValueChange={(value) =>
                setFormData({ ...formData, subject: value })
              }
              disabled={isPending}
            >
              <SelectTrigger
                id="subject"
                aria-invalid={fieldErrors.subject ? "true" : "false"}
                aria-describedby={
                  fieldErrors.subject ? "subject-error" : undefined
                }
              >
                <SelectValue placeholder="Sélectionnez un sujet" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="benevole">Devenir bénévole</SelectItem>
                <SelectItem value="partenariat">Partenariat</SelectItem>
                <SelectItem value="don">Faire un don</SelectItem>
                <SelectItem value="evenement">
                  Organiser un événement
                </SelectItem>
                <SelectItem value="autre">Autre</SelectItem>
              </SelectContent>
            </Select>
            {fieldErrors.subject && (
              <p
                id="subject-error"
                className="text-sm text-red-600 flex items-center gap-1"
              >
                <AlertCircle className="w-4 h-4" />
                {fieldErrors.subject[0]}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="message"
              placeholder="Votre message..."
              rows={6}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              disabled={isPending}
              required
              aria-invalid={fieldErrors.message ? "true" : "false"}
              aria-describedby={
                fieldErrors.message ? "message-error" : undefined
              }
            />
            {fieldErrors.message && (
              <p
                id="message-error"
                className="text-sm text-red-600 flex items-center gap-1"
              >
                <AlertCircle className="w-4 h-4" />
                {fieldErrors.message[0]}
              </p>
            )}
            <p className="text-xs text-gray-500">
              {formData.message.length}/2000 caractères
            </p>
          </div>

          {/* Honeypot field - hidden from users, visible to bots */}
          <input
            type="text"
            name="_honeypot"
            value={formData._honeypot}
            onChange={(e) =>
              setFormData({ ...formData, _honeypot: e.target.value })
            }
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {/* Submit Button */}
          <GradientButton
            type="submit"
            size="lg"
            className="w-full rounded-full cursor-pointer"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              "Envoyer le message"
            )}
          </GradientButton>

          {/* Note de confidentialité */}
          <p className="text-xs text-gray-500 text-center">
            Vos données sont traitées de manière confidentielle et ne seront
            jamais partagées avec des tiers.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
