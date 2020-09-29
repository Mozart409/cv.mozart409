import Link from 'next/link'
import Layout from '../components/layout'

const BerufeCard = () => (
  <div className='mt-8'>
    <div className='px-4 py-5 bg-white border-b border-gray-200 shadow sm:px-6'>
      <h2 className='text-lg font-medium leading-6 text-gray-900'>
        Berufserfahrung
      </h2>
    </div>
    <div className='overflow-hidden bg-white shadow sm:rounded-b-md'>
      <ul>
        <li>
          <div className='block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50'>
            <div className='px-4 py-4 sm:px-6'>
              <div className='flex items-center justify-between'>
                <div className='text-sm font-medium leading-5 text-indigo-600 truncate'>
                  Frontend Developer
                </div>
                <div className='flex flex-shrink-0 ml-2'>
                  <span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full'>
                    Vollzeit
                  </span>
                </div>
              </div>
              <div className='mt-2 sm:flex sm:justify-between'>
                <div className='sm:flex'>
                  <div className='flex items-center mr-6 text-sm leading-5 text-gray-500'>
                    <svg
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z' />
                    </svg>
                    Mader IT-Projektmanagement
                  </div>
                  <div className='flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mt-0'>
                    <svg
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    München / Remote
                  </div>
                </div>
                <div className='flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mt-0'>
                  <svg
                    className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Von 11.2019 - Jetzt</span>
                </div>
              </div>
              <div>
                <p className='mt-2 font-sans text-sm leading-5 text-gray-500 sm:mt-0 '>
                  Erfolgreiche Planung und Umsetzung der SEO optimierten
                  Websites, teilweise mit CMS (GraphQL Anbindung zu WordPress
                  oder DatoCMS), inklusive Kundenkommunikation. Entwurf,
                  Abstimmung und Umsetzung des Designs. Agile Projektumsetzung
                  mit Jira und Confluence von Atlassian.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className='border-t border-gray-200'>
          <div className='block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50'>
            <div className='px-4 py-4 sm:px-6'>
              <div className='flex items-center justify-between'>
                <div className='text-sm font-medium leading-5 text-indigo-600 truncate'>
                  Programmierer
                </div>
                <div className='flex flex-shrink-0 ml-2'>
                  <span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full'>
                    Vollzeit
                  </span>
                </div>
              </div>
              <div className='mt-2 sm:flex sm:justify-between'>
                <div className='sm:flex'>
                  <div className='flex items-center mr-6 text-sm leading-5 text-gray-500'>
                    <svg
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z' />
                    </svg>
                    d&b Audiotechnik
                  </div>
                  <div className='flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mt-0'>
                    <svg
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Backnang / Remote
                  </div>
                </div>
                <div className='flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mt-0'>
                  <svg
                    className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Von 12.2019 - 04.2020</span>
                </div>
              </div>
              <div>
                <p className='mt-2 font-sans text-sm leading-5 text-gray-500 sm:mt-0 '>
                  Umsetzung des Designs der neuen Salesforce Community mit HTML,
                  CSS und JS. Agile Arbeitsweise mit Jira und Dokumentation
                  aller Änderungen und How-to in Confluence. Zusätzliche Code
                  Dokumentation in GitHub.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className='border-t border-gray-200'>
          <div className='block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50'>
            <div className='px-4 py-4 sm:px-6'>
              <div className='flex items-center justify-between'>
                <div className='text-sm font-medium leading-5 text-indigo-600 truncate'>
                  Aushilfe Social Media
                </div>
                <div className='flex flex-shrink-0 ml-2'>
                  <span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full'>
                    Teilzeit
                  </span>
                </div>
              </div>
              <div className='mt-2 sm:flex sm:justify-between'>
                <div className='sm:flex'>
                  <div className='flex items-center mr-6 text-sm leading-5 text-gray-500'>
                    <svg
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z' />
                    </svg>
                    Hubert Burda Media / CHIP.de
                  </div>
                  <div className='flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mt-0'>
                    <svg
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    München
                  </div>
                </div>
                <div className='flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mt-0'>
                  <svg
                    className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Von 10.2013 - 01.2014</span>
                </div>
              </div>
              <div>
                <p className='mt-2 font-sans text-sm leading-5 text-gray-500 sm:mt-0 '>
                  Moderation und Pflege der Social Media Accounts.
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
)

const PraktikaCard = () => (
  <div className='mt-8'>
    <div className='px-4 py-5 bg-white border-b border-gray-200 shadow sm:px-6'>
      <h2 className='text-lg font-medium leading-6 text-gray-900'>Praktika</h2>
    </div>
    <div className='overflow-hidden bg-white shadow sm:rounded-b-md'>
      <ul>
        <li>
          <div className='block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50'>
            <div className='px-4 py-4 sm:px-6'>
              <div className='flex items-center justify-between'>
                <div className='text-sm font-medium leading-5 text-indigo-600 truncate'>
                  Praktikum im Bereich PR und Marketing mit Fokus
                  Eventmanagement
                </div>
                <div className='flex flex-shrink-0 ml-2'>
                  <span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full'>
                    Vollzeit
                  </span>
                </div>
              </div>
              <div className='mt-2 sm:flex sm:justify-between'>
                <div className='sm:flex'>
                  <div className='flex items-center mr-6 text-sm leading-5 text-gray-500'>
                    <svg
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z' />
                    </svg>
                    Trendence
                  </div>
                  <div className='flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mt-0'>
                    <svg
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Berlin
                  </div>
                </div>
                <div className='flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mt-0'>
                  <svg
                    className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Von 11.2017 - 02.2018</span>
                </div>
              </div>
              <div>
                <p className='mt-2 font-sans text-sm leading-5 text-gray-500 sm:mt-0 '>
                  Koordination und Umsetzung von Events, Texte schreiben und
                  veröffentlichen, Webseiten pflegen, Präsentationen erstellen,
                  Grafiken und Videos bearbeiten.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className='border-t border-gray-200'>
          <div className='block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50'>
            <div className='px-4 py-4 sm:px-6'>
              <div className='flex items-center justify-between'>
                <div className='text-sm font-medium leading-5 text-indigo-600 truncate'>
                  Praktikum Online-Marketing
                </div>
                <div className='flex flex-shrink-0 ml-2'>
                  <span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full'>
                    Vollzeit
                  </span>
                </div>
              </div>
              <div className='mt-2 sm:flex sm:justify-between'>
                <div className='sm:flex'>
                  <div className='flex items-center mr-6 text-sm leading-5 text-gray-500'>
                    <svg
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z' />
                    </svg>
                    Mader IT-Projektmanagement
                  </div>
                  <div className='flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mt-0'>
                    <svg
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    München
                  </div>
                </div>
                <div className='flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mt-0'>
                  <svg
                    className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Von 10.2016 - 12.2016</span>
                </div>
              </div>
              <div>
                <p className='mt-2 font-sans text-sm leading-5 text-gray-500 sm:mt-0 '>
                  Projektmanagement und Umsetzung einer Website für die
                  Vermietung von Ferienwohnungen in Wordpress, Aufnahme der
                  Anforderungen und Support, SEO, Überwachung und Konfiguration
                  in Google Analytics und Google Tag Manager.
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
)

const AusbildungCard = () => (
  <div className='mt-8'>
    <div className='px-4 py-5 bg-white border-b border-gray-200 shadow sm:px-6'>
      <h2 className='text-lg font-medium leading-6 text-gray-900'>
        Ausbildung
      </h2>
    </div>
    <div className='overflow-hidden bg-white shadow sm:rounded-b-md'>
      <ul>
        <li>
          <div className='block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50'>
            <div className='px-4 py-4 sm:px-6'>
              <div className='flex items-center justify-between'>
                <div className='text-sm font-medium leading-5 text-indigo-600 truncate'>
                  Medieninformatik Bachelor
                </div>
                <div className='flex flex-shrink-0 ml-2'>
                  <span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full'>
                    1 Jahr
                  </span>
                </div>
              </div>
              <div className='mt-2 sm:flex sm:justify-between'>
                <div className='sm:flex'>
                  <div className='flex items-center mr-6 text-sm leading-5 text-gray-500'>
                    <svg
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z' />
                    </svg>
                    Beuth Hochschule
                  </div>
                  <div className='flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mt-0'>
                    <svg
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Berlin
                  </div>
                </div>
                <div className='flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mt-0'>
                  <svg
                    className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Von 10.2018 - 10.2019</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className='block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50'>
            <div className='px-4 py-4 sm:px-6'>
              <div className='flex items-center justify-between'>
                <div className='text-sm font-medium leading-5 text-indigo-600 truncate'>
                  Audio Production Bachelor Program
                </div>
                <div className='flex flex-shrink-0 ml-2'>
                  <span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full'>
                    1 Jahr
                  </span>
                </div>
              </div>
              <div className='mt-2 sm:flex sm:justify-between'>
                <div className='sm:flex'>
                  <div className='flex items-center mr-6 text-sm leading-5 text-gray-500'>
                    <svg
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z' />
                    </svg>
                    SAE
                  </div>
                  <div className='flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mt-0'>
                    <svg
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Berlin
                  </div>
                </div>
                <div className='flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mt-0'>
                  <svg
                    className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Von 09.2016 - 07.2017</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className='border-t border-gray-200'>
          <div className='block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50'>
            <div className='px-4 py-4 sm:px-6'>
              <div className='flex items-center justify-between'>
                <div className='text-sm font-medium leading-5 text-indigo-600 truncate'>
                  Fachoberschule Fachrichtung Gesundheit und Soziales
                </div>
                <div className='flex flex-shrink-0 ml-2'>
                  <span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full'>
                    Abschluss
                  </span>
                </div>
              </div>
              <div className='mt-2 sm:flex sm:justify-between'>
                <div className='sm:flex'>
                  <div className='flex items-center mr-6 text-sm leading-5 text-gray-500'>
                    <svg
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z' />
                    </svg>
                    Rackow-Schulen
                  </div>
                  <div className='flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mt-0'>
                    <svg
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Berlin
                  </div>
                </div>
                <div className='flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mt-0'>
                  <svg
                    className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Von 09.2014 - 07.2016</span>
                </div>
              </div>
              <div>
                <p className='mt-2 font-sans text-sm font-bold leading-5 tracking-wide text-green-500 sm:mt-0 '>
                  Abschluss: Fachhochschulreife
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className='border-t border-gray-200'>
          <div className='block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50'>
            <div className='px-4 py-4 sm:px-6'>
              <div className='flex items-center justify-between'>
                <div className='text-sm font-medium leading-5 text-indigo-600 truncate'>
                  Fachoberschule Fachrichtung Technik
                </div>
                <div className='flex flex-shrink-0 ml-2'>
                  <span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full'>
                    1 Jahr
                  </span>
                </div>
              </div>
              <div className='mt-2 sm:flex sm:justify-between'>
                <div className='sm:flex'>
                  <div className='flex items-center mr-6 text-sm leading-5 text-gray-500'>
                    <svg
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z' />
                    </svg>
                    Samuel-Heinicke-Fachoberschule
                  </div>
                  <div className='flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mt-0'>
                    <svg
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    München
                  </div>
                </div>
                <div className='flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mt-0'>
                  <svg
                    className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Von 10.2013 - 09.2014</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
)
const cv = () => (
  <Layout>
    <h1 className='text-4xl font-bold leading-7 text-gray-900 font-Inter sm:text-3xl sm:leading-9 sm:truncate'>
      Curriculum Vitae
    </h1>
    <a id='#Berufe'>
      <BerufeCard />
    </a>
    <PraktikaCard />
    <AusbildungCard />
  </Layout>
)

export default cv
