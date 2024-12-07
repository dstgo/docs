import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'

export const shared = defineConfig({
    title: 'Wilson',

    rewrites: {
        'zh/:rest*': ':rest*'
    },

    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,

    /* prettier-ignore */
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' }],
    ],

    themeConfig: {
        logo: { src: '/logo.png', width: 24, height: 24 },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/dstgo/wilson' }
        ],

        search: {
            provider: 'algolia',
            options: {
                appId: '8J64VVRP8K',
                apiKey: '52f578a92b88ad6abde815aae2b0ad7c',
                indexName: 'vitepress',
                locales: {
                    ...zhSearch,
                }
            }
        }
    }
})