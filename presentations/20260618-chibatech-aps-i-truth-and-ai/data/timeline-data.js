// Timeline data — "You can just do things"
// Layers reveal progressively: → key advances, ← goes back
//   0  Resume (jobs/roles)
//   1  Academic credentials
//   2  Projects
//   3  Ideas & movements (era bands)
//   4  Historical moments (vertical markers)

// ── Layer 0: Resume ──────────────────────────────────────────────
export const RESUME = [
  { id: "xerox",    label: "Xerox",           ja: "ゼロックス",       start: 1999,   end: 1999.7, lane: 0 },
  { id: "fg2",      label: "FG Squared",      ja: "FG Squared",      start: 2000,   end: 2000.9, lane: 1 },
  { id: "uscisd",   label: "USC ISD — web architect", ja: "USC ISD ウェブアーキテクト", start: 2001, end: 2005, lane: 0 },
  { id: "upcoming", label: "Upcoming.org — co-founder", ja: "Upcoming.org 共同創業者", start: 2003, end: 2005, lane: 1 },
  { id: "yahoo",    label: "Yahoo! — Hackmeister", ja: "Yahoo! ハックマイスター", start: 2005, end: 2008, lane: 0 },
  { id: "obama",    label: "Obama '08",       ja: "オバマ '08",       start: 2008,   end: 2008.9, lane: 1 },
  { id: "cfa",      label: "Code for America — acting CTO", ja: "Code for America CTO代行", start: 2008.5, end: 2010.5, lane: 2 },
  { id: "sched",    label: "SCHED — CTO",     ja: "SCHED CTO",       start: 2008,   end: 2010,   lane: 3 },
  { id: "lensley",  label: "Lensley — co-founder/CTO", ja: "Lensley 共同創業者/CTO", start: 2008, end: 2019, lane: 0 },
  { id: "augmxnt",  label: "AUGMXNT — applied research", ja: "AUGMXNT 応用研究", start: 2016, end: 2023, lane: 1 },
  { id: "shisa",    label: "Shisa.AI — co-founder/CTO", ja: "Shisa.AI 共同創業者/CTO", start: 2023, end: 2027, lane: 0 },
];

// ── Layer 1: Academic ────────────────────────────────────────────
export const ACADEMIC = [
  { id: "usc-ba",  label: "USC — BA Fine Arts (Digital Media)", ja: "USC 美術学士（デジタルメディア）", start: 1997, end: 2001, lane: 0 },
  { id: "usc-mfa", label: "USC MFA Interactive Media — dropped out ✂", ja: "USC MFA インタラクティブメディア — 中退 ✂", start: 2003, end: 2004, lane: 0, dropped: true },
];

// ── Layer 2: Projects ────────────────────────────────────────────
export const PROJECTS = [
  { id: "bbs",        label: "BBSs / FidoNet",           ja: "BBS / FidoNet",           year: 1992, band: 0,
    desc: { en: "Online before the web. Surfing FidoNet echoes from a local BBS.", ja: "ウェブ以前のオンライン。ローカルBBSからFidoNetのエコーをサーフィン。" } },
  { id: "linux",      label: "Linux user since '94",     ja: "Linuxユーザー '94〜",      year: 1994, band: 0,
    desc: { en: "30+ years. Everything from embedded Yocto builds to multi-DC deployments.", ja: "30年以上。組込みYoctoビルドからマルチDCデプロイメントまで。" } },
  { id: "randomfoo",  label: "randomfoo.net",            ja: "randomfoo.net",            year: 1997, band: 1,
    desc: { en: "Personal site + blog, continuously maintained since 1997.", ja: "1997年から継続的に運営しているブログ/サイト。" } },
  { id: "wordpress",  label: "b2/WordPress contrib",     ja: "b2/WordPressコントリビュータ", year: 2001, band: 0,
    desc: { en: "Tag filtering code for the blog software that became WordPress; Metafilter sanitization + tag balancer.", ja: "WordPressとなったブログソフトへのタグフィルタリングコード。" } },
  { id: "nottoscale", label: "\"Not To Scale\" art",     ja: "「Not To Scale」アート作品", year: 2001, band: 1,
    desc: { en: "Senior art show: custom perl chat server + MITM client for stream interjection — a truth-manipulation art piece in 2001.", ja: "卒業制作：カスタムPerlチャットサーバー＋MITMクライアント — 2001年の真実操作アート作品。" } },
  { id: "freeculture", label: "free_culture (slashdotted)", ja: "free_culture（スラッシュドット）", year: 2002, band: 0,
    desc: { en: "Overslept and missed Lessig's talk. A friend working with Lessig on Creative Commons said he needed someone to put it online. Made a Flash version overnight — just to see the talk I'd missed. Slashdotted. Became one of the most widely distributed versions. Distribution is part of the work — even when you don't know you're the distribution.", ja: "レッシグの講演を寝坊して聞き逃した。CCに関わる友人が「オンライン版が必要」と。聞き逃した講演を見たくてFlash版を一晩で制作。スラッシュドット効果。最も広く配布されたバージョンの一つに。配布も仕事のうち。" } },
  { id: "dss",        label: "DSS — decentralized social", ja: "DSS 分散型SNS", year: 2003, band: 1,
    desc: { en: "Decentralized social network w/ cryptographic trust model — pre-Facebook.", ja: "暗号信頼モデルによる分散型SNS — Facebook以前。" } },
  { id: "rolling",    label: "Rolling Resistance",       ja: "Rolling Resistance",       year: 2004, band: 0,
    desc: { en: "Design/tech collective for online-civic projects — the 2004 'shitposting era' whose connections led to Obama '08.", ja: "オンライン市民プロジェクトのデザイン/テック集団 — 2004年の政治ブログ時代。Obama '08への道筋。" } },
  { id: "katrina",    label: "Katrina List Network",     ja: "カトリーナ避難者リスト",      year: 2005, band: 1,
    desc: { en: "Crisis-data aggregation in week 1 — crawling evacuee lists into PFIF.", ja: "災害データ集約 — 避難者リストをPFIFにクロール。" } },
  { id: "hackdays",   label: "Yahoo! Hack Days",         ja: "Yahoo! Hack Days",         year: 2006, band: 0,
    desc: { en: "Ran the program that globalized hackathon culture. 'Just do things' inside a 10k-person company.", ja: "ハッカソン文化をグローバル化したプログラム。1万人企業の中で「ただやる」を実践。" } },
  { id: "queue",      label: "$500M donation queue",     ja: "5億ドル寄付キューシステム",   year: 2008, band: 0,
    desc: { en: "Obama '08: 100,000× query fix; new queue system in 6 weeks processed ~$500M in donations. One person's code at civilizational moments.", ja: "Obama '08：10万倍のクエリ最適化。6週間で構築した新システムが約5億ドルの寄付を処理。" } },
  { id: "writeout",   label: "Wrote himself out",        ja: "自分を仕事から書き出す",      year: 2014, band: 1,
    desc: { en: "Went nomadic; automated Lensley's infra so it ran 3–5 years with zero support. Pre-AI, with cron jobs and discipline.", ja: "ノマド化。Lensleyのインフラを自動化、3〜5年間サポート不要で稼働。AI以前のcronジョブと規律。" } },
  { id: "metabolic",  label: "Metabolic research",       ja: "代謝研究",                   year: 2017, band: 0,
    desc: { en: "Read thousands of papers → point-of-care insulin testing. 'Theranos, but not a scam.' Once you can read papers, you can keep up with bioRxiv.", ja: "論文数千本を読破→ポイントオブケアインスリン検査。論文が読めれば、bioRxivについていける。" } },
  { id: "shisav1",    label: "shisa-v1 7B",              ja: "shisa-v1 7B",               year: 2023, band: 1,
    desc: { en: "Best open Japanese model of its moment — trained by someone literally illiterate in Japanese who could barely speak it. Not just luck: diligence, discipline, and applying skills from one domain to the next. Evals beat native intuition. Skill acquisition is the meta-skill.", ja: "当時最高の日本語オープンモデル — 日本語が読めず、ほとんど話せない人間がトレーニング。運だけでなく：勤勉さ、規律、あるドメインのスキルを次に応用すること。評価が母語話者の直感に勝った。スキル獲得こそメタスキル。" } },
  { id: "chotto",     label: "chotto.chat",              ja: "chotto.chat",               year: 2024, band: 0,
    desc: { en: "JA/EN translation app — world-class ASR + translation on iOS/Android.", ja: "日英翻訳アプリ — 世界クラスのASR＋翻訳。iOS/Android。" } },
  { id: "dflash",     label: "vLLM DFlash",              ja: "vLLM DFlash",               year: 2025, band: 1,
    desc: { en: "Production practice feeding vLLM core contributions (PR #36847).", ja: "vLLMコアへのプロダクション貢献（PR #36847）。" } },
  { id: "rc",         label: "realitycheck",             ja: "realitycheck",              year: 2026, band: 0,
    desc: { en: "Epistemic infrastructure as code: claims, credence, evidence chains. v1 coded in a weekend while hiking in Taiwan.", ja: "コードとしての認識論的インフラ。v1は台湾ハイキング中に週末で開発。" } },
  { id: "shisad",     label: "shisad",                   ja: "shisad",                    year: 2026.2, band: 1,
    desc: { en: "Security-first agent daemon: policy enforcement, taint tracking. Delegated agency under control.", ja: "セキュリティ第一のエージェントデーモン。ポリシー実施、テイント追跡。制御された委任エージェンシー。" } },
  { id: "mongolia",   label: "Mongolia Sovereign AI",    ja: "モンゴル・ソブリンAI",         year: 2026.3, band: 0,
    desc: { en: "MN LLM/ASR/TTS + cultural preservation. ~5M speakers get frontier tools because a tiny team decided they should.", ja: "モンゴル語LLM/ASR/TTS＋文化保存。約500万人の話者に最先端ツールを。" } },
];

// ── Layer 3: Ideas & movements (era bands) ───────────────────────
export const ERAS = [
  { id: "mainframe", label: "Mainframe / minicomputer", ja: "メインフレーム／ミニコン",  start: 1945, end: 1975, color: "#8a6a3a", pre: true },
  { id: "homebrew",  label: "PC revolution",            ja: "PC革命",                start: 1975, end: 1985, color: "#b8860b" },
  { id: "internet",  label: "Internet goes public",     ja: "インターネット一般公開",    start: 1991, end: 1997, color: "#6a7ec4" },
  { id: "openweb",   label: "Open web / blogging",      ja: "オープンウェブ／ブログ",    start: 1997, end: 2004, color: "#4a8c6a" },
  { id: "web20",     label: "Web 2.0 / social",         ja: "Web 2.0／ソーシャル",      start: 2003, end: 2008, color: "#5a8cb4" },
  { id: "civic",     label: "Civic tech / hack culture", ja: "シビックテック",           start: 2006, end: 2012, color: "#b47a4a" },
  { id: "mobile",    label: "Mobile / maker",           ja: "モバイル／メイカー",        start: 2008, end: 2016, color: "#8c5a8c" },
  { id: "vrcrypto",  label: "VR / crypto / QS",         ja: "VR／暗号通貨／QS",         start: 2014, end: 2020, color: "#7a5ab4" },
  { id: "ai",        label: "AI / LLM / agentic",       ja: "AI／LLM／エージェント",    start: 2020, end: 2027, color: "#2a8a7a" },
];

// ── Layer 4: Historical moments (vertical markers) ───────────────
// Two tracks: tech/product launches + intellectual/scientific milestones
// Not just "what shipped" but "what made the next thing thinkable"
export const MOMENTS = [
  // ─ Pre-timeline intellectual ancestry (shown when zoomed out) ─
  { id: "memex",       label: "Memex (Bush)",           ja: "メメックス（ブッシュ）",      year: 1945, color: "#8a6a3a", track: "ideas",
    img: "img/bush.jpg",
    note: { en: "Vannevar Bush, 'As We May Think' (1945) — imagined a personal knowledge machine. The dream that starts the entire arc.", ja: "ヴァネヴァー・ブッシュ「As We May Think」(1945) — 個人知識機械を構想。すべてのアークの始まり。" } },
  { id: "perceptron",  label: "Perceptron (Rosenblatt)", ja: "パーセプトロン",             year: 1958, color: "#8a6a3a", track: "ideas",
    img: "img/perceptron.svg",
    note: { en: "Frank Rosenblatt's perceptron — the first trainable neural network. Killed by Minsky & Papert's critique (1969), resurrected 54 years later as deep learning.", ja: "フランク・ローゼンブラットのパーセプトロン — 最初の学習可能なニューラルネットワーク。ミンスキーとパパートの批判で葬られ、54年後にディープラーニングとして復活。" } },
  { id: "xanadu",      label: "Xanadu (Ted Nelson)",    ja: "ザナドゥ（テッド・ネルソン）", year: 1960, color: "#8a6a3a", track: "ideas",
    img: "img/nelson.jpg",
    note: { en: "Hypertext coined here. Nelson imagined a universal document network — the web is a shadow of his vision.", ja: "ハイパーテキストの造語。ネルソンは普遍的文書ネットワークを構想 — ウェブは彼のビジョンの影。" } },
  { id: "projectmac",  label: "Project MAC (MIT) ☆",    ja: "Project MAC（MIT）☆",        year: 1963, color: "#8a6a3a", track: "ideas",
    note: { en: "⬅ YOUR READING: Athena's predecessor. Pioneered time-sharing — multiple users on one machine. Became LCS in 1975. Athena saw itself as MAC's next chapter.", ja: "⬅ 課題文献：Athenaの前身。タイムシェアリングを先駆 — 1台のマシンに複数ユーザー。1975年にLCSへ。AthenaはMACの次章と自認。" } },
  { id: "engelbart",   label: "Mother of All Demos",    ja: "すべてのデモの母",            year: 1968, color: "#8a6a3a", track: "ideas",
    img: "img/engelbart-demo.jpg",
    note: { en: "Engelbart demos mouse, hypertext, video conferencing, collaborative editing — in 1968. Everything else is catching up.", ja: "エンゲルバートがマウス、ハイパーテキスト、ビデオ会議、共同編集をデモ — 1968年。その後はすべてがキャッチアップ。" } },
  { id: "arpanet",     label: "ARPANET",                ja: "ARPANET",                    year: 1969, color: "#6a7ec4", track: "tech",
    img: "img/arpanet.png",
    note: { en: "DARPA-funded. Heilmeier directed DARPA 1975–77 — the same agency, the same catechism they just read.", ja: "DARPA資金。ハイルマイヤーは1975-77年にDARPAを指揮 — 課題文献と同じ機関、同じ問答集。" } },
  { id: "xeroxparc",   label: "Xerox PARC / Alto",      ja: "Xerox PARC / Alto",          year: 1973, color: "#8a6a3a", track: "ideas",
    img: "img/alto.jpg",
    note: { en: "GUI, Ethernet, laser printer, OOP — all invented here. Apple saw it and made the Mac. But PARC itself never shipped to consumers.", ja: "GUI、イーサネット、レーザープリンター、OOP — すべてここで発明。Appleが見てMacを作った。しかしPARC自体は消費者に届かなかった。" } },
  { id: "logo",        label: "Logo / Papert ☆",        ja: "Logo（パパート）☆",            year: 1967, color: "#8a6a3a", track: "ideas",
    img: "img/papert.jpg",
    note: { en: "⬅ YOUR READING: Seymour Papert's 'things to think with.' Athena's challengers wanted this — computers as thought partners, not efficient textbooks.", ja: "⬅ 課題文献：シーモア・パパートの「考えるための道具」。Athenaの批判者はこれを望んだ — 効率的な教科書ではなく、思考のパートナーとしてのコンピュータ。" } },

  // ─ PC revolution ─
  { id: "apple2",      label: "Apple II",               ja: "Apple II",                   year: 1977, color: "#b8860b", track: "tech" },
  { id: "ibmpc",       label: "IBM PC",                 ja: "IBM PC",                     year: 1981, color: "#b8860b", track: "tech",
    img: "img/ibm-pc.jpg" },
  { id: "athena",      label: "Project Athena (MIT) ☆", ja: "Project Athena（MIT）☆",     year: 1983, color: "#c44a4a", track: "tech",
    note: { en: "⬅ YOUR READING: $50M bet on 'coherent' networked computing. Not a failure — produced X Window System & Kerberos (both still running today), normalized campus-wide networked computing. The 'mundane 70%' (email, word processing) was students embracing computing. The reading's point: a project is never just its technology. Name survived into the 2000s.", ja: "⬅ 課題文献：「一貫した」ネットワークコンピューティングに5千万ドルの賭け。失敗ではない — X Window SystemとKerberosを生み出し（今も稼働中）、キャンパス全体のネットワークコンピューティングを普及させた。「日常的な70%」は学生がコンピューティングを受け入れた証拠。読み物のポイント：プロジェクトは決してその技術だけではない。" } },
  { id: "mac",         label: "Macintosh",              ja: "Macintosh",                  year: 1984, color: "#b8860b", track: "tech",
    img: "img/mac128k.png" },
  { id: "cyc",         label: "Cyc (Lenat)",            ja: "Cyc（レナート）",             year: 1984, color: "#8a6a3a", track: "ideas",
    note: { en: "Hand-encode all human knowledge. 40 years later, still running, still incomplete. The opposite bet from neural nets — and the Schön/Rein frame analysis predicts exactly why: the designers' frame was invisible to themselves.", ja: "人間の全知識を手作業でエンコード。40年後もまだ稼働中、まだ不完全。ニューラルネットとは正反対の賭け。" } },
  { id: "heilmeier",   label: "Heilmeier @ DARPA ☆",    ja: "ハイルマイヤー＠DARPA ☆",    year: 1975, color: "#c44a4a", track: "ideas",
    note: { en: "⬅ YOUR READING: George Heilmeier directed DARPA 1975–77. LCD pioneer. His catechism: 8 questions every proposal must answer. Written at the agency that created ARPANET (→ the internet). The catechism is a frame-making tool — it determines what counts as 'worthy.'", ja: "⬅ 課題文献：ジョージ・ハイルマイヤーが1975-77年にDARPAを指揮。LCD開発者。彼の問答集：すべての提案が答えるべき8つの問い。ARPANET（→インターネット）を作った機関で書かれた。" } },

  // ─ Internet era ─
  { id: "www",         label: "World Wide Web",         ja: "World Wide Web",             year: 1991, color: "#6a7ec4", track: "tech",
    img: "img/first-web-server.jpg",
    note: { en: "Berners-Lee at CERN. Built on hypertext (Nelson, 1960), networked computing (ARPANET, 1969), and the workstation model that Athena helped normalize. This NeXT cube was the first web server.", ja: "CERNのバーナーズ＝リー。ハイパーテキスト（ネルソン,1960）、ネットワークコンピューティング（ARPANET,1969）、Athenaが一般化を助けたワークステーションモデルの上に構築。このNeXTキューブが最初のウェブサーバー。" } },
  { id: "mosaic",      label: "Mosaic browser",         ja: "Mosaicブラウザ",              year: 1993, color: "#6a7ec4", track: "tech" },
  { id: "google",      label: "Google",                 ja: "Google",                     year: 1998, color: "#4a8c6a", track: "tech" },
  { id: "wikipedia",   label: "Wikipedia",              ja: "Wikipedia",                  year: 2001, color: "#4a8c6a", track: "tech",
    note: { en: "The 'thousand flowers' strategy that Athena wanted — but emergent, not designed. Nobody at MIT predicted that the mundane 70% would become the platform for the world's knowledge.", ja: "Athenaが望んだ「千の花」戦略 — しかし設計されたものではなく創発的。MITの誰も「日常的な70%」が世界の知識のプラットフォームになると予測しなかった。" } },

  // ─ Social / mobile ─
  { id: "facebook",    label: "Facebook",               ja: "Facebook",                   year: 2004, color: "#5a8cb4", track: "tech" },
  { id: "twitter",     label: "Twitter",                ja: "Twitter",                    year: 2006, color: "#5a8cb4", track: "tech" },
  { id: "iphone",      label: "iPhone",                 ja: "iPhone",                     year: 2007, color: "#8c5a8c", track: "tech" },

  // ─ Crypto / VR ─
  { id: "bitcoin",     label: "Bitcoin whitepaper",     ja: "Bitcoinホワイトペーパー",      year: 2008.8, color: "#7a5ab4", track: "tech" },

  // ─ AI arc — the long build ─
  { id: "alexnet",     label: "AlexNet",                ja: "AlexNet",                    year: 2012, color: "#2a8a7a", track: "ideas",
    note: { en: "Deep learning works. The perceptron idea (1958), abandoned after Minsky's critique, finally vindicated 54 years later with enough compute and data.", ja: "ディープラーニングが機能した。パーセプトロンのアイデア（1958年）が、ミンスキーの批判後に放棄され、54年後に十分な計算資源とデータで正当化された。" } },
  { id: "gan",         label: "GANs (Goodfellow)",      ja: "GAN（グッドフェロー）",        year: 2014, color: "#2a8a7a", track: "ideas" },
  { id: "transformer", label: "Transformer paper",      ja: "Transformer論文",             year: 2017, color: "#2a8a7a", track: "ideas",
    note: { en: "'Attention Is All You Need' — the architecture behind every LLM they use daily. 8 Google researchers, many since left. Another mundane-looking paper that changed everything.", ja: "「Attention Is All You Need」— 彼らが毎日使うすべてのLLMの背後にあるアーキテクチャ。Google研究者8名、多くが退職済み。" } },
  { id: "gpt2",        label: "GPT-2",                  ja: "GPT-2",                      year: 2019, color: "#2a8a7a", track: "tech" },
  { id: "gpt3",        label: "GPT-3",                  ja: "GPT-3",                      year: 2020.5, color: "#2a8a7a", track: "tech" },
  { id: "dalle",       label: "DALL·E",                 ja: "DALL·E",                     year: 2021, color: "#2a8a7a", track: "tech" },
  { id: "sd",          label: "Stable Diffusion",       ja: "Stable Diffusion",           year: 2022.5, color: "#2a8a7a", track: "tech" },
  { id: "chatgpt",     label: "ChatGPT",                ja: "ChatGPT",                    year: 2022.9, color: "#2a8a7a", track: "tech",
    note: { en: "The 'mundane 70%' moment for AI. Not a research breakthrough — GPT-3.5 wrapped in a chat UI. Distribution is part of the work.", ja: "AIの「日常的70%」の瞬間。研究のブレークスルーではない — GPT-3.5をチャットUIで包んだだけ。配布も仕事のうち。" } },
  { id: "gpt4",        label: "GPT-4",                  ja: "GPT-4",                      year: 2023.2, color: "#2a8a7a", track: "tech" },
  { id: "claude3",     label: "Claude 3 Opus",          ja: "Claude 3 Opus",              year: 2024.2, color: "#2a8a7a", track: "tech" },
  { id: "fable5",      label: "Fable 5 → export ban",   ja: "Fable 5 → 輸出規制",         year: 2026.4, color: "#c44a4a", track: "tech",
    note: { en: "Released June 9, 2026 — taken down June 12 by US export control. First government-directed takedown of a deployed frontier model. Three conflicting accounts. Your access to US frontier AI is now demonstrably revocable. This is what we opened with.", ja: "2026年6月9日リリース、6月12日に米国輸出規制で停止。商用フロンティアモデルへの初の政府指令による停止。3つの矛盾する説明。米国フロンティアAIへのアクセスは取り消し可能であることが証明された。冒頭で話した通り。" } },
];
