import React, { useState } from 'react'
import Layout from '../components/layout'

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

const contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    email: '',
    message: ''
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        email: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }
  return (
    <Layout title='Kontakt | Amadeus Mader'>
      <h1 className='text-4xl font-bold text-gray-900 font-Inter leading-7 sm:text-3xl sm:leading-9 sm:truncate'>
        Kontakt
      </h1>

      <div className='mt-8 overflow-hidden bg-white rounded-lg shadow'>
        <div className='px-4 py-5 border-b border-gray-200 sm:px-6'>
          Ich freue mich auf Ihre <a href='mailto:hey@mozart409.space'>Email</a>
          .
        </div>
      </div>

      <div className='mx-auto'>
        {/* <main>
          <form onSubmit={handleOnSubmit}>
            <label className='text-gray-700' htmlFor='email'>
              Email
            </label>
            <input
              className='block w-full mt-1 form-input'
              id='email'
              type='email'
              onChange={handleOnChange}
              required
              value={inputs.email}
            />
            <div className='mt-4'>
              <label className='text-gray-700' htmlFor='message'>
                Message
              </label>
              <textarea
                className='block w-full mt-1 form-textarea'
                id='message'
                rows='7'
                onChange={handleOnChange}
                required
                value={inputs.message}
              />
            </div>
            <button
              className='w-full py-2 mt-4 text-white bg-indigo-600 rounded'
              type='submit'
              disabled={status.submitting}
            >
              {!status.submitting
                ? !status.submitted
                  ? 'Submit'
                  : 'Submitted'
                : 'Submitting...'}
            </button>
          </form>
          {status.info.error && (
            <div className='error'>Error: {status.info.msg}</div>
          )}
          {!status.info.error && status.info.msg && (
            <div className='success'>{status.info.msg}</div>
          )}
        </main>
       */}
      </div>
    </Layout>
  )
}

export default contact
