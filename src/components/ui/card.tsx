import * as React from "react";
import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-white/10 bg-black/[0.96] shadow-2xl shadow-black/60",
        className
      )}
      {...props}
    />
  );
}