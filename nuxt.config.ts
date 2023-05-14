// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

    css: ["@/assets/sass/general.scss"],

    modules: ['@nuxtjs/tailwindcss', 'nuxt-calendly', '@nuxtjs/google-fonts'],


    tailwindcss: {
        cssPath: '~/assets/tailwind.scss',
    },
    // entirely optional
    calendly: {

    },

    googleFonts: {
        families: {
            Poppins: {
                wght: [100, 300, 400, 500, 700],
                ital: [100, 300, 400, 500, 700]
            },
        }
    }
})
