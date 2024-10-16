import { cn } from '@/utils/cn'

type Props = {
  type: 'submit' | 'reset' | 'button' | undefined
  text: string
  className: string
}

export default function Button({ type, text, className }: Props) {
  return (
    <button
      type={type}
      className={cn(
        'cursor-pointer rounded-sm bg-black text-white duration-300 hover:skew-x-[-10deg] hover:bg-red hover:font-semibold',
        className,
      )}
    >
      {text}
    </button>
  )
}
