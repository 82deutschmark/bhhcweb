
import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
}

export function Logo({ 
  className, 
  size = "md", 
  showText = true 
}: LogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
    xl: "h-24"
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img 
        src="/logo.png" 
        alt="Big Happy Holding Co. Logo"
        className={cn(sizeClasses[size], "object-contain")}
      />
      {showText && (
        <div className="flex flex-col">
          <span className="font-bold text-accent leading-tight">
            {size === "sm" ? "BHHC" : "Big Happy Holding Co."}
          </span>
          {(size === "lg" || size === "xl") && (
            <span className="text-primary text-sm font-medium">Nurturing growth through innovation</span>
          )}
        </div>
      )}
    </div>
  );
}
