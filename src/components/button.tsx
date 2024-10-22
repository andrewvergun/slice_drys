import { cn } from '@/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'

const buttonStyles = cva(
  'cursor-pointer rounded-sm font-semibold transition duration-300',
  {
    variants: {
      variant: {
        default: 'bg-black text-white',
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
  type: 'submit' | 'reset' | 'button' | undefined
  text: string
  className: string
}

export default function Button({
  variant,
  size,
  type,
  text,
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonStyles({ variant, size, className }))}
    >
      {text}
    </button>
  )
}
