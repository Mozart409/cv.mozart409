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
        <h2 className='text-lg font-medium leading-6 text-gray-900'>
          Meine Anfänge damals
        </h2>
      </div>
      <div className='overflow-hidden bg-white shadow sm:rounded-b-md'>
        <ul>
          <li>
            <div className='block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50'>
              <div className='px-4 py-4 sm:px-6'>
                <div>
                  <p className='mt-2 font-sans text-sm leading-5 text-gray-500 sm:mt-0 '>
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
                  <p className='mt-2 font-sans text-sm leading-5 text-gray-500 sm:mt-0 '>
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
        <h2 className='text-lg font-medium leading-6 text-gray-900'>
          Meine Erfahrungen heute
        </h2>
      </div>
      <div className='overflow-hidden bg-white shadow sm:rounded-b-md'>
        <ul>
          <li>
            <div className='block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50'>
              <div className='px-4 py-4 sm:px-6'>
                <div>
                  <p className='mt-2 font-sans text-sm leading-5 text-gray-500 sm:mt-0'>
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
                  <p className='mt-2 font-sans text-sm leading-5 text-gray-500 sm:mt-0 '>
                 
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
    <ul className='grid grid-cols-1 gap-6 px-4 pt-6 sm:grid-cols-2 lg:grid-cols-3 sm:pt-8 sm:px-6 lg:pt-12 lg:px-8'>
      <li className='col-span-1 bg-white rounded-lg shadow'>
        <div className='flex items-center justify-between w-full p-6 space-x-6'>
          <div className='flex-1 '>
            <div className='flex items-center space-x-3'>
              <h2 className='text-sm font-medium leading-5 text-gray-900 truncate'>
                Branchen
              </h2>
            </div>
            <p className='mt-1 text-sm leading-5 text-gray-500 break-words'>
              Elektroauto-Vermietung, Ferienwohnungen, professionelle
              Audiosysteme und Freelancern
            </p>
          </div>
        </div>
      </li>

      <li className='col-span-1 bg-white rounded-lg shadow'>
        <div className='flex items-center justify-between w-full p-6 space-x-6'>
          <div className='flex-1 '>
            <div className='flex items-center space-x-3'>
              <h2 className='text-sm font-medium leading-5 text-gray-900 truncate'>
                Programmier Kenntnisse zu
              </h2>
            </div>
            <p className='mt-1 text-sm leading-5 text-gray-500 break-words'>
              JavaScript, React, GatsbyJS, NextJs, HTML5, CSS3, GraphQL
            </p>
          </div>
        </div>
      </li>

      <li className='col-span-1 bg-white rounded-lg shadow'>
        <div className='flex items-center justify-between w-full p-6 space-x-6'>
          <div className='flex-1 '>
            <div className='flex items-center space-x-3'>
              <h2 className='text-sm font-medium leading-5 text-gray-900 truncate'>
                CMS Systemen
              </h2>
            </div>
            <p className='mt-1 text-sm leading-5 text-gray-500 break-words'>
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

      <li className='col-span-1 bg-white rounded-lg shadow'>
        <div className='flex items-center justify-between w-full p-6 space-x-6'>
          <div className='flex-1 '>
            <div className='flex items-center space-x-3'>
              <h2 className='text-sm font-medium leading-5 text-gray-900 truncate'>
                Methoden
              </h2>
            </div>
            <p className='mt-1 text-sm leading-5 text-gray-500 break-words'>
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
              , endliche Zustandsmaschinen{' '}
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

      <li className='col-span-1 bg-white rounded-lg shadow'>
        <div className='flex items-center justify-between w-full p-6 space-x-6'>
          <div className='flex-1 '>
            <div className='flex items-center space-x-3'>
              <h2 className='text-sm font-medium leading-5 text-gray-900 truncate'>
                Continuous Integration / Deployment
              </h2>
            </div>
            <p className='mt-1 text-sm leading-5 text-gray-500 break-words'>
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

      <li className='col-span-1 bg-white rounded-lg shadow'>
        <div className='flex items-center justify-between w-full p-6 space-x-6'>
          <div className='flex-1 '>
            <div className='flex items-center space-x-3'>
              <h2 className='text-sm font-medium leading-5 text-gray-900 truncate'>
                Erfahrung mit
              </h2>
            </div>
            <p className='mt-1 text-sm leading-5 text-gray-500 break-words'>
              REST APIs und Serverless Functions
            </p>
          </div>
        </div>
      </li>
    </ul>
    <div className='px-4 pt-6 border-b border-gray-400 sm:pt-8 sm:px-6 lg:pt-12 lg:px-8'></div>
    <ul className='grid grid-cols-1 gap-6 px-4 pt-6 sm:grid-cols-2 lg:grid-cols-3  sm:pt-8 sm:px-6 lg:pt-12 lg:px-8'>
      <li className='col-span-1 bg-white rounded-lg shadow'>
        <div className='flex items-center justify-between w-full p-6 space-x-6'>
          <div className='flex-1 '>
            <div className='flex items-center space-x-3'>
              <h2 className='text-sm font-medium leading-5 text-gray-900 truncate'>
                Suchmaschinen-Optimierung
              </h2>
            </div>
            <p className='mt-1 text-sm leading-5 text-gray-500 break-words'>
              mehrere Projekte auf Seite 1 in die 5 Top gebracht
            </p>
          </div>
        </div>
      </li>

      <li className='col-span-1 bg-white rounded-lg shadow'>
        <div className='flex items-center justify-between w-full p-6 space-x-6'>
          <div className='flex-1 '>
            <div className='flex items-center space-x-3'>
              <h2 className='text-sm font-medium leading-5 text-gray-900 truncate'>
                Sicher im Umgang
              </h2>
            </div>
            <p className='mt-1 text-sm leading-5 text-gray-500 break-words'>
              mit Kunden und Projektplanung
            </p>
          </div>
        </div>
      </li>

      <li className='col-span-1 bg-white rounded-lg shadow'>
        <div className='flex items-center justify-between w-full p-6 space-x-6'>
          <div className='flex-1 '>
            <div className='flex items-center space-x-3'>
              <h2 className='text-sm font-medium leading-5 text-gray-900 truncate'>
                Praxiserfahrung im Einsatz
              </h2>
            </div>
            <p className='mt-1 text-sm leading-5 text-gray-500 break-words'>
              agiler Methoden: Scrum, Kanban, Jira und Confluence von Atlassian
            </p>
          </div>
        </div>
      </li>

      <li className='col-span-1 bg-white rounded-lg shadow'>
        <div className='flex items-center justify-between w-full p-6 space-x-6'>
          <div className='flex-1 '>
            <div className='flex items-center space-x-3'>
              <h2 className='text-sm font-medium leading-5 text-gray-900 truncate'>
                Fließende Deutsch- und Englischkenntnisse
              </h2>
            </div>
            <p className='mt-1 text-sm leading-5 text-gray-500 break-words'>
              „
              <a
                href='https://www.cambridgeenglish.org/exams-and-tests/preliminary/'
                rel='noopener noreferrer'
                target='_blank'
              >
                Preliminary Englisch Test
              </a>
              “ Level B1 von der Universitiy of Cambridge
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
)

const index = () => (
  <Layout>
    <h1 className='text-2xl font-bold leading-7 text-gray-900 font-Inter md:text-4xl sm:leading-9 sm:truncate'>
      Amadeus Mader - Meine Stärken
    </h1>
    <StackedList />
  </Layout>
)
export default index
