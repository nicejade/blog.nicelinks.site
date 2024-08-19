[倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界。此周刊，将汇聚过去一周[倾城](https://nicelinks.site/?utm_source=weekly)所收录的内容，以飨同好；欢迎推荐或自荐（仅限有独立域名的网站，可以是二级域名）。您如果要了解收录要求，请参见[关于倾城](https://nicelinks.site/about?utm_source=weekly)。

**备注**：本周刊**每周五**生成，首发于个人微信公众号[晚晴幽草轩](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI5MDIwMzM2Mg==&action=getalbum&album_id=1530765143352082433&scene=173&from_msgid=2650641087&from_itemidx=1&count=3#wechat_redirect)、博客[晚晴幽草轩](https://www.jeffjade.com)，以及[悠然宜想亭](https://forum.lovejade.cn/)社区；此一键生成脚本基于 [Deno](https://nicelinks.site/post/602d30aad099ff5688618591) 编写，并在 Github 开源：[nicejade/nicelinks-weekly](https://github.com/nicejade/nicelinks-weekly)。

## [LangChain | Get your LLM application from prototype to production](https://nicelinks.site/post/65a92d572c315d2784ce66b9)

**标签**：[`AI`](https://nicelinks.site/tags/AI) · [`框架`](https://nicelinks.site/tags/框架) · [`LLM`](https://nicelinks.site/tags/LLM)

> LangChain’s flexible abstractions and extensive toolkit unlocks developers to build context-aware, reasoning LLM applications.

![倾城之链 - LangChain | Get your LLM application from prototype to production](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/www.langchain.com.png?x-oss-process=style/png2jpg)

**推荐语**：[LangChain](https://nicelinks.site/redirect?url=https://www.langchain.com/) 是一个专注于大型语言模型（ [LLM](https://nicelinks.site/tags/LLM) ）的开发者平台，它提供了一套工具和框架，帮助开发者将 LLM 应用从原型阶段推进到生产环境。以下是关于 LangChain 的详细介绍：

### **什么是 LangChain**？

LangChain 提供了一个灵活的抽象层（LCEL，LangChain Execution Language）和 AI 优先的工具包，使得开发者能够构建具有上下文感知和推理能力的应用程序。它的目标是简化 LLM 的集成和开发过程，让开发者能够快速构建和部署基于 LLM 的应用。

### **LangChain 可以用来做什么？**

1.  **构建智能对话系统**：如聊天机器人，可以用于客户服务、虚拟助手等。
2.  **问答系统**：开发能够理解和回答复杂问题的系统。
3.  **文档摘要**：自动生成文档的摘要，帮助用户快速理解内容。
4.  **代码协作**：作为编程助手，提供代码建议和错误提示。
5.  **工作流自动化**：自动化处理文档、数据和信息的工作流程。
6.  **文档分析**：分析文档内容，提取关键信息。
7.  **自定义搜索引擎**：构建能够理解用户查询意图的搜索引擎。

### **面向的用户群体有哪些**？

- **开发者**：需要构建基于 LLM 的应用的软件开发者。
- **数据科学家**：需要将 LLM 集成到数据分析和处理流程中的专业人士。
- **企业 IT 团队**：希望将 LLM 技术应用于业务流程和自动化的企业 IT 部门。
- **初创公司**：寻找创新方式来提升产品和服务的初创企业。
- **研究者**：在自然语言处理（NLP）领域进行研究的学者。

### **使用场景**：

- **客户服务**：构建智能客服机器人，提供 24/7 的在线支持。
- **内容创作**：辅助作者进行内容创作，提供写作建议和风格调整。
- **教育**：开发个性化学习助手，帮助学生理解复杂概念。
- **医疗健康**：提供医疗信息查询和健康咨询的智能系统。
- **法律服务**：帮助律师快速分析法律文件和合同。

### **LangChain 的特点**：

1.  **LCEL**：LangChain 的执行语言，提供了一种声明式的方式来定义和执行 LLM 任务。
2.  **易于集成**：与多种数据源和知识库的智能连接，便于开发者获取所需信息。
3.  **可交换组件**：允许开发者轻松地替换和尝试不同的 LLM 模型，以找到最适合自己应用的模型。
4.  **生产就绪**：提供了一套工具，如 LangSmith，帮助开发者在生产环境中监控和优化模型性能。

### 支持 构建 RAG 系统

LangChain 提供了一个平台，它允许开发者构建和部署基于大型语言模型（LLM）的应用，这些应用可以是检索增强生成（Retrieval-Augmented Generation，简称 RAG）系统。RAG 系统结合了检索系统和生成模型，以提高文本生成的质量和相关性。以下是 LangChain 如何支持构建 RAG 系统的一些关键点：

1.  **灵活的抽象层（LCEL）**：
    - LangChain 的 LCEL 提供了一种声明式的方式来定义和执行任务，这使得开发者可以轻松地将检索和生成任务结合起来。
2.  **可交换的组件**：
    - LangChain 允许开发者轻松地替换和尝试不同的 LLM 模型，这对于构建 RAG 系统至关重要，因为检索和生成模型可能需要不同的优化和调整。
3.  **智能连接**：
    - LangChain 提供了与各种数据源和知识库的连接，这使得开发者可以轻松地将检索系统与生成模型集成，从而实现 RAG 的核心功能。
4.  **生产就绪的开发平台**：
    - LangChain 的 LangSmith 提供了在生产环境中监控和优化模型性能的工具，这对于 RAG 系统来说尤其重要，因为这类系统通常需要处理大量的数据和复杂的逻辑。
5.  **丰富的用例支持**：
    - LangChain 提供了一系列的用例，如聊天机器人、问答系统、文档分析等，这些都是 RAG 系统可能的应用场景。

在 LangChain 上构建 RAG 系统的基本流程可能包括：

- **定义任务**：使用 LCEL 定义需要检索和生成的任务。
- **集成检索系统**：将检索系统与 LangChain 集成，以便在生成过程中检索相关信息。
- **微调模型**：在 LangChain 上微调 LLM 模型，以适应特定的检索和生成任务。
- **部署应用**：将构建好的 RAG 应用部署到生产环境，使用 LangSmith 进行监控和优化。

LangChain 的这些特性使得它成为一个强大的平台，可以帮助开发者构建出既能够理解用户输入，又能通过检索系统提供相关信息，最终生成高质量文本的 RAG 系统。这样的系统可以应用于客户服务、内容创作、教育辅导等多个领域。

总之，[LangChain](https://nicelinks.site/redirect?url=https://www.langchain.com/) 通过提供一系列的构建块、开源组件和预构建的链条，使得开发者能够快速上手并针对特定用例进行定制。同时，它还强调了生产环境的准备，通过提供调试、测试和监控工具，帮助开发者确保应用的稳定性和性能。

── 出自[倾城之链 - LangChain | Get your LLM application from prototype to production](https://nicelinks.site/post/65a92d572c315d2784ce66b9)

## [Whimsical - Where great ideas take shape](https://nicelinks.site/post/65a889212c315d2784ce6064)

**标签**：[`思维导图`](https://nicelinks.site/tags/思维导图) · [`协作`](https://nicelinks.site/tags/协作) · [`流程图`](https://nicelinks.site/tags/流程图)

> Whimsical combines whiteboards and docs in an all-in-one collaboration hub.

![倾城之链 - Whimsical - Where great ideas take shape](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/whimsical.com.png?x-oss-process=style/png2jpg)

**推荐语**：[Whimsical](https://nicelinks.site/redirect?url=https://whimsical.com/) 是一个在线 [协作](https://nicelinks.site/tags/协作) 工具，它提供了一系列的功能来帮助团队进行有效的项目管理、 [思维导图](https://nicelinks.site/tags/思维导图) 制作、流程图绘制以及文档协作（视觉协作中心，将图表、 [白板](https://nicelinks.site/tags/白板) 等与 Whimsical 结合起来）。以下是 Whimsical 的一些主要产品和功能：

1.  **思维导图（Mind Maps）**：

    - 用于组织和可视化想法、概念和信息。
    - 支持实时协作，团队成员可以一起创建和编辑思维导图。
    - 提供多种预设模板，方便快速开始。
    - 可以导出为多种格式，如 PNG、PDF 等。

2.  **流程图（Flowcharts）**：

    - 用于创建和共享流程图，帮助理解业务流程和决策路径。
    - 提供多种形状和连接器，以适应不同的流程图需求。
    - 支持拖放式编辑，易于使用。
    - 可以与团队成员共享和协作。

3.  **文档（Documents）**：

    - 提供了一个在线的文档编辑器，支持多人协作。
    - 可以创建和编辑文本文档，如会议记录、项目计划等。
    - 支持实时协作和版本控制，可以看到文档的编辑历史。
    - 可以与思维导图和流程图集成，方便在文档中引用和链接。

4.  **项目（Projects）**：

    - 用于管理和跟踪项目进度。
    - 提供任务管理功能，可以分配任务、设置截止日期和优先级。
    - 支持看板视图，方便团队成员查看任务状态。
    - 可以与思维导图、流程图和文档集成，形成完整的项目视图。

5.  **团队协作**：

    - Whimsical 支持团队账户，可以邀请团队成员加入项目。
    - 提供权限管理，可以控制团队成员对项目的访问和编辑权限。
    - 支持实时通知，确保团队成员能够及时了解项目更新。

6.  **跨平台支持**：

    - Whimsical 可以在多种设备上使用，包括桌面和移动设备。
    - 提供 Web 应用程序，无需安装额外软件。

7.  **集成**：

    - Whimsical 可以与其他工具集成，如 Slack、Trello 等，方便在不同工作流中使用。

8.  **安全性和隐私**：

    - Whimsical 承诺保护用户数据的安全和隐私，遵循相关的数据保护法规。

Whimsical 的目标是简化团队的协作流程，通过提供直观的工具和集成，帮助用户更高效地工作。它适用于各种规模的团队，无论是小型创业公司还是大型企业。它支持免费使用，专业版本 12 美元每月；有网友将其成为画图届的 [Notion](https://nicelinks.site/post/5cbd4e8b7855f80ea42ea6ab) ，如果您对其感兴趣，可移步至官方网站从而了解更多。

── 出自[倾城之链 - Whimsical - Where great ideas take shape](https://nicelinks.site/post/65a889212c315d2784ce6064)

## [Craft – The Future of Documents](https://nicelinks.site/post/65a802112c315d2784ce5e08)

**标签**：[`笔记`](https://nicelinks.site/tags/笔记) · [`工作`](https://nicelinks.site/tags/工作) · [`平台`](https://nicelinks.site/tags/平台)

> Create documents, which will make an impact. Try Craft for free both for personal and business/teams use cases.

![倾城之链 - Craft – The Future of Documents](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/www.craft.do.png?x-oss-process=style/png2jpg)

**推荐语**：[Craft](https://nicelinks.site/redirect?url=https://www.craft.do/) 是一个提供一系列用于构思、组织和共享工作的功能和工具的平台（ [笔记](https://nicelinks.site/tags/笔记) 应用）。它旨在帮助个人和团队有效协作并保持井井有条。根据 Craft 网站上提供的内容，以下是有关 Craft 的一些要点：

1.  产品概述：Craft 是一个人们可以将想法付诸实践的平台。它为个人和团队提供了构思、组织和分享工作的空间。

2.  免费和付费版本：Craft 提供免费版本，允许用户无需信用卡即可开始使用。他们还为个人、专业人士、企业、自由职业者、机构、顾问、远程团队和初创公司提供了具有附加功能的付费计划。

3.  目标设定和模板：Craft 提供了各种模板来帮助用户组织生活的不同方面，例如目标设定、旅行计划、工程、食谱，甚至创建员工手册。这些模板可作为用户构建其工作和想法的起点。

4.  个人和专业用途：Craft 满足个人和专业需求。它允许个人做笔记、跟踪习惯、写日记和计划旅行。对于团队来说，Craft 提供协作功能来构思、共享文档并促进知识共享。

5.  功能和工具：Craft 提供了一系列功能来提高生产力和协作。其中包括使用图像和视频为更新添加上下文和视觉兴趣、用于总结更新和生成想法等任务的人工智能助手、用于协作的评论和反应、用于共享代码片段的代码块、用于对相关想法进行分组的结构化文档以及丰富的链接预览以便快速访问详细信息。

6.  集成和上下文：Craft 支持与其他工具集成，使用户能够创建集中的事实来源。它允许用户将他们的工具和服务连接到 Craft，例如链接 Linear 票证、共享视频以及为讨论和决策提供额外的背景。

7.  推荐和认可： Craft 因其功能和可用性而受到认可。它被 App Store 评为 2021 年度 Mac 应用，并于同年入围苹果设计奖决赛。用户称赞 Craft 的组织能力和促进跨团队协作的能力。

8.  下载和平台：Craft 可在多个平台上下载，包括 iOS 设备（iPhone 和 iPad）、Mac 和 Windows。

9.  公司信息：Craft 由 Craft Docs Limited, Inc. 开发。该公司强调对细节的关注，旨在将其平台的形式和功能结合起来。

总之， [Craft](https://nicelinks.site/redirect?url=https://www.craft.do/) 是一款助力于工作、生活的笔记应用，它集成了很多您可能需要的工具，诸如图片和视频（为您的更新添加上下文和视觉趣味，使其更易于理解）、内置 AI 助手（让 AI 总结您的更新、检查拼写和语法或产生想法）、评论与反馈、代码块、结构化文件（将相关想法分组到卡片和页面中，以便为需要的人添加更多详细信息）、丰富的链接预览,,,,。如果您对其感兴趣，可移步至官网了解更多。

── 出自[倾城之链 - Craft – The Future of Documents](https://nicelinks.site/post/65a802112c315d2784ce5e08)

## [Rustlings | 🦀 Small exercises to get you used to reading and writing Rust code](https://nicelinks.site/post/65a66b462c315d2784ce5446)

**标签**：[`Rust`](https://nicelinks.site/tags/Rust) · [`教程`](https://nicelinks.site/tags/教程) · [`开源`](https://nicelinks.site/tags/开源)

> Small exercises to get you used to reading and writing Rust code!

![倾城之链 - Rustlings | 🦀 Small exercises to get you used to reading and writing Rust code](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/rustlings.cool.png?x-oss-process=style/png2jpg)

**推荐语**：[Rustlings](https://nicelinks.site/redirect?url=https://rustlings.cool/) 是一个旨在帮助个人学习和练习 [Rust](https://nicelinks.site/tags/Rust) 编程的项目。它由一些小练习组成，帮助用户熟悉阅读和编写 Rust 代码，包括理解和响应编译器消息。关于 Rustlings 的主要特点和信息：

1.  安装：要开始使用 Rustlings，您需要在系统上安装 Rust。有关安装 Rust 及其包管理器 Cargo 的说明，请访问 [https://rustup.rs](https://rustup.rs/) 。安装 Rust 后，您可以继续 Rustlings 安装过程。

2.  支持的平台： Rustlings 提供适用于 macOS、Linux、Windows 甚至基于浏览器的环境的安装说明。

3.  安装命令： Rustlings 网站上提供了不同平台的安装命令。例如，在 macOS 和 Linux 上，您可以使用 curl 命令来安装 Rustlings。在 Windows 上，提供了 PowerShell 命令。

4.  练习执行： Rustlings 练习按主题组织，每个练习都位于子目录中 `rustlings/exercises/<topic>`。这些练习包含导致编译失败的错误，任务是修复这些错误。Rustlings 提供了诸如 `rustlings verify` 和之类的命令 `rustlings run` 来执行练习并检查是否完成。

5.  进度跟踪： Rustlings 提供 `rustlings list` 命令来检查您的进度并查看您已完成哪些练习。

6.  其他资源： Rustlings 建议使用“ [The Book](https://nicelinks.site/redirect?url=https://doc.rust-lang.org/book/index.html) ”，这是学习 Rust 的综合资源。它还建议“ [Rust By Examples](https://nicelinks.site/redirect?url=https://doc.rust-lang.org/rust-by-example/index.html) ”，这是一个在线资源，提供类似于 Rustlings 的练习。

7.  继续学习：完成 Rustlings 后，鼓励用户通过构建自己的项目、为 Rustlings 本身做出贡献或寻找其他开源项目来应用新获得的知识。

8.  卸载：如果您决定从系统中删除 Rustlings，网站上会提供相关说明。它涉及删除练习文件夹并运行货物卸载命令。

请注意，此处提供的信息基于 Rustlings 网站上提供的内容。如需最准确和最新的信息，建议 [访问 Rustlings 官方网站](https://nicelinks.site/redirect?url=https://rusdlings.cool/) 。 [Rustlings 项目在 Github 仓库开源](https://github.com/rust-lang/rustlings) （截止 2024 年 01 月 16 日，已收获 45.9K+ Star），如果您对其感兴趣，可移步前往从而了解更多。

── 出自[倾城之链 - Rustlings | 🦀 Small exercises to get you used to reading and writing Rust code](https://nicelinks.site/post/65a66b462c315d2784ce5446)

## [Dona | A back to basic to-do list focused on fast and delightful user experience](https://nicelinks.site/post/65a5fb692c315d2784ce516e)

**标签**：[`任务管理器`](https://nicelinks.site/tags/任务管理器) · [`产品`](https://nicelinks.site/tags/产品) · [`工作效率`](https://nicelinks.site/tags/工作效率)

> Dona is a back to basic to-do list focused on fast and delightful user experience. A more humane to-do list.

![倾城之链 - Dona |  A back to basic to-do list focused on fast and delightful user experience](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/dona.ai.png?x-oss-process=style/png2jpg)

**推荐语**：[Dona](https://nicelinks.site/redirect?url=https://dona.ai/) 是一款回归本源 [待办事项](https://nicelinks.site/tags/任务管理器) 应用程序，致力于**提供快速、愉悦的用户体验**。它旨在简化任务管理，帮助用户以直观、愉快的方式实现目标。Dona 主要具有如下功能：

- **快速、愉悦的用户体验**： Dona 旨在提供无缝、高效的任务管理体验。该应用程序将速度和响应速度放在首位，确保用户可以快速添加、组织和完成任务。
- **可定制的用户界面主题**： Dona 提供一系列自定义选项，包括浅色、深色和黑色用户界面主题。用户可以选择自己喜欢的主题，打造个性化的任务管理环境。
- **注重细节**： Dona 致力于为每一次交互带来满意体验。该应用程序密切关注用户体验的细节，旨在提供一个精致、愉悦的界面。

此外，Dona 还为用户提供时事通讯，让他们随时了解最新消息和发展动态。用户还可以在 [Twitter 上关注 Dona](https://nicelinks.site/redirect?url=https://twitter.com/getdona) ，并加入他们的 Discord 社区，与其他用户交流并提供反馈。请注意，此处提供的信息以 Dona 网站上的内容为基础，可能随时更改。如需了解最准确的最新信息，建议 [访问 Dona 官方网站](https://nicelinks.site/redirect?url=https://dona.ai/) 。

── 出自[倾城之链 - Dona | A back to basic to-do list focused on fast and delightful user experience](https://nicelinks.site/post/65a5fb692c315d2784ce516e)

## [影刀 RPA - 影刀官网](https://nicelinks.site/post/65a3fd102c315d2784ce47ef)

**标签**：[`自动化`](https://nicelinks.site/tags/自动化) · [`产品`](https://nicelinks.site/tags/产品) · [`软件`](https://nicelinks.site/tags/软件)

**关键字**：影刀，影刀 RPA

> 影刀是杭州分叉智能科技有限公司研发的 RPA 自动化软件，影刀 RPA 致力于为各行业客户提供 RPA 自动化机器人产品与解决方案。影刀 RPA 能实现 PC、手机上的任何软件自动化操作。积木式流程搭建，0 编程基础快速入门，人人都能轻松上手，是上万家企业信赖之选。

![倾城之链 - 影刀 RPA - 影刀官网](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/www.yingdao.com.png?x-oss-process=style/png2jpg)

**推荐语**：[影刀 RPA](https://nicelinks.site/redirect?url=https://www.yingdao.com/) 是一款软件机器人，能模拟人的各种操作，能在任何应用程式上进行鼠标点击、键盘输入、读取信息等 [自动化](https://nicelinks.site/tags/自动化) 操作，释放人非主观决策、逻辑性高、规则性强的工作（RPAl，Robotic Process Automation 的缩写，即机器人流程自动化）。它由杭州分叉智能科技有限公司研发。

2022 年 4 月，杭州分叉智能科技有限公司（简称：影刀 RPA）**完成 1 亿美元 C 轮融资**，本轮融资由高盛、某产业 CVC 机构领投，老股东 GGV 纪源资本、高瓴创投等跟投。在此之前，2021 年 7 月，影刀 RPA 完成由 Coatue Management 领投的 5000 万美元，再加上之前高瓴创投、GGV 纪**源**资本、红点中国、金沙江创投、初心资本、盈动资本、曦域资本、聚水潭等数轮数千万美元融资，影刀 RPA 在**2 年时间总共完成了近 2 亿美金融资**。

关于 [影刀 RPA](https://nicelinks.site/redirect?url=https://www.yingdao.com/) ， 您可以把它理解为：**“虚拟机器人”替代人工的一种方式**。它不仅可以模拟人类，而且可以利用和融合现有各项技术，实现其流程自动化的目标。简单叙述，就是\*\*一切重复、有规则的工作，都可以用影刀完成。你只需要设置好固定的流程，影刀就会在电脑/手机上模仿人工，一步步完成操作，而且影刀的完成速度是人的速度的 5 倍左右。

### 影刀 RPA 业务介绍

- **任何桌面软件自动化**： 可以实现所有桌面应用程序的自动化，包括 ERP、浏览器、CRM、微信、钉钉或日常使用的任何其他应用程序；
- **任何网页自动化**： 如网页 JS 脚本，数据抓取、Web 表单填写、网页操作，API 调用等，轻松实现自动化的 Web 任务；
- **任何手机 App 自动化**： 能驱动手机上的任何 APP 进行输入、点击、手势滑动、提取数据等操作；支持同时控制多台手机设备进行自动化；
- **鼠标键盘的自动化**： 影刀可以控制键盘和鼠标：发送按键或将鼠标移至何处、模拟击键、鼠标移动和单击等，从而节省一些重复性的劳动时间；
- **Excel 自动化**： 影刀支持 Excel 的宏、单元格、Sheet 等各类 Excel 自动化操作，如可以自动生成所需的 Excel 报表。

如果您从事编程开发，或许听闻过自动化爬虫，通过 [Selenium](https://www.selenium.dev/) 、 [Puppeteer](https://nicelinks.site/post/625c3735ac29ce06470af877) 等框架，对于网页自动化，影刀 RPA 的作用跟这些框架类似，只不过无需编码经验即可使用，值得说明的是免费可用。

影刀 RPA，秉承以“全球化、桌面级产品”为愿景；以“用创想与技术推动商业提效”为使命，为客户提供优质的产品与服务。已帮助全球 10,000+ 企业创造了自动化的虚拟劳动力，涵盖电商、金融、互联网、高校、制造、物流、通讯等多个领域。在上海、广州、深圳、厦门、北京、南京均设有分支机构。如果您对这款产品感兴趣，不妨 [移步至其官网](https://www.yingdao.com/product/) 从而了解更多。

── 出自[倾城之链 - 影刀 RPA - 影刀官网](https://nicelinks.site/post/65a3fd102c315d2784ce47ef)

对倾城之链感兴趣的朋友，可通过 Web，小程序，快应用等渠道进行访问(后续将支持更多，如 VsCode 插件，Chrome 扩展等)。您有任何问题，欢迎随时向我们反馈（您可以通过官网反馈渠道，或添加如下倾情打赏），🤲 。

<div align="center">
  <img src="https://lovejade.oss-cn-shenzhen.aliyuncs.com/reward-code.jpeg"  width="200px" alt="倾城之链 - 倾情打赏">
</div>

## 本期文末寄语

泽国江山入战图，生民何计乐樵苏。  
凭君莫话封侯事，一将功成万骨枯。  
传闻一战百神愁，两岸强兵过未休。  
谁道沧江总无事，近来长共血争流。  
──〔唐〕· 曹松《己亥岁二首·僖宗广明元年》

> [倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界；在这里，你可以轻松发现、学习、分享更多有用或有趣的事物。

<div align="center">
  <img src="https://lovejade.oss-cn-shenzhen.aliyuncs.com/wechat-article-qrcode.jpg" style="width: 200px;min-width: 200px;" alt="微信公众号 - 晚晴幽草轩"/>
</div>

## 您可能感兴趣的文章

- [优质网站同好者周刊（第 152 期）- 倾城之链](https://link.niceshare.site/weekly-152/)
- [优质网站同好者周刊（第 151 期）- 倾城之链](https://link.niceshare.site/weekly-151/)
- [优质网站同好者周刊（第 150 期）- 倾城之链](https://link.niceshare.site/weekly-150/)
- [优质网站同好者周刊（第 149 期）- 倾城之链](https://link.niceshare.site/weekly-149/)
- [优质网站同好者周刊（第 148 期）- 倾城之链](https://link.niceshare.site/weekly-148/)
- [优质网站同好者周刊（第 147 期）- 倾城之链](https://link.niceshare.site/weekly-147/)
- [优质网站同好者周刊（第 146 期）- 倾城之链](https://link.niceshare.site/weekly-146/)
- [优质网站同好者周刊（第 145 期）- 倾城之链](https://link.niceshare.site/weekly-145/)
- [优质网站同好者周刊（第 144 期）- 倾城之链](https://link.niceshare.site/weekly-144/)
- [优质网站同好者周刊（第 143 期）- 倾城之链](https://link.niceshare.site/weekly-143/)
- [优质网站同好者周刊（第 142 期）- 倾城之链](https://link.niceshare.site/weekly-142/)
- [优质网站同好者周刊（第 141 期）- 倾城之链](https://link.niceshare.site/weekly-141/)
- [开启技术变现之路，探索第三收入来源](https://www.jeffjade.com/2020/11/17/173-talk-about-nice-links/)
- [云集优站，尽在「倾城之链」](https://www.jeffjade.com/2017/12/31/136-talk-about-nicelinks-site/)
- [云集优站，尽在「倾城之链」其二](https://www.jeffjade.com/2018/12/23/146-talk-about-nice-links/)
- [欲问美图何处寻？倾城之链有定音](https://www.jeffjade.com/2019/02/17/151-aweome-beautiful-picture-website-list/ "欲问美图何处寻？倾城之链有定音")
- [超实用图片工具网站，值得典藏](https://www.jeffjade.com/2020/07/27/165-aweome-picture-tool-website-list/)
- [高质量免费 🆓 图标资源大全](https://www.jeffjade.com/2020/09/11/169-high-quality-free-icon-resource-collection/)
- [十佳 AI 产品工具，为生活添彩](https://www.jeffjade.com/2020/09/23/170-list-of-top-20-ai-product-tools/)
- [最想与朋友分享的网站列表](https://www.jeffjade.com/2020/09/01/168-list-of-websites-i-most-want-to-share-with-my-friends/)
