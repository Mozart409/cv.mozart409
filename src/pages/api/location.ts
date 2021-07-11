/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next'
import * as cache from 'src/utils/redis'
type LocationData = {
  location: string[]
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<LocationData>
) => {
  const location = await cache.fetch('location', fetchLocation, 60)

  return res.status(200).json(location)
}
async function fetchLocation() {
  const res = await fetch('https://api.github.com/users/mozart409')
  const data = await res.json()
  const location = data.location
  return location
}
