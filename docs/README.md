---
home: true
modules:
  - BannerBrand
  - Features
  - MdContent
  - Footer
bannerBrand:
  bgImage: '/bg.svg'
  title: Truwel Cloud 2.0
  description: 专业的气象物联网 SaaS 大数据 AI 平台
  tagline: 合作伙伴：中国林业科学研究院、中国科学院新疆生态与地理研究所、中国科学院青藏高原研究所、中国生态系统研究网络（CERN）等
  buttons:
    - { text: 快速体验, link: 'https://www.truwelcloud.com' }
    - { text: '使用指南', link: '/truwelcloud-docs/introduction/about', type: 'plain' }
  # socialLinks:
  #   - { icon: 'LogoGithub', link: 'https://github.com/vuepress-reco/vuepress-theme-reco' }
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
features:
  - title: 华益瑞智能体
    details: 基于华益瑞自主研发的智能体框架 Harness，融合任务理解、智能规划、工具调用与数据分析等核心能力
    
  - title: 大数据
    details: 基于分布式大数据架构设计，具备高吞吐、低延迟的数据处理能力

  - title: 数据分析
    details: 覆盖水文、积雪、土壤、大气、生物等多类观测数据的接入与分析

  - title: 物候监控
    details: 兼容 GB/T 28181 标准协议，支持物候相机接入、历史回看与云端存储

  - title: 可视化
    details: 提供二三维地图、GIS 与多样化图表展示能力

  - title: 物联网
    details: 支持海量气象设备上云，提供安全可靠的设备连接与通信能力
  
footer:
  startYear: 2026
---


## 更新日志

### 2.8.0

- [x] 支持 DL300 数采设备接入
- [x] 重构异常检测流程

### 2.7.0

- [x] 支持 DL800、Campbell 数采设备管理

### 2.6.0

- [x] UI 界面全面升级

### 2.5.0

- [x] 支持自研 DL800 数据接入

### 2.4.0

- [x] 支持微信小程序查询

### 2.3.0

- [x] 正式接入 **DeepSeek**，实现对话即服务

### 2.2.0

- [x] 支持中、英、俄三语国际化显示

### 2.1.0

- [x] 支持 CERN 土壤水标准格式
- [x] 支持区域土壤水标准格式
- [x] 支持北斗三号数据接入

### 2.0.0

- [x] 上线大数据流式引擎
- [x] 支持时序数据库存储
- [x] 支持容器化部署
