import "../css/style.css";
import "./../../public/fonts/fonts.css";
import Head from "next/head";
import { PageTransition } from "next-page-transitions";

export default function MyApp({ Component, pageProps }) {
  const TIMEOUT = 400;
  return (
    <>
      <PageTransition classNames="page-transition" timeout={TIMEOUT}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
        </Head>
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
        h2 > *,
        h3,
        h3 > * h4,
        h4 > *,
        h5,
        h5 > *,
        h6,
        h6 > * {
          font-family: "IBM Plex Sans";
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
          font-family: "IBM Plex Mono";
          font-display: auto;
        }
      `}</style>
    </>
  );
}
