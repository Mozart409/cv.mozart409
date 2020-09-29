import React, { useState } from 'react'
import Link from 'next/link'
import Transition from './Transition.js'
export default function mobileMenu () {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='absolute z-50 right-1 top-10'>
      {/*  <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
      <button
        type='button'
        aria-label='Menu'
        onClick={() => setIsOpen(!isOpen)}
        className='inline-flex items-center p-3 space-x-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-gray-900 rounded-md group  focus:outline-none'
      >
        {/* <!-- Item active: "text-gray-600", Item inactive: "text-gray-400" --> */}

        <svg
          className='w-5 h-5 transition duration-150 ease-in-out '
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          l
          stroke='currentColor'
        >
          <path d='M4 6h16M4 12h16M4 18h7'></path>
        </svg>
      </button>

      {/* <!--
    Flyout menu, show/hide based on flyout menu state.

    Entering: "transition ease-out duration-200"
      From: "opacity-0 translate-y-1"
      To: "opacity-100 translate-y-0"
    Leaving: "transition ease-in duration-150"
      From: "opacity-100 translate-y-0"
      To: "opacity-0 translate-y-1"
  --> */}

      <Transition
        show={isOpen}
        enter='transition ease-out duration-200 transform'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-150 transform'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'
      >
        <div className='absolute w-screen max-w-xs px-2 mt-3 right-1/2 transform -translate-x-1/2 sm:px-0'>
          <div className='rounded-lg shadow-lg'>
            <div className='overflow-hidden rounded-lg shadow-xs'>
              <div className='relative z-20 grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8'>
                <Link href='/'>
                  <a className='block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-cool-gray-50'>
                    <p className='text-base font-medium leading-6 text-gray-900'>
                      Home
                    </p>
                  </a>
                </Link>
                <Link href='/cv'>
                  <a className='block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-cool-gray-50'>
                    <p className='text-base font-medium leading-6 text-gray-900'>
                      Curriculum Vitae
                    </p>
                  </a>
                </Link>
                <Link href='/projekte'>
                  <a className='block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-cool-gray-50'>
                    <p className='text-base font-medium leading-6 text-gray-900'>
                      Projekte
                    </p>
                  </a>
                </Link>
                <Link href='/contact'>
                  <a className='block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-cool-gray-50'>
                    <p className='text-base font-medium leading-6 text-gray-900'>
                      Kontakt
                    </p>
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
