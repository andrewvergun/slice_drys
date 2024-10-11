import Image from 'next/image'
import closeIcon from '/public/icons/close.svg'

type Props = {
  burgerRef: any
  onHandleCloseBurger: any
}

export default function HamburgerMenu({ burgerRef, onHandleCloseBurger }: Props) {


  return (
    <div
      ref={burgerRef}
      className="absolute top-0 right-0 bottom-0 left-0 z-50 h-screen bg-light_gray translate-x-[-100vw] duration-1000 pt-3 px-5 pb-6">

      <header>
        <div onClick={onHandleCloseBurger}>
          <Image src={closeIcon} alt='close icon'/>
        </div>
      </header>


    </div>
  )
}
