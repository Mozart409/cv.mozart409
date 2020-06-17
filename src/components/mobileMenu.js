import React, { useState } from 'react'
import Link from 'next/link'
import Transition from './Transition.js'
export default function mobileMenu () {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='absolute right-1 top-10 z-50'>
      {/*  <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='group inline-flex items-center space-x-2 text-base leading-6 font-medium text-white  focus:outline-none bg-gray-900 p-3 rounded-md transition ease-in-out duration-150'
      >
        {/* <!-- Item active: "text-gray-600", Item inactive: "text-gray-400" --> */}

        <svg
          className='  h-5 w-5 transition ease-in-out duration-150'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'l
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
        <div className='absolute right-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0'>
          <div className='rounded-lg shadow-lg'>
            <div className='rounded-lg shadow-xs overflow-hidden'>
              <div className='z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                <Link href='/'>
                  <a className='-m-3 p-3 block space-y-1 rounded-md hover:bg-cool-gray-50 transition ease-in-out duration-150'>
                    <p className='text-base leading-6 font-medium text-gray-900'>
                      Home
                    </p>
                  </a>
                </Link>
                <Link href='/cv'>
                  <a className='-m-3 p-3 block space-y-1 rounded-md hover:bg-cool-gray-50 transition ease-in-out duration-150'>
                    <p className='text-base leading-6 font-medium text-gray-900'>
                      Curriculum Vitae
                    </p>
                  </a>
                </Link>
                <Link href='/projekte'>
                  <a className='-m-3 p-3 block space-y-1 rounded-md hover:bg-cool-gray-50 transition ease-in-out duration-150'>
                    <p className='text-base leading-6 font-medium text-gray-900'>
                      Projekte
                    </p>
                  </a>
                </Link>
                <Link href='/contact'>
                  <a className='-m-3 p-3 block space-y-1 rounded-md hover:bg-cool-gray-50 transition ease-in-out duration-150'>
                    <p className='text-base leading-6 font-medium text-gray-900'>
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
