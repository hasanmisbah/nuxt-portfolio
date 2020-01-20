export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
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
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }, {
      href: "https://fonts.googleapis.com/css?family=Ubuntu:400,500,700&display=swap",
      rel: "stylesheet"
    }, {
      rel: "stylesheet",
      href: "https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css"
    }, {
      rel: "stylesheet",
      href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css"
    }]
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
    'assets/stylesheet/style.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    './plugins/modernizr-3.8.0.min.js'
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
    '@nuxtjs/pwa',
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
