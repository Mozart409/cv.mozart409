import moment from 'moment'
import Link from 'next/link'

import Layout from '../components/layout'
import { useEffect, useState } from 'react'

const BeginningCard = () => {
  const myAge = moment().diff('1996-10-24', 'years', false)
  const [Location, setLocation] = useState(null)

  useEffect(() => {
    const fetchGitHubData = async () => {
      const res = await fetch('https://api.github.com/users/mozart409')
      const data = await res.json()
      setLocation(data.location)
    }
    fetchGitHubData()
  }, [])
  return (
    <div className='mt-8'>
      <div className='px-4 py-5 bg-white border-b border-gray-200 shadow sm:px-6'>
        <h2 className='text-lg font-medium text-gray-900 leading-6'>
          Meine Anfänge damals
        </h2>
      </div>
      <div className='overflow-hidden bg-white shadow sm:rounded-b-md'>
        <ul>
          <li>
            <div className='block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out'>
              <div className='px-4 py-4 sm:px-6'>
                <div>
                  <p className='mt-2 font-sans text-sm text-gray-500 leading-5 sm:mt-0 '>
                    Herzlich willkommen auf meinem digitalen Lebenslauf. Ich bin
                    ich {myAge} und lebe in {Location}. In meiner Jugend hat mir
                    meine Mutter das Programmieren mit{' '}
                    <a
                      href='https://docs.microsoft.com/de-de/dotnet/visual-basic/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Visual Basic
                    </a>{' '}
                    beigebracht als wir in einem Urlaub in Istanbul waren.
                    Danach verbrachte ich viele Stunden damit kleinere Programme
                    wie zum Beispiel ein Programm, das die Hintergrundfarbe jede
                    Sekunde ändert oder eins das durch Drücken eines Knopfs die
                    IP Adresse lokal und im Netz abfragt zu entwerfen.
                  </p>{' '}
                  <br />
                  <p className='mt-2 font-sans text-sm text-gray-500 leading-5 sm:mt-0 '>
                    Dies mündete dann darin, dass ich in der achten Klasse meine
                    Informatik Lehrerin fragte, ob ich nicht meiner Klasse
                    Visual Basic beibringen könnte. Sie stimmte zu und ich
                    durfte 10 Schulstunden dafür verwenden. Am Anfang waren
                    meine Mitschüler gar nicht begeistert, jedoch Stück für
                    Stück konnte Ich sie mit meinem selbst entworfenen
                    Unterrichtsmaterial überzeugen. Ich bin meiner Informatik
                    Lehrerin sehr Dankbar für diese Zeit und Sie stellt mir für
                    mein Engagement ein Zertifikat aus (Dokument auf Anfrage).
                    Und so wurde meine Leidenschaft und Interesse für diesen
                    Beruf geweckt.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

const RecentCard = () => {
  return (
    <div className='mt-8'>
      <div className='px-4 py-5 bg-white border-b border-gray-200 shadow sm:px-6'>
        <h2 className='text-lg font-medium text-gray-900 leading-6'>
          Meine Erfahrungen heute
        </h2>
      </div>
      <div className='overflow-hidden bg-white shadow sm:rounded-b-md'>
        <ul>
          <li>
            <div className='block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out'>
              <div className='px-4 py-4 sm:px-6'>
                <div>
                  <p className='mt-2 font-sans text-sm text-gray-500 leading-5 sm:mt-0'>
                    Mein Spezialgebiet sind blitzschnelle SEO optimierte
                    Webseiten, die ich in bestehende Systeme und Prozesse
                    integrieren kann. Dadurch bleibt die gewohnte Umgebung für
                    Mitarbeiter erhalten. Aber auch wenn ein komplett neues
                    System gefragt ist, bringe Ich die nötige Erfahrung mit, um
                    das Projekt erfolgreich umzusetzen. Jedes Projekt plane und
                    organisiere ich individuell mit meinem Kunden. Dafür arbeite
                    ich agil mit Jira und Confluence, einem Projektmanagement-
                    und Dokumentationstool. Ich starte jedes Projekt mit einer
                    Konkurrenzanalyse, mit dem Ziel Ihre aktuelle Sichtbarkeit
                    im Vergleich zu Ihren Mitstreiter auszuwerten. Nach dieser
                    Analyse erarbeite ich eine spezifische Strategie, diese kann
                    neben der eigentlichen SEO Optimierung auch ein frisches
                    Layout für die Webseite beinhalten. Den aktuellen Stand
                    können Sie dann über meine SEO Berichte täglich abrufen. Die
                    von mir erstellte Webseite wird nach mehreren Tests live
                    geschaltet und kann Ihre SEO Wirkung im Netz entfalten. Um
                    das Ergebnis zu sichern beobachte und optimiere ich die
                    Webseite bis das gewünschte Resultat erzielt ist. Am Ende
                    des Projekts ziehe ich mich als SEO Experte zurück und
                    übergebe Ihnen das Projekt. Brauchen Sie weiterhin
                    Unterstützung stehe Ich dann auch gerne zur Verfügung.
                    {/* <br />
                  <p className='mt-2 font-sans text-sm text-gray-500 leading-5 sm:mt-0 '>
                 
                  </p> */}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

const StackedList = () => (
  <div>
    <ul className='px-4 pt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:pt-8 sm:px-6 lg:pt-12 lg:px-8'>
      <li className='bg-white rounded-lg shadow col-span-1'>
        <div className='flex items-center justify-between w-full p-6 space-x-6'>
          <div className='flex-1 '>
            <div className='flex items-center space-x-3'>
              <h2 className='text-sm font-medium text-gray-900 truncate leading-5'>
                Branchen
              </h2>
            </div>
            <p className='mt-1 text-sm text-gray-500 break-words leading-5'>
              Elektroauto-Vermietung, Ferienwohnungen, professionelle
              Audiosysteme und Freelancern
            </p>
          </div>
        </div>
      </li>

      <li className='bg-white rounded-lg shadow col-span-1'>
        <div className='flex items-center justify-between w-full p-6 space-x-6'>
          <div className='flex-1 '>
            <div className='flex items-center space-x-3'>
              <h2 className='text-sm font-medium text-gray-900 truncate leading-5'>
                Programmier Kenntnisse zu
              </h2>
            </div>
            <p className='mt-1 text-sm text-gray-500 break-words leading-5'>
              JavaScript, React, GatsbyJS, NextJs, HTML5, CSS3, GraphQL
            </p>
          </div>
        </div>
      </li>

      <li className='bg-white rounded-lg shadow col-span-1'>
        <div className='flex items-center justify-between w-full p-6 space-x-6'>
          <div className='flex-1 '>
            <div className='flex items-center space-x-3'>
              <h2 className='text-sm font-medium text-gray-900 truncate leading-5'>
                CMS Systemen
              </h2>
            </div>
            <p className='mt-1 text-sm text-gray-500 break-words leading-5'>
              <a
                href='https://de.wordpress.com/'
                rel='noopener noreferrer'
                target='_blank'
              >
                Wordpress
              </a>
              ,{' '}
              <a
                href='https://datocms.com'
                rel='noopener noreferrer'
                target='_blank'
              >
                DatoCMS
              </a>{' '}
              und anderen "Headless CMS" Systemen
            </p>
          </div>
        </div>
      </li>

      <li className='bg-white rounded-lg shadow col-span-1'>
        <div className='flex items-center justify-between w-full p-6 space-x-6'>
          <div className='flex-1 '>
            <div className='flex items-center space-x-3'>
              <h2 className='text-sm font-medium text-gray-900 truncate leading-5'>
                Methoden
              </h2>
            </div>
            <p className='mt-1 text-sm text-gray-500 break-words leading-5'>
              Clean Code und Test Driven Development (
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://jestjs.io/'
              >
                Jest
              </a>
              ,{' '}
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://testing-library.com/'
              >
                React Testing Library
              </a>
              ,{' '}
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://www.cypress.io/'
              >
                Cypress
              </a>
              , Endliche Zustandsmaschinen{' '}
              <a
                href='https://xstate.js.org'
                rel='noopener noreferrer'
                target='_blank'
              >
                xstate
              </a>
              )
            </p>
          </div>
        </div>
      </li>

      <li className='bg-white rounded-lg shadow col-span-1'>
        <div className='flex items-center justify-between w-full p-6 space-x-6'>
          <div className='flex-1 '>
            <div className='flex items-center space-x-3'>
              <h2 className='text-sm font-medium text-gray-900 truncate leading-5'>
                Continuous Integration / Deployment
              </h2>
            </div>
            <p className='mt-1 text-sm text-gray-500 break-words leading-5'>
              mit Git und (
              <a
                href='https://travis-ci.org/'
                rel='noopener noreferrer'
                target='_blank'
              >
                Travis-ci
              </a>
              ,{' '}
              <a
                href='https://circleci.com/'
                rel='noopener noreferrer'
                target='_blank'
              >
                CircleCI
              </a>
              )
            </p>
          </div>
        </div>
      </li>

      <li className='bg-white rounded-lg shadow col-span-1'>
        <div className='flex items-center justify-between w-full p-6 space-x-6'>
          <div className='flex-1 '>
            <div className='flex items-center space-x-3'>
              <h2 className='text-sm font-medium text-gray-900 truncate leading-5'>
                Erfahrung mit
              </h2>
            </div>
            <p className='mt-1 text-sm text-gray-500 break-words leading-5'>
              REST APIs und Serverless Functions
            </p>
          </div>
        </div>
      </li>
    </ul>
    <div className='px-4 pt-6 border-b border-gray-400 sm:pt-8 sm:px-6 lg:pt-12 lg:px-8'></div>
    <ul className='px-4 pt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3  sm:pt-8 sm:px-6 lg:pt-12 lg:px-8'>
      <li className='bg-white rounded-lg shadow col-span-1'>
        <div className='flex items-center justify-between w-full p-6 space-x-6'>
          <div className='flex-1 '>
            <div className='flex items-center space-x-3'>
              <h2 className='text-sm font-medium text-gray-900 truncate leading-5'>
                Fundierte Kenntnisse
              </h2>
            </div>
            <p className='mt-1 text-sm text-gray-500 break-words leading-5'>
              zur Suchmaschinen-Optimierung
            </p>
          </div>
        </div>
      </li>

      <li className='bg-white rounded-lg shadow col-span-1'>
        <div className='flex items-center justify-between w-full p-6 space-x-6'>
          <div className='flex-1 '>
            <div className='flex items-center space-x-3'>
              <h2 className='text-sm font-medium text-gray-900 truncate leading-5'>
                Sicher im Umgang
              </h2>
            </div>
            <p className='mt-1 text-sm text-gray-500 break-words leading-5'>
              mit Kunden und Projektplanung
            </p>
          </div>
        </div>
      </li>

      <li className='bg-white rounded-lg shadow col-span-1'>
        <div className='flex items-center justify-between w-full p-6 space-x-6'>
          <div className='flex-1 '>
            <div className='flex items-center space-x-3'>
              <h2 className='text-sm font-medium text-gray-900 truncate leading-5'>
                Praxiserfahrung im Einsatz
              </h2>
            </div>
            <p className='mt-1 text-sm text-gray-500 break-words leading-5'>
              agiler Methoden: Scrum, Kanban, Jira und Confluence von Atlassian
            </p>
          </div>
        </div>
      </li>

      <li className='bg-white rounded-lg shadow col-span-1'>
        <div className='flex items-center justify-between w-full p-6 space-x-6'>
          <div className='flex-1 '>
            <div className='flex items-center space-x-3'>
              <h2 className='text-sm font-medium text-gray-900 truncate leading-5'>
                Fließende Deutsch- und Englischkenntnisse
              </h2>
            </div>
            <p className='mt-1 text-sm text-gray-500 break-words leading-5'>
              <a
                href='https://www.cambridgeenglish.org/exams-and-tests/preliminary/'
                rel='noopener noreferrer'
                target='_blank'
              >
                „Preliminary Englisch Test“
              </a>{' '}
              Level B1 von der Universitiy of Cambridge
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
)

const index = () => (
  <Layout>
    <h1 className='font-bold text-gray-900 font-Inter leading-7 text-2xl md:text-4xl sm:leading-9 sm:truncate'>
      Amadeus Mader - Meine Stärken
    </h1>
    <StackedList />
  </Layout>
)
export default index
