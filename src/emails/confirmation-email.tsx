import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { ContactFormData } from "@/lib/validations/contact";
import { subjectLabels } from "@/lib/validations/contact";

interface ConfirmationEmailProps {
  data: ContactFormData;
}

export default function ConfirmationEmail({ data }: ConfirmationEmailProps) {
  const truncatedMessage =
    data.message.length > 200
      ? data.message.substring(0, 200) + "..."
      : data.message;

  return (
    <Html lang="fr">
      <Head />
      <Preview>Confirmation de votre message - CanDirathon</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={headerTitle}>Message bien reçu !</Heading>
          </Section>

          {/* Content */}
          <Section style={content}>
            <Section style={card}>
              <Text style={greeting}>
                Bonjour <strong>{data.firstName}</strong>,
              </Text>

              <Text style={paragraph}>
                Nous avons bien reçu votre message concernant{" "}
                <strong style={subjectHighlight}>
                  {subjectLabels[data.subject].toLowerCase()}
                </strong>{" "}
                et nous vous en remercions !
              </Text>

              <Text style={paragraph}>
                Notre équipe va l'examiner attentivement et vous répondra dans
                les plus <strong>brefs délais</strong>.
              </Text>

              {/* Message Summary */}
              <Section style={summaryBox}>
                <Text style={summaryLabel}>
                  Récapitulatif de votre message :
                </Text>
                <Text style={summaryText}>{truncatedMessage}</Text>
              </Section>

              <Text style={paragraph}>
                En attendant notre réponse, n'hésitez pas à découvrir nos
                dernières actualités et événements sur notre site web.
              </Text>
            </Section>

            {/* CTA Button */}
            <Section style={buttonContainer}>
              <Button style={button} href="https://candirathon.fr">
                Visiter notre site
              </Button>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Vous recevez cet email car vous avez contacté CanDirathon via
              notre formulaire de contact.
            </Text>
            <Text style={footerInfo}>
              <strong>CanDirathon</strong> | Association étudiante de solidarité
              <br />
              Email :{" "}
              <a href="mailto:candirathon31@gmail.com" style={footerLink}>
                candirathon31@gmail.com
              </a>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px",
  maxWidth: "600px",
};

const header = {
  background: "linear-gradient(135deg, #ec4899 0%, #9333ea 100%)",
  padding: "30px",
  borderRadius: "12px 12px 0 0",
  textAlign: "center" as const,
};

const headerTitle = {
  color: "#ffffff",
  margin: "0",
  fontSize: "24px",
};

const content = {
  background: "#f9fafb",
  padding: "30px",
  borderRadius: "0 0 12px 12px",
  border: "1px solid #e5e7eb",
};

const card = {
  background: "#ffffff",
  padding: "25px",
  borderRadius: "8px",
  marginBottom: "20px",
};

const greeting = {
  fontSize: "16px",
  color: "#374151",
  marginTop: "0",
};

const paragraph = {
  color: "#6b7280",
  lineHeight: "1.8",
  margin: "15px 0",
};

const subjectHighlight = {
  color: "#9333ea",
};

const summaryBox = {
  background: "#f3e8ff",
  padding: "20px",
  borderRadius: "8px",
  margin: "25px 0",
  borderLeft: "4px solid #9333ea",
};

const summaryLabel = {
  margin: "0 0 10px 0",
  color: "#6b7280",
  fontSize: "14px",
  fontWeight: "600",
};

const summaryText = {
  margin: "0",
  color: "#374151",
  whiteSpace: "pre-wrap" as const,
  fontSize: "14px",
  lineHeight: "1.6",
};

const buttonContainer = {
  textAlign: "center" as const,
  marginTop: "25px",
};

const button = {
  display: "inline-block",
  background: "linear-gradient(135deg, #ec4899 0%, #9333ea 100%)",
  color: "#ffffff",
  padding: "12px 30px",
  textDecoration: "none",
  borderRadius: "25px",
  fontWeight: "600",
  fontSize: "14px",
};

const footer = {
  marginTop: "20px",
  padding: "15px",
  textAlign: "center" as const,
  color: "#6b7280",
  fontSize: "12px",
};

const footerText = {
  margin: "0",
};

const footerInfo = {
  margin: "10px 0 0 0",
};

const footerLink = {
  color: "#ec4899",
  textDecoration: "none",
};
