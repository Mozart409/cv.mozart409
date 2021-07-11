import Redis from 'ioredis'
const redis = new Redis(process.env.REDIS_URL)

export const fetch = async <T>(
  key: string,
  fetcher: () => T,
  expires: number
) => {
  const existing = await get<T>(key)
  if (existing !== null) return existing
  return set(key, fetcher, expires)
}

export const get = async <T>(key: string): Promise<T> => {
  const value = await redis.get(key)

  if (value === null) {
    console.log('Value not in cache')
    return null
  }
  console.log('Value in cache')
  return value
}

export const set = async <T>(
  key: string,
  fetcher: () => T,
  expires: number
) => {
  const value = await fetcher()
  await redis.set(key, JSON.stringify(value), 'EX', expires)
  return value
}

export const del = async (key: string) => {
  await redis.del(key)
}
