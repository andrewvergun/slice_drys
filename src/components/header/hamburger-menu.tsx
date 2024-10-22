import Link from 'next/link'
import Image from 'next/image'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuSection,
  MenuSeparator,
  Input,
  Transition,
} from '@headlessui/react'
import closeIcon from '/public/icons/close.svg'
import logo from '/public/icons/logo.svg'
import facebookIcon from '/public/icons/facebook.svg'
import instagramIcon from '/public/icons/instagram.svg'
import telIcon from '/public/icons/tel.svg'
import searchIcon from '/public/icons/search.svg'
import burgerIcon from '/public/icons/burger.svg'
import Cart from '@/components/card/cart'
import LocaleChange from '@/components/locale-change/locale-change'
import { useState } from 'react'
import Button from '@/components/ui/button'

interface HamburgerMenu {
  headerLinks: ILink[]
  hamburgerLinksOther: ILink[]
}

export default function HamburgerMenu({
  headerLinks,
  hamburgerLinksOther,
}: HamburgerMenu) {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <Menu>
      <MenuButton
        onClick={() => setIsOpen(!isOpen)}
        className="hidden duration-300 hover:scale-110 lap:fixed lap:left-5 lap:top-8 lap:z-50 lap:block"
      >
        <Image src={burgerIcon} alt="burger icon" width={32} height={32} />
      </MenuButton>

      <Transition
        enter="transition-transform duration-500 ease-out"
        enterFrom="transform -translate-x-full rotate-y-90"
        enterTo="transform translate-x-0 rotate-y-0"
        leave="transition-transform duration-500 ease-in"
        leaveFrom="transform translate-x-0 rotate-y-0"
        leaveTo="transform -translate-x-full rotate-y-90"
      >
        <MenuItems
          anchor="bottom"
          transition
          className="bottom-0 right-0 z-40 origin-top bg-light_gray pb-6 pt-3 transition duration-200 ease-out [--anchor-gap:-64px] data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuSection className="grid grid-cols-[2fr_1fr_1fr_auto] items-center px-5">
            <MenuItem>
              <Button
                onClick={closeMenu}
                type={'button'}
                className="w-fit"
                variant={'icons'}
              >
                <Image src={closeIcon} alt="close icon" />
                <div className="absolute bottom-0 left-0 right-0 top-0 group-data-[focus]:bg-red group-data-[focus]:blur-2xl"></div>
              </Button>
            </MenuItem>
            <MenuItem>
              <Link href="/" className="group relative w-fit">
                <Image
                  src={logo}
                  alt="slice drus icon"
                  width={39}
                  height={46}
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 group-data-[focus]:bg-red group-data-[focus]:blur-2xl"></div>
              </Link>
            </MenuItem>
            <MenuItem>
              <div className="group relative w-fit justify-self-center">
                <LocaleChange />
                <div className="absolute bottom-0 left-0 right-0 top-0 group-data-[focus]:bg-red group-data-[focus]:blur-2xl"></div>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="group relative w-fit">
                <Cart />
                <div className="absolute bottom-0 left-0 right-0 top-0 group-data-[focus]:bg-red group-data-[focus]:blur-2xl"></div>
              </div>
            </MenuItem>
          </MenuSection>

          <MenuSection className="px-8 pt-5">
            <div className="pb-4 font-semibold">Каталог</div>
            {headerLinks?.map((link: ILink) => {
              return (
                <MenuItem key={link.id}>
                  <Link
                    className="group relative block w-min py-4"
                    href={link.href}
                  >
                    {link.name}
                    <div className="absolute bottom-0 left-0 right-0 top-0 group-data-[focus]:bg-red group-data-[focus]:blur-2xl"></div>
                  </Link>
                </MenuItem>
              )
            })}
          </MenuSection>

          <MenuSeparator className="mx-8 my-4 h-px bg-black" />

          <MenuSection className="px-8 pt-2">
            {hamburgerLinksOther?.map((link: ILink) => {
              return (
                <MenuItem key={link.id}>
                  <Link href="#" className="group relative block w-min py-4">
                    {link.name}
                    <div className="absolute bottom-0 left-0 right-0 top-0 group-data-[focus]:bg-red group-data-[focus]:blur-2xl"></div>
                  </Link>
                </MenuItem>
              )
            })}
          </MenuSection>

          <MenuSection className="flex justify-center gap-x-5 pt-5">
            <MenuItem>
              <Link href="#" className="group relative w-fit">
                <Image
                  src={facebookIcon}
                  alt="facebook icon"
                  width={32}
                  height={32}
                  className="cursor-pointer"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 group-data-[focus]:bg-red group-data-[focus]:blur-2xl"></div>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="#" className="group relative w-fit">
                <Image
                  src={instagramIcon}
                  alt="insta icon"
                  width={32}
                  height={32}
                  className="cursor-pointer"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 group-data-[focus]:bg-red group-data-[focus]:blur-2xl"></div>
              </Link>
            </MenuItem>
          </MenuSection>

          <MenuSection className="flex justify-center gap-x-3 pt-5">
            <Image src={telIcon} alt="tel icon" width={24} height={24} />
            <MenuItem>
              <Link
                href="tel:+380123456789"
                className="group relative font-medium"
              >
                +380123456789
                <div className="absolute bottom-0 left-0 right-0 top-0 group-data-[focus]:bg-red group-data-[focus]:blur-2xl"></div>
              </Link>
            </MenuItem>
          </MenuSection>

          <MenuSection className="px-8 pt-5">
            <form
              action="/logout"
              method="post"
              className="flex justify-center gap-x-4"
            >
              <label className="group relative block max-w-56">
                <Input
                  name="search"
                  type="text"
                  className="group block h-8 w-full rounded-sm p-2"
                />
                <Image
                  src={searchIcon}
                  alt="search icon"
                  className="absolute right-1 top-0"
                />
              </label>
              <MenuItem>
                <button
                  type="submit"
                  className="group relative block h-8 w-[88px] bg-black text-sm text-white"
                >
                  Шукати
                  <div className="absolute bottom-0 left-0 right-0 top-0 group-data-[focus]:bg-red group-data-[focus]:blur-2xl"></div>
                </button>
              </MenuItem>
            </form>
          </MenuSection>
        </MenuItems>
      </Transition>
    </Menu>
  )
}
