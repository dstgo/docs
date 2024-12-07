import {type DefaultTheme, defineConfig} from 'vitepress'


export const en = defineConfig({
    lang: 'en-US',
    description: 'Vite & Vue powered static site generator.',

    themeConfig: {
        nav: nav(),
        sidebar: sidebar(),

        editLink: {
            pattern: 'https://github.com/dstgo/docs/edit/main/:path',
            text: 'Edit this page on GitHub'
        },

        footer: {
            message: `Released under the <a href="https://github.com/dstgo/wilson/blob/main/LICENSE">MIT</a> License.`,
            copyright: `Copyright © 2023-${new Date().getFullYear()} <a href="https://github.com/dstgo">dstgo</a>`
        }
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: 'Home',
            link: '/en/intro',
        },
        {
            items: [
                {
                    text: 'Changelog',
                    link: 'https://github.com/dstgo/wilson/blob/main/CHANGELOG.en.md'
                },
                {
                    text: 'Contributing',
                    link: 'https://github.com/dstgo/wilson/blob/main/CONTRIBUTING.en.md'
                }
            ]
        }
    ]
}

function sidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Introduction',
            collapsed: false,
            items: [
                {text: 'Guide', link: '/en/intro'},
                {text: 'Quick Start', link: '/quickstart'}
            ]
        },
        {
            text: 'Deployment',
            collapsed: false,
            items: []
        },
        {
            text: 'Development',
            collapsed: false,
            items: []
        }
    ]
}