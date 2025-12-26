import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/src/lib/utils";
const InputVariants = cva(
    "bg-none w-full  px-3 transition-color duration-[900000s]",
    {
        variants: {
            variant: {
                default: "border border-gray-500 focus:outline-1 focus:outline-black rounded-md",
                noOutline: "focus:outline-none border-none rounded-md",
                b_b:["focus:outline-none bg-none  text-text-lr px-2 border-b border-gray-500 ",
                   "[&::-webkit-calendar-picker-indicator]:invert"]
            },
            sizea: {
                default: "h-9",
                sm: "h-8 text-xs",
                lg: "h-10 text-base",
                // Giữ lại custom size của bạn
                icon: "h-9 w-9 p-0", 
                s1: "w-10",
            }
        },
        defaultVariants: {
            variant: "default",
            sizea:"default"
        }
    }
)
export interface InputPost extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof InputVariants> { }
const Input = React.forwardRef<HTMLInputElement, InputPost>(
    ({ type, className, variant, sizea, ...props }, ref) => {
        return <input
            type={type}
            className={cn(InputVariants({ variant, sizea, className }))}
            ref={ref}
            {...props}
        />
    }
)
Input.displayName = "Input";
export { Input, InputVariants }
