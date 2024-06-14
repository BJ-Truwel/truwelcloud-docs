import * as zhConfig from './zh'
// import * as enConfig from './en'

export const themeConfig = {
  locales: {
    '/': {
      selectLanguageText: 'Languages',
      selectLanguageName: '简体中文',
      lastUpdateText: '最后更新时间',
      navbar: zhConfig.navbar,
      series: zhConfig.series,
      title: 'TruwelCloud'
    },
    // '/en/': {
    //   selectLanguageText: 'Languages',
    //   selectLanguageName: 'English',
    //   navbar: enConfig.navbar,
    //   series: enConfig.series
    // }
  },
  logo: '/truwel_logo.png',
  author: 'truwel',
  docsRepo: "https://www.truwelcloud.com",
  docsBranch: "main",
  docsDir: "/docs",
}
