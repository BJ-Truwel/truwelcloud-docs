export const series = {
  "/": [
    {
      text: '介绍',
      children: [
        { text: '主要特性', link: '/introduction/about' },
        { text: '系统要求', link: '/introduction/requirement' },
        { text: '技术架构', link: '/introduction/architecture' }
        
      ]
    },
    {
      text: '指南',
      children: [
        { text: '注册', link: '/guide/register' },
        { text: '首页', link: '/guide/home' },
        { text: '站点数据', link: '/guide/data' },
        { text: '系统监控', link: '/guide/monitor' },
        { text: '系统管理', link: '/guide/sys' },
        { text: '日志管理', link: '/guide/log' }
      ]
    },
    {
      text: '更新日志',
      children: [
        { text: '更新日志', link: '/release/log' }
      ] 
    }
  ]
}