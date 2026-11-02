// 카드(모범답안). group: intro / travel / gym / park / culture / random / rp / adv
const cards = [
  {
    section: "자기소개", group: "intro",
    cards: [
      { q: "Please introduce yourself.", a: "Hi Ava, it's nice to meet you. My name is Hyohyeok, and I live in Gimcheon, a small city right in the middle of South Korea. Since there isn't a whole lot to do around here, I've <strong>gotten really into</strong> exercise as a way to fill my free time — I go to the gym every morning and go swimming every evening, and <strong>I've kept that routine up for years now</strong>. Besides working out, I also love cooking, especially for my wife. I'm pretty good at making Korean dishes like kimchi-jjigae and bulgogi, so <strong>it's actually a bit of a shame</strong> you can't try them, Ava. Anyway, that's a little about me — let's get started.", expr: "표현: gotten really into / I've kept that routine up (현재완료) / it's actually a bit of a shame" }
    ]
  },
  {
    section: "운동 — 수영", group: "gym",
    cards: [
      { q: "Describe your swimming routine in detail.", a: "I usually go swimming around 7 p.m. on weekdays, right after I <strong>wrap up</strong> my day. I'm actually part of a masters class, so I'm swimming alongside a lot of people who are seriously good at it, which keeps me motivated to keep improving. Before getting in the pool, I always take a shower and do a quick warm-up — rotating my shoulders, arms, and ankles — so I don't pull anything. The class runs for about 50 minutes, during which I practice four different strokes: freestyle, butterfly, breaststroke, and so on. By the end I'm completely exhausted, but there's this <strong>exhilarating feeling</strong> right after, and I think that's honestly why I keep <strong>dragging myself</strong> there every single day, even when I'm tired.", expr: "표현: exhilarating feeling / dragging myself there / wrap up my day" },
      { q: "Tell me about a swimming competition you participated in.", a: "The last time I competed was last month, in the 50m breaststroke — my main stroke. My personal best <strong>had been stuck</strong> at 40 seconds for a while, and no matter how hard I trained, I couldn't seem to <strong>break through that plateau</strong>. So I trained even harder leading up to the meet — stretching, dryland workouts, extra swimming — and on competition day I actually managed to set a new personal record, which felt incredible. Still, I only finished 4th overall, <strong>just barely missing the podium</strong> despite the new PR, so I'm now training even harder for next month's meet, <strong>determined to turn</strong> that near-miss into an actual medal.", expr: "표현: hit/break through a plateau / narrowly (just barely) missing / had been stuck (과거완료)" },
      { q: "Was there ever a problem or unexpected situation related to swimming?", a: "Something unexpected happened related to swimming last summer. My wife and I went to Gangneung to enjoy the beach, and we had a great time taking in the exotic scenery, eating seafood, and snorkeling. But <strong>things took a turn</strong> during a surfing lesson we signed up for — <strong>I'd surfed before</strong>, but it was my wife's first time, and <strong>to make matters worse</strong>, she wasn't a very strong swimmer. A big wave suddenly hit us during the lesson, and she ended up getting disoriented in the water. <strong>Without thinking twice</strong>, I swam straight to her and pulled her to safety, and thanks to the lifeguard, we grabbed some flotation tubes and made it back to shore safely. That experience was <strong>so terrifying that, as a result</strong>, my wife decided to start taking swimming lessons.", expr: "표현: things took a turn / to make matters worse / I'd surfed before (과거완료) / so~that, as a result" }
    ]
  },
  {
    section: "운동 — 헬스", group: "gym",
    cards: [
      { q: "How is your gym routine part of your daily life?", a: "Every morning I <strong>hit the gym</strong> before work — <strong>I've kept this up</strong> for about 10 years, which is why I'm in noticeably better shape than most people my age. It's mainly focused on strength training, and I usually listen to pop music, especially Ed Sheeran, to stay energized while lifting. This routine <strong>has become such a fixed part of my day</strong> that skipping it actually feels more uncomfortable than doing it.", expr: "표현: hit the gym / I've kept this up (현재완료)" }
    ]
  },
  {
    section: "공원 콤보 · 1일차 (11/2) · 교재 18~20쪽", group: "park",
    cards: [
      { q: "You indicated in the survey that you enjoy going to parks. Which park do you like to go to? Where is it, and what does it look like? Who do you usually go with? Please describe your favorite park in detail.", a: "Well, there's a small park near my apartment, and I really love going there. It's not a big park, but the scenery is really beautiful. There's a running track, and <strong>right in the middle of</strong> the park, there's a pond. <strong>There are</strong> so many birds around the pond, and <strong>the sound of the birds really calms me down</strong>. I usually go there with my wife, and we go jogging together. So yeah, it's a small park, but <strong>it's my favorite place to relax</strong>.", expr: "묘사 · 키워드: near my apartment / small but beautiful / pond in the middle / sound of the birds / jogging with my wife<br>주의: in the just middle ✗ → right in the middle / 새 여러 마리 → there are, they sing / 마무리에서 small park 반복 ✗" },
      { q: "How often do you go to the park? What do you usually do there? Describe a typical day at the park, from the moment you arrive to the time you leave.", a: "I usually go to the park two or three times <strong>a week</strong>. You know, <strong>I got married</strong> three months ago, and <strong>I've gained</strong> more than ten kilograms since then. So my wife really wants me to <strong>lose weight</strong>. I usually go there in the morning. First, I do some stretching, because I don't want to get injured. Then I jog around the pond for about thirty minutes <strong>to an hour</strong>. After that, I go to a convenience store, and I always grab a Diet Coke. I know, I know, it's not great for losing weight... but hey, <strong>at least it's diet</strong>!", expr: "루틴 · 키워드: two or three times a week / ten kilograms since the wedding / morning / stretching → jog around the pond → Diet Coke<br>주의: on a week ✗ → a week / lose my weight ✗ → lose weight / I just married ✗ → I got married (ago = 과거형) / an hours ✗ → to an hour / Diet 또렷하게 끊어서" },
      { q: "Tell me about a memorable experience you had at a park. When was it, and who were you with? What happened, and why was it so memorable?", a: "Last year, my wife and I went to the gimbap festival at a park in Gimcheon, and it was really memorable. People say <strong>Gimcheon sounds like</strong> a short name for Gimbap Cheonguk, a famous gimbap restaurant chain. So I guess that's why the city <strong>decided</strong> to start the festival. Gimcheon is a small city, but the whole park <strong>was packed with people</strong>. My wife and I bought some gimbap, and it <strong>looked really delicious</strong>. But it was really, really spicy, so <strong>we couldn't finish it</strong>. So that's why it was so memorable. Next year, we'll definitely try a milder one.", expr: "과거경험 · 키워드: last year gimbap festival / Gimbap Cheonguk joke / packed with people / really spicy / couldn't finish it<br>주의: Gimcheon is sounds ✗ → Gimcheon sounds / which held ✗ → which was held / decide ✗ → decided / there are ✗ → there were (지난 일은 끝까지 과거) / peoples ✗ → people / 공원 이름·역사 설명하다 막히지 말 것" }
    ]
  },
  {
    section: "이전 카드 · 설정 다름 (밤·강변) → 위 콤보 설정으로 통일", group: "park",
    cards: [
      { q: "Tell me about a park you go to and what you do there.", a: "There's a riverside park near my place that I go to fairly often — partly to relax, and partly because it's where I jog. What's a bit unusual about me is that I actually jog more in winter than summer, since <strong>I can't stand the heat</strong> or direct sunlight, so I always go at night <strong>regardless of the season</strong>. The same park also has an extreme sports facility built into it, and even though I don't do extreme sports myself, I like watching the people who do — they seem <strong>completely unafraid of</strong> getting hurt, which amazes me every time. So while they treat the park as a playground for taking risks, I treat it as my quiet, sun-free jogging route.", expr: "표현: can't stand ~ / regardless of the season" }
    ]
  },
  {
    section: "영화보기", group: "culture",
    cards: [
      { q: "Tell me about a movie that left an impression on you.", a: "One movie that really stood out to me recently was \"Hope,\" directed by Na Hong-jin, whose earlier films <strong>I'd already been a fan of</strong>. <strong>I've always liked</strong> sci-fi as a genre, but what made this one special was that it was a <strong>distinctly Korean take on</strong> sci-fi, which felt refreshing compared to the usual Hollywood blockbusters. It gave me a different perspective on what the genre could look like outside the typical big-budget formula.", expr: "표현: distinctly Korean take on / I'd already been a fan of (과거완료)" }
    ]
  },
  {
    section: "음악감상하기", group: "culture",
    cards: [
      { q: "What kind of music do you listen to, and when?", a: "I mostly listen to pop music, and Ed Sheeran is my favorite artist <strong>by far</strong>. I usually listen while driving or working out, since music helps me stay energized and focused rather than just sitting in silence. <strong>It's become such a habit that</strong> a workout without music feels noticeably less motivating.", expr: "표현: by far / it's become such a habit that (현재완료)" }
    ]
  },
  {
    section: "해외여행", group: "travel",
    cards: [
      { q: "Tell me about a memorable trip abroad.", a: "My most memorable trip abroad was my honeymoon in Bali with my wife — it was actually my first time in Southeast Asia. <strong>What surprised me was</strong> how well the food suited my taste, and <strong>on top of that</strong>, everyone we met was incredibly kind and welcoming. We stayed at a huge luxury resort, and <strong>being pampered</strong> like that for days made the whole trip <strong>feel like a dream rather than reality</strong>.", expr: "표현: what surprised me was / on top of that / being pampered" },
      { q: "Did you ever face a problem while preparing for or during that trip?", a: "Right before we were supposed to leave for our honeymoon, we realized my wife <strong>had lost</strong> her passport — <strong>as you can imagine</strong>, we panicked, since we thought the whole trip might fall apart. Fortunately, the embassy and our travel agency <strong>stepped in</strong> and helped us sort it out quickly, <strong>which meant that</strong> we ended up making it to Bali without missing our flight after all. <strong>Looking back on it</strong>, it taught me to always double-check documents days in advance rather than the night before.", expr: "표현: had lost (과거완료) / stepped in (구동사) / looking back on it" }
    ]
  },
  {
    section: "국내여행 · 캠핑 · 해변", group: "travel",
    cards: [
      { q: "Tell me about a camping or domestic trip you went on.", a: "My first-ever camping trip was a car-camping trip to Uljin in my Tesla, right by the beach. Since it was my first time, we kept things minimal and didn't over-prepare, but <strong>that simplicity ended up being part of the charm</strong>. During the day we went snorkeling and swam right off the beach, and in the evening we grilled meat and just relaxed without any fixed schedule — <strong>despite how basic</strong> our setup was, it turned out to be <strong>one of the most enjoyable trips I've had</strong>. It made me realize that a trip doesn't need to be elaborate to be memorable.", expr: "표현: ended up being / despite how basic / one of the most ~ I've had (현재완료)" }
    ]
  },
  {
    section: "집에서 보내는 휴가", group: "travel",
    cards: [
      { q: "How do you like to spend a vacation day at home?", a: "When it's this hot out, my ideal way to spend a vacation day is staying home with the AC on, having a beer, and playing computer games. League of Legends is my favorite by far, and I'm also a big fan of watching professional e-sports — Faker <strong>is basically a household name</strong> at this point if you follow the scene at all. <strong>Instead of</strong> going out and dealing with the heat and crowds, I find just as much excitement staying in and watching top-tier matches.", expr: "표현: is basically a household name / instead of ~, I find just as much" }
    ]
  },
  {
    section: "돌발 — Technology", group: "random",
    cards: [
      { q: "What was the latest electronic device you bought?", a: "I recently got a Tesla, and the experience honestly <strong>reminds me of</strong> the first time I switched to a smartphone — that's how packed with new technology it feels. <strong>What makes the contrast even bigger is</strong> that my previous car was over 10 years old, so the gap in technology was huge. On top of that, since it's electric, it's better for the environment, and the fuel cost is roughly a third of what I used to pay for gas. As a result, <strong>I've become</strong> one of those people who can't stop talking about how good EVs are.", expr: "표현: reminds me of / what makes the contrast even bigger is / I've become (현재완료)" }
    ]
  },
  {
    section: "돌발 — SNS", group: "random",
    cards: [
      { q: "Tell me about your social media habits.", a: "I used to spend a lot of time on Instagram, scrolling through it almost out of habit. However, at some point I realized it was <strong>eating up way more of my time than it was worth</strong>, so <strong>I've been deliberately cutting back</strong> lately. Nowadays I basically only use it for the messenger function, rather than browsing feeds like I used to. Looking back, I think it was a good change, since I have noticeably more free time now.", expr: "표현: eating up ~ than it was worth / I've been deliberately cutting back (현재완료진행)" }
    ]
  },
  {
    section: "롤플레이 필수 패턴", group: "rp",
    cards: [
      { q: "Type A — 질문하기형 (예: 여행 다녀온 친구에게 전화해서 질문하기)", a: "흐름: 인사 → 전화 건 이유 → 질문 3~4개 → 감사/마무리<br><br>Hello, is this Soo-Ahn? It's me, Jae-Hyeong. I heard you just got back from a trip. How was it? <strong>The reason I'm calling is because</strong> I want to take my family on a trip too and I'd like to ask a few questions. Which website did you use to book your flights? Were you happy with your hotel? Are there any restaurants you'd recommend? Thanks for your help — I'll talk to you soon!", expr: "필수표현: The reason I'm calling is because ~ / I heard that ~" },
      { q: "Type B — 문제 해결형 (예: 약속 취소/변경하기)", a: "흐름: 인사 → 원래 약속 언급 → 문제(이유) 설명 → 대안 2~3개 제시 → 마무리<br><br>Hello, is this Jin-Hee? It's Joo-Hyun. <strong>I know we're supposed to</strong> meet tomorrow, but I don't think I can make it — <strong>something came up</strong>. <strong>I was wondering if</strong> you're free next weekend instead. If not, let me know when works for you. Sorry about this, and call me back when you get this. Bye.", expr: "필수표현: I know we're supposed to ~, but / I was wondering if ~ / something came up" }
    ]
  }
];
