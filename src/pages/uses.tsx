import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { fetchGitHub } from 'src/utils/api'
import { useQuery } from 'react-query'

const Uses: NextPage<UsesProps> = ({ data }) => {
  const {
    isLoading,
    isError,
    data: location,
    error,
  } = useQuery(['location'], async () => {
    const response = await fetch('/api/location')

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    return response.json()
  })

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error}</span>
  }

  return (
    <div>
      <h1>TEST</h1>

      {location}
    </div>
  )
}

type UsesProps = {
  data: string[]
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await fetchGitHub()
  return {
    props: { data },
  }
}

export default Uses
