import Image from 'next/image'
import Head from 'next/head'
import MobileMenu from './mobileMenu'
import ActiveLink from './ActiveLink'

import Tisch from 'public/tisch.png'

const Layout = ({ children, title = 'CV | Amadeus Mader' }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>

    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <div className="flex overflow-hidden h-screen bg-gray-100">
        <div className="flex flex-shrink-0 lg:hidden">
          <MobileMenu />
        </div>
        <div className="hidden flex-shrink-0 lg:flex">
          <div className="flex flex-col w-64 bg-gray-900 border-r border-white">
            <div className="flex overflow-y-auto flex-col flex-1 pt-5 pb-4 h-0">
              <div className="flex items-center px-4">
                <Image className="w-64 rounded-md" src={Tisch} alt="Amadeus" />
              </div>

              <nav className="flex-1 px-2 mt-5 text-white">
                <ActiveLink activeClassName="text-gray-800 bg-white" href="/">
                  <a className="flex items-center py-2 px-2 mt-1 text-sm font-medium leading-5 text-white rounded-md transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-100 focus:text-gray-800 focus:bg-white focus:outline-none group">
                    <svg
                      className="mr-3 w-6 h-6 transition duration-150 ease-in-out group-hover:text-gray-800 group-focus:text-gray-800"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                      />
                    </svg>
                    Home
                  </a>
                </ActiveLink>

                <ActiveLink activeClassName="text-gray-800 bg-white" href="/cv">
                  <a className="flex items-center py-2 px-2 mt-1 text-sm font-medium leading-5 text-white rounded-md transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-100 focus:text-gray-800 focus:bg-white focus:outline-none group">
                    <svg
                      className="mr-3 w-6 h-6 transition duration-150 ease-in-out group-hover:text-gray-800 group-focus:text-gray-800"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                    Curriculum Vitae
                  </a>
                </ActiveLink>

                <ActiveLink
                  activeClassName="text-gray-800 bg-white"
                  href="/projekte"
                >
                  <a className="flex items-center py-2 px-2 mt-1 text-sm font-medium leading-5 text-white rounded-md transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-100 focus:text-gray-800 focus:bg-white focus:outline-none group">
                    <svg
                      className="mr-3 w-6 h-6 transition duration-150 ease-in-out group-hover:text-gray-800 group-focus:text-gray-800"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    Projekte
                  </a>
                </ActiveLink>
                <ActiveLink
                  activeClassName="text-gray-800 bg-white"
                  href="/contact"
                >
                  <a className="flex items-center py-2 px-2 mt-1 text-sm font-medium leading-5 text-white rounded-md transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-100 focus:text-gray-800 focus:bg-white focus:outline-none group">
                    <svg
                      className="mr-3 w-6 h-6 transition duration-150 ease-in-out group-hover:text-gray-800 group-focus:text-gray-800"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1,4 L23,4 L23,20 L1,20 L1,4 Z M1,5 L12,13.5 L23,5"
                      />
                    </svg>
                    Contact
                  </a>
                </ActiveLink>
              </nav>
            </div>
            <div className="flex flex-shrink-0 p-4">
              <a href="#" className="block flex-shrink-0 w-full group">
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="text-sm font-medium leading-5 text-white">
                      &copy; {new Date().getFullYear()} Amadeus Mader
                    </p>
                    <a
                      href="http://mozart409.space/impressum"
                      target="_blank"
                      rel="norel noreferrer"
                      className="text-base text-center text-gray-400"
                    >
                      Impressum
                    </a>{' '}
                    <a
                      href="http://mozart409.space/datenschutz"
                      target="_blank"
                      rel="norel noreferrer"
                      className="text-base text-center text-gray-400"
                    >
                      Datenschutz
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col flex-1 w-0">
          <main
            className="overflow-y-auto relative z-0 flex-1 pt-2 pb-6 md:py-6 focus:outline-none"
            tabIndex="0"
          >
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8 font-Inter">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
    <footer className="bg-white md:hidden">
      <div className="py-12 px-4 mx-auto max-w-7xl sm:px-6 md:flex md:justify-between md:items-center lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>

          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-base text-center text-gray-400">
            &copy; {new Date().getFullYear()} Amadeus Mader. All rights
            reserved.
          </p>
        </div>
      </div>
      <div className="space-x-4 text-base text-center text-gray-400">
        <a
          href="http://mozart409.space/impressum"
          target="_blank"
          rel="norel noreferrer"
          className="text-base text-center text-gray-400"
        >
          Impressum
        </a>
        <a
          href="http://mozart409.space/datenschutz"
          target="_blank"
          rel="norel noreferrer"
          className="text-base text-center text-gray-400"
        >
          Datenschutz
        </a>
      </div>
    </footer>
  </div>
)
export default Layout
