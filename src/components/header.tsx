'use client'
import { useRef } from 'react'
import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import facebookIcon from '/public/icons/facebook.svg'
import instagramIcon from '/public/icons/instagram.svg'
import logo from '/public/icons/logo.svg'
import telIcon from '/public/icons/tel.svg'
import searchIcon from '/public/icons/search.svg'
import Lang from './lang'
import Info from './header-info'
import HamburgerMenu from './hamburger-menu'
import Button from './button'
import CartIcon from './cart-icon'

import { headerLinks } from '../data/header-links'

gsap.registerPlugin(useGSAP)

const Header: FC = () => {
  const headerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      headerRef.current,
      { yPercent: -200, opacity: 0 },
      { yPercent: 0, opacity: 1, delay: 0.1, duration: 0.5 },
    )
  })

  return (
    <header>
      <Info title="Безкоштовна доставка від 1000 грн." />
      <div ref={headerRef} className="mx-auto mt-8 box-border max-w-[1240px]">
        <div className="grid h-40 grid-cols-[auto_2fr_1fr_1fr] grid-rows-2 border-b border-[#e4e4e4] pb-6 lap:h-24 lap:grid-cols-3 lap:px-5 lap:pb-[10px]">
          <nav className="grid grid-cols-4 items-center justify-items-center gap-x-2 text-xl lap:hidden">
            {headerLinks?.map((link) => {
              return (
                <Link key={link.id} href="#!" className="block px-5 py-2">
                  {link.link}
                </Link>
              )
            })}
          </nav>

          <HamburgerMenu />

          <div className="row-start-2 flex justify-end gap-x-5 pr-6 lap:hidden">
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

          <div className="row-start-1 row-end-3 mr-[22%] self-end justify-self-end lap:col-start-2 lap:mr-0 lap:w-[64px] lap:justify-self-center">
            <Link href="/">
              <Image src={logo} alt="slice drus icon" width={100} height={86} />
            </Link>
          </div>

          <nav className="flex items-center gap-x-2 text-xl lap:hidden">
            <Link href="#!" className="p-4">
              Блог
            </Link>
            <Link href="#!" className="p-4">
              Контакти
            </Link>
          </nav>
          <div className="row-start-2 flex items-center gap-x-3 self-end pl-4 text-base font-medium lap:hidden">
            <Image src={telIcon} alt="tel icon" width={24} height={24} />
            <Link
              href="tel:+380123456789"
              className="duration-300 hover:skew-x-[-10deg] hover:text-red"
            >
              +380123456789
            </Link>
          </div>
          <div className="flex items-center gap-x-6 self-center justify-self-end lap:col-start-3 lap:justify-self-end">
            <div className="lap:hidden">
              <Lang />
            </div>
            <div className="mr-5 flex gap-x-6 lap:mr-0">
              <Image
                src={searchIcon}
                alt="search"
                width={32}
                height={32}
                className="cursor-pointer"
              />
              <CartIcon />
            </div>
          </div>
          <div className="row-start-2 self-end justify-self-end lap:col-start-3 lap:justify-self-end">
            <Button
              type="button"
              text="Замовити"
              className="mr-5 h-[50px] w-[180px] hover:skew-x-[-10deg] hover:bg-red hover:font-semibold lap:mr-0 lap:h-[38px] lap:w-[88px]"
            ></Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
