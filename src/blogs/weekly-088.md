[倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界。此周刊，将汇聚过去一周[倾城](https://nicelinks.site/?utm_source=weekly)所收录的内容，以飨同好；欢迎推荐或自荐（仅限有独立域名的网站，可以是二级域名）。您如果要了解收录要求，请参见[关于倾城](https://nicelinks.site/about?utm_source=weekly)。

**备注**：本周刊**每周五**生成，首发于个人微信公众号[晚晴幽草轩](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI5MDIwMzM2Mg==&action=getalbum&album_id=1530765143352082433&scene=173&from_msgid=2650641087&from_itemidx=1&count=3#wechat_redirect)、博客[晚晴幽草轩](https://www.jeffjade.com)，以及[悠然宜想亭](https://forum.lovejade.cn/)社区；此一键生成脚本基于 [Deno](https://nicelinks.site/post/602d30aad099ff5688618591) 编写，并在 Github 开源：[nicejade/nicelinks-weekly](https://github.com/nicejade/nicelinks-weekly)。

## [Tabby - a terminal for a more modern age](https://nicelinks.site/post/63514daf80eb7b118fa7fba3)

**标签**：[`终端`](https://nicelinks.site/tags/终端) · [`SSH`](https://nicelinks.site/tags/SSH) · [`效率`](https://nicelinks.site/tags/效率)

**关键字**：Tabby, 免费, 开源, SSH, Telnet, 客户端, shell, iTerm

> Tabby is a free and open source SSH, local and Telnet terminal with everything you'll ever need.

![倾城之链 - Tabby - a terminal for a more modern age](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/tabby.sh.png?x-oss-process=style/png2jpg)

**推荐语**：Tabby （以前称为 **Terminus** ）是一个**免费的开源** [SSH](https://nicelinks.site/tags/SSH)，串行客户端和终端仿真器，其中包含您所需要的一切；适用于 Windows、macOS 和 Linux；它除了**高度可配置**，还具有以下功能特征：

- 集成 SSH 和 Telnet 客户端和连接管理器；
- 集成串口终端；
- 内置大量主题和配色方案；
- 完全可配置的快捷键和多和弦快捷键；
- 通过 Zmodem 从/向 SSH 会话直接传输文件；
- 完整的 Unicode 支持，包括双角字符；
- [Windows](https://nicelinks.site/tags/Windows) 上的正确 shell 体验，包括选项卡完成（通过 Clink）；
- 用于 SSH 机密和配置的集成加密容器；
- SSH、SFTP 和 Telnet 客户端可作为 Web 应用程序使用；

Tabby 是 Windows 标准终端 (conhost)、PowerShell ISE、PuTTY、macOS Terminal.app 和 iTerm 的替代品；Tabby 不是新的 shell 或 MinGW 或 Cygwin 的替代品。它也不是轻量级的 - 如果 RAM 使用很重要，请考虑 [Conemu](https://nicelinks.site/redirect?url=https://conemu.github.io/) 或 [Alacritty](https://nicelinks.site/redirect?url=https://github.com/jwilm/alacritty) 。

Tabby 是一个无限可定制的跨平台终端应用程序，用于本地 shell、串行、SSH 和 Telnet 连接。无论是作为终端、`SSH 客户端 `，抑或是串行终端，`tabby` （更现代的终端）不仅具备丰富的功能，而且便携，支持编写插件和主题；作为 MacOS 爱好者，之前总是用 [iTerm2](https://nicelinks.site/post/628b9fd935bb417da9ed231b) ，如今接触到 Tabby，顿时被其所吸引，相信进一步深入熟悉和使用，很可能“移情别恋”；更棒的是 Tabby 在全平台可用，且在 [Github 开源](https://github.com/Eugeny/tabby) ，如果您对它感兴趣，可前往 [Tabby 特征](https://tabby.sh/about/features) 以了解更多。

── 出自[倾城之链 - Tabby - a terminal for a more modern age](https://nicelinks.site/post/63514daf80eb7b118fa7fba3)

## [Dragonfly](https://nicelinks.site/post/634f74ab309ddd5ca75b9481)

**标签**：[`数据库`](https://nicelinks.site/tags/数据库) · [`编程语言`](https://nicelinks.site/tags/编程语言) · [`开源`](https://nicelinks.site/tags/开源)

**关键字**：dragonfly, in-memory, datastore, scale, memory store, redis

> Dragonfly - Scalable in-memory datastore made simple

![倾城之链 - Dragonfly](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/dragonflydb.io.png?x-oss-process=style/png2jpg)

**推荐语**：[Dragonfly](https://nicelinks.site/redirect?url=https://dragonflydb.io/) （蜻蜓）是一种现代的、可扩展的内存数据存储，与 Redis 和 Memcached API 完全兼容。Dragonfly 在多线程、无共享的体系结构之上实现了新的算法和数据结构。因此，与 [Redis](https://nicelinks.site/post/603e39560c8e4b046a182003) 相比，吞吐量增加了 16 倍，达到 25 倍。，并且在单个实例上支持数百万 QPS。Dragonfly 的核心属性使其成为经济高效、易于使用的 Redis 替代品。它具有以下功能特征：

### 易于理解的

设计用于隐藏幕后的所有复杂性，从而避免使用复杂的群集配置。

### 有成本效率的

Dragonfly 经过优化，可以利用所有硬件资源以较小的成本交付相同的工作负载。

### 强健的

Dragonfly 利用最先进的学术算法在多线程架构中提供严格的可串行化保证。

### 内存效率高

蜻蜓内部数据结构经过内存优化，可节省 20%-40% 的内存资源。

### 易于扩展

Dragonfly 利用每个核心、内存和网络字节来垂直扩展实例资源。它随着您的增长而从单个实例上的第一个字节增长到数百 GB 的内存数据存储。

### 少花钱多办事

用 C++ 从头开始设计，以从基础设施中获取最大价值。Dragonfly 利用每个核心、内存和网络字节来垂直扩展实例资源。

### 专为性能打造

Dragonfly 是一种新的内存引擎，针对吞吐量进行了优化，使用无锁的每核线程架构来提供稳定和低延迟。使用真正的异步接口，Dragonfly 可以最大限度地利用所有硬件资源。

值得一提是，Dragonfly 使用简单，并且在 [Github dragonflydb](https://github.com/dragonflydb/dragonfly) 开源，感兴趣的朋友可以前往，以了解更多。

── 出自[倾城之链 - Dragonfly](https://nicelinks.site/post/634f74ab309ddd5ca75b9481)

## [一帧秒创 - AI 视频创作，图文转视频](https://nicelinks.site/post/634e6d2d309ddd5ca75b8ab2)

**标签**：[`AI`](https://nicelinks.site/tags/AI) · [`视频`](https://nicelinks.site/tags/视频) · [`创作者`](https://nicelinks.site/tags/创作者)

**关键字**：图文转视频, 文章转视频, word 转视频, AI 视频, AIGC, 智能 AI 配音, AI 语音, 一键转视频, 智能配音, 智能配音, 图文成片, AI

> 一帧秒创智能 AI 图文转视频创作平台，智能一键百家号、公众号、头条号、搜狐号、新浪微博等图文、文章转视频，为企业及自媒体提供一站式视频生产营销神器，全面提升内容创作效率。

![倾城之链 - 一帧秒创 - AI 视频创作，图文转视频](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/aigc.yizhentv.com.png?x-oss-process=style/png2jpg)

**推荐语**：[一帧秒创](https://nicelinks.site/redirect?url=https://aigc.yizhentv.com/) ，是一个以 AIGC 为基础的效率工具，为图文 [创作者](https://nicelinks.site/tags/创作者) 和营销机构提供一键图文转视频（TTV）服务，通过对优质素材、智能 [AI](https://nicelinks.site/tags/AI) 语音、智能字幕、BGM、LOGO 等匹配设置，无需剪辑，一键成片，零门槛创作视频。它使用非常简单，具体流程如下：

- **准备文稿**：输入文字或者粘贴自媒体文章链接，一键导入文稿；
- **文本处理**：AI 引擎会为您的文稿，进行智能语义分析与摘要提取；
- **智能匹配**：通过匹配引擎对文本进行素材计算、字幕合成、音频匹配；
- **生成发布**：提交合成 MP4 视频，即刻下载，全网分享；

### 图文转视频

无需剪辑，一键生成视频。帮助图文创作者快速实现从文案到视频的制作，实现全自动一键文章转视频、图文转视频。

### 智能语义分析

智能语义识别，让工具更懂文章。通过语义视觉理解与匹配技术，自动分析文案含义，实现视频和视频文案的完全适配。

### 智能配音

抖音快手热门配音一网打尽。一键输入文本自动完成配音，仿真人超逼真，“云希”等 50+ 热门 AI 主播让你选，千万大号热门短视频配音尽收录。

### 智能字幕

生成配音的同时，自动生成字幕。一键输入文本自动完成智能字幕，在线调整字体、字号、颜色等信息，让字幕“亮”起来。

### 智能包装

强化作者 ICON，赋能创作者。通过快速设置完成视频的基本包装，包括创作者 LOGO、独有的片头片尾添加等，让视频“个性”起来。

### 私有素材库

上传自有素材，高效视频管理。创作者上传私有素材，平台将对视频进行智能标签、视频去抖、智能去水印、镜头级片段拆条等操作，实现高效视频搜索。

[一帧秒创](https://nicelinks.site/redirect?url=https://aigc.yizhentv.com/) ，是一键式 AI 智能图文转视频的生成神器。您只需将文章或自媒体账号文章链接导入工具，即可进行一键图文转视频（TTV）。全自动 AI 智能配视频、配图片、配场景、配语音、配字幕、配背景音乐素材等，一帧秒创全面赋能图文创作者，一键导入，无需剪辑，零门槛视频创作。在后疫情时代，`一帧秒创`赋能图文创作者，增加第二流量和收益曲线，让**创作者**轻松从自媒体平台找到价值。

── 出自[倾城之链 - 一帧秒创 - AI 视频创作，图文转视频](https://nicelinks.site/post/634e6d2d309ddd5ca75b8ab2)

## [PICO 官方网站](https://nicelinks.site/post/634d69f3309ddd5ca75b81d1)

**标签**：[`官网`](https://nicelinks.site/tags/官网) · [`VR`](https://nicelinks.site/tags/VR) · [`XR`](https://nicelinks.site/tags/XR)

**关键字**：PICO，Standalone，all-in-one VR，Enterprise VR, VR for business, VR for Medical, VR for Education

> PICO 成立于 2015 年 3 月，于 2021 年 9 月并入字节跳动。 PICO 以“（为用户）创造全新连接，拓展生活体验，释放无限潜能”作为品牌使命，致力于“成为领先的世界级 XR 平台，成就开发者与创作者，共同为全球消费者创造更美好的生活体验”。

![倾城之链 - PICO 官方网站](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/www.picoxr.com.png?x-oss-process=style/png2jpg)

**推荐语**：[PICO](https://nicelinks.site/redirect?url=https://www.picoxr.com/) ，智能穿戴设备品牌（该名来源于南美的一种珍稀鸟类）；成立于 2015 年 3 月，于 2021 年 9 月并入「字节跳动」；PICO 以“（为用户）创造全新连接，拓展生活体验，释放无限潜能”作为品牌使命，致力于“成为领先的世界级 XR 平台，成就开发者与创作者，共同为全球消费者创造更美好的生活体验”。

### 设计和技术

2018 年 7 月，PICO 已拥有相关专利国内授权受理合计 435 项（已授权 192 件），海外专利授权及受理合计 49 件。 技术内容覆盖 UI 与人体工程、光学设计与算法、整机系统与低延迟算法、头部追踪与手势识别、眼球追踪与注视点渲染、Haptics 与触觉反馈、3D Sound 等领域。

### 品牌历程

- 2015 年 3 月，PICO 品牌成立，致力于 VR 研发、虚拟现实内容及应用打造，发布虚拟现实软硬件产品；
- 2015 年 4 月，北京小鸟看看科技有限公司成立，致力于 VR 研发、虚拟现实内容及应用打造，发布虚拟现实软硬件产品；
- 2017 年 5 月，发布手机盒子产品 PICO U，升级版分体式 VR 一体机 Pico Neo DKS，旗舰一体机产品 Pico Goblin 以及 VR 追踪套件 Pico Tracking Kit；
- 2018 年 7 月，2000 元价位段使用高通骁龙 835 芯片的 PICO G2 VR 一体机发布；Pico 获得 1.675 亿人民币 A 轮融资；
- 2021 年 8 月 29 日，PICO 发布全员信，披露已被字节收购，将被并入字节 VR 相关业务线；
- 2022 年 9 月 27 日消息，PICO 在中国市场正式发布新一代 VR 一体机——PICO 4 系列，售价 2499 元起；

PICO 最新产品更新至 [pico4](https://nicelinks.site/redirect?url=https://www.picoxr.com/cn/products/pico4) （VR 一体机，畅玩版 8+256G，售价 ¥2949）；若是单纯从产品配置上来看，PICO 4 的确可圈可点。全系搭载高通骁龙 XR2 芯片、在不含绑带和电池的情况下，其重量仅相当于一瓶可乐，4K+ 超视感屏和 105 超大视角的画面，6DoF 空间头手定位让设备精准识别。

由于一篇名为「元宇宙：从 AR / VR 眼镜到数字虚拟人」的分享，从而得知 PICO 的存在，大致了解目下 AR / VR 除了软硬件有待加强之外，存在“内容存短板、盈利不清晰”等困难；而 Meta（前 Facebook）的 Oculus Quest 产品及平台，相比 PICO 表现更为出色；未来，无论 VR、乃至**元宇宙**布局，期待能不断有更出彩的产品与称赞的内容。

── 出自[倾城之链 - PICO 官方网站](https://nicelinks.site/post/634d69f3309ddd5ca75b81d1)

## [The podcast hosting platform for creators | Castos](https://nicelinks.site/post/634acfdeb1155e08ebc0227e)

**标签**：[`创作者`](https://nicelinks.site/tags/创作者) · [`播客`](https://nicelinks.site/tags/播客) · [`平台`](https://nicelinks.site/tags/平台)

> Castos is the podcast hosting platform for creators. We give you all the tools to grow your audience and monetize your content.

![倾城之链 - The podcast hosting platform for creators | Castos](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/castos.com.png?x-oss-process=style/png2jpg)

**推荐语**：[Castos](https://nicelinks.site/redirect?url=https://castos.com/) 是创作者的播客托管平台。他们为您提供了所有工具来增加您的受众并将您的内容货币化。他们的目标很简单：让 [播客](https://nicelinks.site/tags/播客) 变得容易，让所有人都可以访问。Castos 具有以下功能特征：

### 自动驾驶仪上的转录

从仪表板（dashboard）上单击即可录制播客，并按音频分钟支付低而固定的费用。

### 创建多个节目

使用 Castos 的系列功能，您可以创建任意多个单独的播客，所有播客都来自一个帐户。所有这些都以同样的低价出售。

### 发布受众收听的内容

在 Apple Podcasts、Spotify、Sticher、Google podcast、Amazon Music 和一系列应用程序中自动发布播客。

Castos 通过其托管平台和 WordPress 插件集成来实现这一点。该团队所有产品的目标是：提供易于使用的解决方案，以客户需求为先，并为客户提供真正英勇的支持。随着播客媒体的不断普及，越来越多的新播客加入到这种形式的内容中，Castos 将在这一过程中的每一步为您提供帮助。

通过在 Castos 托管平台上安装 30000 多个严重简单播客插件和数万名活跃客户，该团队学到了一些关于如何帮助您设置播客成功的知识。Castos 的团队拥有数十年的集体播客经验，Castos 通过他们的产品、服务和免费培训内容直接为您提供播客。

Castos 创作团队认为，好奇心、求知欲和不断追求进步与知识和经验同样重要（如果不是更重要的话）。Castos 是创作者的播客平台。在这里，你可以轻松地增加你的观众和赚钱播客。 [科技双眼啤](https://nicelinks.site/post/634aca0cb1155e08ebc02238) 便是基于 Castos 构建的一个科技`播客`平台；如果您有创建播客的想法，不妨可以基于 Castos 尝试下。

── 出自[倾城之链 - The podcast hosting platform for creators | Castos](https://nicelinks.site/post/634acfdeb1155e08ebc0227e)

## [科技双眼啤](https://nicelinks.site/post/634aca0cb1155e08ebc02238)

**标签**：[`创作者`](https://nicelinks.site/tags/创作者) · [`播客`](https://nicelinks.site/tags/播客) · [`分享`](https://nicelinks.site/tags/分享)

> 由开发者 Cali 与设计师 Rather 共同主持的「科技双眼啤」，我们是一档对互联网软件硬件从开发与设计不同视角深入探讨的科技播客。

![倾城之链 - 科技双眼啤](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/kjsyp.fm.png?x-oss-process=style/png2jpg)

**推荐语**：[科技双眼啤](https://nicelinks.site/redirect?url=https://kjsyp.fm/) ：「佐声道」出品，开发者 Cali 与设计师 Rather 共同主持的科技`播客`，这是一档对互联网软件硬件从开发与设计不同视角的深入探讨。

> 佐声道主理人 `Cali` 在留美期间，有丰富的工作经验，对于产品有极度的热爱以及不同的体验经历；设计师 Rather 一直在国内从事着 UI 设计师的工作，并在这一行有着不同的独特见解。同为苹果粉的两人一拍即合，他们也将自己对于产品的解读认知、对设计的严谨态度都延续到了他们所有的节目当中。

科技双眼啤，基于 [Castos](https://nicelinks.site/post/634acfdeb1155e08ebc0227e) 所构建，您可以通过 Spotify、Apple、Google Podcasts 等平台订阅，也可以在小宇宙、喜马拉雅等平台收听。

── 出自[倾城之链 - 科技双眼啤](https://nicelinks.site/post/634aca0cb1155e08ebc02238)

对倾城之链感兴趣的朋友，可通过 Web，小程序，快应用等渠道进行访问(后续将支持更多，如 VsCode 插件，Chrome 扩展等)。您有任何问题，欢迎随时向我们反馈（您可以通过官网反馈渠道，或添加如下倾情打赏），🤲 。

<div align="center">
  <img src="https://lovejade.oss-cn-shenzhen.aliyuncs.com/reward-code.jpeg"  width="200px" alt="倾城之链 - 倾情打赏">
</div>

## 本期文末寄语

**古之立大事者，不惟有超世之才，亦必有坚忍不拔之志**。昔禹之治水，凿龙门，决大河而放之海。方其功之未成也，盖亦有溃冒冲突可畏之患；**惟能前知其当然，事至不惧，而徐为之图，是以得至於成功**。── 北宋 · 苏轼《晁错论》

> [倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界；在这里，你可以轻松发现、学习、分享更多有用或有趣的事物。

<div align="center">
  <img src="https://lovejade.oss-cn-shenzhen.aliyuncs.com/wechat-article-qrcode.jpg" style="width: 200px;min-width: 200px;" alt="微信公众号 - 晚晴幽草轩"/>
</div>

## 您可能感兴趣的文章

- [优质网站同好者周刊（第 87 期）- 倾城之链](https://blog.nicelinks.site/weekly-087/)
- [优质网站同好者周刊（第 86 期）- 倾城之链](https://blog.nicelinks.site/weekly-086/)
- [优质网站同好者周刊（第 85 期）- 倾城之链](https://blog.nicelinks.site/weekly-085/)
- [优质网站同好者周刊（第 84 期）- 倾城之链](https://blog.nicelinks.site/weekly-084/)
- [优质网站同好者周刊（第 83 期）- 倾城之链](https://blog.nicelinks.site/weekly-083/)
- [优质网站同好者周刊（第 82 期）- 倾城之链](https://blog.nicelinks.site/weekly-082/)
- [优质网站同好者周刊（第 81 期）- 倾城之链](https://blog.nicelinks.site/weekly-081/)
- [优质网站同好者周刊（第 80 期）- 倾城之链](https://blog.nicelinks.site/weekly-080/)
- [优质网站同好者周刊（第 79 期）- 倾城之链](https://blog.nicelinks.site/weekly-079/)
- [优质网站同好者周刊（第 78 期）- 倾城之链](https://blog.nicelinks.site/weekly-078/)
- [优质网站同好者周刊（第 77 期）- 倾城之链](https://blog.nicelinks.site/weekly-077/)
- [开启技术变现之路，探索第三收入来源](https://www.jeffjade.com/2020/11/17/173-talk-about-nice-links/)
- [云集优站，尽在「倾城之链」](https://www.jeffjade.com/2017/12/31/136-talk-about-nicelinks-site/)
- [云集优站，尽在「倾城之链」其二](https://www.jeffjade.com/2018/12/23/146-talk-about-nice-links/)
- [欲问美图何处寻？倾城之链有定音](https://www.jeffjade.com/2019/02/17/151-aweome-beautiful-picture-website-list/ "欲问美图何处寻？倾城之链有定音")
- [超实用图片工具网站，值得典藏](https://www.jeffjade.com/2020/07/27/165-aweome-picture-tool-website-list/)
- [高质量免费 🆓 图标资源大全](https://www.jeffjade.com/2020/09/11/169-high-quality-free-icon-resource-collection/)
- [十佳 AI 产品工具，为生活添彩](https://www.jeffjade.com/2020/09/23/170-list-of-top-20-ai-product-tools/)
- [最想与朋友分享的网站列表](https://www.jeffjade.com/2020/09/01/168-list-of-websites-i-most-want-to-share-with-my-friends/)
