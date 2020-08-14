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
        <div className='flex justify-center px-8 py-8 bg-white col-span-1'>
          <img className='max-h-12' src='/gtm.svg' alt='Google Tag Manager' />
          <span className='my-auto ml-1 text-lg font-bold tracking-widest text-gtm'>
            Google Tag Manager
          </span>
        </div>
        <div className='flex justify-center px-8 py-8 bg-white col-span-1'>
          <img className='max-h-12' src='/metomic.svg' alt='Metomic' />
        </div>
        <div className='flex justify-center px-8 py-8 bg-white col-span-1'>
          <img
            className='max-h-12'
            src='/GithubActions.svg'
            alt='Github Action'
          />
          <span className='my-auto ml-1 text-lg font-bold tracking-widest text-gitactions'>
            Github Actions
          </span>
        </div>
        <div className='flex justify-center px-8 py-8 bg-white col-span-1'>
          <img className='max-h-12' src='/jest.svg' alt='Jest' />
          <span className='my-auto text-lg font-bold tracking-widest text-jest'>
            Jest
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
    <Projekt3 />
    <Projekt4 />
  </div>
)

const Projekt1 = () => (
  <div className='mt-8 overflow-hidden bg-white rounded-lg shadow'>
    <div className='px-4 py-5 border-b border-gray-200 sm:px-6'>
      Elektroauto-Vermietung
    </div>
    <div>
      <div className='px-4 py-5 sm:p-6'>
        <ul className='font-sans text-sm text-gray-500 list-disc list-inside'>
          <li>
            Ersetzten der bisherigen Wordpress Website durch ein neues,
            mobiloptimiert Design mit GatsbyJS (JavaScript, HTML5, CSS3,
            ReactJS)
          </li>
          <li>
            Weiterleitungen aller bisherigen URLs um Rankingverluste zu
            vermeiden
          </li>
          <li>
            Automatisches Updaten der Preise durch einen CSV Import, kombiniert
            mit continous deployment
          </li>
          <li>
            Erstellung von Snippets für die Suchmaschine mithilfe von GraphQL
          </li>
          <li>Deployment mit Github und Continuous Integration</li>
          <li>
            Umsetzen aller Onpage Suchmaschinen-Optimierungen, dadurch grünes
            Licht (100) von Google beim Lighthouse Test
          </li>
          <li>Einrichtes von continous deployment</li>
          <li>Agiles Arbeiten mit Scrum (Jira und Confluence von Atlassian)</li>
          <li>Umsetzung der Programmierung auf Basis von clean Code und TDD</li>
        </ul>
      </div>
    </div>
  </div>
)
const Projekt2 = () => (
  <div className='mt-8 overflow-hidden bg-white rounded-lg shadow'>
    <div className='px-4 py-5 border-b border-gray-200 sm:px-6'>
      Unternehmensberatung
    </div>
    <div className='px-4 py-5 sm:p-6'>
      <ul className='font-sans text-sm text-gray-500 list-disc list-inside'>
        <li>
          Ersetzten der bisherigen Joomla Website durch ein neues,
          mobiloptimiert Design mit GatsbyJS (JavaScript, HTML5, CSS3, ReactJS)
          und Einführen des DatoCMS
        </li>
        <li>
          Umsetzen aller Onpage Suchmaschinen-Optimierungen, vor allem
          Optimierung der Bilder
        </li>
        <li>
          Erstellen von mehreren Frontend-Templates für den Content (Text und
          Bilder) von DatoCMS
        </li>
      </ul>
    </div>
  </div>
)
const Projekt3 = () => (
  <div className='mt-8 overflow-hidden bg-white rounded-lg shadow'>
    <div className='px-4 py-5 border-b border-gray-200 sm:px-6'>
      Seo-freelancerin.com
    </div>
    <div className='px-4 py-5 sm:p-6'>
      <ul className='font-sans text-sm text-gray-500 list-disc list-inside'>
        <li>Umsetzung, Design, Onpage Optimierungen</li>
        <li>
          Herausarbeiten der wichtigen Kriterien der Zielgruppe mit dem Kunden
          deren Darstellung auf der Website
        </li>
      </ul>
    </div>
  </div>
)

const Projekt4 = () => (
  <div className='mt-8 overflow-hidden bg-white rounded-lg shadow'>
    <div className='px-4 py-5 border-b border-gray-200 sm:px-6'>
      Ferienwohnungen
    </div>
    <div className='px-4 py-5 sm:p-6'>
      <ul className='font-sans text-sm text-gray-500 list-disc list-inside'>
        <li>
          Umsetzung einer Website mit Wordpress zur Vermietung von
          Ferienwohnungen an Zeitarbeiter
        </li>
        <li>
          Ersetzten der bisherigen Wordpress Website durch ein neues,
          mobiloptimiert Design mit GatsbyJS (JavaScript, HTML5, CSS3, ReactJS)
        </li>
        <li>
          Weiterleitungen aller bisherigen URLs um Rankingverluste zu vermeiden
        </li>
      </ul>
    </div>
  </div>
)

const ProjektePage = () => (
  <Layout>
    <h1 className='text-4xl font-bold text-gray-900 font-Inter leading-7 sm:text-3xl sm:leading-9 sm:truncate'>
      Projekte
    </h1>
    <Projekte />
    <Techs />
  </Layout>
)

export default ProjektePage
