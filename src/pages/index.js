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
        <h3 className='text-lg font-medium text-gray-900 leading-6'>
          Meine Anfänge damals
        </h3>
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
                    wie zum Beispiel ein Programm das die Hintergrundfarbe jede
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
                    Und so wurde meine Leidenschaft und Interresse für diesen
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
        <h3 className='text-lg font-medium text-gray-900 leading-6'>
          Meine Erfahrungen heute
        </h3>
      </div>
      <div className='overflow-hidden bg-white shadow sm:rounded-b-md'>
        <ul>
          <li>
            <div className='block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out'>
              <div className='px-4 py-4 sm:px-6'>
                <div>
                  <p className='mt-2 font-sans text-sm text-gray-500 leading-5 sm:mt-0 '></p>
                  {/* <br />
                  <p className='mt-2 font-sans text-sm text-gray-500 leading-5 sm:mt-0 '>
                 
                  </p> */}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default () => (
  <Layout>
    <h1 className='text-4xl font-bold text-gray-900 font-Inter leading-7 sm:text-3xl sm:leading-9 sm:truncate'>
      Amadeus Mader
    </h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
      <img
        className='mt-8 rounded max-w-content'
        src='/amadeus.webp'
        alt='Amadeus'
      />
      <BeginningCard />
      <RecentCard />
    </div>
  </Layout>
)
