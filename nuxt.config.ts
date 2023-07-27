// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width',
      title: 'kCat\'s Portfolio',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Inter'},
        { rel: 'icon', type: 'image/x-icon', href: '/icon.ico' },
      ],
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: https://ogp.me/ns#'
      },
    }
  },
  css: [
    "~/assets/style/reset.css"
  ],
  components: [
    {
      path: "~/components/",
      pathPrefix: false,
    }
  ],
});
