import Image from "next/image";
import { cn } from "@/lib/utils";

interface AssociationLogo {
  name: string;
  logo: string;
}

interface AssociationLogosGridProps {
  associations: AssociationLogo[];
  className?: string;
}

export function AssociationLogosGrid({
  associations,
  className,
}: AssociationLogosGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center",
        className,
      )}
    >
      {associations.map((association) => (
        <div
          key={association.name}
          className="relative w-32 h-32 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
        >
          <Image
            src={association.logo}
            alt={association.name}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
