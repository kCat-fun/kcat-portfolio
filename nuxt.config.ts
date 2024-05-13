const {
  BASE_URL,
  API_KEY,
  BLOG_TOKEN,
  TWITTER_IDS,
  NUXT_NEWT_SPACE_UID,
  NUXT_NEWT_CDN_API_TOKEN,
  NUXT_NEWT_API_TOKEN,
} = process.env;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width",
      title: "kCat's Portfolio",
      meta: [
        // <meta name="description" content="My amazing site.">
        // { hid: 'og:image', property: 'og:image', content: 'https://portfolio.kcat.dev/_nuxt/iconCircle.23303de0.png' },
        {
          name: "description",
          content:
            "\
            kCatのポートフォリオサイトです。ロボットやウェブ開発などが主な活動です。\n\
            公立はこだて未来大学 知能システムコース3年に所属しています。\n\
            今までに作成した作品や書いてきたBlogのまとめなどを掲載しています。\
            ",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Inter",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/icon.ico",
        },
      ],
      script: [
        {
          hid: "twitter",
          type: "text/javascript",
          src: "https://platform.twitter.com/widgets.js",
          async: true,
          defer: true,
          // body: true,
        },
        {
          type: "text/javascript",
          src: "https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js",
        },
      ],
      htmlAttrs: {
        lang: "ja",
        prefix: "og: https://ogp.me/ns#",
      },
    },
  },
  runtimeConfig: {
    public: {
      baseURL: BASE_URL,
      apiKey: API_KEY,
      blogToken: BLOG_TOKEN,
      twitterIds: TWITTER_IDS,
    },
    newt: {
      spaceUid: NUXT_NEWT_SPACE_UID,
      cdnApiToken: NUXT_NEWT_CDN_API_TOKEN,
      apiToken: NUXT_NEWT_API_TOKEN,
    },
  },
  css: [
    "~/assets/style/reset.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  components: [
    {
      path: "~/components/",
      pathPrefix: false,
    },
  ],
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/vue-fontawesome",
    ],
  },
});
