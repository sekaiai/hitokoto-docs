import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "一言",
  description: "免费句子接口API，一言指的就是一句话，可以是动漫中的台词，也可以是网络上的各种小段子。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/hitokoto' }
    ],

    sidebar: [
      {
        text: '序',
        items: [{ text: '首页', link: '/' },{ text: '介绍', link: '/about' },
      ]
      },
      {
        text: '使用',
        items: [
          { text: '一言', link: '/guide/hitokoto' },
          { text: '随机图片', link: '/guide/pixiv' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sekaiai/sekaiai.github.io' }
    ],

    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You233'
    // },

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    // }
  }
})
