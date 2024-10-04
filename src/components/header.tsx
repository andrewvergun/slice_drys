import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import facebookIcon from '/public/icons/facebook.svg'
import instagramIcon from '/public/icons/instagram.svg'
import logo from '/public/icons/logo.svg'
import telIcon from '/public/icons/tel.svg'
import searchIcon from '/public/icons/search.svg'
import cartIcon from '/public/icons/bin.svg'
import Lang from './lang'

const Header: FC = () => {
  return (
    <header>
      <div className="px-24 box-border">
        <div className="grid grid-cols-[1fr_2fr_1fr_1fr] grid-rows-2 h-40 border-b border-[#e4e4e4] pb-6">
          <nav className="grid grid-cols-[135px_97px_65px_48px] justify-items-center items-center gap-x-2 text-xl">
            <Link href="#!"  className='justify-self-start'>Головна </Link>
            <Link href="#!">Каталог</Link>
            <Link href="#!">Блог</Link>
            <Link href="#!" className='justify-self-end'>Опт</Link>
          </nav>
          <div className="row-start-2 flex justify-end gap-x-5 ">
            <Image
              src={facebookIcon}
              alt="facebook icon"
              width={32}
              height={32}
              className="cursor-pointer"
            />
            <Image
              src={instagramIcon}
              alt="insta icon"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </div>
          <div className="row-start-1 row-end-3 mr-[22%] self-end justify-self-end">
            <Link href='/'>
              <Image src={logo} alt="slice drus icon" width={100} height={86} />
            </Link>
          </div>
          <nav className="grid grid-cols-[100px_110px] items-center gap-x-2 text-xl">
            <Link href="#!">Контакти </Link>
            <Link href="#!" className='justify-self-center'>Доставка</Link>
          </nav>
          <div className="row-start-2 flex items-center gap-x-3 self-end text-base font-medium">
            <Image src={telIcon} alt="tel icon" width={24} height={24} />
            <Link href="tel:+380123456789" className='hover:text-[#A90909] hover:skew-x-[-10deg]'>+380123456789</Link>
          </div>
          <div className="flex items-center gap-x-6 self-center justify-self-end">
            <Lang/>
            <div className="flex gap-x-6">
              <Image
                src={searchIcon}
                alt="search"
                width={32}
                height={32}
                className="cursor-pointer"
              />
              <Image
                src={cartIcon}
                alt="cart"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="row-start-2 self-end justify-self-end">
            <button className="h-[50px] w-[180px] rounded-sm bg-[#0F0F0F] text-[#FBFBFB]
                hover:font-semibold hover:bg-[#A90909] hover:skew-x-[-10deg]">
              Замовити
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
