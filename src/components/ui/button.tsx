import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    let base = "px-4 py-2 rounded font-medium transition-colors";
    let styles =
      variant === "outline"
        ? "border border-gray-600 bg-transparent hover:bg-gray-800"
        : variant === "ghost"
        ? "bg-transparent hover:bg-gray-800"
        : "bg-blue-600 hover:bg-blue-700 text-white";

    return <Comp ref={ref as any} className={`${base} ${styles} ${className}`} {...props} />;
  }
);

Button.displayName = "Button";
