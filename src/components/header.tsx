import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import facebookIcon from '/public/image/svg/facebook.svg'
import instagramIcon from '/public/image/svg/instagram.svg'
import logo from '/public/image/svg/logo.svg'
import telIcon from '/public/image/svg/tel.svg'
import searchIcon from '/public/image/svg/search.svg'
import cartIcon from '/public/image/svg/bin.svg'

const Header: FC = () => {
  return (
    <header>
      <div className="px-24 box-border">
        <div className="grid grid-cols-[1fr_2fr_1fr_1fr] grid-rows-2 h-40 border-b border-[#e4e4e4] pb-6">
          <nav className="grid grid-cols-[135px_97px_65px_48px] justify-items-center items-center gap-x-2 text-xl">
            <Link href="#!">Головна </Link>
            <Link href="#!">Каталог</Link>
            <Link href="#!">Блог</Link>
            <Link href="#!" className='justify-self-end'>Опт</Link>
          </nav>
          <div className="row-start-2 flex justify-end gap-x-5 self-end">
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
            <Image src={telIcon} alt="tel" width={24} height={24} />
            <Link href="tel:+380123456789">+380123456789</Link>
          </div>
          <div className="flex items-center gap-x-6 self-center justify-self-end">
            <div className="text-sm">
              <input
                type="radio"
                name="lang"
                className="header-input"
                id="el1"
              />
              <label className="header-label cursor-pointer" htmlFor="el1">
                UA
              </label>
              <span> / </span>
              <input
                type="radio"
                name="lang"
                className="header-input"
                id="el2"
              />
              <label className="header-label cursor-pointer" htmlFor="el2">
                EN
              </label>
            </div>
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
            <button className="h-[50px] w-[180px] rounded-sm bg-[#0F0F0F] text-[#FBFBFB] hover:font-semibold">
              Замовити
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
