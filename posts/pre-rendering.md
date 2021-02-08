---
title: 'next.js中两种形式的预渲染'
date: '2020-01-01'
---

Next.js 有两种形式的预渲染: **Static Generation 静态生成** 和 **Server-side Rendering 服务器端渲染**，
其本质差异在于 **在何时** 生成对应页面的 HTML 文件。

- **Static Generation** 在**构建（build）**过程生成 HTML 文件。预渲染的 HTML 文件在每次请求时*重复使用*。
- **Server-side Rendering** 在**每次请求过程中**生成 HTML 文件。

![Server-side Rendering](https://nextjs.org/static/images/learn/data-fetching/server-side-rendering.png)

> 在开发模式下（运行`npm run dev`或时`yarn dev`），每个页面都会针对每个请求进行[预渲染](https://nextjs.org/docs/basic-features/pages#pre-rendering)，即使是使用[Static Generation 静态生成](https://nextjs.org/docs/basic-features/pages#static-generation-recommended)的页面也是如此。

Next.js 使您可以选择要用于每个页面的预渲染形式。 您可以通过对大多数页面使用 **静态生成**，对于其他页面使用 **服务器端渲染**来创建 **混合 Hybrid** Next.js 应用程序。

出于性能原因，建议在服务器端渲染上使用静态生成。 CDN 可以缓存静态生成的页面，而无需进行额外配置即可提高性能。 但是，在某些情况下，服务器端渲染可能是唯一的选择。

您还可以将客户端渲染与静态生成或服务器端渲染一起使用。 这意味着页面的某些部分可以完全由客户端 JavaScript 呈现。

### [什么时候应该使用静态生成？](https://nextjs.org/docs/basic-features/pages#when-should-i-use-static-generation)

我们建议您尽可能使用“**静态生成”**（带有或不带有数据），因为您的页面可以构建一次并由 CDN 提供服务，这比让服务器根据每个请求呈现页面快得多。

您可以对许多类型的页面使用“静态生成”，包括：

- 营销页面
- 博客文章
- 电子商务产品列表
- 帮助和文档

您应该问自己：“我可以在用户请求**之前**预先渲染此页面吗？” 如果答案是肯定的，则应选择“静态生成”。

另一方面，如果您无法在用户请求之前预渲染页面，则“静态生成”**不是**一个好主意。也许您的页面显示了频繁更新的数据，并且页面内容在每次请求时都会更改。

在这种情况下，您可以执行以下任一操作：

- 将静态生成与 **客户端渲染一起使用：** 您可以跳过预渲染页面的某些部分，然后使用客户端 JavaScript 来填充它们。要了解有关此方法的更多信息，请查看[数据获取文档](https://nextjs.org/docs/basic-features/data-fetching#fetching-data-on-the-client-side)。
- 使用**服务器端渲染：** Next.js 在每个请求上预渲染一个页面。由于 CDN 无法缓存该页面，因此速度会较慢，但是预渲染的页面将始终是最新的。
