[倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界。此周刊，将汇聚过去一周[倾城](https://nicelinks.site/?utm_source=weekly)所收录的内容，以飨同好；欢迎推荐或自荐（仅限有独立域名的网站，可以是二级域名）。您如果要了解收录要求，请参见[关于倾城](https://nicelinks.site/about?utm_source=weekly)。

**备注**：本周刊**每周五**生成，首发于个人微信公众号[晚晴幽草轩](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI5MDIwMzM2Mg==&action=getalbum&album_id=1530765143352082433&scene=173&from_msgid=2650641087&from_itemidx=1&count=3#wechat_redirect)、博客[晚晴幽草轩](https://www.jeffjade.com)，以及[悠然宜想亭](https://forum.lovejade.cn/)社区；此一键生成脚本基于 [Deno](https://nicelinks.site/post/602d30aad099ff5688618591) 编写，并在 Github 开源：[nicejade/nicelinks-weekly](https://github.com/nicejade/nicelinks-weekly)。

## [Qwik | The HTML-first framework](https://nicelinks.site/post/62c6da01ac177b7aff5e1a6a)

**标签**：[`框架`](https://nicelinks.site/tags/框架) · [`Web开发`](https://nicelinks.site/tags/Web开发) · [`JavaScript`](https://nicelinks.site/tags/JavaScript)

> Qwik is Framework reimagined for the edge

![倾城之链 - Qwik | The HTML-first framework](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/qwik.builder.io.png?x-oss-process=style/png2jpg)

**推荐语**：[Qwik](https://nicelinks.site/redirect?url=https://qwik.builder.io/) ，一个 HTML 优先框架；它的设计是为了实现最快的页面加载时间，通过提供纯 HTML 和接近 0 的 JavaScript，使你的页面成为互动的，无论你的网站或应用程序有多复杂。它通过 HTML 的可恢复性和超细粒度的代码加载，来实现这一目标。它具有以下功能特征：

### 零负荷

Qwik 不进行水合作用，因为它是可恢复的。补水可能需要几秒钟，具体取决于您的应用程序的复杂性和移动设备的速度。即使在速度较慢的移动设备上，Qwik 应用程序也可以即时交互，从而获得完美的 Google PageSpeed 分数。

### 可恢复

Qwik 应用程序的生命始于 SSR/SSG。Qwik 在呈现应用程序时将应用程序的状态和框架状态序列化为 HTML。Qwik 可以在服务器在浏览器中停止的地方继续执行，因为 Qwik 需要的所有数据都在 HTML 中。在需要处理用户交互或渲染之前，无需下载或执行 JS。

### 延迟加载

永远不要再考虑延迟加载代码。Qwik 围绕延迟加载作为其核心原语而构建，并将其提升到一个全新的水平，而开发人员只需零投入。事件侦听器、渲染函数、副作用、创建块，所有这些都会根据需要进行延迟加载。

### 减少渲染

在用户交互时，Qwik 会对它重新渲染的组件进行手术。这是通过反应性完成的，并允许 Qwik 最大限度地减少下载和执行的渲染代码量。反应图建立在服务器上并在客户端上恢复，无需应用程序代码出现并重新运行。

### 可扩展性

下载到客户端的代码量与用户交互的复杂性成正比，而不是与当前路由上所有组件的大小成正比。即使应用程序的复杂性随着时间的推移而增长，您的站点也会保持高性能。

### 一次编码

Qwik 对服务器和客户端代码都有一个一致的思维模型。同一个组件可以在服务器上开始其生命周期并在客户端上处理用户事件。在服务器渲染上设置 DOM 侦听器，让它们在您的客户端交互中做好准备。

> [Qwik](https://nicelinks.site/redirect?url=https://qwik.builder.io/) ， 由 Builder.io 的工程师、谷歌的前 Angular 创造者 Misko、Stencil 和 Ionic 的创造者 Adam 和 Manu 构建。他们的使命是使用 Qwik、Partytown 和 Builder 大规模构建最快的真实网站。

除此之外，Qwik 还有其他特点，诸如：使用 Vite 即时开发、随时可用的大型工具生态系统、  内置可扩展样式（PostCSS）、  调试 SSR、浏览器、预渲染等等。值得一提的是它独树一帜的理念，与 SSR（服务端渲染）、SSG（静态页面生成）、 [AMP](https://nicelinks.site/post/5f75ea02cda9de27bd93a919) 等方案有所区别，Qwik 的目标是：干掉所有不必要的 `JS` 耗时（静态资源加载的耗时、以及 `JS` 运行时的耗时），从而快速实现网页可交互。如果说传统 `SSR` 的粒度是「整个页面」，那么 Qwik 的粒度是「组件中的某个方法」，这就导致在交互时再请求额外 JS。当然，Qwik 允许你指定「那些可能是用户大概率会操作的组件」，些组件逻辑对应 `JS` 代码会 `prefetch`，在不影响首屏渲染的前提下被预请求。

总结下：Qwik 的卖点是：将 JS 代码的拆分从常见的「**编译时**」（比如 Webpack 分块）、「运行时」（比如 dynamic import），变为「**交互时**」。对 JS 代码的极致拆分，只为达到一个目的—— 在首屏渲染时，移除你项目中 99% 的 JS 代码。感兴趣的朋友，不妨深入了解学习下。

── 出自[倾城之链 - Qwik | The HTML-first framework](https://nicelinks.site/post/62c6da01ac177b7aff5e1a6a)

## [麻花视频-2022 全网免费热门电影大全高分电视剧全集在线观看](https://nicelinks.site/post/62c6cea1ac177b7aff5e1a68)

**标签**：[`视频`](https://nicelinks.site/tags/视频) · [`娱乐`](https://nicelinks.site/tags/娱乐) · [`在线`](https://nicelinks.site/tags/在线)

**关键字**：麻花视频, 热门电影, 热门电视剧, 麻花视频, 最新电影, 平民影院

> 麻花视频（www.mhyyy.com）为您提供全能影视，麻花视频，平民影院，热门电影，热门电视剧，综艺，动漫等免费观看，最新电影，最新电视剧高清播放，无广告急速播放观看体验极佳,,用过都说好！

![倾城之链 - 麻花视频-2022全网免费热门电影大全高分电视剧全集在线观看](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/www.mhyyy.com.png?x-oss-process=style/png2jpg)

**推荐语**： [麻花视频](https://nicelinks.site/redirect?url=https://www.mhyyy.com/) ，支持在线观看高清、正版、免费大片的网站；据其官网介绍，包含：热门电影、热门电视剧、综艺动漫等内容；最新电影，最新电视剧高清播放，无广告、急速播放、观看体验极佳（实际体验，片头有点广告，访问体验还可以）。它具有以下优势和特色：

### 优势

- 最新热门 VIP 资源同步更新，官版推出后，5 ～ 30 分钟即可本站免费观看；
- 20 万+国内外影片、电视剧、综艺、动漫，百度搜不到的咱这里都有；
- 十大线路视频源，总有一个适合你极速秒开；
- 强大的搜索功能，只有想不到没有搜不到；
- 无需安装 APP 即可享受堪比 APP 客户端的观影体验。
- 全面支持所有设备、主流十余种分辨率比例。
- 支持系统：网页、iOS、安卓、iPad、Mac、Windows；
- 支持投屏到电视观看；

### 特色

- 超大影片海报，营造沉浸式观影体验，极具视觉冲击力。
- 极致的网站设计，前端体验，获得众多同行的高度赞扬。
- 提升观影体验、降低网站层级、无需影片介绍等中间页面再次跳转。
- 像 QQ 好友一样的片源、选集切换，更易上手操作

### 沉浸式观影体验

- 持续添加优质线路、视频源供您切换，画质清晰、播放流畅；
- 像 QQ 好友列表一样的选集模式，更加简单、易上手；
- 视频主要分为**电影**、**电视剧**、**动漫**、**综艺**等；
- 影视分类精细完善、内容筛选功能强大、搜索功能简约又不失重点内容的呈现。

值得一提的是， [麻花视频](https://nicelinks.site/redirect?url=https://www.mhyyy.com/) 提供 APP 客户端级的移动端体验，实际基于手机或微信体验，有被提示打开存在安全风险；感兴趣的朋友，可了解下。

── 出自[倾城之链 - 麻花视频-2022 全网免费热门电影大全高分电视剧全集在线观看](https://nicelinks.site/post/62c6cea1ac177b7aff5e1a68)

## [茶杯虎 - 第二代影视综合搜索引擎-茶杯狐](https://nicelinks.site/post/62c66dc9ac177b7aff5e1a66)

**标签**：[`电影`](https://nicelinks.site/tags/电影) · [`分享`](https://nicelinks.site/tags/分享) · [`娱乐`](https://nicelinks.site/tags/娱乐)

> 综合影视搜索引擎，通过电影名、演员、导演、电视剧、动漫等关键词进行搜索，直达电影资源站。

![倾城之链 - 茶杯虎 - 第二代影视综合搜索引擎-茶杯狐](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/www.aisobb.com.png?x-oss-process=style/png2jpg)

**推荐语**：[茶杯虎](https://nicelinks.site/redirect?url=https://www.aisobb.com/) ，是目前使用影视搜索第二代引擎，通过电影名、演员、导演、电视剧、动漫等关键词进行搜索，直达电影资源站，与影视搜索届大哥[茶杯狐](https://nicelinks.site/post/60311ec06eaf2a7660805af4)不同的是，增加了**影视评论**，以及剧情详细介绍，未来会增加影视「分集剧情」，让电影搜索类更高效、更便捷、更精准！

── 出自[倾城之链 - 茶杯虎 - 第二代影视综合搜索引擎-茶杯狐](https://nicelinks.site/post/62c66dc9ac177b7aff5e1a66)

## [Powerful, online SVG editor for teams](https://nicelinks.site/post/62c5a36da33208743e33be26)

**标签**：[`SVG`](https://nicelinks.site/tags/SVG) · [`图片编辑器`](https://nicelinks.site/tags/图片编辑器) · [`工具`](https://nicelinks.site/tags/工具)

> Vecta is a real time, collaborative SVG editor with a powerful Javascript based plugin system, for teams. Easily extend and automate, or create flowcharts, UML, network, isometric and web diagrams with thousands of included symbols. Export to multiple formats and resolution, including PNG, JPG and minified SVG that is very small in size and renders beautifully on all devices.

![倾城之链 - Powerful, online SVG editor for teams](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/vecta.io.png?x-oss-process=style/png2jpg)

**推荐语**：[Vecta](https://nicelinks.site/redirect?url=https://vecta.io/) ，是一款功能强大的矢量图形编辑器，使得创建、使用和共享矢量图形变得非常简单；它具有内置协作、CAD 功能、基于 JavaScript 的插件和 SVG 优化器，让每个人都可以比以往更快地创建图形。Vecta 具有以下功能特征：

### 可使用基于 Javascript 的插件完全扩展

创建您自己的自定义插件，来绘制分形树，或者只需单击一下，即可生成材料清单。放下您的数据，让软件为您完成所有绘图。

### 带有内置 SVG 缩小器的小文件大小

[Vecta](https://nicelinks.site/redirect?url=https://vecta.io/) 有提供 [Nano](https://nicelinks.site/redirect?url=https://vecta.io/nano) ，它是世界上最好的（平均小 22%）SVG 缩小器之一，您可以基于该工具，来压缩您的 SVG 尺寸，从而优化您的网站。

### 为精准而生

Vecta 具有多种单位、缩放和测量工具，可让您以像素、毫米、厘米或英寸为单位，准确地创建各种令人惊叹的图表。

### 导入 AutoCAD 绘图、Visio 模具和绘图

将 Autocad 绘图、Visio 模具和绘图拖放到 Vecta 中，即可立即对其进行编辑。立即共享或重复使用数千个绘图和符号。

### 强大的所见即所得编辑器

使用 Vecta 强大的编辑器创建清晰、像素完美的 SVG 图形。在 100% 缩放时，您所看到的正是您将图像输出为各种格式（包括 PNG、JPG、SVG 和 PDF）时所得到的。

### 适合所有人的有吸引力的符号和图标

使用和重复使用可共享模板中的数千个漂亮符号，以简单的方式生成令人惊叹的图形。创建更多符号并与您的团队分享，以获得最大的生产力。

### 使用公式和表达式，事半功倍

轻松创建可扩展以适应更多文本的智能形状，或在调整大小时更改颜色以指示状态。更好的是，使用公式绘制器复制智能行为并将其应用于另一个。

除此之外，Vecta 支持广泛的协作工具，使您能够与队友更好地沟通和工作。您可以创建一个帐户，并使用简单的图表启动您的项目。在 Vecta 上与您的团队轻松绘图、共享和协作。

── 出自[倾城之链 - Powerful, online SVG editor for teams](https://nicelinks.site/post/62c5a36da33208743e33be26)

## [HelloGitHub 分享 GitHub 上入门级、有趣的开源项目](https://nicelinks.site/post/62c3096390375e5be8bc9d46)

**标签**：[`Github`](https://nicelinks.site/tags/Github) · [`开源`](https://nicelinks.site/tags/开源) · [`分享`](https://nicelinks.site/tags/分享)

> 分享 GitHub 入门级、有趣的开源项目。推广自己的开源项目、编程实践项目、适合练手的开源项目、HelloGitHub 月刊

![倾城之链 - HelloGitHub 分享 GitHub 上入门级、有趣的开源项目](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/hellogithub.com.png?x-oss-process=style/png2jpg)

**推荐语**： [HelloGitHub](https://nicelinks.site/redirect?url=https://hellogithub.com/) ，旨在分享 [GitHub](https://nicelinks.site/post/59ba80d93df6765c75b77911) 入门级、有趣的开源项目。您可以在这里，推广自己的**开源**项目、编程实践项目、适合练手的开源项目，作者会将汇聚其中部分，融汇为 HelloGitHub 月刊，每月 28 号发布最新一期。

### HelloGitHub 是什么？

最开始作者只是想把自己在浏览 GitHub 过程中，发现的有意思、高质量、容易上手的项目收集起来，这样便于以后查找和学习。后来打算把这些有意思、有价值的开源项目分享给大家。最后就写了这个网站，便于查看和分享。

### 在这里你能得到什么？

各种语言的开源项目、让生活变得更美好的工具、书籍、学习笔记、教程等。通过这些项目，你将学习到更多编程知识、提高自己的编程技巧、发现编程的乐趣。

### 兴趣是最好的老师

作者是偶然的机会，接触到了 Python，发现编程如此容易上手，有乐趣。然后开始写东西、解决问题、学习别人的代码，为了写出更有价值的程序。作者发现什么"撸"多了，都上瘾，代码也是一样。

### 作者推荐 Github

在 [GitHub](https://nicelinks.site/post/59ba80d93df6765c75b77911) ，你能做的不只是**编程**：会编程的可以贡献代码，不会编程的朋友，可以反馈使用这些工具中的 Bug、帮着宣传你觉得优秀的项目、Star 仓库、阅读观点、探讨问题。注册个 GitHub 帐号，加入开源社区，即可开启这段奇妙旅程。

── 出自[倾城之链 - HelloGitHub 分享 GitHub 上入门级、有趣的开源项目](https://nicelinks.site/post/62c3096390375e5be8bc9d46)

对倾城之链感兴趣的朋友，可通过 Web，小程序，快应用等渠道进行访问(后续将支持更多，如 VsCode 插件，Chrome 扩展等)。您有任何问题，欢迎随时向我们反馈（您可以通过官网反馈渠道，或添加如下倾情打赏），🤲 。

<div align="center">
  <img src="https://lovejade.oss-cn-shenzhen.aliyuncs.com/reward-code.jpeg"  width="200px" alt="倾城之链 - 倾情打赏">
</div>

## 本期文末寄语

那些疯狂的人、不合时宜的人、叛逆者及麻烦制造者，他们都是异类，看待事物的眼光与别人不同，但他们能改变一切，推动人类前行，或许有人认为，他们都是疯子，但在我们眼中，他们都是天才。── 史蒂夫 · 乔布斯

> [倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界；在这里，你可以轻松发现、学习、分享更多有用或有趣的事物。

<div align="center">
  <img src="https://lovejade.oss-cn-shenzhen.aliyuncs.com/wechat-article-qrcode.jpg" style="width: 200px;min-width: 200px;" alt="微信公众号 - 晚晴幽草轩"/>
</div>

## 您可能感兴趣的文章

- [优质网站同好者周刊（第 72 期）- 倾城之链](https://blog.nicelinks.site/weekly-072/)
- [优质网站同好者周刊（第 71 期）- 倾城之链](https://blog.nicelinks.site/weekly-071/)
- [优质网站同好者周刊（第 70 期）- 倾城之链](https://blog.nicelinks.site/weekly-070/)
- [优质网站同好者周刊（第 69 期）- 倾城之链](https://blog.nicelinks.site/weekly-069/)
- [优质网站同好者周刊（第 68 期）- 倾城之链](https://blog.nicelinks.site/weekly-068/)
- [优质网站同好者周刊（第 67 期）- 倾城之链](https://blog.nicelinks.site/weekly-067/)
- [优质网站同好者周刊（第 66 期）- 倾城之链](https://blog.nicelinks.site/weekly-066/)
- [优质网站同好者周刊（第 65 期）- 倾城之链](https://blog.nicelinks.site/weekly-065/)
- [优质网站同好者周刊（第 64 期）- 倾城之链](https://blog.nicelinks.site/weekly-064/)
- [优质网站同好者周刊（第 63 期）- 倾城之链](https://blog.nicelinks.site/weekly-063/)
- [优质网站同好者周刊（第 62 期）- 倾城之链](https://blog.nicelinks.site/weekly-062/)
- [开启技术变现之路，探索第三收入来源](https://www.jeffjade.com/2020/11/17/173-talk-about-nice-links/)
- [云集优站，尽在「倾城之链」](https://www.jeffjade.com/2017/12/31/136-talk-about-nicelinks-site/)
- [云集优站，尽在「倾城之链」其二](https://www.jeffjade.com/2018/12/23/146-talk-about-nice-links/)
- [欲问美图何处寻？倾城之链有定音](https://www.jeffjade.com/2019/02/17/151-aweome-beautiful-picture-website-list/ "欲问美图何处寻？倾城之链有定音")
- [超实用图片工具网站，值得典藏](https://www.jeffjade.com/2020/07/27/165-aweome-picture-tool-website-list/)
- [高质量免费 🆓 图标资源大全](https://www.jeffjade.com/2020/09/11/169-high-quality-free-icon-resource-collection/)
- [十佳 AI 产品工具，为生活添彩](https://www.jeffjade.com/2020/09/23/170-list-of-top-20-ai-product-tools/)
- [最想与朋友分享的网站列表](https://www.jeffjade.com/2020/09/01/168-list-of-websites-i-most-want-to-share-with-my-friends/)
