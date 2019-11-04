
export default {
  mode: 'spa',
  generate: {
    fallback: true
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Toronto Weather | Suggested Clothes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/cloud32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/cloud16x16.png', sizes: '16x16' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css'
  },
  proxy: {
    '/api': {
      target: 'https://api.darksky.net/forecast/4085764b2e7e3e1b178c05d401e83d7d/43.6532,-79.3832?units=si&exclude=minutely,hourly,daily,alerts',
      }
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/moment',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
