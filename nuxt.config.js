import colors from 'vuetify/es5/util/colors'


export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Assistant',
    title: 'Tallying',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'elections in kenya results talling assistant chart' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'keywords', name: 'keywords', content: 'elections, kenya, presidential, national, county, counties, constituencies, ward, polling, center, station, iebc, results, tallying, tallying-assistant, elector.ml' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // {
      //   src: "https://static.cloudflareinsights.com/beacon.min.js",
      //   "data-cf-beacon": {"token": process.env.WEB_ANALYTICS_TOKEN || ""},
      //   async: true,
      //   defer: true,
      //   body: true,
      // },
      // {
      //   src: '//pl17650227.highperformancegate.com/3f/b4/a4/3fb4a490b15e3028af41d4e030fa5b18.js',
      //   type: 'text/javascript',
      //   async: true,
      //   body: true,
      // },
      // {
      //   src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      //   'data-ad-client': `ca-pub-${process.env.GA_AD}`,
      //   async: true,
      //   crossorigin: "anonymous",
      // },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // defaultAssets: {
  //   font: true,
  //   icons: 'md'
  // },
  // icons: {
  //   // iconfont: 'md',
  //   iconfont: 'md' || 'fa'

  // },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // 'material-design-icons-iconfont',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    ['nuxt-supabase', {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY

    }],
    ['nuxt-cloudflare-analytics', {
      token: process.env.WEB_ANALYTICS_TOKEN, // Example 1a2b3v4a5er6ac7r8afd
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   baseURL: '/api',
  // },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: false,
      icons: 'fa'
    },
    icons: {
      iconfont: 'mdi' || 'fa'
    },
    theme: {
      dark: true,
      themes: {
        dark: {
          // background: colors.shades.white, // If not using lighten/darken, use base to return hex
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          background: colors.grey.lighten2, // Not automatically applied

        }
      }
    }
  },

  target: 'static', // default is 'server'


  sitemap: {
    hostname: 'https://elector.ml',
    path: '/sitemap.xml',
    cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
    gzip: true,
    exclude: [
      '/doc/**',
      '/upload'
    ],
    routes: [
      '/county',
      '/constituency/*',
      '/ward/*',
      '/Polling_centre/*',
      '/polling_station/*',
      '/faq/*',
      '/privacy-policy',
      '/terms-and-conditions',
      // {
      //   url: '/sign-in',
      //   changefreq: 'daily',
      //   priority: 1,
      //   lastmod: '2017-06-30T13:30:00.000Z'
      // }
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    cache: false
  }
}
