import Link from 'next/link'
import Image from 'next/image'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuSection,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  MenuSeparator,
  Input,
  Field,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

import Lang from './lang'
import Hamburger from './hamburger'
import closeIcon from '/public/icons/close.svg'
import logo from '/public/icons/logo.svg'
import cartIcon from '/public/icons/bin.svg'
import facebookIcon from '/public/icons/facebook.svg'
import instagramIcon from '/public/icons/instagram.svg'
import telIcon from '/public/icons/tel.svg'
import searchIcon from '/public/icons/search.svg'

export default function HamburgerMenu() {
  return (
    <Menu>
      <MenuButton className="fixed left-5 top-8 z-50">
        <Hamburger className="hidden lap:block" />
      </MenuButton>

      <MenuItems
        anchor="bottom"
        transition
        className="bottom-0 right-0 z-40 origin-top bg-light_gray pb-6 pt-3 transition duration-200 ease-out [--anchor-gap:-52px] data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <MenuSection className="grid grid-cols-[2fr_1fr_1fr_auto] items-center px-5">
          <MenuItem>
            <button>
              <Image src={closeIcon} alt="close icon" />
            </button>
          </MenuItem>
          <MenuItem>
            <Link href="/">
              <Image src={logo} alt="slice drus icon" width={39} height={46} />
            </Link>
          </MenuItem>
          <MenuItem>
            <div className="justify-self-center">
              <Lang />
            </div>
          </MenuItem>
          <MenuItem>
            <Link href="#">
              <Image src={cartIcon} alt="cart icon" />
            </Link>
          </MenuItem>
        </MenuSection>

        <MenuSection className="px-8 pt-5">
          <div className="pb-4 font-semibold">Каталог</div>
          <MenuItem>
            <Link className="block w-min py-4" href="#">
              М’ясо
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="block w-min py-4" href="#">
              Фрукти
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="block w-min py-4" href="#">
              Овочі
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="block w-min py-4" href="#">
              Мікси
            </Link>
          </MenuItem>
        </MenuSection>

        <MenuSection className="px-8 pt-5">
          <Disclosure>
            <DisclosureButton className="group flex items-center gap-x-3 pb-4 font-semibold">
              Головна
              <ChevronDownIcon className="size-5 fill-black group-data-[open]:rotate-180 group-data-[hover]:fill-black" />
            </DisclosureButton>
            <DisclosurePanel
              transition
              className="origin-top bg-white transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
            >
              <MenuItem>
                {({ close }) => (
                  <Link href="#" onClick={close} className="block px-3 py-4">
                    Популярне
                  </Link>
                )}
              </MenuItem>
              <MenuSeparator className="my-1 h-px bg-light_gray" />
              <MenuItem>
                {({ close }) => (
                  <Link href="#" onClick={close} className="block px-3 py-4">
                    Про нас
                  </Link>
                )}
              </MenuItem>
              <MenuSeparator className="my-1 h-px bg-light_gray" />
              <MenuItem>
                {({ close }) => (
                  <Link href="#" onClick={close} className="block px-3 py-4">
                    Акції
                  </Link>
                )}
              </MenuItem>
              <MenuSeparator className="my-1 h-px bg-light_gray" />
              <MenuItem>
                {({ close }) => (
                  <Link href="#" onClick={close} className="block px-3 py-4">
                    Відгуки
                  </Link>
                )}
              </MenuItem>
              <MenuSeparator className="my-1 h-px bg-light_gray" />
              <MenuItem>
                {({ close }) => (
                  <Link href="#" onClick={close} className="block px-3 py-4">
                    FAQ
                  </Link>
                )}
              </MenuItem>
            </DisclosurePanel>
          </Disclosure>
        </MenuSection>

        <MenuSection className="px-8 pt-2">
          <MenuItem>
            <Link className="block w-min py-4" href="#">
              Блог
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="block w-min py-4" href="#">
              Опт
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="block w-min py-4" href="#">
              Контакти
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="block w-min py-4" href="#">
              Доставка
            </Link>
          </MenuItem>
        </MenuSection>

        <MenuSection className="flex justify-center gap-x-5 pt-5">
          <MenuItem>
            <Link href="#">
              <Image
                src={facebookIcon}
                alt="facebook icon"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="#">
              <Image
                src={instagramIcon}
                alt="insta icon"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </Link>
          </MenuItem>
        </MenuSection>

        <MenuSection className="flex justify-center gap-x-3 pt-5">
          <Image src={telIcon} alt="tel icon" width={24} height={24} />
          <MenuItem>
            <Link href="tel:+380123456789" className="font-medium">
              +380123456789
            </Link>
          </MenuItem>
        </MenuSection>

        <MenuSection className="px-8 pt-5">
          <form
            action="/logout"
            method="post"
            className="flex justify-center gap-x-4"
          >
            <Field className="relative">
              <Input
                name="search"
                type="text"
                className="h-8 w-full max-w-56 rounded-sm"
              />
              <Image
                src={searchIcon}
                alt="search icon"
                className="absolute right-1 top-0"
              />
            </Field>
            <MenuItem>
              <button
                type="submit"
                className="block h-8 w-[88px] bg-black text-center text-white"
              >
                Шукати
              </button>
            </MenuItem>
          </form>
        </MenuSection>
      </MenuItems>
    </Menu>
  )
}
