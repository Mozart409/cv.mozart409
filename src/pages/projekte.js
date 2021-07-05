import Link from 'next/link'
import Layout from '../components/layout'

const Techs = () => (
  <div className='grid grid-cols-1 max-w-7xl'>
    <div className='py-12 px-4 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 font-Inter'>
      <h2 className='text-xl font-extrabold leading-9 text-gray-900 sm:text-2xl sm:leading-10'>
        Technologien
      </h2>
      <div className='grid grid-cols-1 gap-0.5 mt-6 md:grid-cols-3 lg:mt-8'>
        <div className='flex col-span-1 justify-center py-8 px-8 bg-white'>
          <img className='max-h-12' src='/Gatsby.svg' alt='Gatsbyjs' />
        </div>

        <div className='flex col-span-1 justify-center py-8 px-8 bg-white'>
          <img className='max-h-12' src='/nextjs-black-logo.svg' alt='Nextjs' />
        </div>
        <div className='flex col-span-1 justify-center py-8 px-8 bg-white'>
          <img className='max-h-12' src='/tailwind.svg' alt='Tailwind' />
        </div>
        <div className='flex col-span-1 justify-center py-8 px-8 bg-white'>
          <img
            className='max-h-12'
            src='/cloudinary_logo_for_white_bg.svg'
            alt='Cloudinary'
          />
        </div>
        <div className='flex col-span-1 justify-center py-8 px-8 bg-white'>
          <img className='max-h-12' src='/Mirage.svg' alt='Mirage' />
        </div>
        <div className='flex col-span-1 justify-center py-8 px-8 bg-white'>
          <img className='max-h-12' src='/firebase.png' alt='Firebase' />
        </div>
        <div className='flex col-span-1 justify-center py-8 px-8 bg-white'>
          <img className='max-h-12' src='/Fauna.png' alt='Fauna' />
        </div>
        <div className='flex col-span-1 justify-center py-8 px-8 bg-white'>
          <img className='max-h-12' src='/datocms_logo.svg' alt='DatoCms' />
        </div>
        <div className='flex col-span-1 justify-center py-8 px-8 bg-white'>
          <img className='max-h-12' src='/graphql.svg' alt='GraphQL' />
          <span className='my-auto text-lg font-bold tracking-widest text-graphql'>
            GraphQL
          </span>
        </div>
        <div className='flex col-span-1 justify-center py-8 px-8 bg-white'>
          <img className='max-h-12' src='/gtm.svg' alt='Google Tag Manager' />
          <span className='my-auto ml-1 text-lg font-bold tracking-widest text-gtm'>
            Google Tag Manager
          </span>
        </div>
        <div className='flex col-span-1 justify-center py-8 px-8 bg-white'>
          <img className='max-h-12' src='/metomic.svg' alt='Metomic' />
        </div>
        <div className='flex col-span-1 justify-center py-8 px-8 bg-white'>
          <img
            className='max-h-12'
            src='/GithubActions.svg'
            alt='Github Action'
          />
          <span className='my-auto ml-1 text-lg font-bold tracking-widest text-gitactions'>
            Github Actions
          </span>
        </div>
        <div className='flex col-span-1 justify-center py-8 px-8 bg-white'>
          <img className='max-h-12' src='/cypress.png' alt='Cypress' />
          <span className='my-auto text-lg font-bold tracking-widest text-jest'>
            Cypress
          </span>
        </div>
      </div>
    </div>
  </div>
)

const Projekte = () => (
  <div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
    <Projekt1 />
    <Projekt2 />
    <Projekt3 />
    <Projekt4 />
  </div>
)

const Projekt1 = () => (
  <div className='overflow-hidden mt-8 bg-white rounded-lg shadow prose lg:prose-xl'>
    <div className='py-5 px-4 border-b border-gray-200 sm:px-6'>
      Elektroauto-Vermietung
    </div>
    <div>
      <div className='py-5 px-4 sm:p-6'>
        <ul className='font-sans text-sm list-inside text-gray-500'>
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
          <li>Einrichten von continous deployment</li>
          <li>Agiles Arbeiten mit Scrum (Jira und Confluence von Atlassian)</li>
          <li>Umsetzung der Programmierung auf Basis von clean Code und TDD</li>
        </ul>
      </div>
    </div>
  </div>
)
const Projekt2 = () => (
  <div className='overflow-hidden mt-8 bg-white rounded-lg shadow prose lg:prose-xl'>
    <div className='py-5 px-4 border-b border-gray-200 sm:px-6'>
      Unternehmensberatung
    </div>
    <div className='py-5 px-4 sm:p-6'>
      <ul className='font-sans text-sm list-inside text-gray-500'>
        <li>
          Ersetzten der bisherigen Joomla Website durch ein neues, mobil
          optimiert Design mit GatsbyJS (JavaScript, HTML5, CSS3, ReactJS) und
          Einführen des DatoCMS
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
  <div className='overflow-hidden mt-8 bg-white rounded-lg shadow prose lg:prose-xl'>
    <div className='py-5 px-4 border-b border-gray-200 sm:px-6'>
      seo-freelancerin.com
    </div>
    <div className='py-5 px-4 sm:p-6'>
      <ul className='font-sans text-sm list-inside text-gray-500'>
        <li>Umsetzung, Design, Onpage Optimierungen</li>
      </ul>
    </div>
  </div>
)

const Projekt4 = () => (
  <div className='overflow-hidden mt-8 bg-white rounded-lg shadow prose lg:prose-xl'>
    <div className='py-5 px-4 border-b border-gray-200 sm:px-6'>
      Ferienwohnungen
    </div>
    <div className='py-5 px-4 sm:p-6'>
      <ul className='font-sans text-sm list-inside text-gray-500'>
        <li>
          Umsetzung einer Website mit Wordpress zur Vermietung von
          Ferienwohnungen an Zeitarbeiter
        </li>
        <li>
          Ersetzten der bisherigen Joomla Website durch ein neues, mobil
          optimiert Design
        </li>
        <li>
          Herausarbeiten der wichtigen Kriterien der Zielgruppe mit dem Kunden
          deren Darstellung auf der Website
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
    <h1 className='text-4xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 font-Inter sm:truncate'>
      Auszug meiner Projekte
    </h1>
    <Projekte />
    <Techs />
  </Layout>
)

export default ProjektePage
