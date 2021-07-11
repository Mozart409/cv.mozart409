import * as cache from './redis'
export async function fetchGitHub() {
  const location = await cache.fetch('location', fetchLocation, 60)
  return location
}

async function fetchLocation() {
  const res = await fetch('https://api.github.com/users/mozart409')
  const data = await res.json()
  const location = data.location
  return location
}
