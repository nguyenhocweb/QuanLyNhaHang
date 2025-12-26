import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const LinkVariant = cva(
  "relative flex items-center justify-center transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        mau1:"after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-after-header-public after:rounded-[10px] after:scale-x-0 after:transition-all after:duration-300 hover:after:scale-x-100",
        mau2:"rounded-md bg-bg-nav2 shadow-shadow-nav2 before:content-[''] before:absolute before:rounded-md before:w-[calc(100%-3px)] before:h-[calc(100%-3px)] before:bg-bg-before-nav2",
      },
      size: {
        default: "",
        vua: "px-4 py-2",
        max: "w-full h-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export interface LinkProps
  extends React.ComponentPropsWithoutRef<"a">,
    VariantProps<typeof LinkVariant> {
  disabled?: boolean;
}

const A = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, href, disabled, variant, size, children, ...props }, ref) => {
    return (

        <a
        href={href}
          ref={ref}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : undefined}
          className={cn(
            LinkVariant({ variant, size }),
            disabled && "pointer-events-none opacity-50 cursor-not-allowed",
            className
          )}
          {...props}
        >
          {children}
        </a>

    );
  }
);

A.displayName = "A";

export default A;
