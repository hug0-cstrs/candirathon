"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GradientButton } from "@/components/ui/gradient-button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <Card className="bg-gray-50">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">
                Prénom
              </label>
              <Input
                id="firstName"
                placeholder="Votre prénom"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">
                Nom
              </label>
              <Input
                id="lastName"
                placeholder="Votre nom"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="votre.email@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Sujet
            </label>
            <Select
              value={formData.subject}
              onValueChange={(value) =>
                setFormData({ ...formData, subject: value })
              }
            >
              <SelectTrigger id="subject">
                <SelectValue placeholder="Devenir bénévole" />
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
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Votre message..."
              rows={6}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
          </div>

          {/* Submit Button */}
          <GradientButton
            type="submit"
            size="lg"
            className="w-full rounded-full"
          >
            Envoyer le message
          </GradientButton>
        </form>
      </CardContent>
    </Card>
  );
}
