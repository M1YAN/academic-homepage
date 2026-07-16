<img src="/public/cover.jpg" alt="Cover image representing Nim, a personal website template" width="100%" />

Nim is a free and open-source personal website template built with Next.js 15, React 19, Tailwind CSS v4, and Motion. Designed for developers, designers, and founders, it combines minimalism with delightful animated components powered by [Motion-Primitives](https://motion-primitives.com).

Live demo: [https://nim-fawn.vercel.app](https://nim-fawn.vercel.app)

## Features

- Minimal one-page portfolio layout.
- Blog support with MDX.
- Responsive and accessible design.
- Easy to use
- [Motion-Primitives](https://motion-primitives.com) for animated components.

## Getting Started

For detailed setup instructions, refer to the [Installation Guide](./INSTALLATION.md).

```bash
git clone https://github.com/ibelick/nim.git
cd nim
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve Nim.

## Deployment

You can deploy your site to any hosting platform that supports Next.js. For the easiest deployment experience, consider using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fibelick%2Fnim&env=NEXT_PUBLIC_SITE_URL&project-name=nim&repository-name=nim&redirect-url=https%3A%2F%2Ftwitter.com%2Fibelick&demo-title=Nim&demo-description=Nim%20is%20a%20free%20and%20open-source%20minimal%20personal%20website%20template%20built%20with%20Next.js%2015%2C%20React%2019%2C%20and%20Motion-Primitives.&demo-url=https%3A%2F%2Fnim.vercel.app&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2Fibelick%2Fnim%2Frefs%2Fheads%2Fmain%2F.github%2Fassets%2Freadme.png&teamSlug=ibelick)

## About

Nim is designed to make personal branding effortless and beautiful. If you enjoy it, consider sharing it and exploring [Motion-Primitives Pro](https://pro.motion-primitives.com/).

## 本项目使用方法

这是基于 Nim 模板轻量迁移后的个人学术主页项目，当前部署目标为 GitHub Pages 子路径：

```text
https://m1yan.github.io/academic-homepage/
```

### 本地开发预览

首次使用先安装依赖：

```bash
npm install
```

启动本地开发服务器：

```bash
npm run dev
```

然后在浏览器访问：

```text
http://localhost:3000
```

### 本地静态构建

普通静态构建用于本地检查，不启用 GitHub Pages 子路径前缀：

```bash
npm run build
```

构建产物会生成在：

```text
out/
```

如果想预览静态构建结果，可以执行：

```bash
npx serve out
```

### GitHub Pages 构建

部署到 GitHub Pages 时需要使用专用构建命令：

```bash
npm run build:pages
```

该命令会设置 `GITHUB_PAGES=true`，从而启用 `/academic-homepage` 对应的 `basePath` 和 `assetPrefix`。

### 自动部署到 GitHub Pages

项目已经配置 GitHub Actions 工作流：

```text
.github/workflows/deploy.yml
```

当代码 push 到 `main` 分支时，会自动执行：

1. 安装依赖：`npm ci`
2. 构建静态站点：`npm run build:pages`
3. 上传 `out/` 目录
4. 部署到 GitHub Pages

GitHub 仓库需要在设置中启用 Pages：

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

### 手动重新运行部署 workflow

如果 GitHub Pages 设置修改后需要重新部署，可以在 GitHub 网页中操作：

```text
Actions → Deploy to GitHub Pages → Run workflow
```

也可以通过空提交触发：

```bash
git commit --allow-empty -m "Trigger GitHub Pages deployment"
git push
```

### 推送到 academic-homepage 仓库

如果本地项目是从原 Nim 模板 clone 下来的，需要把 remote 改为自己的仓库：

```bash
git remote set-url origin git@github.com:M1YAN/academic-homepage.git
```

或者使用 HTTPS：

```bash
git remote set-url origin https://github.com/M1YAN/academic-homepage.git
```

确认 remote：

```bash
git remote -v
```

提交并推送：

```bash
git add .
git commit -m "Customize academic homepage"
git branch -M main
git push -u origin main
```

### 内容修改入口

常用内容集中在以下文件中：

- `app/data.ts`：个人信息、News、Publications、Awards、Education、Internships、社交链接和邮箱
- `app/page.tsx`：首页各区块布局和交互
- `app/header.tsx`：顶部姓名、副标题和导航
- `app/layout.tsx`：SEO 标题、描述和 metadataBase
- `next.config.mjs`：静态导出和 GitHub Pages 子路径配置

### 注意事项

- 不需要提交 `out/` 目录，GitHub Actions 会自动构建并上传。
- 本地开发使用 `npm run dev`。
- 部署到 GitHub Pages 使用 `npm run build:pages`。
- 若线上静态资源 404，优先检查 `next.config.mjs` 中的 `basePath` 和 `assetPrefix` 是否仍为 `/academic-homepage`。
