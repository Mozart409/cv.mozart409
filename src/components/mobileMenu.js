import React, { useState } from 'react'
import Link from 'next/link'
import Transition from './Transition'
export default function mobileMenu() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="absolute right-1 top-10 z-50">
      <button
        type="button"
        aria-label="Menu"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center p-3 space-x-2 text-base font-medium leading-6 text-white bg-gray-900 rounded-md transition duration-150 ease-in-out focus:outline-none group"
      >
        <svg
          className="w-5 h-5 transition duration-150 ease-in-out"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h7"></path>
        </svg>
      </button>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div className="absolute right-1/2 px-2 mt-3 w-screen max-w-xs transform -translate-x-1/2 sm:px-0">
          <div className="rounded-lg shadow-lg">
            <div className="overflow-hidden rounded-lg shadow-xs">
              <div className="grid relative z-20 gap-6 py-6 px-5 bg-white sm:gap-8 sm:p-8">
                <Link href="/">
                  <a className="block p-3 -m-3 space-y-1 rounded-md transition duration-150 ease-in-out hover:bg-cool-gray-50">
                    <span className="text-base font-medium leading-6 text-gray-900">
                      Home
                    </span>
                  </a>
                </Link>
                <Link href="/cv">
                  <a className="block p-3 -m-3 space-y-1 rounded-md transition duration-150 ease-in-out hover:bg-cool-gray-50">
                    <span className="text-base font-medium leading-6 text-gray-900">
                      Curriculum Vitae
                    </span>
                  </a>
                </Link>
                <Link href="/projekte">
                  <a className="block p-3 -m-3 space-y-1 rounded-md transition duration-150 ease-in-out hover:bg-cool-gray-50">
                    <p className="text-base font-medium leading-6 text-gray-900">
                      Projekte
                    </p>
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="block p-3 -m-3 space-y-1 rounded-md transition duration-150 ease-in-out hover:bg-cool-gray-50">
                    <span className="text-base font-medium leading-6 text-gray-900">
                      Kontakt
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}
