import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";
const SelectVariants = cva(
    "",
    {
        variants: {
            variant: {
                default: "border-b border-gray-500 text-text-lr focus:outline-none"
            },
            size1: {
                size1: ""
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
);
// thẻ select có sẵn thuộc tính size nên là không đc đặt tên size
export interface SelectProps extends React.ComponentPropsWithoutRef<"select">,
    VariantProps<typeof SelectVariants> { };
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, children,variant,size1, ...props }, ref) => {
        return (
            <select
                ref={ref}
                className={cn(SelectVariants({variant,size1,className}))}
                {...props}
            >
                {children}
            </select>
        )
    }
);
Select.displayName="Select";
export default Select;