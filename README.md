# Vite + Vue + Hono for Cloudflare Pages

[English](#english) | [中文](#%E4%B8%AD%E6%96%87)

## English

A production-ready template for building full-stack applications with Vite, Vue 3, and Hono, optimized for deployment on Cloudflare Pages.

### ✨ Features

- ⚡ **Blazing Fast** - Built with Vite for instant server start and HMR
- 🚀 **Full-Stack** - Frontend (Vue 3) + Backend (Hono) in one codebase
- ☁️ **Cloudflare Ready** - Optimized for Cloudflare Pages deployment
- 🔥 **TypeScript First** - Fully typed codebase for better development experience
- 🎨 **Modern UI** - Pre-configured with Tailwind CSS and DaisyUI
- 🎯 **Icon Integration** - Includes iconify-icon for thousands of customizable icons
- ✨ **Smooth Animations** - Enhanced with motion-v for fluid animations

### 🚀 Getting Started

#### Prerequisites

- Node.js 18+ or Bun 1.0+
- pnpm / npm / yarn / bun

#### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/vite-vue-ts-hono-pages.git
cd vite-vue-ts-hono-pages

# Install dependencies
bun install
```

### 🛠 Development

Start the development server:

```bash
bun run dev
```

This will start:
- Frontend server at `http://localhost:5173`
- Backend server at `http://localhost:5175`

### 🏗 Project Structure

```
├── src/
│   ├── client/            # Frontend Vue application
│   │   ├── assets/        # Static assets
│   │   ├── components/    # Vue components
│   │   ├── App.vue        # Root Vue component
│   │   └── main.ts        # Vue entry point
│   └── index.ts           # Hono server entry point
├── public/               # Public static files
├── vite.config.client.ts  # Vite config for client
└── vite.config.server.ts # Vite config for server
```

### 🚀 Production Build

Build for production:

```bash
bun run build
```

This will generate:
- Frontend assets in `dist/`
- Serverless function in `dist/_worker.js`

### ☁️ Deploy to Cloudflare Pages

1. Push your code to a GitHub/GitLab repository
2. Go to Cloudflare Pages dashboard
3. Select your repository
4. Set the build command: `bun run build`
5. Set the output directory: `dist`
6. Deploy!

### 📝 API Endpoints

- `GET /api/hello` - Example API endpoint

### 📚 Learn More

- [Vite Documentation](https://vitejs.dev/)
- [Vue 3 Documentation](https://vuejs.org/)
- [Hono Documentation](https://hono.dev/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

---

## 中文

一个基于 Vite + Vue 3 + Hono 的全栈应用模板，专为部署到 Cloudflare Pages 优化。

### ✨ 功能特性

- ⚡ **极速开发** - 使用 Vite 实现即时服务器启动和热模块替换
- 🚀 **全栈开发** - 前端 (Vue 3) + 后端 (Hono) 一体化
- ☁️ **云原生** - 专为 Cloudflare Pages 部署优化
- 🔥 **TypeScript 优先** - 完整的类型支持
- 🎨 **现代化 UI** - 预配置 Tailwind CSS 和 DaisyUI
- 🎯 **图标集成** - 集成 iconify-icon，提供数千种可定制图标
- ✨ **流畅动画** - 使用 motion-v 实现丝滑动画效果

### 🚀 快速开始

#### 环境要求

- Node.js 18+ 或 Bun 1.0+
- pnpm / npm / yarn / bun

#### 安装

```bash
# 克隆仓库
git clone https://github.com/yourusername/vite-vue-ts-hono-pages.git
cd vite-vue-ts-hono-pages

# 安装依赖
bun install
```

### 🛠 开发

启动开发服务器：

```bash
bun run dev
```

这将启动：
- 前端服务器：`http://localhost:5173`
- 后端服务器：`http://localhost:5175`

### 🏗 项目结构

```
├── src/
│   ├── client/            # 前端 Vue 应用
│   │   ├── assets/        # 静态资源
│   │   ├── components/    # Vue 组件
│   │   ├── App.vue        # 根 Vue 组件
│   │   └── main.ts        # Vue 入口文件
│   └── index.ts           # Hono 服务器入口
├── public/               # 公共静态文件
├── vite.config.client.ts  # 客户端 Vite 配置
└── vite.config.server.ts  # 服务端 Vite 配置
```

### 🚀 生产构建

构建生产版本：

```bash
bun run build
```

构建产物：
- 前端资源在 `dist/` 目录
- 无服务器函数在 `dist/_worker.js`

### ☁️ 部署到 Cloudflare Pages

1. 将代码推送到 GitHub/GitLab 仓库
2. 访问 Cloudflare Pages 控制台
3. 选择你的仓库
4. 设置构建命令：`bun run build`
5. 设置输出目录：`dist`
6. 部署！

### 📝 API 接口

- `GET /api/hello` - 示例 API 接口

### 📚 学习资源

- [Vite 文档](https://cn.vitejs.dev/)
- [Vue 3 文档](https://cn.vuejs.org/)
- [Hono 文档](https://hono.dev/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
