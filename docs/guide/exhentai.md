---
layout: doc
title: ExHentai 批量下载插件
outline: deep
---

# ExHentai 批量下载插件

作为老司机，一个本子都不好意思看，于是就只能上批量啦~


## 插件特点

- **批量下载**：一键获取页面内所有种子文件或图片，自动分页获取下一页种子，直到最后一页。
- **自动加载**：滚动到页面底部时自动加载下一页内容。
- **下载间隔**：每次下载都会有一秒的间隔，你好我好大家好。
- **强制停止**：一旦开始下载，插件会持续执行任务，直到完成，若要停止，请刷新或关闭页面。

## 安装指南

从chrome插件市场下载插件，或者直接下载插件压缩包，解压后拖入chrome扩展程序页面即可。

https://chromewebstore.google.com/detail/chrome-exhentai-help/dpnkmdlkpcgckdjolnddjgnahcagjlmd?authuser=0&hl=zh-CN


### 自己编译安装

### 1. 通过GitHub源码

编译环境要求：Node.js
1. 编译打包
```
git clone git@github.com:sekaiai/chrome-exhentai-help.git

# 打开项目目录
cd chrome-exhentai-help

# 安转依赖
pnpm install //npm install

# 编译
npm run build
```
2. 打开 Chrome 浏览器，进入扩展程序页面 (`chrome://extensions/`)。
3. 启用“开发者模式”，然后点击“加载已解压的扩展程序”。
4. 选择项目目录 `/chrome-exhentai-help/dist`，完成安装。

### 2. 使用插件

1. 安装完成后，打开 ExHentai 网站。
2. 支持的页面机会出现`Download All Torrent`或`下载全部种子`的按钮。
3. 点击后会，插件将自动开始批量下载种子或图片。
4. 下载过程中，每次任务会间隔一秒进行，确保稳定性。

## 注意事项

- **下载停止**：插件不提供暂停功能，下载一旦开始，只有刷新或关闭页面才能停止。
- **反爬虫机制**：为了避免被网站检测到异常行为，插件会每次下载间隔一秒，防止被封锁。
- **页面加载**：如果页面内容较多，建议在插件开始下载前确保页面已完全加载。

## 常见问题

### 为什么插件无法下载图片？

请确保 ExHentai 页面已经完全加载。如果页面内容还没有加载完毕，插件可能无法识别到所有的图片或种子文件。

### 下载图片变成了xxx_xx.jpg.htm文件？
用记事本打开该文件，里面有下载失败的原因。


## 项目地址

GitHub 地址：[https://github.com/sekaiai/chrome-exhentai-help](https://github.com/sekaiai/chrome-exhentai-help)

欢迎在 GitHub 提出问题和建议，或者提交 pull request 改进插件功能！
