export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Nuxt",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["@/assets/css/main.css"],

  plugins: [],

  tailwindcss: {
    configPath: "~/config/tailwind.js",
  },

  components: true,

  buildModules: [
    "@nuxtjs/tailwindcss", 
    "@nuxtjs/fontawesome"
  ],

  modules: ["@nuxtjs/axios"],

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  fontawesome: {
    component: 'Fa',
    suffix: true,
    icons: {
      solid: true,
      regular: true,
      brands: true,
    },
  },

  toast: {
    position: 'top-center',
    duration: 2000,
    keepOnHover: false,
    fullWidth: false,
    iconPack: 'fontawesome',
    closeOnSwipe: true,
  },
};
