import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold backdrop-blur-md transition-all shadow-2xs",
  {
    variants: {
      variant: {
        default:
          "border-primary/40 bg-primary/90 text-primary-foreground shadow-[0_2px_8px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.4)]",
        secondary:
          "border-white/60 dark:border-white/[0.1] bg-white/50 dark:bg-white/[0.08] text-foreground shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]",
        destructive:
          "border-destructive/40 bg-destructive/85 text-destructive-foreground",
        outline:
          "border-white/60 dark:border-white/[0.12] bg-white/30 dark:bg-white/[0.04] text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
