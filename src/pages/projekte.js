import moment from 'moment'
import Link from 'next/link'
import Layout from '../components/layout'

const Techs = () => (
  <div className=''>
    <div className='px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:py-16 lg:px-8'>
      <h2 className='text-xl font-extrabold text-gray-900 leading-9 sm:text-2xl sm:leading-10'>
        Häufig genutzte Technologien
      </h2>
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
            className='text-indigo-600'
            href='https://metomic.io'
            target='_blank'
            rel='noref norel'
          >
            Metomic{' '}
          </a>
          und Google Tag Manager realisiert{' '}
        </li>
        <li>Von Wordpress auf Gatsby umgestiegen</li>
      </ul>
    </div>
  </div>
)
const Projekt2 = () => (
  <div className='mt-8 overflow-hidden bg-white rounded-lg shadow'>
    <div className='px-4 py-5 border-b border-gray-200 sm:px-6'>Unternehmen</div>
    <div className='px-4 py-5 sm:p-6'>
      Anforderung
      <ul className='list-disc list-inside'>
        <li>
          Content von Joomla auf neues Cms übertragen
        </li>
        <li>Tracking DSGVO Konform</li>
        <li>Einfache bearbeitung von Bildern und Texten</li>
        <li>Umstieg auf schnellere Webtechnologien</li>
      </ul>
    </div>
    <div className='px-4 py-4 border-t border-gray-200 sm:px-6'>
      Umsetzung
      <ul className='list-disc list-inside'>
        <li>
          DatoCms eingesetz
        </li>
        <li>
          Tracking wird mit{' '}
          <a
            className='text-indigo-600'
            href='https://metomic.io'
            target='_blank'
            rel='noref norel'
          >
            Metomic{' '}
          </a>
          und Google Tag Manager realisiert{' '}
        </li>
        <li>Von Joomla auf Gatsby mit DatoCms umgestiegen</li>
      </ul>
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
            className='text-indigo-600'
            href='https://metomic.io'
            target='_blank'
            rel='noref norel'
          >
            Metomic{' '}
          </a>
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
