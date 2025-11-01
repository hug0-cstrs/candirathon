import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import type { ContactFormData } from "@/lib/validations/contact";
import { subjectLabels } from "@/lib/validations/contact";

interface NotificationEmailProps {
  data: ContactFormData;
}

export default function NotificationEmail({ data }: NotificationEmailProps) {
  const formattedDate = new Date().toLocaleString("fr-FR", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Paris",
  });

  return (
    <Html lang="fr">
      <Head />
      <Preview>
        Nouveau message de {data.firstName} {data.lastName} -{" "}
        {subjectLabels[data.subject]}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={headerTitle}>Nouveau message de contact</Heading>
          </Section>

          {/* Content */}
          <Section style={content}>
            {/* Contact Info Card */}
            <Section style={card}>
              <Heading style={cardTitle}>Informations du contact</Heading>

              <Row style={infoRow}>
                <Column style={infoLabel}>Nom complet :</Column>
                <Column style={infoValue}>
                  {data.firstName} {data.lastName}
                </Column>
              </Row>

              <Row style={infoRow}>
                <Column style={infoLabel}>Email :</Column>
                <Column style={infoValue}>
                  <a href={`mailto:${data.email}`} style={emailLink}>
                    {data.email}
                  </a>
                </Column>
              </Row>

              <Row style={infoRowLast}>
                <Column style={infoLabel}>Sujet :</Column>
                <Column style={infoValue}>
                  <span style={badge}>{subjectLabels[data.subject]}</span>
                </Column>
              </Row>
            </Section>

            {/* Message Card */}
            <Section style={card}>
              <Heading style={messageTitle}>Message</Heading>
              <Text style={messageText}>{data.message}</Text>
            </Section>

            {/* Action Required Notice */}
            <Section style={warningBox}>
              <Text style={warningText}>
                <strong>Action requise :</strong> Répondez à ce message dans les
                plus brefs délais pour maintenir un bon niveau de service.
              </Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Cet email a été envoyé depuis le formulaire de contact du site
              CanDirathon.
            </Text>
            <Text style={footerDate}>Date : {formattedDate}</Text>
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
  padding: "20px",
  borderRadius: "8px",
  marginBottom: "20px",
};

const cardTitle = {
  color: "#9333ea",
  marginTop: "0",
  fontSize: "18px",
  marginBottom: "15px",
};

const infoRow = {
  padding: "10px 0",
  borderBottom: "1px solid #e5e7eb",
};

const infoRowLast = {
  padding: "10px 0",
};

const infoLabel = {
  color: "#6b7280",
  fontWeight: "bold",
  fontSize: "14px",
};

const infoValue = {
  textAlign: "right" as const,
  fontSize: "14px",
};

const emailLink = {
  color: "#ec4899",
  textDecoration: "none",
};

const badge = {
  background: "#f3e8ff",
  color: "#9333ea",
  padding: "4px 12px",
  borderRadius: "12px",
  fontSize: "14px",
  display: "inline-block",
};

const messageTitle = {
  color: "#9333ea",
  marginTop: "0",
  fontSize: "16px",
  marginBottom: "10px",
};

const messageText = {
  whiteSpace: "pre-wrap" as const,
  color: "#374151",
  margin: "0",
  lineHeight: "1.8",
};

const warningBox = {
  marginTop: "20px",
  padding: "15px",
  background: "#fef3c7",
  borderLeft: "4px solid #f59e0b",
  borderRadius: "4px",
};

const warningText = {
  margin: "0",
  color: "#92400e",
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

const footerDate = {
  margin: "5px 0 0 0",
};
