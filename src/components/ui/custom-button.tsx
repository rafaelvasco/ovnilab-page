
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const customButtonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300",
  {
    variants: {
      variant: {
        // Gradient animated background
        primary: "px-6 py-3 text-ovnilab-navy bg-[length:200%] bg-[position:right] hover:bg-[position:left] bg-gradient-to-r from-ovnilab-blue via-ovnilab-cream to-ovnilab-blue",
        // Contact us style
        outline: "px-6 py-3 border border-ovnilab-blue text-ovnilab-blue hover:bg-ovnilab-blue/10",
        // Try our agents with blue/purple gradient
        gradient: "px-6 py-3 text-ovnilab-cream bg-[length:200%] bg-[position:right] hover:bg-[position:left] bg-gradient-to-r from-ovnilab-blue via-ovnilab-purple to-ovnilab-blue",
      },
      size: {
        default: "text-base",
        lg: "text-xl py-6 px-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof customButtonVariants> {
  asChild?: boolean
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(customButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
CustomButton.displayName = "CustomButton"

export { CustomButton, customButtonVariants }
