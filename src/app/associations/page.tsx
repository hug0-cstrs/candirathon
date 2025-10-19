import { AssociationsSection } from "@/components/AssociationsSection";

export const metadata = {
  title: "Associations Soutenues - CanDirathon",
  description:
    "Ensemble, nous soutenons les associations qui luttent contre le cancer et accompagnent les malades et leurs proches.",
};

export default function AssociationsPage() {
  return (
    <div className="min-h-screen">
      {/* Associations List */}
      <AssociationsSection />
    </div>
  );
}
