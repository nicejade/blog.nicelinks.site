[倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界。此周刊，将汇聚过去一周[倾城](https://nicelinks.site/?utm_source=weekly)所收录的内容，以飨同好；欢迎推荐或自荐（仅限有独立域名的网站，可以是二级域名）。您如果要了解收录要求，请参见[关于倾城](https://nicelinks.site/about?utm_source=weekly)。

**备注**：本周刊**每周五**生成，首发于个人微信公众号[晚晴幽草轩](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI5MDIwMzM2Mg==&action=getalbum&album_id=1530765143352082433&scene=173&from_msgid=2650641087&from_itemidx=1&count=3#wechat_redirect)、博客[晚晴幽草轩](https://www.jeffjade.com)，以及[悠然宜想亭](https://forum.lovejade.cn/)社区；此一键生成脚本基于 [Deno](https://nicelinks.site/post/602d30aad099ff5688618591) 编写，并在 Github 开源：[nicejade/nicelinks-weekly](https://github.com/nicejade/nicelinks-weekly)。

## [Pagefind | Pagefind — Static low-bandwidth search at scale](https://nicelinks.site/post/65d719adf4e2d519ef5c949e)

**标签**：[`搜索`](https://nicelinks.site/tags/搜索) · [`全文搜索`](https://nicelinks.site/tags/全文搜索) · [`开源`](https://nicelinks.site/tags/开源)

> Pagefind is a fully static search library that aims to perform well on large sites, while using as little of your users’ bandwidth as possible, and without hosting any infrastructure.

![倾城之链 - Pagefind | Pagefind — Static low-bandwidth search at scale](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/pagefind.app.png?x-oss-process=style/png2jpg)

**推荐语**：[Pagefind](https://nicelinks.site/redirect?url=https://pagefind.app/) 是一个完全静态的搜索库，旨在为大型网站提供高效 [搜索](https://nicelinks.site/tags/搜索) 功能，同时尽可能减少用户带宽的使用，并且不需要托管任何基础设施。它适用于在网站构建后运行，支持多种网站框架，如 [Hugo](https://nicelinks.site/post/5c36d7b2589b2a35f579f377) 、Eleventy、 [Jekyll](https://nicelinks.site/post/5c4c59c1a5957e07a40b3118) 、 [Next](https://nicelinks.site/post/61c928af5be6454b4e3d5146) 、 [Astro](https://nicelinks.site/post/63788ad1049fa51046c4a5bd) 、 [SvelteKit](https://nicelinks.site/post/62ea86c3bea86d1ae27b7bd2) 等。Pagefind 的安装过程相对简单，只需要一个包含网站构建静态文件的文件夹，大多数情况下无需额外配置即可开始使用。

建立索引后，Pagefind 将静态搜索包添加到您构建的文件中，这公开了可在您网站上的任何位置使用的 JavaScript 搜索 API。 Pagefind 还提供了无需配置即可使用的预构建 UI。 （您可以在本页顶部看到预构建的 UI）。

### 功能特征

- 对多语言网站的零配置支持；
- 丰富的知识库过滤引擎；
- 自定义排序属性；
- 自定义元数据跟踪；
- 自定义内容权重；
- 返回页面各部分的结果；
- 跨多个域搜索；
- 使用 NodeJS 索引库对**任何内容**（例如 PDF、JSON 文件或字幕）建立索引；
- 所有功能均具有相同的低带宽占用空间；

### **Pagefind 的价值**

1.  **低带宽消耗**：Pagefind 的搜索索引被分割成多个部分，这意味着在浏览器中进行搜索时，只需要加载搜索索引的一小部分，从而显著减少了网络负载。
2.  **快速搜索**：Pagefind 能够在拥有数万页的网站上实现快速搜索，对于大型网站尤其有价值。
3.  **多语言支持**：Pagefind 提供了零配置的多语言网站支持，这对于国际化的网站尤为重要。
4.  **丰富的过滤和排序功能**：用户可以根据需要设置丰富的过滤和排序规则，以提供更精确的搜索结果。
5.  **自定义元数据跟踪**：Pagefind 允许用户跟踪自定义的元数据，这对于内容管理和分析非常有用。
6.  **支持多种文件类型索引**：Pagefind 不仅限于网页，还可以索引 PDF、JSON 文件或字幕等，这为内容的全面搜索提供了可能。

### **适用人群和场景**

- **网站开发者**：需要为他们的静态网站提供搜索功能的开发者。
- **内容创作者**：拥有大量内容需要索引和搜索的博客作者或在线出版者。
- **企业知识库管理员**：需要为内部或外部用户创建高效搜索系统的企业。
- **教育和研究机构**：需要为大量文档和资源提供搜索服务的教育机构。

### **相比同类型产品的优势**

- **静态搜索**：Pagefind 的静态搜索特性意味着不需要服务器端的搜索服务，降低了运营成本。
- **轻量级**：Pagefind 的搜索索引和库体积小，对用户带宽的影响微乎其微。
- **易于集成**：与多种网站框架兼容，简化了集成过程。

Pagefind 的目标是拥有数万个页面的网站应该可供用户在浏览器中搜索，同时消耗尽可能少的带宽。 Pagefind 的搜索索引被分成多个块，因此在浏览器中进行搜索只需要加载搜索索引的一小部分。 Pagefind 可以在 10,000 个页面的站点上运行全文搜索，总网络负载不超过 300kB，包括 Pagefind 库本身。对于大多数站点，这将接近 100kB。

近期，基于 [Astro](https://nicelinks.site/post/63788ad1049fa51046c4a5bd) 的文档网站框架 ──[Starlight](https://nicelinks.site/redirect?url=https://github.com/withastro/starlight) ，其内置站内检索，使用的就是 `Pagefind`，体验了下，效果令人非常满意。如果您对这款搜索库感兴趣，可移步至 [Pagefind 在 Github 的开源仓库](https://github.com/cloudcannon/pagefind) ，从而了解更多。

── 出自[倾城之链 - Pagefind | Pagefind — Static low-bandwidth search at scale](https://nicelinks.site/post/65d719adf4e2d519ef5c949e)

## [Gemini - Google DeepMind](https://nicelinks.site/post/65d4a90ff4e2d519ef5c862b)

**标签**：[`AI`](https://nicelinks.site/tags/AI) · [`Google`](https://nicelinks.site/tags/Google) · [`LLM`](https://nicelinks.site/tags/LLM)

> Gemini is built from the ground up for multimodality — reasoning seamlessly across image, video, audio, and code.

![倾城之链 - Gemini - Google DeepMind](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/gemini.google.com.png?x-oss-process=style/png2jpg)

**推荐语**：[Gemini](https://nicelinks.site/redirect?url=https://gemini.google.com/) 是一个多模式语言模型的系列，由谷歌 DeepMind 开发，是 LaMDA 的后继，属于 PaLM2 系列的新一代。Gemini 包含 Gemini Ultra、Gemini Pro 和 Gemini Nano，于 2023 年 12 月 6 日面世，被定位为与 [OpenAI](https://nicelinks.site/post/6391e22878b7a1291995ff86) 的 GPT-4 抗衡的产品系列。

2023 年 12 月 6 日,谷歌在一次虚拟记者招待会上宣布推出了“Gemini 1.0”。它由三个模型组成: Gemini Ultra—用于“高度复杂的任务”，Gemini Pro—用于“广泛的任务”, 以及 Gemini Nano—用于“终端上设备的任务”。

2024 年 02 月 15 日，Google 官网宣布， [下一代型号：Gemini 1.5 突破了 100 万个令牌的上下文窗口](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/) （这是迄今为止最长的基础模型）。Gemini 1.5 它是一个中型多模式模型，针对广泛的任务进行了优化，其性能水平与 Google 迄今为止最大的模型 1.0 Ultra 类似。它还引入了长上下文理解方面的突破性实验特征。

- **Gemini Ultra**：适用于大规模、高度复杂的文本和图像推理任务的最强大模型将于 2024 年初推出。
- **Gemini Pro**：性能最佳的模型，具有适用于各种文本和图像推理任务的功能。
- **Gemini Nano**：专为设备上体验而构建的最高效模型，支持离线用例。免费利用设备处理能力。

基于 [Gemini](https://nicelinks.site/redirect?url=https://gemini.google.com/) ，您可获取创意灵感，提升工作效率；轻松对话，让 Google AI 帮你写作、规划、学习或处理其他事务。但，即便开启科|学上网，**Gemini 目前不支持在中国地区**使用，如果您对其感兴趣，可以基于 [Gemini 素问智聊斋](https://chatgpt.nicelinks.site/gemini) （`Gemini Pro` 模型）来体验。

── 出自[倾城之链 - Gemini - Google DeepMind](https://nicelinks.site/post/65d4a90ff4e2d519ef5c862b)

## [AlternativeTo - Crowdsourced software recommendations](https://nicelinks.site/post/65d49a56f4e2d519ef5c8551)

**标签**：[`发现`](https://nicelinks.site/tags/发现) · [`软件`](https://nicelinks.site/tags/软件) · [`产品推荐`](https://nicelinks.site/tags/产品推荐)

> AlternativeTo lets you find apps and software for Windows, Mac, Linux, iPhone, iPad, Android, Android Tablets, Web Apps, Online, Windows Tablets and more by recommending alternatives to apps you already know.

![倾城之链 - AlternativeTo - Crowdsourced software recommendations](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/alternativeto.net.png?x-oss-process=style/png2jpg)

**推荐语**：[AlternativeTo.net](https://nicelinks.site/redirect?url=https://alternativeto.net/) 是一个可帮助人们找到自己喜欢或者讨厌的产品的其它替代品的网站。它的特点在于：您不用知道所有软件的名称，知道开始使用的软件，就可以查找功能近似的「替代品」。比如您用的是 `excel`，它会推荐 LibreOffice Calc、Google Sheets 等替代品。

### **产品概述**

- AlternativeTo 提供了一个用户友好的界面，用户可以搜索和发现各种软件和应用程序的替代品。
- 它涵盖了广泛的类别，包括视频流媒体、音乐流媒体、图形设计、图像编辑器、办公软件、社交媒体平台等。

### **功能特征**

1.  **用户评价**：用户可以对软件进行评分和评论，这些评价帮助其他用户了解软件的优缺点。
2.  **替代品推荐**：用户可以查看其他用户推荐的替代品，这些推荐基于用户评价和社区的共识。
3.  **软件比较**：用户可以比较不同软件的功能、用户评分和评论，以做出更明智的选择。
4.  **社区参与**：用户可以参与讨论，分享自己的经验和建议，帮助构建一个活跃的社区。

### **用户价值**

- **节省时间**：用户可以通过 AlternativeTo 快速找到合适的软件替代品，而不必自己花费大量时间进行研究。
- **提高效率**：通过比较和用户评价，用户可以找到最适合自己需求的软件，从而提高工作效率。
- **发现新软件**：对于喜欢尝试新软件的用户，AlternativeTo 提供了一个探索新工具和应用的平台。

### **使用场景**

1.  **软件升级**：当用户想要升级或更换现有软件时，可以在这里找到相似功能的替代品。
2.  **预算限制**：寻找免费或低成本的软件替代品，以节省开支。
3.  **特定需求**：用户可以根据自己的特定需求（如操作系统兼容性、隐私保护等）寻找合适的软件。
4.  **技术趋势**：了解当前流行的软件和新兴技术，保持与行业发展同步。

[AlternativeTo.net](https://nicelinks.site/redirect?url=https://alternativeto.net/) 的核心价值在于它的社区驱动特性，它依赖于用户的参与和贡献来提供最新、最相关的软件替代品信息。通过这种方式，AlternativeTo 成为了一个强大的资源，帮助用户做出更明智的软件选择。真实体验，发现它给出的检索结果，并没有那么“智能”，比如输入 [Alfred](https://nicelinks.site/post/5ae926e67b44827edbc5c69a) ，它并没有 `GPT4` 那般给出更令人满意的结果： [Raycast](https://nicelinks.site/post/6378d324049fa51046c4ac75) 。

── 出自[倾城之链 - AlternativeTo - Crowdsourced software recommendations](https://nicelinks.site/post/65d49a56f4e2d519ef5c8551)

## [Learn foreign words with language flashcards | kartet](https://nicelinks.site/post/65ce3d3cf4e2d519ef5c4bef)

**标签**：[`学习`](https://nicelinks.site/tags/学习) · [`教育`](https://nicelinks.site/tags/教育) · [`在线`](https://nicelinks.site/tags/在线)

**关键字**：Language learning, flashcards, foreign words, learn languages

> Learn new foreign language words quickly and effectively with karteto. Study with flashcards and spaced repetition!

![倾城之链 - Learn foreign words with language flashcards | kartet](https://nicelinks.oss-cn-shenzhen.aliyuncs.com/karteto.com.png?x-oss-process=style/png2jpg)

**推荐语**：[Kartet](https://nicelinks.site/redirect?url=https://karteto.com/) ，高效、有趣地掌握外语单词；学习外语单词可能需要花费大量时间并一遍又一遍地重复它们。它必须有趣、有趣，否则效果不会很好。Karteto 通过使用**间隔重复**（在正确的时间学习）、抽认卡和有趣的设计来解决这个问题。Kartet 支持 Android、iOS 等平台，它支持一周免费试用，体验还不错。

> **间隔重复**是一种随着时间的推移优化信息保留的学习技术。它基于这样的原则：复习材料的时间对于长期记忆保留至关重要。该技术涉及以逐渐增加的间隔回顾信息，开始时重复更频繁，随着材料变得更加熟悉，间隔更长。

学习新单词需要时间和重复。它必须有趣且引人入胜，否则就行不通。Karteto 的使命是让单词记忆变得更容易、更高效。这是什么？间隔重复是提高长期记忆力的最有效方法，但它可能很乏味。这就是我们向这个市场引入有趣的设计和游戏化的原因。Duolingo 与 Anki/Quizlet 的结合是一个很好的形容方式。Karteto 是专门为学习英语新单词而设计的，英语、汉语、西班牙语、德语、法语、阿拉伯语等 100 多种语言。

**Kartet 是如何工作的**？当每个人学习一个新单词时，自然地，一段时间后开始忘记它。首先，我们忘记得很快，然后忘记得越多，速度就越慢,重复。 Karteto 预测最佳时间重复一个单词并提醒你。从 Karteto 精心策划的学习包中学习单词，或者添加你自己的，以获得最大的灵活性。研究表明学习必须有趣才能有效，Karteto 的诞生是为了让学习更有趣。

── 出自[倾城之链 - Learn foreign words with language flashcards | kartet](https://nicelinks.site/post/65ce3d3cf4e2d519ef5c4bef)

对倾城之链感兴趣的朋友，可通过 Web，小程序，快应用等渠道进行访问(后续将支持更多，如 VsCode 插件，Chrome 扩展等)。您有任何问题，欢迎随时向我们反馈（您可以通过官网反馈渠道，或添加如下倾情打赏），🤲 。

<div align="center">
  <img src="https://lovejade.oss-cn-shenzhen.aliyuncs.com/reward-code.jpeg"  width="200px" alt="倾城之链 - 倾情打赏">
</div>

## 本期文末寄语

民不畏威，则大威至。无狎其所居，无厌其所生。夫唯不厌，是以不厌。是以圣人自知不自见，自爱不自贵。故去彼取此。── 春秋末期 · 老子李耳《道德经》第七十二章

> [倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界；在这里，你可以轻松发现、学习、分享更多有用或有趣的事物。

<div align="center">
  <img src="https://lovejade.oss-cn-shenzhen.aliyuncs.com/wechat-article-qrcode.jpg" style="width: 200px;min-width: 200px;" alt="微信公众号 - 晚晴幽草轩"/>
</div>

## 您可能感兴趣的文章

- [优质网站同好者周刊（第 157 期）- 倾城之链](https://blog.nicelinks.site/weekly-157/)
- [优质网站同好者周刊（第 156 期）- 倾城之链](https://blog.nicelinks.site/weekly-156/)
- [优质网站同好者周刊（第 155 期）- 倾城之链](https://blog.nicelinks.site/weekly-155/)
- [优质网站同好者周刊（第 154 期）- 倾城之链](https://blog.nicelinks.site/weekly-154/)
- [优质网站同好者周刊（第 153 期）- 倾城之链](https://blog.nicelinks.site/weekly-153/)
- [优质网站同好者周刊（第 152 期）- 倾城之链](https://blog.nicelinks.site/weekly-152/)
- [优质网站同好者周刊（第 151 期）- 倾城之链](https://blog.nicelinks.site/weekly-151/)
- [优质网站同好者周刊（第 150 期）- 倾城之链](https://blog.nicelinks.site/weekly-150/)
- [优质网站同好者周刊（第 149 期）- 倾城之链](https://blog.nicelinks.site/weekly-149/)
- [优质网站同好者周刊（第 148 期）- 倾城之链](https://blog.nicelinks.site/weekly-148/)
- [优质网站同好者周刊（第 147 期）- 倾城之链](https://blog.nicelinks.site/weekly-147/)
- [优质网站同好者周刊（第 146 期）- 倾城之链](https://blog.nicelinks.site/weekly-146/)
- [开启技术变现之路，探索第三收入来源](https://www.jeffjade.com/2020/11/17/173-talk-about-nice-links/)
- [云集优站，尽在「倾城之链」](https://www.jeffjade.com/2017/12/31/136-talk-about-nicelinks-site/)
- [云集优站，尽在「倾城之链」其二](https://www.jeffjade.com/2018/12/23/146-talk-about-nice-links/)
- [欲问美图何处寻？倾城之链有定音](https://www.jeffjade.com/2019/02/17/151-aweome-beautiful-picture-website-list/ "欲问美图何处寻？倾城之链有定音")
- [超实用图片工具网站，值得典藏](https://www.jeffjade.com/2020/07/27/165-aweome-picture-tool-website-list/)
- [高质量免费 🆓 图标资源大全](https://www.jeffjade.com/2020/09/11/169-high-quality-free-icon-resource-collection/)
- [十佳 AI 产品工具，为生活添彩](https://www.jeffjade.com/2020/09/23/170-list-of-top-20-ai-product-tools/)
- [最想与朋友分享的网站列表](https://www.jeffjade.com/2020/09/01/168-list-of-websites-i-most-want-to-share-with-my-friends/)
