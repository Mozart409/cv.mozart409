import React, { useState } from 'react'
import Layout from '../components/layout'

export default () => {
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
    <Layout title='Contact us'>
      <div className='my-12 text-center'>
        <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 leading-9 sm:text-4xl sm:leading-10'>
          Kontakt
        </h2>
      </div>
      <main>
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
              rows='3'
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
    </Layout>
  )
}
