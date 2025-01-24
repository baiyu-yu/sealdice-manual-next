import{_ as e,c as t,a6 as s,o}from"./chunks/framework.B1keMFNq.js";const c="/sealdice-manual-next/assets/deck-ui.DKzN0h-f.png",l="/sealdice-manual-next/assets/deck-new-features.vhmgDyTa.png",d="/sealdice-manual-next/assets/deck-diff.C0GgnssI.png",k=JSON.parse('{"title":"牌堆","description":"","frontmatter":{"lang":"zh-cn","title":"牌堆"},"headers":[],"relativePath":"config/deck.md","filePath":"config/deck.md","lastUpdated":1722215116000}'),i={name:"config/deck.md"};function p(r,a,n,h,u,m){return o(),t("div",null,a[0]||(a[0]=[s('<h1 id="牌堆" tabindex="-1">牌堆 <a class="header-anchor" href="#牌堆" aria-label="Permalink to &quot;牌堆&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">本节内容</p><p>本节将介绍牌堆功能，请善用侧边栏和搜索，按需阅读文档。</p></div><h2 id="牌堆是什么" tabindex="-1">牌堆是什么？ <a class="header-anchor" href="#牌堆是什么" aria-label="Permalink to &quot;牌堆是什么？&quot;">​</a></h2><p>「牌堆」是一组有名字的文本，你可以把它想象成一组扑克牌，通过 <code>.draw</code> 命令来随机抽取其中的内容发送。为了便于骰子读取增加相应的说明内容，牌堆以某种结构化的格式保存成文件。</p><div class="tip custom-block"><p class="custom-block-title">提示：牌堆</p><p>牌堆以 <code>json</code> <code>yaml</code> 或 <code>toml</code> 格式组织起来，但其本质只是一段文本，只是编写需要遵循对应的结构方便读取。</p></div><h2 id="获取牌堆" tabindex="-1">获取牌堆 <a class="header-anchor" href="#获取牌堆" aria-label="Permalink to &quot;获取牌堆&quot;">​</a></h2><p>你可以在 <a href="https://github.com/sealdice/draw" target="_blank" rel="noreferrer">牌堆仓库</a> 或官方群的群文件中找到其他骰主分享的牌堆。</p><div class="tip custom-block"><p class="custom-block-title">提示：无法访问仓库？</p><p>仓库位于 GitHub，访问时请确认你的网络状况。</p></div><h2 id="怎么上传牌堆到骰子-怎么管理牌堆" tabindex="-1">怎么上传牌堆到骰子？怎么管理牌堆？ <a class="header-anchor" href="#怎么上传牌堆到骰子-怎么管理牌堆" aria-label="Permalink to &quot;怎么上传牌堆到骰子？怎么管理牌堆？&quot;">​</a></h2><p>点击海豹 UI 界面的「扩展功能 - 牌堆管理」选项，你就可以进入牌堆的管理页面。</p><p><img src="'+c+`" alt="牌堆管理"></p><p>可以看见有一个「上传牌堆」按钮，点击它选择本地的牌堆文件上传后即可读取牌堆。</p><p>在上图中已经有一个名为「常规抽取与放回抽取示例」牌堆被读取到了，它的版本号是 1.1，格式是 <code>json</code>，其他信息也相应展示。</p><p>你可以通过「删除」按钮来删掉对应的牌堆。</p><div class="tip custom-block"><p class="custom-block-title">提示：重载牌堆</p><p>新增/删除牌堆通常会自动重载，但如果出现牌堆未更新等情况时，可以手动点击「重载牌堆」按钮进行刷新。</p></div><h2 id="怎么使用牌堆" tabindex="-1">怎么使用牌堆？ <a class="header-anchor" href="#怎么使用牌堆" aria-label="Permalink to &quot;怎么使用牌堆？&quot;">​</a></h2><p>在上面的「常规抽取与放回抽取示例」中，我们可以看见有名为 <code>常规抽取</code> <code>放回抽取</code> 的两个牌组。可以使用 <code>.draw</code> 命令来抽取它们。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.draw 常规抽取</span></span>
<span class="line"><span>.draw 放回抽取</span></span></code></pre></div><p>对于想要在自定义文案或自定义回复中引用牌堆的骰主，可使用 <code>#{DRAW-常规抽取}</code> 进行调用。</p><p>更多牌堆命令，见 <a href="./../use/deck_and_reply.html">使用 - 扩展：牌堆 自定义回复</a></p><h2 id="牌堆更新与云牌堆" tabindex="-1">牌堆更新与云牌堆 <a class="header-anchor" href="#牌堆更新与云牌堆" aria-label="Permalink to &quot;牌堆更新与云牌堆&quot;">​</a></h2><p>在加载某些牌堆之后，你可能会发现一些牌堆拥有特殊的功能：</p><p><img src="`+l+'" alt="带有更新和云内容的牌堆示例"></p><h3 id="牌堆更新" tabindex="-1">牌堆更新 <a class="header-anchor" href="#牌堆更新" aria-label="Permalink to &quot;牌堆更新&quot;">​</a></h3><p>一些牌堆作者为牌堆提供了更新链接，方便你快速获取最新的牌堆内容。</p><p>点击「更新」按钮后会取获取最新的牌堆，随后弹出获取到的新牌堆与当前牌堆的对比：</p><img src="'+d+'" alt="牌堆对比" width="65%"><p>对比弹窗的右上角可以控制显示的样式，如勾选「折叠无变更」可以收起过长的内容。</p><p>确认牌堆的更新内容之后，点击「确认更新」即可升级到最新的牌堆。</p><h3 id="牌堆云端内容" tabindex="-1">牌堆云端内容 <a class="header-anchor" href="#牌堆云端内容" aria-label="Permalink to &quot;牌堆云端内容&quot;">​</a></h3><p>一些牌堆作者为牌堆提供了云端内容，这意味着这个牌堆在抽取时，可能会去拉取远程内容作为牌堆项。</p><p>所有含有云端内容的牌堆，海豹 UI 都会给出「提供云端内容」的提示。</p><div class="warning custom-block"><p class="custom-block-title">注意：云端内容</p><p>牌堆作者可以实时调整云端内容，可能存在风险，请自行考虑是否使用这样的牌堆。</p></div><h2 id="如何编写牌堆" tabindex="-1">如何编写牌堆？ <a class="header-anchor" href="#如何编写牌堆" aria-label="Permalink to &quot;如何编写牌堆？&quot;">​</a></h2><p>见 <a href="./../advanced/edit_deck.html">进阶 - 编写牌堆</a></p>',35)]))}const f=e(i,[["render",p]]);export{k as __pageData,f as default};
