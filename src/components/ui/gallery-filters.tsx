"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface GalleryFiltersProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  className?: string;
}

export function GalleryFilters({
  filters,
  activeFilter,
  onFilterChange,
  className,
}: GalleryFiltersProps) {
  return (
    <div className={cn("flex flex-wrap gap-2 justify-center", className)}>
      {filters.map((filter) => (
        <Badge
          key={filter}
          variant={activeFilter === filter ? "default" : "outline"}
          className={cn(
            "cursor-pointer px-4 py-2 text-sm font-medium transition-all duration-200",
            activeFilter === filter
              ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
              : "hover:bg-muted",
          )}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </Badge>
      ))}
    </div>
  );
}
