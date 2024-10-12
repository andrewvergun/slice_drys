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
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

import Lang from './lang'
import Hamburger from './hamburger'
import closeIcon from '/public/icons/close.svg'
import logo from '/public/icons/logo.svg'
import cartIcon from '/public/icons/bin.svg'

export default function Burger() {
  return (
    <Menu>
      <MenuButton className="fixed left-5 top-8 z-50">
        <Hamburger className="hidden lap:block" />
      </MenuButton>
      <MenuItems
        anchor="bottom"
        transition
        className="bottom-0 right-0 z-40 origin-top bg-light_gray pt-3 transition duration-200 ease-out [--anchor-gap:-52px] data-[closed]:scale-95 data-[closed]:opacity-0"
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
            <Link
              className="block w-min py-4 transition duration-300 hover:text-red"
              href="#"
            >
              М’ясо
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className="block w-min py-4 transition duration-300 hover:text-red"
              href="#"
            >
              Фрукти
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className="block w-min py-4 transition duration-300 hover:text-red"
              href="#"
            >
              Овочі
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className="block w-min py-4 transition duration-300 hover:text-red"
              href="#"
            >
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
                  <Link
                    href="#"
                    onClick={close}
                    className='duration-300" block px-3 py-4 transition hover:text-red'
                  >
                    Популярне
                  </Link>
                )}
              </MenuItem>
              <MenuSeparator className="my-1 h-px bg-light_gray" />
              <MenuItem>
                {({ close }) => (
                  <Link
                    href="#"
                    onClick={close}
                    className='duration-300" block px-3 py-4 transition hover:text-red'
                  >
                    Про нас
                  </Link>
                )}
              </MenuItem>
              <MenuSeparator className="my-1 h-px bg-light_gray" />
              <MenuItem>
                {({ close }) => (
                  <Link
                    href="#"
                    onClick={close}
                    className='duration-300" block px-3 py-4 transition hover:text-red'
                  >
                    Акції
                  </Link>
                )}
              </MenuItem>
              <MenuSeparator className="my-1 h-px bg-light_gray" />
              <MenuItem>
                {({ close }) => (
                  <Link
                    href="#"
                    onClick={close}
                    className='duration-300" block px-3 py-4 transition hover:text-red'
                  >
                    Відгуки
                  </Link>
                )}
              </MenuItem>
              <MenuSeparator className="my-1 h-px bg-light_gray" />
              <MenuItem>
                {({ close }) => (
                  <Link
                    href="#"
                    onClick={close}
                    className='duration-300" block px-3 py-4 transition hover:text-red'
                  >
                    FAQ
                  </Link>
                )}
              </MenuItem>
            </DisclosurePanel>
          </Disclosure>
        </MenuSection>
        <div>aaaaaaaaa</div>
      </MenuItems>
    </Menu>
  )
}
