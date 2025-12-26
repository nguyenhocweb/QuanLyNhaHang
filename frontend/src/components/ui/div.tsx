import * as React from "react";
import { cn } from "@/src/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const DivVariant = cva(
    "",
    {

        variants: {
            variant: {
                default: "flex items-center justify-center rounded-lg",
                mau1: "bg-transparent backdrop-blur-md border border-bg4-div shadow-mau1-div flex items-center justify-center rounded-lg" ,
                mau2: [
                    "relative overflow-hidden flex items-center justify-center rounded-lg",
                    " before:content-[''] before:absolute before:w-[30%] before:h-[200%]   before:bg-bg1-animation before:animate-xoay-tron ",
                    "after:content-[''] after:absolute after:w-[calc(100%-10px)] after:h-[calc(100%-10px)] after:bg-bg3-div after:rounded-lg "
                ],
                mauInput1: "relative border-b border-gray-500 flex items-center "
            },
            vien: {
                vien1: " shadow-md shadow-gray-500"
            },
            round: {
                round1: "rounded-3xl after:rounded-3xl"
            },
            size: {
                default: "py-2 px-4",
                size1: "py-4 px-8",
                size2: "py-6-px-12",
                sizeInp1: "px-2 w-full h-10 "
            },
            gap: {
                gap1: "gap-2",
                gap2: "gap-4",
                gap3: "gap-6",
                gap4: "gap-8",
                gap5: "gap-10",
                gap6: "gap-12",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }

    });
export interface DivProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof DivVariant> { };
const Div = React.forwardRef<HTMLDivElement, DivProps>(
    ({ className, variant, vien, round, size, gap, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(DivVariant({ variant, vien, round, size, gap, className }))}
                {...props}
            >
                {children}
            </div>
        )
    });
Div.displayName = "Div";
export { Div, DivVariant }