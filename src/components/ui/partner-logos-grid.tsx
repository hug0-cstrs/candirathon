import { cn } from "@/lib/utils";
import Image from "next/image";

interface PartnerLogo {
  name: string;
  logo: string;
}

interface PartnerLogosGridProps {
  partners: PartnerLogo[];
  className?: string;
}

export function PartnerLogosGrid({
  partners,
  className,
}: PartnerLogosGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center",
        className,
      )}
    >
      {partners.map((partner) => (
        <div
          key={partner.name}
          className="relative w-24 h-24 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
        >
          <Image
            src={partner.logo}
            alt={partner.name}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
