import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'CV | Amadeus Mader' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='icon' href='/favicon.png' />
    </Head>
    <div className='flex flex-col min-h-screen font-sans text-gray-900'>
      <div className='flex h-screen overflow-hidden bg-gray-100'>
        <div className='flex flex-shrink-0'>
          <div className='flex flex-col w-64 bg-teal-700 border-r border-white'>
            <div className='flex flex-col flex-1 h-0 pt-5 pb-4 overflow-y-auto'>
              <div className='flex items-center px-4'>
                <img
                  className='w-64 rounded-md'
                  src='/amadeus.webp'
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
                        d='M1,4 L23,4 L23,20 L1,20 L1,4 Z M1,5 L12,13.5 L23,5'
                      />
                    </svg>
                    Contact
                  </a>
                </Link>

                <Link href='/about'>
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
                        d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                      />
                    </svg>
                    About
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

    {children}
  </div>
)
