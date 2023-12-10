"use client";

import { Dialog, Popover, Transition, Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
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

/*width: calc(100% - 200px - 16px);
color: #f0f6ff;
*/

//: COMPONENTS IMPORTS
import Logo from './Logo';
import { LogIn } from 'lucide-react';
import { cn } from '@/lib/utils';

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
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileOpenMenu(true)}
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="outline-none border-none flex items-center gap-x-1 text-sm font-['Rubik'] font-normal leading-6 text-white">
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
              <Popover.Panel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-xl ring-1 ring-[#a3d7fc]">
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

          <a href="#" className="text-sm font-rubik font-normal leading-6 text-white">
            Flights
          </a>
          <a href="#" className="text-sm font-rubik font-normal leading-6 text-white">
            Car Rentals
          </a>
          <a href="#" className="text-sm font-rubik font-normal leading-6 text-white">
            Flight & Hotel
          </a>
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="flex text-sm font-rubik font-normal leading-6 text-white">
            Log In
            <span aria-hidden="true">
              <LogIn className='h-5 w-5 ml-2 pt-1' />
            </span>
          </a>
        </div>
      </nav>

      <Dialog
        as='div'
        className="lg:hidden"
        open={mobileOpenMenu}
        onClose={setMobileOpenMenu}
      >
        <div className="fixed inset-0 z-10" />

        <Dialog.Panel
          className="fixed inset-y-0 right-0 z-10 w-full h-auto max-h-[800px] overflow-y-auto bg-[#003b95] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between">
            <a 
              href="#"
              className='-m-1.5 p-1.5'
            >
              <Logo />
              <span className="sr-only">
              </span>
            </a>
            <button 
              type="button"
              className='-m-2.5 rounded-md p-2.5 text-white'
              onClick={() => setMobileOpenMenu(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon 
                className="h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-m-y-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure
                  as="div"
                  className="-mx-3"
                >
                  {({ open }) => (
                    <>
                    <Disclosure.Button
                      className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-[#003b95]">
                        Stays
                        <ChevronDownIcon 
                          className={cn(
                            open ? "rotate-180 duration-200" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      {[...linksProducts, ...actionsCall].map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as='a'
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-[#003b95]"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                  <a 
                    href="#" 
                    className="-m-x-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-[#003b95]">
                    Flights
                  </a>
                  <a 
                    href="#" 
                    className="-m-x-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-[#003b95]">
                    Car Rentals
                  </a>
                  <a 
                    href="#" 
                    className="-m-x-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-[#003b95]">
                    Attractions
                  </a>
                  <a 
                    href="#" 
                    className="-m-x-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-[#003b95]">
                    Flight & Hotel
                  </a>
              </div>

              <div className="py-6">
                <a 
                  href="#"
                  className="-m-x-3 flex rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-[#003b95]"
                >
                  Log In
                  <LogIn className="pt-1.5"/>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Header;