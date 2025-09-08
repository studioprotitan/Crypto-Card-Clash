import { forwardRef, type ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    let base = "px-4 py-2 rounded font-medium transition-colors";
    let styles =
      variant === "outline"
        ? "border border-gray-600 bg-transparent hover:bg-gray-800"
        : variant === "ghost"
        ? "bg-transparent hover:bg-gray-800"
        : "bg-blue-600 hover:bg-blue-700 text-white";

    return (
      <button ref={ref} className={`${base} ${styles} ${className}`} {...props} />
    );
  }
);

Button.displayName = "Button";
