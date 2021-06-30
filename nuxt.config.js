import theme from '@nuxt/content-theme-docs'

export default theme({
  modules: [
    ['nuxt-youtube-subscribe-module', {
      tag: 'YoutubeSubscribeButton'
    }]
  ],
  target: 'static',
  docs: {
    primaryColor: '#E24F55'
  },

  router: { 
    base: '/dmse-documentation/' 
  },
  build: {
    publicPath: '/_nuxt/',
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  },
  
  linkedin: {
    partnerId: '3701497',
    disabled: false
  },
  'youtube-subscribe': {
    tag: 'YoutubeSubscribeButton'
  },
  
  generate: {
    fallback: true
  },
  head: {
    title: "my first nuxt proj - main page",
    link: [{ rel: 'icon', type: 'image/png', href: '../oma-logo.png' }],
  }

})
