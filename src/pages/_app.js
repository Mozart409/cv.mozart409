import '../css/style.css'
require('@openfonts/ibm-plex-sans-condensed_all')
require('@openfonts/ibm-plex-mono_all')
require('@openfonts/ibm-plex-sans_all')
// This default export is required in a new `pages/_app.js` file.
import { PageTransition } from 'next-page-transitions'
export default function MyApp ({ Component, pageProps }) {
  const TIMEOUT = 400
  return (
    <>
      <PageTransition classNames='page-transition' timeout={TIMEOUT}>
        <Component {...pageProps} />
      </PageTransition>
      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
          transform: translate3d(0, 20px, 0);
        }
        .page-transition-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity ${TIMEOUT}ms;
        }
        .loading-indicator-appear,
        .loading-indicator-enter {
          opacity: 0;
        }
        .loading-indicator-appear-active,
        .loading-indicator-enter-active {
          opacity: 1;
          transition: opacity ${TIMEOUT}ms;
        }

        strong,
        h1,
        h1 > *,
        h2,
        h2 > * {
          font-family: 'IBM Plex Sans';
          font-display: auto;
        }

        h3,
        h3 > * h4,
        h4 > *,
        h5,
        h5 > *,
        h6,
        h6 > * {
          font-family: 'IBM Plex Sans Condensed';
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
    </>
  )
}
