import { cn } from '@/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const buttonStyles = cva(
  'group relative cursor-pointer font-semibold transition duration-300',
  {
    variants: {
      variant: {
        default: 'bg-black text-white',
        button:
          'bg-black text-white mr-5 h-[50px] w-[180px] hover:skew-x-[-10deg] hover:bg-red hover:font-semibold lap:mr-0 lap:h-[38px] lap:w-[88px]',
        icons:
          'flex items-center bg-transparent hover:scale-110 transition-transform duration-300 ease-in-out hover:bg-gray-200 max-w-max',
      },
      size: {
        xl: 'text-xl lap:text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'xl',
    },
  },
)

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  type?: 'submit' | 'reset' | 'button' | undefined
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({
  variant,
  size,
  type,
  children,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonStyles({ variant, size, className }))}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
