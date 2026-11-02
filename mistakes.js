// 실수 노트. Claude가 연습 후 추가. cnt = 나온 횟수 (2번 이상이면 집중 대상)
// type: 시제 / 문법 / 표현 / 발음 / 막힘
const mistakes = [
  // ===== 11/2 · 공원 콤보 =====
  { type: "시제", wrong: "I just had married three months ago / I just married", right: "I got married three months ago", why: "ago가 있으면 현재완료 ✗, 그냥 과거형. AL 판별 포인트", topic: "공원 루틴", date: "11/2", cnt: 3 },
  { type: "시제", wrong: "the festival visitors are more than ~ / there are so many people", right: "there were so many people", why: "지난 일 얘기는 끝까지 과거형 유지", topic: "공원 과거경험", date: "11/2", cnt: 2 },
  { type: "시제", wrong: "the governor decide to start / the first time I visit", right: "decided / visited", why: "과거 이야기 중 동사 원형으로 돌아가는 실수", topic: "공원 과거경험", date: "11/2", cnt: 3 },
  { type: "문법", wrong: "lose my weight", right: "lose weight", why: "weight 앞에 my 안 붙임", topic: "공원 루틴", date: "11/2", cnt: 3 },
  { type: "문법", wrong: "two or three times on a week", right: "two or three times a week", why: "횟수 + a week (on 없음)", topic: "공원 루틴", date: "11/2", cnt: 2 },
  { type: "문법", wrong: "thirty minutes or an hours", right: "thirty minutes to an hour", why: "범위는 to, an hour는 단수", topic: "공원 루틴", date: "11/2", cnt: 2 },
  { type: "문법", wrong: "I have got weighed 10 kilograms / I got more than 10 kilograms", right: "I've gained more than ten kilograms", why: "살이 쪘다 = gain weight", topic: "공원 루틴", date: "11/2", cnt: 2 },
  { type: "문법", wrong: "Gimcheon is sounds like", right: "Gimcheon sounds like", why: "be동사 + 일반동사 같이 쓰지 않기", topic: "공원 과거경험", date: "11/2", cnt: 1 },
  { type: "문법", wrong: "which held in my city", right: "which was held in my city", why: "행사가 '열리다' = be held (수동태)", topic: "공원 과거경험", date: "11/2", cnt: 1 },
  { type: "문법", wrong: "there is so many birds / it sings a song", right: "there are so many birds / they sing", why: "새는 여러 마리 → 복수", topic: "공원 묘사", date: "11/2", cnt: 2 },
  { type: "문법", wrong: "so many peoples", right: "so many people", why: "people은 이미 복수", topic: "공원 과거경험", date: "11/2", cnt: 1 },
  { type: "문법", wrong: "a park I usually go there / I really like to visit there", right: "a park I usually go to / I really like going there", why: "관계절 안에서 there 중복 ✗, visit 뒤엔 there ✗", topic: "공원 묘사", date: "11/2", cnt: 2 },
  { type: "표현", wrong: "a very beautiful scenery", right: "really beautiful scenery", why: "scenery는 셀 수 없음 → a 빼기", topic: "공원 묘사", date: "11/2", cnt: 1 },
  { type: "표현", wrong: "in the just middle of the park / just central side", right: "right in the middle of the park", why: "'딱 가운데' = right in the middle", topic: "공원 묘사", date: "11/2", cnt: 2 },
  { type: "표현", wrong: "it looked like very delicious", right: "it looked really delicious", why: "look + 형용사 (like 빼기)", topic: "공원 과거경험", date: "11/2", cnt: 1 },
  { type: "표현", wrong: "we failed to it finish", right: "we couldn't finish it", why: "제일 자연스러운 '다 못 먹었다'", topic: "공원 과거경험", date: "11/2", cnt: 1 },
  { type: "표현", wrong: "I really like to enjoy jogging", right: "I really enjoy jogging", why: "like + enjoy 겹침, 하나만", topic: "공원 묘사", date: "11/2", cnt: 1 },
  { type: "표현", wrong: "I have purpose story", right: "I have the perfect story for this question", why: "발음 주의: perfect", topic: "공원 과거경험", date: "11/2", cnt: 1 },
  { type: "발음", wrong: "really makes me feel relaxed / hearing them sing", right: "the sound of the birds really calms me down", why: "r·l 연속, s·ing 연속이 입에 안 붙어서 교체", topic: "공원 묘사", date: "11/2", cnt: 1 },
  { type: "발음", wrong: "that Coke 처럼 들림", right: "Diet Coke — Diet를 또렷하게 끊어서", why: "농담 핵심 단어라 안 들리면 웃음 포인트가 죽음", topic: "공원 루틴", date: "11/2", cnt: 1 },
  { type: "발음", wrong: "one hundred thousand people came", right: "the whole park was packed with people", why: "숫자 문장이 입에 안 붙어서 교체", topic: "공원 과거경험", date: "11/2", cnt: 1 },
  { type: "막힘", wrong: "축제 장소·공원 이름·신라 고승 유래 설명하다 한국어로 끊김", right: "It was held at a big park in Gimcheon. (한 문장으로 끝)", why: "고유명사·배경은 채점 안 함. 길게 설명하려다 꼬임", topic: "공원 과거경험", date: "11/2", cnt: 2 },
];
