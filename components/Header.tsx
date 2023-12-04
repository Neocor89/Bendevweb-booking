"use client";

import { Dialog, Popover, Transition, Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { 
  ChevronDownIcon, 
  ChatBubbleLeftIcon, 
  HomeIcon, 
  PhoneIcon, 
  PaperAirplaneIcon, 
  PlayCircleIcon 
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { Fragment, useState } from 'react';

//: COMPONENTS IMPORTS
import Logo from './Logo';

const linksProducts = [
  {
    name: 'Find your Home',
    description: 'Find the place of your dreams',
    href: "#",
    icon: HomeIcon,
  },
  {
    name: 'Find your flight',
    description: 'Finding the perfect flight',
    href: "#",
    icon: PaperAirplaneIcon,
  },
  {
    name: 'Contact the support Team',
    description: 'Talk to a team at your service',
    href: "#",
    icon: ChatBubbleLeftIcon,
  },
];

// #a3d7fc border color for active selected Box

const actionsCall = [
  { name: 'See demo', href: "#", icon: PlayCircleIcon},
  { name: 'Contact Support', href: "#", icon: PhoneIcon},
];

function Header() {
  const [mobileOpenMenu, setMobileOpenMenu] = useState(false);

  return (
    <header className="bg-[#003b95]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" 
      aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5" >
            <span className="sr-only">BDWooking</span>
              <Logo />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button" 
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white outline-none"
            onClick={() => setMobileOpenMenu(true)}
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Search Stays
              <ChevronDownIcon 
                className='h-5 w-5 flex-none text-white' aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-xl ring-1 ring-gray-900/5">
                <div className="p-4">
                  {linksProducts.map((product) => (
                    <div
                      key={product.name} 
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                          <product.icon 
                            className="h-6 w-6 text-[#003b95] group-hover:text-[#006CE4]" 
                            aria-hidden="true" 
                          />
                        </div>

                        <div className="flex-auto">
                          <a 
                            href={product.href} className="block font-semibold text-[#003b95]">
                            {product.name}
                            <span className="inset-0 absolute"/>
                          </a>
                          <p className="mt-1 text-[#003b95]">
                            {product.description}
                          </p>
                        </div>
                      </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {actionsCall.map((action) => (
                    <a
                      key={action.name} 
                      href={action.href} 
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#003b95] hover:bg-gray-100">
                      <action.icon 
                            className="h-5 w-5 flex-none text-[#003b95]" 
                            aria-hidden="true" 
                      />
                      {action.name}
                  </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
      </nav>
    </header>
  )
}

export default Header;