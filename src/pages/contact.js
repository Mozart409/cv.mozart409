import React from 'react'
import Layout from '../components/layout'

const contact = () => {
  return (
    <Layout title='Kontakt | Amadeus Mader'>
      <h1 className='text-4xl font-bold leading-7 text-gray-900 font-Inter sm:text-3xl sm:leading-9 sm:truncate'>
        Kontakt
      </h1>

      <div className='mt-8 overflow-hidden bg-white rounded-lg shadow'>
        <div className='px-4 py-5 border-b border-gray-200 sm:px-6'>
          Ich freue mich auf Ihre <a href='mailto:hey@mozart409.space'>Email</a>
          .
        </div>
      </div>
    </Layout>
  )
}

export default contact
