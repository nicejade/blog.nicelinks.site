[倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界。此周刊，将汇聚过去一周[倾城](https://nicelinks.site/?utm_source=weekly)所收录的内容，以飨同好；欢迎推荐或自荐（仅限有独立域名的网站，可以是二级域名）。您如果要了解收录要求，请参见[关于倾城](https://nicelinks.site/about?utm_source=weekly)。

**备注**：本周刊**每周五**生成，首发于个人微信公众号[晚晴幽草轩](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI5MDIwMzM2Mg==&action=getalbum&album_id=1530765143352082433&scene=173&from_msgid=2650641087&from_itemidx=1&count=3#wechat_redirect)、博客[晚晴幽草轩](https://www.jeffjade.com)，以及[悠然宜想亭](https://forum.lovejade.cn/)社区；此一键生成脚本基于 [Deno](https://nicelinks.site/post/602d30aad099ff5688618591) 编写，并在 Github 开源：[nicejade/nicelinks-weekly](https://github.com/nicejade/nicelinks-weekly)。

## [GitHub Blocks | Reimagine repositories](https://nicelinks.site/post/6527f74ae24c3d6dece15eaa)

**标签**：[`Github`](https://nicelinks.site/tags/Github) · [`可视化`](https://nicelinks.site/tags/可视化) · [`云服务`](https://nicelinks.site/tags/云服务)

> GitHub Blocks: Reimagine repositories. Extend your codebase with custom, interactive blocks. Build rich documentation, enhance your workflows, and bring your repository to life.

![倾城之链 - GitHub Blocks | Reimagine repositories](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/blocks.githubnext.com.png?x-oss-process=style/png2jpg)

**推荐语**：[GitHub Blocks](https://nicelinks.site/redirect?url=https://blocks.githubnext.com/) ，重新构想存储库，使用自定义的交互式块扩展您的代码库。构建丰富的文档，增强您的工作流程，并使您的存储库变得栩栩如生。以后仓库里面能展示什么内容，**取决于你的想象力和构建 block 的能力**。

Blocks 的目标是**让代码仓库变得生动起来**，除了代码和 README，还可以展示 3D 文件、脑图、流程图、图表、图标、字体预览、CSS 样式预览、项目运行状况的实时数据、创建可搜索的参考文档、嵌入实时演示模块等等，甚至还有可交互的模块，例如所见即所得的编辑器、可以排序和统计的表格、能够运行代码的沙箱等等。

只要按照对应的规范开发 block 并发布到市场（给仓库增加一个名为 github-blocks 的 tag 就行了），就可以被检索和使用，不过当前还是技术预览版本，需要本地起一个 devServer，然后借助在线网页才能渲染出来。这个尝试似乎正在重新定义 [Github](https://nicelinks.site/tags/Github)，以后或许不宜再叫它代码仓库，应该叫**内容仓库**。

── 出自[倾城之链 - GitHub Blocks | Reimagine repositories](https://nicelinks.site/post/6527f74ae24c3d6dece15eaa)

## [Spacedrive — A file manager from the future.](https://nicelinks.site/post/6527f449e24c3d6dece15df7)

**标签**：[`跨平台`](https://nicelinks.site/tags/跨平台) · [`分布式`](https://nicelinks.site/tags/分布式) · [`Rust`](https://nicelinks.site/tags/Rust)

**关键字**：files, file manager, spacedrive, file explorer, vdfs, distributed filesystem, cas, content addressable storage, virtual filesystem, photos app, video organizer, video encoder, tags, tag based filesystem

> Combine your drives and clouds into one database that you can organize and explore from any device. Designed for creators, hoarders and the painfully disorganized.

![倾城之链 - Spacedrive — A file manager from the future.](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/www.spacedrive.com.png?x-oss-process=style/png2jpg)

**推荐语**：[Spacedrive](https://nicelinks.site/redirect?url=https://www.spacedrive.com/) 是一个开源（[Github Spacedrive](https://github.com/spacedriveapp/spacedrive)）跨平台文件浏览器，由 Rust 编写的虚拟分布式文件系统 ( [VDFS](https://github.com/spacedriveapp/spacedrive#what-is-a-vdfs) )提供支持。它将多个设备上的文件集中在一处。从云服务到离线硬盘，Spacedrive 将您设备的存储容量和处理能力整合到一个个人分布式云中，使用起来既安全又直观。

### 什么是虚拟分布式文件系统？

VDFS（虚拟分布式文件系统）是一种设计用于跨各种存储层工作的文件系统。凭借统一的 API 来跨多个设备操作和访问内容，VDFS 不再局限于单台机器。它通过维护所有存储位置的虚拟索引、实时同步客户端之间的数据库来实现这一点。此实现还使用 [CAS](https://en.wikipedia.org/wiki/Content-addressable_storage) （内容可寻址存储）来唯一标识文件，同时记录相对于存储位置的逻辑文件路径。

VDFS 的第一个实现可以在加州大学伯克利分校李浩源的 [论文中找到。](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2018/EECS-2018-29.pdf) 本文描述了它在云计算中的用途，但基本概念可以转化为开放的消费者软件。

### 创造 Spacedrive 的动机

许多人都有多个云帐户、未备份的驱动器以及存在丢失风险的数据。它们依赖 Google Photos 和 iCloud 等云服务，但容量有限，服务和操作系统之间的互操作性几乎为零。相册不应该被困在设备生态系统中，也不应该被收集来获取广告数据。它们应该与操作系统无关、永久且为个人所有。人们所创建的数据是自己的遗产，它将比我们更长久地存在——开源技术是确保 Spacedrive 对定义我们生活的数据保持绝对控制的唯一方法，且规模不受限制。

对于**独立创意人士、囤积者和那些想要拥有自己数字足迹的人**来说，Spacedrive 提供了无与伦比的免费文件管理体验。截止 2023 年 10 月 12 日，Spacedrive 已放开下载，您可以下载适用于  macOS · Windows · Linux · iOS · watchOS · Android 的应用程序。

── 出自[倾城之链 - Spacedrive — A file manager from the future.](https://nicelinks.site/post/6527f449e24c3d6dece15df7)

## [GSAP | Professional-grade animation for the modern web](https://nicelinks.site/post/6527ea9be24c3d6dece15d38)

**标签**：[`动画`](https://nicelinks.site/tags/动画) · [`JavaScript`](https://nicelinks.site/tags/JavaScript) · [`程序库`](https://nicelinks.site/tags/程序库)

> GSAP is an industry standard JavaScript animation library from GreenSock that lets you craft high-performance animations that work in every major browser.

![倾城之链 - GSAP | Professional-grade animation for the modern web](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/gsap.com.png?x-oss-process=style/png2jpg)

**推荐语**：[GSAP](https://nicelinks.site/redirect?url=https://gsap.com/) ，现代网络的专业级、高性能[动画](https://nicelinks.site/tags/动画)库；它是一个强大的 [JavaScript](https://nicelinks.site/tags/JavaScript) 工具集，可将开发人员变成动画超级英雄。构建适用于所有主要浏览器的高性能动画。动画 CSS、 [SVG](https://nicelinks.site/tags/SVG) 、canvas、 [React](https://nicelinks.site/post/5b1294b5e93ed2618cfac134) 、 [Vue](https://nicelinks.site/post/5b1a221c0526c920d6dfaada) 、WebGL、颜色、字符串、运动路径、通用对象...任何 JavaScript 可以触及的内容！GSAP 的 [ScrollTrigger](https://gsap.com/scroll/) 插件可让您使用最少的代码创建令人惊叹的基于滚动的动画。 [gsap.matchMedia()](<https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/>) 使构建响应式、易于访问的动画变得轻而易举。GSAP 完全灵活，零依赖，您可以把它用在你想要的地方，诸如：

- **滚动**：将滚动变成丝般流畅的故事讲述。
- **静止无功发生器**：使用我们的 SVG 插件进行移动、变形等
- **文本**：让他们迷失在具有无缝文本效果的单词中。
- **用户界面交互**：创建精美、引人入胜且易于访问的交互。

没有其他库能够提供如此先进的测序、可靠性和严格的控制，同时解决超过 1100 万个站点的实际问题。GSAP 解决了无数浏览器不一致的问题；你的动画就可以了。从本质上讲，GSAP 是一个高速属性操纵器，可以随着时间的推移以极高的精度更新值。它比 jQuery 快 20 倍！请参阅 [What's so special about GSAP?](https://gsap.com/blog/why-gsap/) 了解 GSAP 如此特别的原因。

GSAP 是一个高性能的 JavaScript 动画库，可以用于创建各种复杂的动画效果，支持大多数主流浏览器和移动设备。GSAP 提供了多种动画类型和选项，例如 Timeline、EasePack 和 CSSPlugin 等，可以通过简单的 API 轻松实现复杂的动画效果。值得一提的是，该项目 [在 Github 仓库开源](https://github.com/greensock/GSAP#professional-grade-animation-for-the-modern-web) （截止 2023 年 10 月 12 日，已获得 17.2K+ Star），如果您对其感兴趣，可移步前往从而了解更多。

── 出自[倾城之链 - GSAP | Professional-grade animation for the modern web](https://nicelinks.site/post/6527ea9be24c3d6dece15d38)

## [gulp.js | A toolkit to automate & enhance your workflow](https://nicelinks.site/post/6526c267e24c3d6dece1570d)

**标签**：[`程序库`](https://nicelinks.site/tags/程序库) · [`JavaScript`](https://nicelinks.site/tags/JavaScript) · [`自动化`](https://nicelinks.site/tags/自动化)

> Leverage gulp and the flexibility of JavaScript to automate slow, repetitive workflows and compose them into efficient build pipelines.

![倾城之链 - gulp.js | A toolkit to automate & enhance your workflow](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/gulpjs.com.png?x-oss-process=style/png2jpg)

**推荐语**：[Gulp.js](https://nicelinks.site/redirect?url=https://gulpjs.com/) ，用于 [自动化](https://nicelinks.site/tags/自动化) 和增强您的工作流程的工具包；利用 `gulp` 和 [JavaScript](https://nicelinks.site/tags/JavaScript) 的灵活性来自动执行缓慢、重复的工作流程，并将其组合成高效的构建管道。它具有如下功能特征：

### 灵活的

使用代码优于配置，利用所有 JavaScript 来创建 gulpfile，其中可以使用您自己的代码或链接的单一用途插件编写任务。

### 可组合的

编写单独的、有重点的任务并将其组合成更大的操作，为您提供速度和准确性，同时减少重复。

### 高效的

通过使用 gulp 流，您可以在将任何内容写入磁盘之前对内存中的文件应用许多转换，从而显着加快构建过程。

### 连接插件

使用社区构建的插件是开始使用 gulp 的快速方法。每个插件都会执行少量工作，因此您可以像构建块一样将它们连接起来。将各种技术的插件链接在一起以达到您想要的结果。

早些年（2015）才接触前端时，Gulp 为工作效率带来了很大提升；在个人博客写了蛮多使用心得，诸如： [Gulp 探究折腾之路（I）](https://www.jeffjade.com/2015/11/25/2015-11-25-toss-gulp/) 、 [Gulp 折腾之路（II）](https://www.jeffjade.com/2016/01/19/2016-01-19-toss-gulp/) 、 [Gulp 折腾之路（III）](https://www.jeffjade.com/2016/08/08/113-toss-gulp/) ；虽然自动 Webpack 流行之后，Gulp 使用很少在用；但，如果要做些复杂的自动化操作，Gulp 依然是首选工具 🔧；著名开源编码工具 [Visual Studio Code](https://nicelinks.site/post/5af55777979f626ea3d37917) 在程序构建时，也大量使用了 Gulp。

总之 `gulp` 是前端开发过程中对代码进行构建的工具，是自动化项目的构建利器；她不仅能对网站资源进行优化，而且在开发过程中很多重复的任务能够使用正确的工具自动完成；使用她，我们不仅可以很愉快的编写代码，而且大大提高我们的工作效率。相比于 `grunt` 的频繁 IO 操作，gulp 的流操作，能更快地更便捷地完成构建工作。

── 出自[倾城之链 - gulp.js | A toolkit to automate & enhance your workflow](https://nicelinks.site/post/6526c267e24c3d6dece1570d)

## [12ft Ladder | Bypass any paywall](https://nicelinks.site/post/6526ba52e24c3d6dece155e1)

**标签**：[`服务`](https://nicelinks.site/tags/服务) · [`在线`](https://nicelinks.site/tags/在线) · [`免费`](https://nicelinks.site/tags/免费)

> Show me a 10ft paywall, I’ll show you a 12ft ladder.

![倾城之链 - 12ft Ladder | Bypass any paywall](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/12ft.io.png?x-oss-process=style/png2jpg)

**推荐语**：[12ft Ladder](https://nicelinks.site/redirect?url=https://12ft.io/) ，一款绕过任何「付费墙」的在线[服务](https://nicelinks.site/tags/服务)，适用于您最喜爱的网站；将 `12ft.io` 添加到任何付费专区页面的 URL 前面，该服务将尽力删除付费专区并让您访问该文章。

### 为什么做出该服务？

作者相信 Google Adwords（Google Ads） 杀死了网络。Google Adwords 激励网站兜售 SEO 优化的垃圾。不这样做的网站被迫针对电子邮件捕获进行优化，以便他们可以直接向您进行营销。搜索结果现在显示“新闻”、广告和 SEO 垃圾邮件，而不是显示信息。 您应该能够在 Google 上搜索某些内容并获得问题的答案，而无需注册某些时事通讯。这就是作者创建 [12ft.io](https://nicelinks.site/redirect?url=https://12ft.io/) 的原因。

### 12ft Ladder 是如何工作的？

这个想法非常简单，新闻网站希望谷歌为其内容建立索引，以便它显示在搜索结果中。因此，他们不会向 Google 抓取工具显示付费专区。「12ft Ladder」从中受益，因为 Google 抓取工具每次抓取该网站时都会缓存该网站的副本。「12ft Ladder」所做的就是向您展示该页面的缓存、非付费版本。如果您受不了那些看到一半需要付费的内容，不妨尝试下这个服务。相信您也认为在国内，这个服务很是多么有用。

── 出自[倾城之链 - 12ft Ladder | Bypass any paywall](https://nicelinks.site/post/6526ba52e24c3d6dece155e1)

## [Vocal Remover & Instrumental AI Splitter | LALAL.AI](https://nicelinks.site/post/6523f359e24c3d6dece147d4)

**标签**：[`AI`](https://nicelinks.site/tags/AI) · [`音频`](https://nicelinks.site/tags/音频) · [`工具`](https://nicelinks.site/tags/工具)

> Split vocal and instrumental tracks quickly and accurately with LALAL.AI. Upload any audio file and receive high-quality extracted tracks in a few seconds.

![倾城之链 - Vocal Remover & Instrumental AI Splitter | LALAL.AI](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/www.lalal.ai.png?x-oss-process=style/png2jpg)

**推荐语**：[lalal.ai](https://nicelinks.site/redirect?url=https://www.lalal.ai/) ：下一代人声去除器和音乐源分离服务，可实现**快速、轻松和精确的主干提取**。删除人声、器乐、鼓、贝斯、钢琴、电吉他、原声吉他和合成器音轨，而不会造成质量损失。有网友亲测，表示效果非常好。

它主要用于两个场景，一个是音轨剥离，一个是声音移除，例如它可以提取人声、鼓、贝斯、吉他和弦乐等声音，也可以去除背景音乐、麦克风隆隆声以及其他不需要的噪音。

[lalal.ai](https://nicelinks.site/redirect?url=https://www.lalal.ai/) 拥有一批人工智能、机器学习、数学优化和数字信号处理领域的专家团队。他们的目标是让音乐家、声音制作人、音乐工程师、视频博主、主播、转录员、翻译、记者以及许多其他专业人士和创意人员更轻松地处理音频和视频。

2020 年，他们开发了一种名为 Rocknet 的独特神经网络，使用 20TB 的训练数据从歌曲中提取乐器和音轨。2021 年，他们创建了 Cassiopeia，这是一种优于 Rocknet 的下一代解决方案，可以改善分割结果，同时显着减少音频伪影。 [lalal.ai](https://nicelinks.site/redirect?url=https://www.lalal.ai/) 从 2-stem 分离器开始，在 2021 年取得了显着增长。

2023 年，他们开发了适用于 iOS 和 Android 的移动应用程序，使 LALAL.AI 及其所有功能可以随时随地使用。此外还训练并发布了第四代神经网络 `Orion` ，它采用独特的音频分离方法。该网络不仅从混音中提取词干，还在此过程中对其进行增强，消除错误和可听缺陷，以获得尽可能最佳的质量结果。如果您对该产品或团队感兴趣，可移步 [关于 LALAL.AI](https://www.lalal.ai/about/) 从而了解更多。

── 出自[倾城之链 - Vocal Remover & Instrumental AI Splitter | LALAL.AI](https://nicelinks.site/post/6523f359e24c3d6dece147d4)

## [Exping | 一款为创作者而生的地图标记工具](https://nicelinks.site/post/65227b7b9bdacb5ca44f7da0)

**标签**：[`创造者`](https://nicelinks.site/tags/创造者) · [`地图`](https://nicelinks.site/tags/地图) · [`产品`](https://nicelinks.site/tags/产品)

**关键字**：exping, exploring, map marking, 地图标记, 地图标注, 地图标记工具, 地图创作, 创作者工具, 地图标注工具, 地图标注软件, 标注地图, 地图打点, 多个位置标记, 业务地图, 租房地图, 销售地图, 客户分布地图, 旅游地图, 商户地图, 多点标记, 多点标注, 家访地图, 业务管理, 业务员, 业务分布, 探店地图, 美食地图, 咖啡地图, 徒步地图, 自驾地图, 地图生成工具, 网红地图, 小红书, 路线规划, 多点路线规划, 地图签到, 配送地图, 品味地图, 如何标注地图, 如何标记地图

> exping 是一款为创作者而生的地图标记工具，支持探店、旅游、户外等各类主题的多种地图模版分享，满足创作者的各种地图创作需求，帮助创作者创作出更有价值的地图。

![倾城之链 - Exping | 一款为创作者而生的地图标记工具](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/exping.world.png?x-oss-process=style/png2jpg)

**推荐语**：[exping](https://nicelinks.site/redirect?url=https://exping.world/) 是一款为 [创作者](https://nicelinks.site/tags/创作者) 设计的 [地图](https://nicelinks.site/tags/地图) 标记工具，与地点相关的事物都可以标记在地图上，满足创作者的各种地图创作需求，帮助创作者创作出更有价值的地图。它主要具有如下功能：

### 地点标记

支持搜索或长按地图标记任意地点，可用各样 emoji 或上传图片作为地点图标，也可为地点添加个性化备注；自定义地点标签，让地点印象更立体；可视化点评，雷达图展示多维度体验，让地点评价更直观。

### 路线绘制

一张地图支持绘制多条路线，可切换不同的出行方式，并显示两地间的距离和时间。

### 海报分享

你在地图上的每一次创作，都可以根据不同的场景自定义分享，无需频繁切换拼图软件。可分别针对地图、路线和地点进行分享，包括多个海报模版调整海报尺寸、添加相关贴纸、上传本地照片为海报背景等。

### 快捷指令

地点支持输入链接、电话、邮箱、文本，自动识别应用并显示在地图上，点击即可一键拨打客户电话、跳转应用、复制文本等，更快捷的跨应用连接。

### 地图分组

一张地图支持添加多个分组，你可通过自定义分组，归类管理所有地点和路线，创作出具有丰富主题内容的地图。

### 数据统计

分享或公开地图后，可通过「数据总览」、「浏览趋势」、「流量来源」和「用户分布」数据形式来了解你的地图。

### 协作地图

你可邀请好友一起加入地图创作，实时同步编辑内容、多人实时位置共享等。

[exping](https://nicelinks.site/redirect?url=https://exping.world/) 这款产品，其想法大约源于 2014 年至 2016 年左右，因为些原因，该团队直到 2021 年才落地；该软件采用 [Flutter](https://nicelinks.site/post/5b37d29e187e143b63cf01f0) 框架进行开发，使得可以在同一时间兼顾双平台开发；在前期 Web 版本也是使用 Flutter for Web 生成，但无奈依旧有许多组件未能和核心库一样运作正常，甚至可能纯文本渲染都会有些问题。只能在半路放弃重新以 Web 技术栈写了一遍。

该产品名字之所以叫 「exping（Exploring Expriencing Ping）」，是希望大家多去探索、体验，并在这些点和人之间进行连结。如果您对该产品该兴趣，可移步官网从而了解更多，诸如：诞生历史、产品思考、算法抉择、未来计划、如何盈利、如何处理数据等等内容。

── 出自[倾城之链 - Exping | 一款为创作者而生的地图标记工具](https://nicelinks.site/post/65227b7b9bdacb5ca44f7da0)

对倾城之链感兴趣的朋友，可通过 Web，小程序，快应用等渠道进行访问(后续将支持更多，如 VsCode 插件，Chrome 扩展等)。您有任何问题，欢迎随时向我们反馈（您可以通过官网反馈渠道，或添加如下倾情打赏），🤲 。

<div align="center">
  <img src="https://lovejade.oss-cn-shenzhen.aliyuncs.com/reward-code.jpeg"  width="200px" alt="倾城之链 - 倾情打赏">
</div>

## 本期文末寄语

已矣乎！寓形宇内复几时？曷不委心任去留？胡为乎遑遑欲何之？富贵非吾愿，帝乡不可期。怀良辰以孤往，或植杖而耘耔。登东皋以舒啸，临清流而赋诗。聊乘化以归尽，乐夫天命复奚疑！── 东晋 · 陶渊明《归去来兮辞》

> [倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界；在这里，你可以轻松发现、学习、分享更多有用或有趣的事物。

<div align="center">
  <img src="https://lovejade.oss-cn-shenzhen.aliyuncs.com/wechat-article-qrcode.jpg" style="width: 200px;min-width: 200px;" alt="微信公众号 - 晚晴幽草轩"/>
</div>

## 您可能感兴趣的文章

- [优质网站同好者周刊（第 138 期）- 倾城之链](https://blog.nicelinks.site/weekly-138/)
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
