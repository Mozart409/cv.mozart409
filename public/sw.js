if (!self.define) {
  const e = e => {
      'require' !== e && (e += '.js')
      let a = Promise.resolve()
      return (
        c[e] ||
          (a = new Promise(async a => {
            if ('document' in self) {
              const c = document.createElement('script')
              ;(c.src = e), document.head.appendChild(c), (c.onload = a)
            } else importScripts(e), a()
          })),
        a.then(() => {
          if (!c[e]) throw new Error(`Module ${e} didn’t register its module`)
          return c[e]
        })
      )
    },
    a = (a, c) => {
      Promise.all(a.map(e)).then(e => c(1 === e.length ? e[0] : e))
    },
    c = { require: Promise.resolve(a) }
  self.define = (a, s, i) => {
    c[a] ||
      (c[a] = Promise.resolve().then(() => {
        let c = {}
        const n = { uri: location.origin + a.slice(1) }
        return Promise.all(
          s.map(a => {
            switch (a) {
              case 'exports':
                return c
              case 'module':
                return n
              default:
                return e(a)
            }
          })
        ).then(e => {
          const a = i(...e)
          return c.default || (c.default = a), c
        })
      }))
  }
}
define('./sw.js', ['./workbox-432e0d0b'], function (e) {
  'use strict'
  importScripts(),
    e.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/Fauna.png', revision: '5ebd6577583d6a16625d9c6f98b10486' },
        { url: '/Gatsby.svg', revision: 'f415b4a80e65545aaf8ceb660524d2ea' },
        {
          url: '/GithubActions.svg',
          revision: 'f9faded61928c506d38c731c0d1a80d1'
        },
        { url: '/Mirage.svg', revision: '099a54a2dd8232844eff49723484e514' },
        {
          url:
            '/_next/static/chunks/5689b81c5c249450accc5c9259b64d4ad16aa9c1.2b5b4c77b60d9800e2a0.js',
          revision: '974f732952721c9d53b93f402f870b4d'
        },
        {
          url:
            '/_next/static/chunks/662171af0cfffb33874485f30b3f5bfb3a3fd724.ed4190d164957c83ce01.js',
          revision: 'ee52304cebfb54d9c16cd8389e373fe1'
        },
        {
          url: '/_next/static/chunks/729f248e.bbf891a3461cc9dcfc12.js',
          revision: '99e6d6dc6704694222e663251c1f8deb'
        },
        {
          url: '/_next/static/chunks/75fc9c18.05050ea1a23d5261f99f.js',
          revision: '2dae889cfe02b1bf0144ddbb4bef25bf'
        },
        {
          url: '/_next/static/chunks/commons.8b776479fb7c7aad1214.js',
          revision: '9ae2daa884d0f4ddc6ae7ef397bcb4fc'
        },
        {
          url: '/_next/static/chunks/framework.5e03480598ad1120f007.js',
          revision: '1c8c47501f8a83e7cbef6220665aa75a'
        },
        {
          url: '/_next/static/chunks/main-010d034ca50e5dfcecb7.js',
          revision: 'cd518f8e83aa7e2591bb81f3af691ca9'
        },
        {
          url: '/_next/static/chunks/pages/_app-4c23963163a9caca7353.js',
          revision: '48d922e4fa2c99d0e82cec0382692612'
        },
        {
          url: '/_next/static/chunks/pages/_error-0bcc2c7aa20dd01ba60c.js',
          revision: '484cf7c5c8e4fd54e79e3a0e6242075a'
        },
        {
          url: '/_next/static/chunks/pages/contact-afc2a1e82eee4ab62819.js',
          revision: '505f31f044c1254909855819d986b69c'
        },
        {
          url: '/_next/static/chunks/pages/cv-2c631c9cfc9d39d2d10e.js',
          revision: '425d625feb83bf7e11bcce55b9c8371c'
        },
        {
          url: '/_next/static/chunks/pages/index-d0e7f0b9035ce447922a.js',
          revision: '761ebacaa071bf8bc4ad5fd1821f06a7'
        },
        {
          url: '/_next/static/chunks/pages/projekte-848b32abdeceda7b77b0.js',
          revision: '578a6d0cfc88acc02b57b7a0e411a78c'
        },
        {
          url: '/_next/static/chunks/polyfills-5bf59b93ae7857d78ad5.js',
          revision: 'e211a022993cf065e881303e6c6844d6'
        },
        {
          url: '/_next/static/chunks/webpack-ccf5ab034a524403276a.js',
          revision: '8c19f623e8389f11131a054a7e17ff95'
        },
        {
          url: '/_next/static/css/124141f5981e80c249b7.css',
          revision: '7f588402d784d6e643846763dcba57c2'
        },
        {
          url: '/_next/static/css/8915aabad08dee5f6575.css',
          revision: 'f4375a2b23c773fb62ae7a3542db218b'
        },
        {
          url:
            '/_next/static/media/ibm-plex-mono-all-500-italic.bb26d8f68124424486ceeb72148dcad2.woff',
          revision: '40c676812f27d7d93c13868d50b2090a'
        },
        {
          url:
            '/_next/static/media/ibm-plex-mono-all-500.2299794485ecf7bd76806df80e1dfb9c.woff',
          revision: '583863f3ead627fd9f339b4c17ebceff'
        },
        {
          url:
            '/_next/static/media/ibm-plex-sans-all-500-italic.7b3ea3d6caf0f3a68b627931872abd2c.woff',
          revision: '8c34fb71c20193cc1cb6dae8eb81442d'
        },
        {
          url:
            '/_next/static/media/ibm-plex-sans-all-500.d94eaadc1070343e6d33ff635ea76703.woff',
          revision: 'fd11415bd868e0815d59f78628a0220f'
        },
        {
          url: '/_next/static/sXIKIYJd1KG43wjzjHXEY/_buildManifest.js',
          revision: 'afd43bb920f3e72d1238ff35c94e0c25'
        },
        {
          url: '/_next/static/sXIKIYJd1KG43wjzjHXEY/_ssgManifest.js',
          revision: 'abee47769bf307639ace4945f9cfd4ff'
        },
        { url: '/amadeus.webp', revision: 'a6e3c7b34590594ea8a507d3a9cfb90c' },
        {
          url: '/cloudinary_logo_for_white_bg.svg',
          revision: '40ec71ccf45cf1d19d06481dd285befe'
        },
        {
          url: '/datocms_logo.svg',
          revision: '8f394e91a419039212cfa8f9d4598cdd'
        },
        { url: '/favicon.png', revision: '74716e92b0c354b0ca65366acdb0c504' },
        { url: '/firebase.png', revision: '05fef217de4f10b2d0c9050a5188981d' },
        { url: '/firebase.svg', revision: '20cfdf7e4ebc17b4074c4ae1e2a8c371' },
        {
          url: '/fonts/fonts.css',
          revision: 'fbfd147377defeb59a24a09b3acbb602'
        },
        {
          url: '/fonts/ibm-plex-mono-all-500-italic.woff',
          revision: '40c676812f27d7d93c13868d50b2090a'
        },
        {
          url: '/fonts/ibm-plex-mono-all-500.woff',
          revision: '583863f3ead627fd9f339b4c17ebceff'
        },
        {
          url: '/fonts/ibm-plex-sans-all-500-italic.woff',
          revision: '8c34fb71c20193cc1cb6dae8eb81442d'
        },
        {
          url: '/fonts/ibm-plex-sans-all-500.woff',
          revision: 'fd11415bd868e0815d59f78628a0220f'
        },
        { url: '/graphql.svg', revision: '36351bd1d3cbab8b64ba459465cb6ac8' },
        { url: '/gtm.svg', revision: '29884a18824e97925bbbb720abc7a928' },
        {
          url: '/icons/apple-touch-icon.png',
          revision: '1449b483129c012a779b08fca5c8f48c'
        },
        {
          url: '/icons/icon-144x144.png',
          revision: 'ae3aa87e813e481bd94d77f7f33b4502'
        },
        {
          url: '/icons/icon-192x192.png',
          revision: 'a19c59ed5879e82358546713063f5ad2'
        },
        {
          url: '/icons/icon-256x256.png',
          revision: 'f4bad029f10db8d95026f8433d4a5882'
        },
        {
          url: '/icons/icon-384x384.png',
          revision: 'ff9bda3c13433dd914b3d20c8ab6db27'
        },
        {
          url: '/icons/icon-48x48.png',
          revision: 'd7271afb83a60d7578479fd9d4a4789f'
        },
        {
          url: '/icons/icon-512x512.png',
          revision: 'e6a14cbf2abe2ed73d9102a5635f4a7a'
        },
        {
          url: '/icons/icon-72x72.png',
          revision: '808cd2b7484e9e1ac6515fa5a2b29626'
        },
        {
          url: '/icons/icon-96x96.png',
          revision: '2826293cfbb123112a8f144a473a2186'
        },
        { url: '/jest.svg', revision: '38889a8b66e0a8909bee8a1e16ca965a' },
        { url: '/manifest.json', revision: 'fe1b1d1a810f44adbb7811142fc04381' },
        {
          url: '/manifest.webmanifest',
          revision: '97c6c379180e4bd0f0b3df0c760e787c'
        },
        { url: '/metomic.svg', revision: 'f59d377b5964567af4fff753d8b72583' },
        {
          url: '/nextjs-black-logo.svg',
          revision: '5277507c91eb165f3f8c0600a0704c96'
        },
        {
          url: '/nextjs-white-logo.svg',
          revision: 'a9cb9d817df627c846abc34444adaf2d'
        },
        { url: '/tailwind.svg', revision: 'bcdca8a79eaac0f81537c022cb019142' },
        { url: '/tisch.webp', revision: '700b0b0b4e0db94679db6a45ae7e6684' },
        {
          url: '/zeit-black-full-logo.svg',
          revision: '695a9c398156a4e91a119ffa076e0081'
        },
        {
          url: '/zeit-white-full-logo.svg',
          revision: 'd96758c354a8d6d8ef7b4a0e759681c8'
        }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    )
})
