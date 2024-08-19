[倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界。此周刊，将汇聚过去一周[倾城](https://nicelinks.site/?utm_source=weekly)所收录的内容，以飨同好；欢迎推荐或自荐（仅限有独立域名的网站，可以是二级域名）。您如果要了解收录要求，请参见[关于倾城](https://nicelinks.site/about?utm_source=weekly)。

**备注**：本周刊**每周五**生成，首发于个人微信公众号[晚晴幽草轩](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI5MDIwMzM2Mg==&action=getalbum&album_id=1530765143352082433&scene=173&from_msgid=2650641087&from_itemidx=1&count=3#wechat_redirect)、博客[晚晴幽草轩](https://www.jeffjade.com)，以及[悠然宜想亭](https://forum.lovejade.cn/)社区；此一键生成脚本基于 [Deno](https://nicelinks.site/post/602d30aad099ff5688618591) 编写，并在 Github 开源：[nicejade/nicelinks-weekly](https://github.com/nicejade/nicelinks-weekly)。

## [Zig Programming Language ⚡](https://nicelinks.site/post/6514f6175a51096c8697a46d)

**标签**：[`编程语言`](https://nicelinks.site/tags/编程语言) · [`编程`](https://nicelinks.site/tags/编程) · [`开源`](https://nicelinks.site/tags/开源)

> General-purpose programming language and toolchain for maintaining robust, optimal, and reusable software.

![倾城之链 - Zig Programming Language ⚡](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/ziglang.org.png?x-oss-process=style/png2jpg)

**推荐语**：[Zig](https://nicelinks.site/redirect?url=https://ziglang.org/) 是一门开源的 [编程语言](https://nicelinks.site/tags/编程语言) ，专为稳定性、可维护性和最优性而设计。具有以下值得关注的特性：手动管理内存；**与 C 语言竞争而非依赖它**，Zig 标准库不依赖于 libc；轻量而简单的语言，专注于调试应用而不是调试编程语言的知识.....更详细说明如下：

### ⚡ 简单的语言

专注于调试您的应用程序，而不是调试您的编程语言知识。

- 无隐藏控制流。
- 没有隐藏的内存分配。
- 没有预处理器，没有宏。

Zig 通过使用语言关键字和函数调用专门管理所有控制流，从而促进代码维护和可读性。

### ⚡ 电脑时间

一种基于编译时代码执行和惰性求值的元编程新方法。

- 在编译时调用任何函数。
- 将类型作为值进行操作，无需运行时开销。
- Comptime 模拟目标架构。

### 顺序独立的顶级声明

诸如全局变量之类的顶级声明是与顺序无关的并且是延迟分析的。全局变量的初始化值在编译时评估。

### 手动内存管理

用 Zig 编写的库可以在任何地方使用：桌面应用程序、低延迟服务器、**操作系统内核**、嵌入式设备、实时软件，例如现场表演、飞机、起搏器、在 Web 浏览器或其他带有 WebAssembly 的插件中、通过其他编程语言，使用 C ABI.....为了实现这一点，**Zig 程序员必须管理自己的内存，并且必须处理内存分配失败**。

Zig 标准库也是如此。任何需要分配内存的函数都接受分配器参数。因此，Zig 标准库甚至可以用于独立式目标。除了对错误处理的全新尝试之外，Zig 还提供 defer 和 errdefer 来使所有资源管理（不仅仅是内存）变得简单且易于验证。

### ⚡ 用 Zig 维护它

逐步改进您的 C/C++/Zig 代码库。

- 使用 Zig 作为零依赖、嵌入式 C/C++ 编译器，支持开箱即用的交叉编译。
- 利用 `zig build` 跨所有平台创建一致的开发环境。
- 为 C/C++项目添加 Zig 编译单元；默认情况下启用跨语言 LTO。

除上述特征之外，还具有更多特点，诸如：通用数据结构和函数、编译时反射和编译时代码执行、通过异步函数实现并发、支持广泛的目标、对包维护者友好.... 如果您对其感兴趣，不妨移步前往 [Zig 深入概述](https://ziglang.org/learn/overview/) 从而了解更多。

**Zig 社区是去中心化的**，任何人都可以自由创建和维护自己的社区聚集空间。没有“官方”或“非官方”的概念，但是每个聚会场所都有自己的主持人和规则。

Zig 软件基金会是一家非营利性公司，由 Zig 的创建者 Andrew Kelley 于 2020 年创立，旨在支持该语言的开发。目前，ZSF 能够以具有竞争力的价格向少数核心贡献者提供有偿工作。他们希望将来能够将此优惠扩展到更多核心贡献者。值得一提的是 [Zig 在 Github 仓库开源](https://github.com/ziglang/zig) （截止 2023 年 09 月 28 日，已获得 26.1K+ Star），如果您对其感兴趣，可前往了解更多。

── 出自[倾城之链 - Zig Programming Language ⚡](https://nicelinks.site/post/6514f6175a51096c8697a46d)

## [Nue / Frontend troublesolver](https://nicelinks.site/post/651256705a51096c869792ef)

**标签**：[`JavaScript`](https://nicelinks.site/tags/JavaScript) · [`框架`](https://nicelinks.site/tags/框架) · [`Web开发`](https://nicelinks.site/tags/Web开发)

> Build user interfaces with cleaner code. Alternative to React, Vue, and Svelte.

![倾城之链 - Nue / Frontend troublesolver](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/nuejs.org.png?x-oss-process=style/png2jpg)

**推荐语**：[Nue JS](https://nicelinks.site/redirect?url=https://nuejs.org/) 是一个非常小的（压缩后 2.3kb） [JavaScript](https://nicelinks.site/tags/JavaScript) 库，用于构建 Web 界面。 [它是即将推出的 Nue 工具集](https://nuejs.org/tools/) 的核心。它就像 [Vue.js](https://nicelinks.site/post/5b1a221c0526c920d6dfaada) 、 [React.js](https://nicelinks.site/post/5b1294b5e93ed2618cfac134) 或 [Svelte](https://nicelinks.site/post/62a9c2ad90509e23cea772c0) ，但没有钩子、效果、道具、门户、观察者、提供、注入、悬挂或其他不寻常的抽象。了解 HTML、CSS 和 JavaScript 的基础知识，就可以开始了。**为什么是 Nue.js** ？

[Nue](https://nicelinks.site/redirect?url=https://nuejs.org/) 是一个让前端开发变得更加愉快的工具集。这是对 Vue、React 和 Svelte 等生态系统以及 Vite、Next.js 和 Astro 等 Web 开发框架的彻底改革。

> Nue 使用**渐进增强、关注点分离**和**语义 Web 设计**来提供新水平的性能、更好的可扩展性和大幅改进的开发体验。

Nue 是在 MIT 许可下发布的开源软件。 [这是一项工程尝试，旨在为普遍存在的前端疲劳](https://nuejs.org/backstory/) 问题提供长期解决方案。

### 创建网站和网络应用程序

Nue 是一个 Web 应用程序构建器，为单页应用程序 (SPA)和多页应用程序 (MPA)提供一流的支持：

- **多页面应用程序**
  - 由多个 HTML 页面组成；
  - 博客、文档、营销页面等；
  - 服务器端渲染；
  - 客户端 JavaScript 是可选的；
  - 搜索引擎优化

在多页面模式下，开发体验针对 UX 开发人员和内容创建者进行了优化。

- **单页应用程序**

  - 由单个 HTML 页面组成；
  - 管理仪表板、入职流程、调查……
  - 客户端渲染；
  - 需要客户端 JavaScript；
  - 通常对搜索引擎隐藏；

单页模式针对 UX 开发者和 JS/TS 开发者优化了开发体验。该应用程序使用客户端 Nue JS 进行渲染。

### 面向 UX 工程师、JavaScript 开发人员和内容创建者

Nue 采用**关注点分离**，使您的代码更易于 Web 团队的所有成员阅读、理解和扩展。这可以帮助您显着加快行动速度，因为您的团队成员可以独立工作，而不会妨碍其他人或破坏他们的代码。

- **用户体验开发人员**：用户体验开发人员使用 Nue JS 只关注结构、布局和交互设计，而无需花时间在钩子、效果或其他复杂的框架内部。
- **JavaScript 开发人员**：JavaScript 开发人员可以只专注于业务模型、网络和其他前端后端功能。
- **内容创作者**：撰稿人、营销人员和其他非技术人员可以使用人性化的 Nuemark 语法进行内容管理。他们纯粹专注于内容，无法破坏样式或创建 JS bug。

### 通用热重载

通过将内容、样式、布局和逻辑整齐地分开，Nue 提供了一个强大的功能，称为“通用热重载”；您所做的一切：编辑内容、添加新资源、更改布局、修改服务器端组件、编辑响应式组件或进行设计更改，这些更改都会立即反映在浏览器上。

借助此功能，UX 开发人员、JavaScript 开发人员和内容创建者可以更快地行动并享受明显更好的开发人员体验。

### 极简主义

当前的框架、UI 小部件、单页应用程序、网站和构建工具比其应有的规模大 10-100 倍，也更复杂。**少即是多**，极简主义的好处远远超出了仅提供较小的 [JavaScript](https://nicelinks.site/tags/JavaScript) 文件：

1.  更易于维护：当您的代码减少 10 倍时，维护和开发项目所需的人员就会显着减少。
2.  更容易使用：API 方法和配置变量很少。需要学习的内容更少，您需要的“样板”代码也更少，因此您可以更快地行动。
3.  bug 更少：Nue 代码库很小：问题的表面更少，并且 bug 更容易定位。
4.  更快：Nue 更快，因为内部逻辑更简单，并且传输的千字节更少。

开发人员想要编写的代码量已经有点失控了。今天的世界是这样的：

> React.js 是 109kb 的压缩 JavaScript（压缩后为 35kb），Vue.js 为 97kb（压缩后为 34kb），Nue.js 为 4.7kb（压缩后为 2.2kb）。对于做大致相同的事情，React 和 Vue 比 Nue 的膨胀要大一个数量级。

### 极致性能

得益于极简主义，Nue 可以在互联网上技术上实现最快的页面渲染性能。秘诀在于遵守 TCP 慢启动算法中的 14kb 规则。当包含渲染初始视口的所有内容和样式的 HTML 请求低于 14kb 时，页面加载速度会显着加快。

Nue 之所以很快，是因为一种被低估的技术，称为**渐进增强**。首先加载内容和主 CSS，然后加载辅助 CSS，最后加载 JavaScript。使用任何其他方法都无法获得更快的速度。

虽然像 Astro 这样的框架已经采取了逐步增强的措施，但由于 [意大利面条代码](https://nuejs.org/compare/homepages.html#Astro) ，它们很难将内容和 CSS 适合第一个 HTTP 数据包。

**背景故事**：当作者 [@tipiirai](https://twitter.com/tipiirai) 在 Flowplayer、Muut 和 Volument 担任 CPO 时，在前端开发中遇到了问题。虽然项目开始时进展顺利，但很快就变得难以维护。经过几个月的发展，步伐明显放缓，乐观的未来计划开始变得不切实际。他不想自己的职业生涯就这样结束。引入了一些突破性的概念，例如关注点分离、语义 HTML 和渐进增强等，从而创建了 Nue.js。

Nue 是改变现状的一次雄心勃勃的尝试。它为 JS 和 UX 开发人员提供了极其简单的工具。它带回了网络标准模型并用最新的创新创造了它。它试图让 Web 开发再次变得有趣。如果您对该框架感兴趣，可移步至 [Github 开源仓库](https://github.com/nuejs/nuejs) （截止 2023 年 09 月 26 日，收获 3K+ Star），从而了解更多。

── 出自[倾城之链 - Nue / Frontend troublesolver](https://nicelinks.site/post/651256705a51096c869792ef)

## [Histoire | ⚡ Fast and beautiful interactive component playgrounds](https://nicelinks.site/post/651244185a51096c8697918b)

**标签**：[`Svelte`](https://nicelinks.site/tags/Svelte) · [`Vue`](https://nicelinks.site/tags/Vue) · [`Playground`](https://nicelinks.site/tags/Playground)

> Fast and beautiful interactive component playgrounds, powered by Vite.

![倾城之链 - Histoire | ⚡ Fast and beautiful interactive component playgrounds](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/histoire.dev.png?x-oss-process=style/png2jpg)

**推荐语**：[Histoire](https://nicelinks.site/redirect?url=https://histoire.dev/) ⚡ 快速、美观的交互式组件游乐场，由 [Vite](https://nicelinks.site/post/6010e1b10c71de1fb957b64e) 提供支持；截止目前（2023 年 09 月 26 日）支持 [Vue2 / 3](https://nicelinks.site/post/5b1a221c0526c920d6dfaada) 、 [Svelte](https://nicelinks.site/post/62a9c2ad90509e23cea772c0) 等框架；它具有如下功能特征：

- **📖 故事**：编写故事来展示和记录您的组件。
- **⚡ 快**：令人难以置信的快速开发构建和生产页面加载！
- **🔧️ 无配置**：健全且可配置的默认设置，自动重用您的 Vite 配置！
- **🎨 主题化**：使用您自己的品牌自定义生成的应用程序的外观。
- **💻️ 可复制代码**：自动生成动态模板源码！
- **🌙 深色模式**：夜间享受更愉悦的体验。
- **📖 Markdown 文档**：使用带有代码片段和语法突出显示的（可扩展）Markdown 将文档添加到您的故事中。
- **🎹 灵活的控制**：将您自己的组件和逻辑放入故事控制窗格中！或者使用内置控件。
- **📱 响应式测试**：调整预览大小以在不同的屏幕尺寸上测试您的设计。根据您的喜好自定义预设。
- **📷 视觉回归测试**：在 Percy 的支持下，当您的书基于 CI 构建时，拍摄您的故事快照。
- **🎨 自动设计令牌**：Histoire 将自动检测您的 Tailwind CSS 配置并为您生成设计系统故事。
- **🔍 快速模糊搜索**：您的书中内置了真正的搜索索引；无需外部服务即可搜索您的故事甚至文档中的文本。而且它真的很快！
  Histoire （法语中“故事”的意思，发音 `/is.twaʁ/`）是一个生成故事应用程序（或“书籍”）的工具。Story 是一种场景，您在浏览器中展示特定用例的一个或多个组件。Stories 之所以有用，有几个原因：

- 为其他开发人员组织和记录组件；
- 展示您的组件涵盖的不同用例；
- 独立开发组件；
- 通过截图测试视觉回归；

在 Histoire 中，故事包含一个或多个变体，它们是围绕同一主题或同一组件的不同用例。它可以为您提供：故事的交互式预览、可复制代码以在您自己的代码中重现相同的结果、与预览交互的控件、从 Markdown 呈现的文档等等； [Histoire 项目在 Github 仓库开源](https://github.com/histoire-dev/histoire) ，如果您对其感兴趣，可移步从而了解更多。

── 出自[倾城之链 - Histoire | ⚡ Fast and beautiful interactive component playgrounds](https://nicelinks.site/post/651244185a51096c8697918b)

## [pandas - Python Data Analysis Library](https://nicelinks.site/post/651135c35a51096c86978b41)

**标签**：[`数据分析`](https://nicelinks.site/tags/数据分析) · [`Python`](https://nicelinks.site/tags/Python) · [`开源`](https://nicelinks.site/tags/开源)

> Flexible and powerful data analysis / manipulation library for Python, providing labeled data structures similar to R data.frame objects, statistical functions, and much more.

![倾城之链 - pandas - Python Data Analysis Library](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/pandas.pydata.org.png?x-oss-process=style/png2jpg)

**推荐语**：[pandas](https://nicelinks.site/redirect?url=https://pandas.pydata.org/) 适用于 [Python](https://nicelinks.site/tags/Python) 的灵活而强大的数据分析、操作库，提供类似于 R data.frame 对象的标记数据结构、统计函数等。它具有如下功能特征：

- 快速高效的 **DataFrame** 对象，用于具有集成索引的数据操作；
- 用于在内存数据结构和不同格式之间**读写数据的**工具：CSV 和文本文件、Microsoft Excel、SQL 数据库以及快速 HDF5 格式；
- 智能**数据对齐**和**缺失数据**综合处理：在计算中实现基于标签的自动对齐，轻松将杂乱的数据整理成有序的形式；
- 数据集的灵活**重塑和旋转；**
- 基于智能标签的**切片**、**花式索引**和   大型数据集的**子集；**
- 可以在数据结构中插入和删除列，以实现**大小可变**；
- **使用强大的分组**引擎聚合或转换数据，允许对数据集进行拆分-应用-组合操作；
- 数据集的高性能**合并和连接；**
- **分层轴索引**提供了一种在低维数据结构中处理高维数据的直观方法；
- **时间序列**-功能：日期范围生成和频率转换、移动窗口统计、日期平移和滞后。甚至创建特定于域的时间偏移并连接时间序列而不会丢失数据；
- 高度**优化性能**，关键代码路径用 [Cython](https://cython.org/) 或 C 编写。
- Python 与 pandas 广泛应用于各种**学术和商业**领域，包括金融、神经科学、经济学、统计、广告、网络分析等。

**使命**：pandas 的目标是成为用 Python 进行实际、真实世界数据分析的基本高级构建块。此外，它还有更广泛的目标，即成为任何语言中最强大、最灵活的开源数据分析、操作工具。

总的来讲，[pandas](https://nicelinks.site/redirect?url=https://pandas.pydata.org/) 是一个 Python 软件包，它提供快速、灵活和富有表现力的数据结构，旨在使 "关系 "或 "标记 "数据的处理变得简单而直观。它的目标是成为用 Python 进行实际数据分析的基本高级构建模块。此外，它还有一个更广泛的目标，即成为任何语言中最强大、最灵活的开源数据分析/处理工具。它已经在实现这一目标的道路上迈出了坚实的一步。值得一提的是，[pandas 在 Github 仓库开源](https://github.com/pandas-dev/pandas)（截止 2023 年 09 月 25 日，共获得 39.8K+ Star），如果您对该项目感兴趣，不妨移步官网从而了解更多。

── 出自[倾城之链 - pandas - Python Data Analysis Library](https://nicelinks.site/post/651135c35a51096c86978b41)

## [Flourish | Data Visualization & Storytelling](https://nicelinks.site/post/65111698847b841389e21d8b)

**标签**：[`可视化`](https://nicelinks.site/tags/可视化) · [`转化`](https://nicelinks.site/tags/转化) · [`图表`](https://nicelinks.site/tags/图表)

> Beautiful, easy data visualization and storytelling

![倾城之链 - Flourish | Data Visualization & Storytelling](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/flourish.studio.png?x-oss-process=style/png2jpg)

**推荐语**：[Flourish](https://nicelinks.site/redirect?url=https://flourish.studio/) ，轻松将您的数据转化为令人惊叹的图表、地图和互动故事。通过这个网站，您可以很轻松的使用生成市面上很火的动态柱状图、动态折线图、地图、关系图、气泡图、网络图。当然这个网站还有其他新型和丰富的可视化图表，功能强大可以满足你的需求，你都可以打开每一个图表进行研究。具体来讲，Flourish 可以为您带来如下功能价值：

### 吸引观众

创建机构品质的数据图形和动画故事，让您的数据栩栩如生。

### 赋予整个团队权力

Flourish 非常简单，任何人都可以使用。从模板开始并添加数据。

### 嵌入、分享、呈现

创建无缝嵌入、神奇演示或引人入胜的社交内容。

### 你的品牌，你的风格

获取自定义主题，以便所有内容都有您的徽标、字体、颜色和样式。

每天，成千上万的组织使用 Flourish 与数百万观众进行交流。Flourish 使用场景有：

- **商业用途**：改变您的企业探索数据并向内部和外部受众呈现数据的方式。
- **对于机构**：创建您的客户可以轻松编辑、发布和使用新数据刷新的交互内容。
- **对于新闻编辑室**：为记者和开发人员提供支持。申请 Flourish 的特别新闻编辑室计划。

Flourish 可用于扩展和管理任何类型的交互式内容。开发人员可以轻松地将定制的私人模板添加到您的帐户。将其视为交互式内容的 CMS。

Flourish 的创建是为了让每个人都能用数据讲故事。该工具于 2018 年推出，每天被庞大的创作者社区用来向数千万观众提供信息。该团队结合了 [可视化](https://nicelinks.site/tags/可视化) 、技术、数据、新闻和设计领域数十年的经验。

── 出自[倾城之链 - Flourish | Data Visualization & Storytelling](https://nicelinks.site/post/65111698847b841389e21d8b)

## [i365 科技](https://nicelinks.site/post/650ed895847b841389e215a1)

**标签**：[`官网`](https://nicelinks.site/tags/官网) · [`产品推荐`](https://nicelinks.site/tags/产品推荐) · [`推广`](https://nicelinks.site/tags/推广)

> i365 科技：Dawei Ma 个人作品集落地页。

![倾城之链 - i365 科技](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/www.i365.tech.png?x-oss-process=style/png2jpg)

**推荐语**：[i365 科技](https://nicelinks.site/redirect?url=https://www.i365.tech/) 是 Dawei Ma 为个人作品集所塑造的落地页（基于 React、Next.js、Node.js 等工具搭建）。作者有陆续搭建以下几款产品：

### Chat2Invest

[Chat2Invest](https://nicelinks.site/redirect?url=https://www.chat2invest.com/) 是一款基于 [ChatGPT](https://nicelinks.site/tags/ChatGPT) 的支持多语言的 AI 投资助手，它能够从基本面、技术面与消息面等多个维度为您提供投资建议。它支持 A 股与美股共计超过 13000 只股票与 ETF 的分析，未来还将支持通过多种投资策略筛选股票。

### 我的投资助手

[我的投资助手](https://nicelinks.site/redirect?url=https://www.myinvestpilot.com/) 是一款旨在帮助用户构建自己的交易系统的计划。它包括了 [Chat2Invest](https://nicelinks.site/redirect?url=https://www.chat2invest.com/) 这个 AI 投资助手，以及多种投资交易策略的提醒工具，帮助用户评估交易能力的投资组合管理工具，以及一个专属的知识星球社区，用于分享投资知识和经验。无论是新手还是有经验的投资者，都可以通过“我的投资助手”来制定自己的投资计划，更加理性地进行投资决策，实现财富增值的目标。

### myGPTReader

[myGPTReader](https://nicelinks.site/redirect?url=https://www.myreader.io/) 是一个 Slack 机器人，它可以阅读任何网页、电子书、视频（YouTube）或文件，并通过 ChatGPT 进行总结。它还能通过语音与你交谈。

### 文章智造

[文章智造](https://nicelinks.site/redirect?url=https://www.mywriter.ink/) 是一款由 ChatGPT 驱动的 [AI](https://nicelinks.site/tags/AI) 聊天机器人，能够帮助您快速生成高质量文章。作为您的 AI 专业写手，它可以自动生成各种类型的文章，包括论文、演讲稿、读后感、情感分析、聊天回复等。不需要繁琐的操作和编写，只需要简单的聊天就可以轻松获得您需要的文章，让您的写作更加高效和便捷。

作者一位从事软件开发技术近十年的专业人士，有丰富的经验和广泛的背景，有维护博客：[构建我的被动收入](https://nicelinks.site/post/6229e10d4e5ca071558f95b6)；曾在国企、私企、创业公司、外企工作，并曾有过一段个人创业经历。此外，在投资交易领域也有近十年的经验。如果你读过他撰写的 [技术](https://bmpi.dev/dev/) 与 [投资](https://bmpi.dev/money/) 类文章，或许你能够深入了解我的专业背景。作者也提供以下方面的咨询服务：**终身学习**、**全栈开发**、**投资交易**。

── 出自[倾城之链 - i365 科技](https://nicelinks.site/post/650ed895847b841389e215a1)

对倾城之链感兴趣的朋友，可通过 Web，小程序，快应用等渠道进行访问(后续将支持更多，如 VsCode 插件，Chrome 扩展等)。您有任何问题，欢迎随时向我们反馈（您可以通过官网反馈渠道，或添加如下倾情打赏），🤲 。

<div align="center">
  <img src="https://lovejade.oss-cn-shenzhen.aliyuncs.com/reward-code.jpeg"  width="200px" alt="倾城之链 - 倾情打赏">
</div>

## 本期文末寄语

明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。  
转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。── 宋 · 苏轼《水调歌头 · 明月几时有》

> [倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界；在这里，你可以轻松发现、学习、分享更多有用或有趣的事物。

<div align="center">
  <img src="https://lovejade.oss-cn-shenzhen.aliyuncs.com/wechat-article-qrcode.jpg" style="width: 200px;min-width: 200px;" alt="微信公众号 - 晚晴幽草轩"/>
</div>

## 您可能感兴趣的文章

- [优质网站同好者周刊（第 136 期）- 倾城之链](https://link.niceshare.site/weekly-136/)
- [优质网站同好者周刊（第 135 期）- 倾城之链](https://link.niceshare.site/weekly-135/)
- [优质网站同好者周刊（第 134 期）- 倾城之链](https://link.niceshare.site/weekly-134/)
- [优质网站同好者周刊（第 133 期）- 倾城之链](https://link.niceshare.site/weekly-133/)
- [优质网站同好者周刊（第 132 期）- 倾城之链](https://link.niceshare.site/weekly-132/)
- [优质网站同好者周刊（第 131 期）- 倾城之链](https://link.niceshare.site/weekly-131/)
- [优质网站同好者周刊（第 130 期）- 倾城之链](https://link.niceshare.site/weekly-130/)
- [优质网站同好者周刊（第 129 期）- 倾城之链](https://link.niceshare.site/weekly-129/)
- [优质网站同好者周刊（第 128 期）- 倾城之链](https://link.niceshare.site/weekly-128/)
- [优质网站同好者周刊（第 127 期）- 倾城之链](https://link.niceshare.site/weekly-127/)
- [优质网站同好者周刊（第 126 期）- 倾城之链](https://link.niceshare.site/weekly-126/)
- [优质网站同好者周刊（第 125 期）- 倾城之链](https://link.niceshare.site/weekly-125/)
- [开启技术变现之路，探索第三收入来源](https://www.jeffjade.com/2020/11/17/173-talk-about-nice-links/)
- [云集优站，尽在「倾城之链」](https://www.jeffjade.com/2017/12/31/136-talk-about-nicelinks-site/)
- [云集优站，尽在「倾城之链」其二](https://www.jeffjade.com/2018/12/23/146-talk-about-nice-links/)
- [欲问美图何处寻？倾城之链有定音](https://www.jeffjade.com/2019/02/17/151-aweome-beautiful-picture-website-list/ "欲问美图何处寻？倾城之链有定音")
- [超实用图片工具网站，值得典藏](https://www.jeffjade.com/2020/07/27/165-aweome-picture-tool-website-list/)
- [高质量免费 🆓 图标资源大全](https://www.jeffjade.com/2020/09/11/169-high-quality-free-icon-resource-collection/)
- [十佳 AI 产品工具，为生活添彩](https://www.jeffjade.com/2020/09/23/170-list-of-top-20-ai-product-tools/)
- [最想与朋友分享的网站列表](https://www.jeffjade.com/2020/09/01/168-list-of-websites-i-most-want-to-share-with-my-friends/)
