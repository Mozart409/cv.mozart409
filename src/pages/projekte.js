import moment from 'moment'
import Link from 'next/link'
import Layout from '../components/layout'

const Techs = () => (
  <div className='grid grid-cols-1 max-w-7xl'>
    <div className='px-4 py-12 mx-auto max-w-7xl font-Inter sm:px-6 lg:py-16 lg:px-8'>
      <h2 className='text-xl font-extrabold text-gray-900 leading-9 sm:text-2xl sm:leading-10'>
        Häufig genutzte Technologien
      </h2>
      <p className='font-sans text-sm text-gray-500'>
        Hier habe ich noch ein paar andere Frameworks/Tools/Libraries
        aufgezählt, die ich für kommerzielle und private Projekte verwende.
      </p>
      <div className='mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8'>
        <div className='flex justify-center px-8 py-8 bg-white col-span-1'>
          <img className='max-h-12' src='/Gatsby.svg' alt='Gatsbyjs' />
        </div>
        <div className='flex justify-center px-8 py-8 bg-white col-span-1'>
          <img
            className='max-h-12'
            src='/zeit-black-full-logo.svg'
            alt='Zeit.co'
          />
        </div>
        <div className='flex justify-center px-8 py-8 bg-white col-span-1'>
          <img className='max-h-12' src='/nextjs-black-logo.svg' alt='Nextjs' />
        </div>
        <div className='flex justify-center px-8 py-8 bg-white col-span-1'>
          <img className='max-h-12' src='/tailwind.svg' alt='Tailwind' />
        </div>
        <div className='flex justify-center px-8 py-8 bg-white col-span-1'>
          <img
            className='max-h-12'
            src='/cloudinary_logo_for_white_bg.svg'
            alt='Cloudinary'
          />
        </div>
        <div className='flex justify-center px-8 py-8 bg-white col-span-1'>
          <img className='max-h-12' src='/Mirage.svg' alt='Mirage' />
        </div>
        <div className='flex justify-center px-8 py-8 bg-white col-span-1'>
          <img className='max-h-12' src='/firebase.png' alt='Firebase' />
        </div>
        <div className='flex justify-center px-8 py-8 bg-white col-span-1'>
          <img className='max-h-12' src='/Fauna.png' alt='Fauna' />
        </div>
        <div className='flex justify-center px-8 py-8 bg-white col-span-1'>
          <img className='max-h-12' src='/datocms_logo.svg' alt='DatoCms' />
        </div>
        <div className='flex justify-center px-8 py-8 bg-white col-span-1'>
          <img className='max-h-12' src='/graphql.svg' alt='GraphQL' />
          <span className='my-auto text-lg font-bold tracking-widest text-graphql'>
            GraphQL
          </span>
        </div>
      </div>
    </div>
  </div>
)

const Projekte = () => (
  <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
    <Projekt1 />
    <Projekt2 />
  </div>
)

const Projekt1 = () => (
  <div className='mt-8 overflow-hidden bg-white rounded-lg shadow'>
    <div className='px-4 py-5 border-b border-gray-200 sm:px-6'>
      Autovermietung
    </div>
    <div>
      <div className='px-4 py-5 sm:p-6'>
        Anforderung
        <ul className='font-sans text-sm text-gray-500 list-disc list-inside'>
          <li>
            Preise aus CSV einlesen und mehrfach auf der Webseite darstellen
          </li>
          <li>Tracking DSGVO Konform</li>
          <li>Mehrere Autos sind auf der alten Platform vorhanden</li>
          <li>Umstieg auf schnellere Webtechnologien</li>
        </ul>
      </div>
      <div className='px-4 py-4 border-t border-gray-200 sm:px-6'>
        Umsetzung
        <ul className='font-sans text-sm text-gray-500 list-disc list-inside'>
          <li>
            Preise in CSV werden mit GraphQL eingelesen und dem Frontend zur
            Verfügung gestellt.
          </li>
          <li>
            Tracking wird mit{' '}
            <a
              href='https://metomic.io'
              target='_blank'
              rel='noopener noreferrer'
            >
              Metomic
            </a>{' '}
            und Google Tag Manager realisiert{' '}
          </li>
          <li>Von Wordpress auf Gatsby umgestiegen</li>
        </ul>
      </div>
    </div>
    <div className='px-2 py-2 sm:px-6'>
      <div className=''>
        <div className='pb-12 mt-10 bg-white sm:pb-16'>
          <div className='relative'>
            <div className='relative mx-auto max-w-screen-xl'>
              <div className='max-w-4xl mx-auto'>
                <dl className='bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3'>
                  <div className='flex flex-col p-2 text-center border-b border-gray-100 sm:border-0 sm:border-r'>
                    <dt className='order-2 mt-2 text-lg font-medium text-gray-500 leading-6'>
                      <span className='my-auto text-lg font-bold tracking-widest text-graphql'>
                        GraphQL
                      </span>
                    </dt>
                    <dd className='order-1 '>
                      <img
                        className='mx-auto max-h-12'
                        src='/graphql.svg'
                        alt='GraphQL'
                      />
                    </dd>
                  </div>

                  <div className='flex flex-col p-2 text-center border-b border-gray-100 sm:border-0 sm:border-r'>
                    <dt className='order-2 mt-2 text-lg font-medium text-gray-500 leading-6'></dt>
                    <dd className='order-1 my-auto'>
                      <img
                        className='mx-auto max-h-12'
                        src='/metomic.svg'
                        alt='Metomic.io'
                      />
                    </dd>
                  </div>
                  <div className='flex flex-col p-2 text-center border-b border-gray-100 sm:border-0 sm:border-r'>
                    <dt className='order-2 mt-2 text-lg font-medium text-gray-500 leading-6'></dt>
                    <dd className='order-1 my-auto'>
                      <img
                        className='inline-block mx-auto align-middle max-h-12'
                        src='/tailwind.svg'
                        alt='Tailwind'
                      />
                    </dd>
                  </div>
                  <div className='flex flex-col p-2 text-center border-b border-gray-100 sm:border-0 sm:border-r'>
                    <dt className='order-2 mt-2 text-lg font-medium text-gray-500 leading-6'>
                      <span className='my-auto font-sans text-lg font-bold tracking-widest text-gtm'>
                        Google Tag Manager
                      </span>
                    </dt>
                    <dd className='order-1 '>
                      <img
                        className='mx-auto max-h-12'
                        src='/gtm.svg'
                        alt='Google Tag Manager'
                      />
                    </dd>
                  </div>
                  <div className='flex flex-col p-2 text-center border-b border-gray-100 sm:border-0 sm:border-r'>
                    <dt className='order-2 mt-2 text-lg font-medium text-gray-500 leading-6'></dt>
                    <dd className='order-1 my-auto'>
                      <img
                        className='mx-auto max-h-12'
                        src='/Gatsby.svg'
                        alt='Gatsbyjs'
                      />
                    </dd>
                  </div>
                  <div className='flex flex-col p-2 text-center border-b border-gray-100 sm:border-0 sm:border-r'>
                    <dt className='order-2 mt-2 text-lg font-medium text-gray-500 leading-6'>
                      <span className='my-auto text-lg font-bold tracking-widest text-gitactions'>
                        Github Actions
                      </span>
                    </dt>
                    <dd className='order-1 '>
                      <img
                        className='mx-auto max-h-12'
                        src='/GithubActions.svg'
                        alt='Github Actions'
                      />
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
const Projekt2 = () => (
  <div className='mt-8 overflow-hidden bg-white rounded-lg shadow'>
    <div>
      <div className='px-4 py-5 border-b border-gray-200 sm:px-6'>
        Unternehmen
      </div>
      <div className='px-4 py-5 sm:p-6'>
        Anforderung
        <ul className='font-sans text-sm text-gray-500 list-disc list-inside'>
          <li>Content von Joomla auf neues Cms übertragen</li>
          <li>Tracking DSGVO Konform</li>
          <li>Einfache bearbeitung von Bildern und Texten</li>
          <li>Umstieg auf schnellere Webtechnologien</li>
        </ul>
      </div>
      <div className='px-4 py-4 border-t border-gray-200 sm:px-6'>
        Umsetzung
        <ul className='font-sans text-sm text-gray-500 list-disc list-inside'>
          <li>DatoCms eingesetz</li>
          <li>
            Tracking wird mit{' '}
            <a
              href='https://metomic.io'
              target='_blank'
              rel='noopener noreferrer'
            >
              Metomic
            </a>{' '}
            und Google Tag Manager realisiert{' '}
          </li>
          <li>Von Joomla auf Gatsby mit DatoCms umgestiegen</li>
        </ul>
      </div>
    </div>
    <div className='px-2 py-2 sm:px-6'>
      <div className=''>
        <div className='pb-12 mt-10 bg-white sm:pb-16'>
          <div className='relative'>
            <div className='relative mx-auto max-w-screen-xl'>
              <div className='max-w-4xl mx-auto'>
                <dl className='bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3'>
                  <div className='flex flex-col p-2 text-center border-b border-gray-100 sm:border-0 sm:border-r'>
                    <dt className='order-2 mt-2 text-lg font-medium text-gray-500 leading-6'>
                      <span className='my-auto text-lg font-bold tracking-widest text-graphql'>
                        GraphQL
                      </span>
                    </dt>
                    <dd className='order-1 '>
                      <img
                        className='mx-auto max-h-12'
                        src='/graphql.svg'
                        alt='GraphQL'
                      />
                    </dd>
                  </div>

                  <div className='flex flex-col p-2 text-center border-b border-gray-100 sm:border-0 sm:border-r'>
                    <dt className='order-2 mt-2 text-lg font-medium text-gray-500 leading-6'></dt>
                    <dd className='order-1 my-auto'>
                      <img
                        className='mx-auto max-h-12'
                        src='/metomic.svg'
                        alt='Metomic.io'
                      />
                    </dd>
                  </div>
                  <div className='flex flex-col p-2 text-center border-b border-gray-100 sm:border-0 sm:border-r'>
                    <dt className='order-2 mt-2 text-lg font-medium text-gray-500 leading-6'></dt>
                    <dd className='order-1 my-auto'>
                      <img
                        className='inline-block mx-auto align-middle max-h-12'
                        src='/tailwind.svg'
                        alt='Tailwind'
                      />
                    </dd>
                  </div>
                  <div className='flex flex-col p-2 text-center border-b border-gray-100 sm:border-0 sm:border-r'>
                    <dt className='order-2 mt-2 text-lg font-medium text-gray-500 leading-6'>
                      <span className='my-auto font-sans text-lg font-bold tracking-widest text-gtm'>
                        Google Tag Manager
                      </span>
                    </dt>
                    <dd className='order-1 '>
                      <img
                        className='mx-auto max-h-12'
                        src='/gtm.svg'
                        alt='Google Tag Manager'
                      />
                    </dd>
                  </div>
                  <div className='flex flex-col p-2 text-center border-b border-gray-100 sm:border-0 sm:border-r'>
                    <dt className='order-2 mt-2 text-lg font-medium text-gray-500 leading-6'></dt>
                    <dd className='order-1 my-auto'>
                      <img
                        className='mx-auto max-h-12'
                        src='/Gatsby.svg'
                        alt='Gatsbyjs'
                      />
                    </dd>
                  </div>
                  <div className='flex flex-col p-2 text-center border-b border-gray-100 sm:border-0 sm:border-r'>
                    <dt className='order-2 mt-2 text-lg font-medium text-gray-500 leading-6'></dt>
                    <dd className='order-1 my-auto'>
                      <img
                        className='mx-auto max-h-12'
                        src='/datocms_logo.svg'
                        alt='DatoCms'
                      />
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
const Projekt3 = () => (
  <div className='mt-8 overflow-hidden bg-white rounded-lg shadow'>
    <div className='px-4 py-5 border-b border-gray-200 sm:px-6'>Projekt 3</div>
    <div className='px-4 py-5 sm:p-6'>
      Anforderung
      <ul className='list-disc list-inside'>
        <li>
          Preise aus CSV einlesen und mehrfach auf der Webseite darstellen
        </li>
        <li>Tracking DSGVO Konform</li>
        <li>Mehrere Autos sind auf der alten Platform vorhanden</li>
        <li>Umstieg auf schnellere Webtechnologien</li>
      </ul>
    </div>
    <div className='px-4 py-4 border-t border-gray-200 sm:px-6'>
      Umsetzung
      <ul className='list-disc list-inside'>
        <li>
          Preise in CSV werden mit GraphQL eingelesen und dem Frontend zur
          Verfügung gestellt.
        </li>
        <li>
          Tracking wird mit{' '}
          <a
            href='https://metomic.io'
            target='_blank'
            rel='noopener noreferrer'
          >
            Metomic
          </a>{' '}
          und Google Tag Manager realisiert{' '}
        </li>
        <li>Von Wordpress auf Gatsby umgestiegen</li>
      </ul>
    </div>
  </div>
)

export default () => (
  <Layout>
    <h1 className='text-4xl font-bold text-gray-900 font-Inter leading-7 sm:text-3xl sm:leading-9 sm:truncate'>
      Projekte
    </h1>
    <Projekte />
    <Techs />
  </Layout>
)
