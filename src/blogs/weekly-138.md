[倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界。此周刊，将汇聚过去一周[倾城](https://nicelinks.site/?utm_source=weekly)所收录的内容，以飨同好；欢迎推荐或自荐（仅限有独立域名的网站，可以是二级域名）。您如果要了解收录要求，请参见[关于倾城](https://nicelinks.site/about?utm_source=weekly)。

**备注**：本周刊**每周五**生成，首发于个人微信公众号[晚晴幽草轩](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI5MDIwMzM2Mg==&action=getalbum&album_id=1530765143352082433&scene=173&from_msgid=2650641087&from_itemidx=1&count=3#wechat_redirect)、博客[晚晴幽草轩](https://www.jeffjade.com)，以及[悠然宜想亭](https://forum.lovejade.cn/)社区；此一键生成脚本基于 [Deno](https://nicelinks.site/post/602d30aad099ff5688618591) 编写，并在 Github 开源：[nicejade/nicelinks-weekly](https://github.com/nicejade/nicelinks-weekly)。

## [Wasp | Develop full-stack web apps faster](https://nicelinks.site/post/651fc9d09bdacb5ca44f6e4f)

**标签**：[`框架`](https://nicelinks.site/tags/框架) · [`全栈`](https://nicelinks.site/tags/全栈) · [`开源`](https://nicelinks.site/tags/开源)

> Develop full-stack web apps without boilerplate.

![倾城之链 - Wasp | Develop full-stack web apps faster](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/wasp-lang.dev.png?x-oss-process=style/png2jpg)

**推荐语**：[Wasp](https://nicelinks.site/redirect?url=https://wasp-lang.dev/) （Web Application Specification：Web 应用程序规范）是一个类似 Rails 的 React、Node.js 和 [Prisma](https://nicelinks.site/post/64531bfdc6f2367a83e863ff) 框架，在一天之内构建您的应用程序并使用单个 CLI 命令进行部署；**为什么 Wasp 很棒**？官方给出以下说明：

- 🚀**快速入门**：由于其表现力，您可以从头开始创建和部署一个生产就绪的 Web 应用程序，只需很少行简洁、一致的声明性代码。
- 😌**无样板代码**：通过抽象出复杂的全栈功能，可以减少样板代码。这意味着需要维护和理解的代码更少！这也意味着更容易升级。
- 🔓**无锁定**：您可以在任何您喜欢的地方部署 Wasp 应用程序。没有锁定特定的提供者，您可以完全控制代码（如果您感兴趣，可以在 .wasp/ dir 中实际查看它）。

[Wasp](https://nicelinks.site/redirect?url=https://wasp-lang.dev/) 具有如下功能特征：

### 开源

就是这样。Wasp 是完全开源的，欢迎您做出贡献。

### 全栈认证

使用强大的 UI 帮助程序，通过几行代码添加社交提供商或电子邮件的登录信息。没有第三方供应商锁定。

### RPC（客户端 <-> 服务器）

Wasp 提供了一个类型安全的 RPC 层，可以立即将您的数据模型和服务器逻辑传递给客户端。

### 部署简单

将您的应用程序部署到任何平台。Wasp 为最流行的选项提供 CLI 帮助程序。

### 工作

轻松定义、安排和运行专门的服务器任务。持久的、可重试的、可延迟的。

### 邮件发送

您所需要做的就是连接电子邮件提供商，然后就可以发送电子邮件了。

### 全栈式安全

完全支持 [TypeScript](https://nicelinks.site/post/6278fdeaac00ce3f9b11a8ef) 并自动生成跨越整个堆栈的类型。

除此之外，Wasp 还具有更多功能特征诸如：自定义 API 路由、数据库播种、乐观更新、客户端自动缓存失效等；**Wasp 与 Next.js / Nuxt.js / Gatsby 有何不同**？ 官方给出的答案是：Next.js 这些是前端优先的框架，具有一些有限的后端功能。Wasp 是一个全栈框架。

Wasp 与上面列出的解决方案之间的主要区别在于，Wasp 是一个真正的全栈框架，这意味着它将后端和数据库都带到了前端。您可以将其视为 [Ruby on Rails](https://nicelinks.site/post/621646542d17f22050cf1a2d) ，但专为 JS（React 和 Node.js）和全栈而设计。 [Next.js](https://nicelinks.site/post/61c928af5be6454b4e3d5146) 、 [Gatsby](https://nicelinks.site/post/5e0d4f3016bdad16b0f5b20e) 等最初是作为静态站点的前端框架。尽管其中一些现在提供使用无服务器功能的选项，但您仍然必须携带自己的数据库，并且如果您需要运行更复杂的操作，您还需要某种服务器/后端。

**学习 Wasp 有多难**？ 官方给出测量结果：**大约需要 30 分钟就能开始**，大多数用户发现它非常简单。由于您的大部分编码仍将在您熟悉的工具（当前是 [React](https://nicelinks.site/post/5b1294b5e93ed2618cfac134) 和 [Node.js](https://nicelinks.site/tags/NodeJS) ）中完成，因此这实际上是对您习惯的微小改变。

原因是 Wasp 是一种非常简单的配置语言，没有任何循环或变量 - 您可以将其视为更易于阅读并且更智能的 JSON。尽管如此，虽然很简单（我们计划保持这种方式），但它是一种真正的语言，因此您可以使用它获得所有 IDE 功能 - 语法突出显示、自动完成、实时错误报告…… [Wasp 在 Github 仓库开源](https://github.com/wasp-lang/wasp) （截止 2023 年 10 月 06 日，已获得 5.8K+ Star），如果您对其感兴趣，可移步前往从而了解更多。

── 出自[倾城之链 - Wasp | Develop full-stack web apps faster](https://nicelinks.site/post/651fc9d09bdacb5ca44f6e4f)

## [Filament - Accelerated Laravel development framework: admin panel, form builder, table builder and more](https://nicelinks.site/post/651fbfc29bdacb5ca44f6c80)

**标签**：[`组件库`](https://nicelinks.site/tags/组件库) · [`Tailwind`](https://nicelinks.site/tags/Tailwind) · [`全栈`](https://nicelinks.site/tags/全栈)

> A collection of beautiful full-stack components for Laravel. The perfect starting point for your next app. Using Livewire, Alpine.js and Tailwind CSS.

![倾城之链 - Filament - Accelerated Laravel development framework: admin panel, form builder, table builder and more](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/filamentphp.com.png?x-oss-process=style/png2jpg)

**推荐语**：[Filament](https://nicelinks.site/redirect?url=https://filamentphp.com/) 是用于加速 [Laravel](https://nicelinks.site/post/633e8f7072ba4a064e24e5d0) 开发的全栈组件的集合。使用 Livewire、 [Alpine.js](https://nicelinks.site/post/63b55fdc1653425ab90b40d9) 和 [Tailwind CSS](https://nicelinks.site/post/5fd20cb4c06d6302c1907ec7) 。它们设计精美、使用直观且可完全扩展——是您下一个 Laravel 应用程序的完美起点。为什么要浪费时间一遍又一遍地构建相同的功能呢？Filament 包含如下内容：

- **面板生成器**：构建 Laravel 管理面板、面向客户的应用程序、SaaS 或任何您能想象到的东西。
- **表格生成器**：使用超过 25 个开箱即用的组件轻松构建令人惊叹的 Livewire 驱动表单。
- **表格生成器**：为任何情况制作由 Livewire 驱动的美观、优化且交互式的数据表。
- **通知**：使用 Livewire 发送实时消息，通知用户重要事件。
- 行动：打开交互式模式和幻灯片 - 这是让用户保持在应用程序流程中的好方法。
- 信息列表生成器：以完全灵活的布局向用户显示有关特定记录的只读信息。
- **小部件**：为您的应用程序构建一个仪表板，其中包含实时图表和统计数据。

新版本 Filament 具有如下功能特征：

### 行动模式，无处不在

从页面上的任何按钮打开模式和幻灯片。甚至可以将模态嵌套在其他模态中并保留完整的状态。

### 强大的表格报告

使用一组聚合函数汇总表构建器行，以计算统计数据并提供数据的分析概述。按共同属性将行分组在一起并汇总该数据。

### 为 SaaS 构建的多租户

使用面板构建器以创纪录的速度构建具有订阅计费功能的多租户应用程序。无需离开面板即可在租户之间切换。

### 漂亮的只读“查看”页面

在您的应用程序中嵌入信息列表，以实现灵活的响应式布局，以呈现只读数据。使用您自己的组件完全可定制。

### 一个应用程序中的无限面板

使用自己的资源、仪表板、自定义页面和配置构建多个完全独立的灯丝驱动面板。轻松将整个面板放入 Composer 包中。

### 改进了主题定制

自定义面板的调色板和版式，无需编译任何 Tailwind。轻松连接到 Filament CSS 类套件，用您自己的品牌来描述面板 —— 这都是您的。

总之，Laravel 漂亮的全栈组件的集合。可以   轻松**组合成动态、可维护、全栈**应用程序。Filament 在 [Github 仓库开源](https://github.com/filamentphp/filament) ，如果您对其感兴趣，可移步前往从而了解更多。

── 出自[倾城之链 - Filament - Accelerated Laravel development framework: admin panel, form builder, table builder and more](https://nicelinks.site/post/651fbfc29bdacb5ca44f6c80)

## [Welcome to nix.dev — nix.dev documentation](https://nicelinks.site/post/651f807f9bdacb5ca44f6b88)

**标签**：[`文档`](https://nicelinks.site/tags/文档) · [`Linux`](https://nicelinks.site/tags/Linux) · [`开源`](https://nicelinks.site/tags/开源)

**关键字**：Nix, Nixpkgs, NixOS, Linux, build systems, deployment, packaging, declarative, reproducible, immutable, software, developer

> Official documentation for getting things done with Nix.

![倾城之链 - Welcome to nix.dev — nix.dev  documentation](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/nix.dev.png?x-oss-process=style/png2jpg)

**推荐语**：[nix.dev](https://nicelinks.site/redirect?url=https://nix.dev/) 是 [Nix](https://nicelinks.site/post/651e40e39bdacb5ca44f65fc) 生态系统官方文档的所在地。**开发者能用 Nix 做什么**？以下几点说明了 Nix 生态系统可以实现的目标：

- 可重复的开发环境。
- 通过 URL 轻松安装软件。
- 在计算机之间轻松转移软件环境。
- Linux 机器的声明性规范。
- 使用虚拟机进行可重复的集成测试。
- 避免与已安装的软件发生版本冲突。
- 从源代码安装软件。
- 使用二进制缓存进行透明构建缓存。
- 对软件可审计性的强有力支持。
- 一流的交叉编译支持。
- 远程构建。
- 远程部署。
- 原子升级和回滚。

[Nix](https://nicelinks.site/post/651e40e39bdacb5ca44f65fc) 这个名字源自荷兰语 `niks`，意思是\_“什么都没有”；构建操作看不到任何未明确声明为输入的内容。在 [nix.dev](https://nicelinks.site/redirect?url=https://nix.dev/) 您可以学到如何安装 Nix、Nix 语言基础知识、部署 NixOS、交叉编译（Cross Compilation）等内容；值得一提的是，该 [文档项目在 Github 上开源](https://github.com/NixOS/nix.dev) ，如果您对其感兴趣，可移步前往从而了解更多。

── 出自[倾城之链 - Welcome to nix.dev — nix.dev documentation](https://nicelinks.site/post/651f807f9bdacb5ca44f6b88)

## [Nix & NixOS | Reproducible builds and deployments](https://nicelinks.site/post/651e40e39bdacb5ca44f65fc)

**标签**：[`编程`](https://nicelinks.site/tags/编程) · [`开源`](https://nicelinks.site/tags/开源) · [`Linux`](https://nicelinks.site/tags/Linux)

> Nix is a tool that takes a unique approach to package management and system configuration. Learn how to make reproducible, declarative and reliable systems.

![倾城之链 - Nix & NixOS | Reproducible builds and deployments](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/nixos.org.png?x-oss-process=style/png2jpg)

**推荐语**：[Nix](https://nicelinks.site/redirect?url=https://nixos.org/) 是一款功能强大的纯粹功能型的软件包管理系统，为可靠且可重复的软件包管理而设计，按照 GNU LGPLv2.1 的条款发布。它是一款不太知名的 [Linux](https://nicelinks.site/tags/Linux) 发行版 NixOS 中主要的软件包管理系统。它具有如下功能特征：

### 可重现

Nix 构建彼此隔离的包。这确保了它们是可重现的并且没有未声明的依赖关系，因此如果一个包在一台机器上运行，它也可以在另一台机器上运行。

### 声明式

无论您使用什么编程语言和工具， Nix 都可以让您轻松共享项目的开发和构建环境。

### 可靠的

Nix 确保安装或升级一个软件包不会破坏其他软件包。它允许您回滚到以前的版本，并确保升级期间没有软件包处于不一致的状态。

Nix 包采用一种专门设计的，惰性求值的纯函数式语言进行配置；Shell 脚本或其它外部程序（如 Make）可用于从源码构建包。此系统的纯函数式性质能够保证非常精准的依赖跟踪。例如，一个二进制包依赖于对应的源码包、编译器和其它用于构建的包。密码散列函数确定了每个包的精确构建和运行时依赖，而每个源码或二进制包都以一个这样的散列值表示。其结果就是，二进制包仓库成为了包管理器基本操作透明性的优化（类似干于通过密码散列函数来“缓存”）。

Nix 提供原子升级及回滚、多个版本的软件包安装、多用户软件包管理以及为软件包轻松安装构建环境，无论开发人员使用哪种编程语言和工具。

在 Nix 下，软件包是用“Nix 表达式”这种功能型软件包语言构建的。这种功能型软件包管理方法确保安装或升级一个软件包不会破坏其他软件包。

Nix 还有多用户支持，这意味着普通(或非特权)系统用户可以安全地安装软件包，每个用户由配置文件(Nix 商店中出现在用户 Path 中的软件包集合)来识别。

总之，Nix 是一个操作系统包管理器。同 RPM、APT 和许多其它的软件包管理系统一样，它可以用来控制软件包的安装，或已命名的，带版本号的文件组，例如软件应用及其相关的配置数据等。值得一提的是，该软件在 [Github 仓库开源](https://github.com/NixOS/nix) ，如果您对其感兴趣，可移步前往从而了解更多。

── 出自[倾城之链 - Nix & NixOS | Reproducible builds and deployments](https://nicelinks.site/post/651e40e39bdacb5ca44f65fc)

## [Syncthing | A continuous file synchronization program](https://nicelinks.site/post/651d431d9bdacb5ca44f62a1)

**标签**：[`软件`](https://nicelinks.site/tags/软件) · [`开源`](https://nicelinks.site/tags/开源)

> Syncthing is a continuous file synchronization program. It synchronizes files between two or more computers. We strive to fulfill the goals below. The goals are listed in order of importance, the most important ones first.

![倾城之链 - Syncthing | A continuous file synchronization program](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/syncthing.net.png?x-oss-process=style/png2jpg)

**推荐语**：[Syncthing](https://nicelinks.site/redirect?url=https://syncthing.net/) 是一个**连续文件同步**程序。它可以在两台或多台计算机之间实时同步文件，并安全地防止窥探。您的数据只是您的数据，您应该选择其存储位置、是否与第三方共享以及如何通过互联网传输。它具有如下功能特征：

### 私密且安全

- **私人的**：除了您的计算机之外，您的任何数据都不会存储在任何其他地方。没有任何中央服务器可能会受到合法或非法的破坏。
- **已加密**：所有通信均使用 TLS 进行保护。使用的加密包括完美的前向保密，以防止任何窃听者访问您的数据。
- **已认证**：每个设备都通过强大的加密证书进行识别。只有您明确允许的设备才能连接到您的其他设备。

### 便于使用

- **强大的**：根据需要与不同的人或仅在您自己的设备之间同步尽可能多的文件夹。
- **便携的**：通过浏览器访问的响应灵敏且功能强大的界面配置和监控 Syncthing。适用于 Mac OS X、Windows、Linux、FreeBSD、Solaris、OpenBSD 等。在您的台式计算机上运行它并将其与服务器同步以进行备份。
- **简单的**：Syncthing 不需要 IP 地址或高级配置：它只需通过 LAN 和 Internet 即可工作。每台机器都由一个 ID 来标识。将您的 ID 提供给您的朋友，共享文件夹并观看：如果您不想转发或不知道如何转发，则可以使用 UPnP。

### 开源

- **开源**：所有源代码都可以在 [GitHub 上获得](https://github.com/syncthing/syncthing)——所见即所得，没有隐藏的有趣的事情。
- **开放式开发**：任何发现的错误都可供任何人立即浏览——没有隐藏的缺陷。

假设您需要在两台计算机要在它们之间同步文件，[Syncthing](https://nicelinks.site/redirect?url=https://syncthing.net/) 是很棒的选择，它不需要云服务，可以很好保证您的隐私。值得一提的是，该项目在 [Github 仓库开源](https://github.com/syncthing/syncthing)，如果您对其感兴趣，可移步前往从而了解更多。

── 出自[倾城之链 - Syncthing | A continuous file synchronization program](https://nicelinks.site/post/651d431d9bdacb5ca44f62a1)

## [代码空间](https://nicelinks.site/post/6517a66c9bdacb5ca44f4fcd)

**标签**：[`程序员`](https://nicelinks.site/tags/程序员) · [`编程`](https://nicelinks.site/tags/编程) · [`社区`](https://nicelinks.site/tags/社区)

> 代码空间是一个专为程序员和编程爱好者打造的在线社区。我们致力于汇聚全球优秀的编程资源，为探索创新的代码解决方案提供平台，帮助开发者解决实际遇到的技术问题，同时发现和分享编程带来的乐趣。在这里，您可以交流心得，获取灵感，提升技能，在不断的学习和分享中实现个人成长。

![倾城之链 - 代码空间](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/www.codespace.vip.png?x-oss-process=style/png2jpg)

**推荐语**：[代码空间](https://nicelinks.site/redirect?url=https://www.codespace.vip/) ，是基于 [Nginx](https://nicelinks.site/post/6339a6aa35a9c117dacf2363)、PHP、JQuery 等技术栈构建的在线社区网站；旨在汇聚全球优秀的编程资源，为探索创新的代码解决方案提供平台，帮助开发者解决实际遇到的技术问题，同时发现和分享编程带来的乐趣。该网站通过接入外部广告、用户充值金币（上传资源可免费获得金币）等方式获取收入。

── 出自[倾城之链 - 代码空间](https://nicelinks.site/post/6517a66c9bdacb5ca44f4fcd)

对倾城之链感兴趣的朋友，可通过 Web，小程序，快应用等渠道进行访问(后续将支持更多，如 VsCode 插件，Chrome 扩展等)。您有任何问题，欢迎随时向我们反馈（您可以通过官网反馈渠道，或添加如下倾情打赏），🤲 。

<div align="center">
  <img src="https://lovejade.oss-cn-shenzhen.aliyuncs.com/reward-code.jpeg"  width="200px" alt="倾城之链 - 倾情打赏">
</div>

## 本期文末寄语

归去来兮，请息交以绝游。世与我而相违，复驾言兮焉求？悦亲戚之情话，乐琴书以消忧。农人告余以春及，将有事于西畴。或命巾车，或棹孤舟。既窈窕以寻壑，亦崎岖而经丘。**木欣欣以向荣，泉涓涓而始流。善万物之得时，感吾生之行休**。── 东晋 · 陶渊明《归去来兮辞》

> [倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界；在这里，你可以轻松发现、学习、分享更多有用或有趣的事物。

<div align="center">
  <img src="https://lovejade.oss-cn-shenzhen.aliyuncs.com/wechat-article-qrcode.jpg" style="width: 200px;min-width: 200px;" alt="微信公众号 - 晚晴幽草轩"/>
</div>

## 您可能感兴趣的文章

- [优质网站同好者周刊（第 137 期）- 倾城之链](https://blog.nicelinks.site/weekly-137/)
- [优质网站同好者周刊（第 136 期）- 倾城之链](https://blog.nicelinks.site/weekly-136/)
- [优质网站同好者周刊（第 135 期）- 倾城之链](https://blog.nicelinks.site/weekly-135/)
- [优质网站同好者周刊（第 134 期）- 倾城之链](https://blog.nicelinks.site/weekly-134/)
- [优质网站同好者周刊（第 133 期）- 倾城之链](https://blog.nicelinks.site/weekly-133/)
- [优质网站同好者周刊（第 132 期）- 倾城之链](https://blog.nicelinks.site/weekly-132/)
- [优质网站同好者周刊（第 131 期）- 倾城之链](https://blog.nicelinks.site/weekly-131/)
- [优质网站同好者周刊（第 130 期）- 倾城之链](https://blog.nicelinks.site/weekly-130/)
- [优质网站同好者周刊（第 129 期）- 倾城之链](https://blog.nicelinks.site/weekly-129/)
- [优质网站同好者周刊（第 128 期）- 倾城之链](https://blog.nicelinks.site/weekly-128/)
- [优质网站同好者周刊（第 127 期）- 倾城之链](https://blog.nicelinks.site/weekly-127/)
- [开启技术变现之路，探索第三收入来源](https://www.jeffjade.com/2020/11/17/173-talk-about-nice-links/)
- [云集优站，尽在「倾城之链」](https://www.jeffjade.com/2017/12/31/136-talk-about-nicelinks-site/)
- [云集优站，尽在「倾城之链」其二](https://www.jeffjade.com/2018/12/23/146-talk-about-nice-links/)
- [欲问美图何处寻？倾城之链有定音](https://www.jeffjade.com/2019/02/17/151-aweome-beautiful-picture-website-list/ "欲问美图何处寻？倾城之链有定音")
- [超实用图片工具网站，值得典藏](https://www.jeffjade.com/2020/07/27/165-aweome-picture-tool-website-list/)
- [高质量免费 🆓 图标资源大全](https://www.jeffjade.com/2020/09/11/169-high-quality-free-icon-resource-collection/)
- [十佳 AI 产品工具，为生活添彩](https://www.jeffjade.com/2020/09/23/170-list-of-top-20-ai-product-tools/)
- [最想与朋友分享的网站列表](https://www.jeffjade.com/2020/09/01/168-list-of-websites-i-most-want-to-share-with-my-friends/)
