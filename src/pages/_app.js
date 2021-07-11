import '../css/style.css'
import '../../public/fonts/fonts.css'
import Head from 'next/head'
import PlausibleProvider from 'next-plausible'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient = new QueryClient()
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <PlausibleProvider domain="cv.mozart409.space">
          <Head>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
            />
          </Head>

          <Component {...pageProps} />
          <style jsx global>{`
            strong,
            h1,
            h1 > *,
            h2,
            h2 > *,
            h3,
            h3 > * h4,
            h4 > *,
            h5,
            h5 > *,
            h6,
            h6 > * {
              font-family: 'IBM Plex Sans';
              font-display: auto;
            }
            p,
            p > *,
            span,
            span > *,
            pre,
            pre > *,
            code,
            code > * {
              font-family: 'IBM Plex Mono';
              font-display: auto;
            }
          `}</style>
        </PlausibleProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </div>
  )
}
