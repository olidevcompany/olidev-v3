import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "lg";
  children: React.ReactNode;
};

export function Button({
  className,
  variant = "default",
  size = "sm",
  asChild,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
    variant === "default" && "bg-white text-black hover:bg-zinc-200",
    variant === "ghost" && "bg-transparent text-zinc-300 hover:text-white hover:bg-white/5",
    variant === "outline" && "border border-white/10 bg-transparent text-white hover:bg-white/5",
    size === "sm" && "h-10 rounded-xl px-4 text-sm",
    size === "lg" && "h-12 rounded-xl px-6 text-base",
    className
  );

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
      className: cn((children.props as { className?: string }).className, classes),
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}