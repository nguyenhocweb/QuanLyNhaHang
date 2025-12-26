import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const PVariants = cva(
    "",
    {
        variants: {
            variant: {
                default: "text-text-lr",
                mes: "text-red-500 absolute -bottom-5 right-0  text-end mt-2",
                or:"text-center text-[20px] text-text-lr my-3 font-bold"

            },
            size: {
                default: "text-md",
                mes: "text-xs"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }

    }
);
export interface PProps extends React.ComponentPropsWithoutRef<"p">,
    VariantProps<typeof PVariants> { };

const P = React.forwardRef<HTMLParagraphElement, PProps>(
    ({ className, size, variant, children, ...props }, ref) => {
        return (
            <p className={cn(PVariants({ size, variant, className }))}
                ref={ref}
                {...props}
            >
                {children}
            </p>
        )
    }
);
P.displayName="P";
export default P;
