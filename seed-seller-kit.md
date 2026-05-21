# ReviewBot 种子用户招募工具包

## 目标
今天约到 5 位愿意提供店铺评价数据的亚马逊卖家种子用户。

---

## 1. 知无不言社区 (weWuBuYan.com)

**目标**: 知无不言是最大的跨境卖家中文社区，活跃卖家超 10 万。

**发帖版块**: "卖家互助" 或 "Amazon运营交流"

**帖子标题**:
```
[免费工具] 帮你做一份「差评改进周报」——AI自动聚类差评+生成TOP5改进清单
```

**帖子正文**:
```
各位卖家朋友好！

我们在做一个亚马逊评价运营的 AI 工具，目前在内测阶段，想找 5 位卖家免费体验。

你能得到什么：
✅ 一份完整的「差评改进周报」——AI自动把你的差评聚成TOP 5产品问题+具体改进建议
✅ 所有差评的AI回复草稿（按你的品牌语气生成）
✅ 完全免费，不需要任何付费

你需要做什么：
📌 提供最近30天的店铺评价数据（导出CSV即可，我们只看评价）
📌 收到周报后给5分钟反馈

为什么免费？
我们在冷启动阶段，需要真实卖家的反馈来打磨产品。你的意见会直接影响产品方向。

感兴趣的留言"体验"，我私信你。仅限前5位。

附一张周报的实际效果图：
[贴上周报截图或Demo输出]
```

---

## 2. 小红书

**标题**:
```
亚马逊卖家必备 | 免费帮你做一份差评改进周报 🔥
```

**正文**:
```
做了3年亚马逊，最烦的就是每天盯着差评一条条回。

最近和朋友在做一个AI工具，专门解决这个问题：
📡 自动抓取店铺评价
✍️ AI生成回复草稿（差评安抚、好评致谢）
📊 每周自动把差评聚成TOP 5问题+改进建议

现在内测中，免费帮5位卖家做一份差评改进周报。

你只需要导出最近30天的评价CSV给我，
我输出一份完整的周报+所有差评的AI回复草稿。

不要钱，只要你的真实反馈。

评论区扣"1"，我私信你～

#亚马逊运营 #跨境电商 #亚马逊卖家 #AI工具 #亚马逊差评
```

---

## 3. Facebook Groups

**Target Groups**:
- "Amazon FBA Sellers" (200K+ members)
- "Amazon Seller Central" (150K+ members)
- "Amazon FBA Beginners & Experts"

**Post Title**:
```
[FREE TOOL] Get a Weekly Negative Review Analysis Report — We're Looking for 5 Beta Testers
```

**Post Body**:
```
Hey sellers! 👋

We're building an AI tool that helps Amazon sellers manage reviews, and we need 5 beta testers.

What you get (100% free):
✅ Weekly negative review clustering report — AI groups all 1-2 star reviews into TOP 5 product issues
✅ AI-generated reply drafts for every review (in your brand voice)
✅ Actionable improvement suggestions

What we need from you:
📌 Export your last 30 days of reviews (CSV)
📌 5 minutes of feedback after receiving the report

Why free? We're in cold-start and need real seller input to improve the product. Your feedback shapes the roadmap.

Comment "Interested" or DM me. Only 5 spots available.

[Attach sample report screenshot]
```

---

## 4. 执行步骤 Checklist

- [ ] 注册/登录 知无不言 (weWuBuYan.com)
- [ ] 在"卖家互助"版块发帖
- [ ] 打开小红书，发布笔记（加话题标签）
- [ ] 加入 2-3 个 Facebook Amazon Seller 群组
- [ ] 在 Facebook 群组发帖
- [ ] 准备一个 Google Form / 腾讯问卷 收集种子用户信息
- [ ] 收到卖家CSV后，运行 `python review_agent.py --store-id SELLER_ID --action report`
- [ ] 把生成的周报发给卖家，收集反馈

---

## 5. 种子用户收集表单

建议用 腾讯问卷 或 Google Forms 创建：

**表单字段**:
- 邮箱 (必填)
- 店铺名称
- 主营品类
- 月均评价数
- 最大痛点是什么？(多选: 差评太多/没时间回复/不知道差评集中在哪/竞品差评分析)
- 愿意提供评价数据吗？(是/否)
