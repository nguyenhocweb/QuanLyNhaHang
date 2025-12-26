import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils"
const ButtonVariants = cva(
    "inline-flex items-center cursor-pointer justify-center rounded-md  font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                // Hành động chính
                default: "bg-blue-600 text-white shadow hover:bg-blue-600/90",
                // Hành động phụ
                outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
                //   Hành động cực phụ
                ghost: "hover:bg-gray-100 hover:text-gray-900",
                // XOÁ 
                delete: "bg-red-500 text-white shadow-sm hover:bg-red-500/90",
                // SỬA
                edit: "bg-yellow-500 text-white hover:bg-yellow-600 shadow-sm",
                // THÊM
                add: "bg-green-600 text-white hover:bg-green-700 shadow",
                icon:""
            },
         size: {
                default: "h-9 px-4 py-2 border ",
                max: "w-full h-10",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon:"",
            }

        },
        defaultVariants:{
            variant:"default",
            size:"default",
        }
    }
)
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  isLoading?: boolean; // Prop custom
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, ...props }, ref) => {
    return (
      <button
        className={cn(ButtonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export {Button,ButtonVariants}
