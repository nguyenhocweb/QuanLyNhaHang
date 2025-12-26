import * as React from "react";
import { cn } from "@/src/lib/utils";
import {cva,type VariantProps} from "class-variance-authority";
const LableVariants=cva(
    "transition-all duration-500",
    {
        variants:{
            variant:{
                default:"text-text-lr",
                mau1:"absolute text-text-lr ",
            },
            size:{
                default:"text-base",
                mau1:"text-md -top-4",
            }
        },
        defaultVariants:{
            variant:"default",
            size:"default",
        }
    }
);
export interface LableProps extends React.ComponentPropsWithoutRef<"label">,
VariantProps <typeof LableVariants>{};
const Label= React.forwardRef<HTMLLabelElement,LableProps>(
    ({className,htmlFor,variant,size,children,...props},ref)=>{
        return(
            <label htmlFor={htmlFor}
             className={cn(LableVariants({variant,size,className}))}
             ref={ref}
             {...props}
            >
                {children}
            </label>
        )
    }
);
Label.displayName="Label";
export default Label;