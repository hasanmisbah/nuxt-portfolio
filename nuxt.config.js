export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Hasan Misbah || FrontEnd Developer',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }, {
        hid: 'msapplication-TileColor',
        name: "msapplication-TileColor",
        content: "#ffffff"
      },
      {
        hid: 'msapplication-TileImage',
        name: "msapplication-TileImage",
        content: "/icon/ms-icon-144x144.png"
      },
      {
        hid: 'theme-color',
        name: "theme-color",
        content: "#ffffff"
      }
    ],
    link: [{
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/icon/apple-icon-60x60.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/icon/apple-icon-57x57.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/icon/apple-icon-72x72.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/icon/apple-icon-76x76.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/icon/apple-icon-114x114.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/icon/apple-icon-120x120.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/icon/apple-icon-144x144.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/icon/apple-icon-152x152.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/icon/apple-icon-180x180.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/icon/android-icon-192x192.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/icon/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/icon/favicon-96x96.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/icon/favicon-16x16.png"
      },
      {
        rel: "manifest",
        href: "/icon/manifest.json"
      },
      {
        href: "https://fonts.googleapis.com/css?family=Quicksand&display=swap",
        rel: "stylesheet"
      }, {
        rel: "stylesheet",
        href: "https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css"
      }, {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#0f0'
  },
  /*
   ** Global CSS
   */
  css: [
    //'assets/stylesheet/style.scss',
    'assets/stylesheet/global.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    './plugins/modernizr-3.8.0.min.js',
    './plugins/Messages.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    extend(config, ctx) {}
  }
}
