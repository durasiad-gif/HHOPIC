// 스토리 색인. 만능 스토리를 어디에 썼는지, 다음에 쓸 때 뭘 피할지.
// Claude가 콤보 최종본 정리할 때마다 갱신. 새 답변 만들 땐 이 표 먼저 확인.
// state: "콤보" = 새 방식으로 완성 / "개편 전" = 예전 카드에만 있음, 해당 콤보 할 때 쉬운 문장으로 다시
// used: 쓴 곳과 그때 쓴 핵심 문장 (다음엔 이 문장 그대로 쓰지 않기)
const settings = [
  "김천 아파트, 아내와 생활 (서베이는 홀로 거주지만 답변은 아내 얘기 OK, 시험 내내 일관되게)",
  "결혼은 올해 (공원 루틴: three months ago 기준)",
  "운동 시간: 아침 = 아내랑 공원 조깅 (콤보에서 확정)",
  "⚠ 충돌: 예전 자기소개·헬스 카드는 '매일 아침 헬스 10년째, 또래보다 몸 좋음' → 조깅 콤보의 '아침 조깅, 결혼 후 10kg 찜'과 안 맞음. 헬스·자기소개 다시 할 때 맞추기",
];

const stories = [
  {
    name: "결혼 후 10kg 찜", state: "콤보",
    kw: "결혼하고 살쪄서 아내가 빼라고 함 → 운동 시작",
    used: [
      { where: "공원 Q2 루틴", line: "I got married three months ago, and I've gained more than ten kilograms since then." },
      { where: "조깅 Q2 비교", line: "Since my wedding, I've put on about ten kilograms." },
    ],
    avoid: "이미 두 번 씀. 또 쓰면 세 번째 표현으로 (예: I've been eating way too much since the wedding). 한 시험에 세 번 나오면 외운 티 → 수영·헬스에선 되도록 다른 이유로",
    fit: "걷기, 헬스, 건강, 다이어트 돌발",
  },
  {
    name: "아내랑 아침 공원 조깅", state: "콤보",
    kw: "아침에 동네 공원에서 아내랑 같이 뜀",
    used: [
      { where: "공원 Q1 묘사", line: "I usually go there with my wife, and we go jogging together." },
      { where: "공원 Q2 루틴", line: "I usually go there in the morning. First, I do some stretching…" },
      { where: "조깅 Q1 묘사", line: "I usually go jogging early in the morning with my wife, at the park near our place." },
    ],
    avoid: "공원은 '공원이 좋은 이유', 조깅은 '뛰는 게 좋은 이유'로 초점 나누기. 걷기 콤보는 저녁 산책 등 다른 장면으로",
    fit: "걷기, 동네, 가족·배우자 돌발",
  },
  {
    name: "동네 공원 (연못·새소리)", state: "콤보",
    kw: "아파트 근처 작은 공원, 가운데 연못, 새소리에 마음이 편해짐",
    used: [
      { where: "공원 Q1 묘사", line: "Right in the middle of the park, there's a pond… the sound of the birds really calms me down." },
    ],
    avoid: "걷기·조깅에서 장소 묘사 필요하면 연못 대신 트랙·벤치 등 다른 디테일",
    fit: "걷기, 우리 동네, 집 근처 돌발",
  },
  {
    name: "다이어트 콜라 농담", state: "콤보",
    kw: "운동 끝나고 편의점에서 다이어트 콜라 → at least it's diet",
    used: [
      { where: "공원 Q2 루틴", line: "I always grab a Diet Coke… but hey, at least it's diet!" },
    ],
    avoid: "농담은 한 시험에 한 번만. 다른 곳에 또 넣지 않기",
    fit: "(한 번만)",
  },
  {
    name: "김천 김밥 축제", state: "콤보",
    kw: "작년 아내랑 김밥 축제, 사람 엄청 많음, 너무 매워서 다 못 먹음",
    used: [
      { where: "공원 Q3 과거경험", line: "Last year, my wife and I went to the gimbap festival at a park in Gimcheon." },
    ],
    avoid: "김밥천국 유래 설명은 한 문장에서 끝 (예전에 막힌 곳)",
    fit: "음식, 축제·행사, 우리 동네, 기억에 남는 외출 돌발",
  },
  {
    name: "발리 신혼여행", state: "콤보",
    kw: "발리 신혼여행. 장면이 여러 개: ① 새벽 혼자 해변 조깅·일출 ② 리조트·음식·친절 ③ 출발 전 여권 분실",
    used: [
      { where: "조깅 Q3 과거경험 (①)", line: "I'll never forget jogging in Bali on my honeymoon." },
      { where: "해외여행 예전 카드 (②)", line: "My most memorable trip abroad was my honeymoon in Bali…" },
      { where: "해외여행 문제 예전 카드 (③)", line: "we realized my wife had lost her passport…" },
    ],
    avoid: "해외여행 콤보에선 ① 조깅·일출 장면 빼고 ②③으로. 첫 문장도 I'll never forget 말고 다르게",
    fit: "해외여행, 휴가, 호텔, 여행 중 문제, 결혼 돌발",
  },
  {
    name: "수영 대회 평영 50m", state: "개편 전",
    kw: "평영 50m, 기록 정체 → 열심히 훈련 → 개인 기록 경신했지만 4등",
    used: [{ where: "수영 예전 카드", line: "The last time I competed was last month, in the 50m breaststroke…" }],
    avoid: "수영 콤보 때 쉬운 문장으로 다시. 11/7 대회 결과 나오면 최신 버전으로 교체",
    fit: "수영, 운동 경기, 목표·성취, 최근 이룬 일 돌발",
  },
  {
    name: "강릉 서핑, 아내 구조", state: "개편 전",
    kw: "작년 여름 강릉, 서핑 강습 중 큰 파도 → 아내가 허우적 → 내가 구함 → 아내 수영 시작",
    used: [{ where: "수영 문제 예전 카드", line: "My wife and I went to Gangneung to enjoy the beach…" }],
    avoid: "수영 문제 상황 or 국내여행 문제 상황 중 한 곳에만",
    fit: "수영, 국내여행, 해변, 위험했던 경험, 예상 못 한 일 돌발",
  },
  {
    name: "울진 테슬라 차박", state: "개편 전",
    kw: "첫 캠핑, 테슬라로 울진 해변 차박, 간단하게 준비, 스노클링·고기",
    used: [{ where: "캠핑·국내여행 예전 카드", line: "My first-ever camping trip was a car-camping trip to Uljin in my Tesla…" }],
    avoid: "테슬라 얘기가 기술 돌발과 겹침 → 캠핑에선 차 자체 설명은 짧게",
    fit: "캠핑, 드라이브, 국내여행, 해변 돌발",
  },
  {
    name: "테슬라 (새 차)", state: "개편 전",
    kw: "10년 넘은 차에서 테슬라로, 스마트폰 처음 쓸 때 같은 느낌, 연료비 1/3",
    used: [{ where: "돌발 Technology 예전 카드", line: "I recently got a Tesla…" }],
    avoid: "드라이브 콤보에서 쓸 땐 기술 말고 운전하는 장면 위주",
    fit: "드라이브, 기술, 최근 산 물건, 교통 돌발",
  },
  {
    name: "집에서 롤·페이커", state: "개편 전",
    kw: "더우면 집에서 에어컨, 맥주, 롤, e스포츠 경기 보기",
    used: [{ where: "집 휴가 예전 카드", line: "…staying home with the AC on, having a beer, and playing computer games." }],
    avoid: "집 휴가 콤보 때 쉬운 문장으로 다시",
    fit: "집 휴가, 게임, 인터넷, 여가 돌발",
  },
  {
    name: "영화 〈호프〉 (나홍진)", state: "개편 전",
    kw: "나홍진 감독 팬, 한국식 SF라 신선함",
    used: [{ where: "영화 예전 카드", line: "One movie that really stood out to me recently was \"Hope\"…" }],
    avoid: "영화 콤보 때 쉬운 문장으로 다시",
    fit: "영화, 극장, 최근 본 것 돌발",
  },
  {
    name: "에드 시런 · 운동할 때 음악", state: "개편 전",
    kw: "팝, 에드 시런, 운전·운동할 때 들음",
    used: [
      { where: "음악 예전 카드", line: "Ed Sheeran is my favorite artist by far." },
      { where: "헬스 예전 카드", line: "I usually listen to pop music, especially Ed Sheeran…" },
    ],
    avoid: "음악과 헬스에 같은 문장 반복 중 → 헬스에선 한 마디만",
    fit: "음악, 헬스, 드라이브, 콘서트 돌발",
  },
];
