const { BASE_URL, API_KEY, BLOG_TOKEN, TWITTER_IDS } = process.env;

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
          body: true,
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
