"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface StatsCounterProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

export function StatsCounter({
  value,
  suffix = "",
  label,
  className,
}: StatsCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className={cn("flex flex-col items-center gap-1", className)}>
      <div className="text-3xl md:text-4xl font-bold text-white">
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-white/80">{label}</div>
    </div>
  );
}
