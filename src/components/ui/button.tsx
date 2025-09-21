import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant = "gray" | "outline" | "link" | "orangeGradient";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  disabled?: boolean;
  asChild?: boolean;
  href?: string;
  [key: string]: any;
}

const variantClasses: Record<ButtonVariant, string> = {
  gray: "bg-background-2 text-white hover:bg-gray-500",
  outline:
    "border border-2 border-white-3 bg-background text-white hover:bg-gray-900 transition-colors",
  link: "border-b border-foreground/55 bg-transparent text-foreground/80 hover:text-foreground duration-300 transition-colors !h-fit !w-fit !p-0 rounded-none ",
  orangeGradient:
    "bg-gradient-to-t from-orange-1 to-yellow-1 text-white hover:opacity-80",
};

export function Button({
  variant = "gray",
  fullWidth = false,
  className,
  icon,
  children,
  asChild = false,
  href,
  disabled = false,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300",
    fullWidth && "w-full",
    variantClasses[variant],
    disabled
      ? "bg-background-2 text-foreground/15 cursor-not-allowed opacity-50"
      : "cursor-pointer",
    className
  );

  if (asChild && href) {
    return (
      <Link href={href} className={classes} aria-disabled={disabled}>
        {icon && <span className="size-5">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {icon && <span className="size-5">{icon}</span>}
      {children}
    </button>
  );
}
