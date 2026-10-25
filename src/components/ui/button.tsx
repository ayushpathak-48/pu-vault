import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_4px_14px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]",
        destructive:
          "bg-destructive/90 text-destructive-foreground backdrop-blur-md shadow-sm hover:bg-destructive shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]",
        outline:
          "border border-white/60 dark:border-white/[0.12] bg-white/50 dark:bg-white/[0.06] backdrop-blur-xl shadow-xs text-foreground hover:bg-white/80 dark:hover:bg-white/[0.12] hover:border-white/80 dark:hover:border-white/20",
        secondary:
          "bg-white/60 dark:bg-zinc-800/60 backdrop-blur-xl text-secondary-foreground border border-white/50 dark:border-white/[0.08] shadow-xs hover:bg-white/85 dark:hover:bg-zinc-800/85",
        ghost:
          "hover:bg-white/60 dark:hover:bg-white/[0.08] backdrop-blur-sm text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9.5 px-4 py-2",
        sm: "h-8.5 rounded-lg px-3 text-xs",
        lg: "h-11 rounded-2xl px-8 text-base",
        icon: "h-9 w-9 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
