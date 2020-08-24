import Link from 'next/link'
import Head from 'next/head'
import MobileMenu from './mobileMenu'

const Layout = ({ children, title = 'CV | Amadeus Mader' }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>

    <div className='flex flex-col min-h-screen font-sans text-gray-900'>
      <div className='flex h-screen overflow-hidden bg-gray-100'>
        <div className='flex flex-shrink-0 lg:hidden'>
          <MobileMenu />
        </div>
        <div className='flex-shrink-0 hidden lg:flex'>
          <div className='flex flex-col w-64 bg-gray-900 border-r border-white'>
            <div className='flex flex-col flex-1 h-0 pt-5 pb-4 overflow-y-auto'>
              <div className='flex items-center px-4'>
                <img
                  className='w-64 rounded-md'
                  src='/tisch.png'
                  alt='Amadeus'
                />
              </div>

              <nav className='flex-1 px-2 mt-5 text-white'>
                <Link href='/'>
                  <a className='flex items-center px-2 py-2 mt-1 text-sm font-medium text-white group leading-5 rounded-md hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-white transition ease-in-out duration-150'>
                    <svg
                      className='w-6 h-6 mr-3 text-white group-hover:text-gray-800 group-focus:text-gray-800 transition ease-in-out duration-150'
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6'
                      />
                    </svg>
                    Home
                  </a>
                </Link>

                <Link href='/cv'>
                  <a className='flex items-center px-2 py-2 mt-1 text-sm font-medium text-white group leading-5 rounded-md hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-white transition ease-in-out duration-150'>
                    <svg
                      className='w-6 h-6 mr-3 text-white group-hover:text-gray-800 group-focus:text-gray-800 transition ease-in-out duration-150'
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
                      />
                    </svg>
                    Curriculum Vitae
                  </a>
                </Link>

                <Link href='/projekte'>
                  <a className='flex items-center px-2 py-2 mt-1 text-sm font-medium text-white group leading-5 rounded-md hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-white transition ease-in-out duration-150'>
                    <svg
                      className='w-6 h-6 mr-3 text-white group-hover:text-gray-800 group-focus:text-gray-800 transition ease-in-out duration-150'
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                      ></path>
                    </svg>
                    Projekte
                  </a>
                </Link>
                <Link href='/contact'>
                  <a className='flex items-center px-2 py-2 mt-1 text-sm font-medium text-white group leading-5 rounded-md hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-white transition ease-in-out duration-150'>
                    <svg
                      className='w-6 h-6 mr-3 text-white group-hover:text-gray-800 group-focus:text-gray-800 transition ease-in-out duration-150'
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M1,4 L23,4 L23,20 L1,20 L1,4 Z M1,5 L12,13.5 L23,5'
                      />
                    </svg>
                    Contact
                  </a>
                </Link>
              </nav>
            </div>
            <div className='flex flex-shrink-0 p-4'>
              <a href='#' className='flex-shrink-0 block w-full group'>
                <div className='flex items-center'>
                  <div className='ml-3'>
                    <p className='text-sm font-medium text-white leading-5'>
                      &copy; {new Date().getFullYear()} Amadeus Mader
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-col flex-1 w-0 overflow-hidden'>
          <main
            className='relative z-0 flex-1 pt-2 pb-6 overflow-y-auto focus:outline-none md:py-6'
            tabIndex='0'
          >
            <div className='px-4 mx-auto max-w-7xl font-Inter sm:px-6 md:px-8'>
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
)
export default Layout
