import React from 'react'
import Layout from '../components/layout'

const contact = () => {
  return (
    <Layout title='Kontakt | Amadeus Mader'>
      <h1 className='text-4xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 font-Inter sm:truncate'>
        Kontakt
      </h1>

      <div className='overflow-hidden mt-8 bg-white rounded-lg shadow'>
        <div className='py-5 px-4 border-b border-gray-200 sm:px-6'>
          Ich freue mich auf Ihre{' '}
          <a href='mailto:amadeus@beammeup.today'>Email</a>.
        </div>
      </div>
    </Layout>
  )
}

export default contact
