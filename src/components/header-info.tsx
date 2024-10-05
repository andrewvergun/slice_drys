
type Props = {
  title: string
}

export default function Info({ title }: Props) {
  return (
    <div className='h-8 bg-black absolute top-0 left-0 w-full'>
      <h1 className='text-white font-medium text-base text-center leading-[180%]'>{title}</h1>
    </div>
  )
}
