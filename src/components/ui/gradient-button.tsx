import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface GradientButtonProps extends ButtonProps {
  gradient?: "pink-purple" | "purple-blue" | "yellow-orange";
}

const gradientClasses = {
  "pink-purple":
    "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700",
  "purple-blue":
    "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700",
  "yellow-orange":
    "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600",
};

export const GradientButton = React.forwardRef<
  HTMLButtonElement,
  GradientButtonProps
>(({ className, gradient = "pink-purple", ...props }, ref) => {
  return (
    <Button
      ref={ref}
      className={cn(
        "text-white font-semibold shadow-lg transition-all duration-300",
        gradientClasses[gradient],
        className,
      )}
      {...props}
    />
  );
});

GradientButton.displayName = "GradientButton";
