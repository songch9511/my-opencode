const pptxgen = require("pptxgenjs");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE"; // 13.333 x 7.5
pptx.author = "Daniel Song";
pptx.company = "The Dimension Company";
pptx.subject = "Archion Search Sales Proposal";
pptx.title = "Archion Search 고객 제안서";
pptx.lang = "ko-KR";

const COLOR = {
  bg: "F5F7FB",
  ink: "0F172A",
  sub: "334155",
  brand: "0B5FFF",
  accent: "14B8A6",
  line: "D8E0EF",
  white: "FFFFFF",
  warn: "F59E0B",
};

const FONT = {
  title: "Aptos Display",
  body: "Aptos",
};

function addBase(slide, title, kicker) {
  slide.background = { color: COLOR.bg };
  slide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 13.333,
    h: 0.58,
    line: { color: COLOR.brand, transparency: 100 },
    fill: { color: COLOR.brand },
  });
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 10.45,
    y: 0.08,
    w: 2.65,
    h: 0.32,
    radius: 0.06,
    line: { color: COLOR.white, transparency: 100 },
    fill: { color: COLOR.white, transparency: 10 },
  });
  slide.addText("Archion Search Proposal", {
    x: 10.57,
    y: 0.125,
    w: 2.38,
    h: 0.18,
    fontFace: FONT.body,
    color: COLOR.white,
    fontSize: 10,
    bold: true,
    align: "center",
  });
  slide.addText(kicker || "Sales-ready deck", {
    x: 0.72,
    y: 0.83,
    w: 12.1,
    h: 0.24,
    fontFace: FONT.body,
    color: COLOR.sub,
    fontSize: 12,
    bold: false,
  });
  slide.addText(title, {
    x: 0.72,
    y: 1.08,
    w: 12.1,
    h: 0.72,
    fontFace: FONT.title,
    color: COLOR.ink,
    fontSize: 31,
    bold: true,
  });
}

function addFooter(slide, idx) {
  slide.addText(`${idx}/12`, {
    x: 12.48,
    y: 7.13,
    w: 0.62,
    h: 0.18,
    fontFace: FONT.body,
    color: "64748B",
    fontSize: 9,
    align: "right",
  });
}

function addBullets(slide, items, x, y, w, h) {
  const runs = [];
  items.forEach((text) => {
    runs.push({
      text,
      options: {
        bullet: { indent: 18 },
        fontFace: FONT.body,
        color: COLOR.ink,
        breakLine: true,
      },
    });
  });
  slide.addText(runs, {
    x,
    y,
    w,
    h,
    fontSize: 20,
    paraSpaceAfterPt: 10,
    valign: "top",
  });
}

function addNotes(slide, text) {
  slide.addNotes(text);
}

// 1 Cover
{
  const s = pptx.addSlide();
  s.background = { color: "0B5FFF" };
  s.addShape(pptx.ShapeType.roundRect, {
    x: 0.74,
    y: 0.82,
    w: 12.0,
    h: 5.92,
    radius: 0.16,
    line: { color: "FFFFFF", transparency: 100 },
    fill: { color: "FFFFFF", transparency: 7 },
  });
  s.addShape(pptx.ShapeType.ellipse, {
    x: 9.7,
    y: -0.9,
    w: 4.8,
    h: 4.8,
    line: { color: "8AB4FF", transparency: 100 },
    fill: { color: "8AB4FF", transparency: 35 },
  });
  s.addText("Archion Search", {
    x: 1.2,
    y: 2.02,
    w: 6.2,
    h: 0.92,
    fontFace: FONT.title,
    color: "FFFFFF",
    fontSize: 50,
    bold: true,
  });
  s.addText("고객 제안서", {
    x: 1.2,
    y: 2.9,
    w: 5.0,
    h: 0.7,
    fontFace: FONT.title,
    color: "DBEAFE",
    fontSize: 36,
    bold: true,
  });
  s.addText("디자이너 가구 셀렉 시간 90% 단축", {
    x: 1.2,
    y: 4.0,
    w: 8.8,
    h: 0.36,
    fontFace: FONT.body,
    color: "E2E8F0",
    fontSize: 18,
    bold: true,
  });
  s.addText("4주 파일럿으로 KPI를 증명하고, 반복 매출 전환까지 연결합니다.", {
    x: 1.2,
    y: 4.42,
    w: 10.8,
    h: 0.38,
    fontFace: FONT.body,
    color: "E2E8F0",
    fontSize: 16,
  });
  s.addText("The Dimension Company", {
    x: 1.2,
    y: 6.1,
    w: 3.2,
    h: 0.24,
    fontFace: FONT.body,
    color: "BFDBFE",
    fontSize: 11,
  });
  addNotes(s, "오늘 목적은 파일럿 시작 의사결정을 만드는 것입니다. KPI와 실행 계획 중심으로 설명합니다.");
  addFooter(s, 1);
}

// 2 Executive Summary
{
  const s = pptx.addSlide();
  addBase(s, "오늘 결정할 3가지", "Executive Summary");
  addBullets(
    s,
    [
      "4주 파일럿 시작 여부 확정",
      "KPI 측정 방식 승인 (검색 시작 -> 컬렉션 저장)",
      "파일럿 이후 상업화 전환 조건 합의",
    ],
    1.0,
    2.0,
    8.6,
    3.8
  );
  s.addShape(pptx.ShapeType.roundRect, {
    x: 9.75,
    y: 2.1,
    w: 2.65,
    h: 3.35,
    radius: 0.08,
    line: { color: COLOR.line },
    fill: { color: COLOR.white },
  });
  s.addText("Decision", {
    x: 10.15,
    y: 2.42,
    w: 1.85,
    h: 0.28,
    fontFace: FONT.body,
    fontSize: 15,
    bold: true,
    color: COLOR.brand,
    align: "center",
  });
  s.addText("No Intro\nOnly Outcome", {
    x: 10.15,
    y: 2.98,
    w: 1.9,
    h: 1.15,
    fontFace: FONT.body,
    fontSize: 18,
    bold: true,
    color: COLOR.ink,
    align: "center",
    valign: "mid",
  });
  addNotes(s, "설명보다 의사결정이 목적임을 명확히 전달합니다.");
  addFooter(s, 2);
}

// 3 Pain Point
{
  const s = pptx.addSlide();
  addBase(s, "고객의 현재 Pain Point", "Why now");
  addBullets(
    s,
    [
      "프로젝트마다 가구 탐색/선정에 시간이 과도하게 소요됩니다.",
      "제안서 제출 리드타임이 길어져 응답 속도가 떨어집니다.",
      "디자이너별 작업 편차가 커 운영 효율이 낮아집니다.",
      "고부가가치 설계보다 반복 작업 비중이 높아집니다.",
    ],
    0.98,
    2.0,
    8.6,
    4.3
  );
  s.addShape(pptx.ShapeType.roundRect, {
    x: 9.8,
    y: 2.0,
    w: 2.7,
    h: 4.1,
    radius: 0.08,
    line: { color: "FECACA", transparency: 100 },
    fill: { color: "FEF2F2" },
  });
  s.addText("병목", {
    x: 10.6,
    y: 2.28,
    w: 1.1,
    h: 0.28,
    fontFace: FONT.body,
    fontSize: 14,
    bold: true,
    color: "B91C1C",
    align: "center",
  });
  s.addText("탐색 시간\n과다", {
    x: 10.2,
    y: 2.92,
    w: 1.9,
    h: 0.9,
    fontFace: FONT.body,
    fontSize: 26,
    bold: true,
    color: "991B1B",
    align: "center",
  });
  s.addText("매출 전환 지연의\n직접 원인", {
    x: 10.2,
    y: 4.22,
    w: 1.9,
    h: 0.65,
    fontFace: FONT.body,
    fontSize: 13,
    color: "7F1D1D",
    align: "center",
  });
  addNotes(s, "문제는 기능 부족이 아니라 탐색 반복으로 인한 리드타임입니다.");
  addFooter(s, 3);
}

// 4 Cost of Delay
{
  const s = pptx.addSlide();
  addBase(s, "문제의 비용화", "Delay cost");
  s.addShape(pptx.ShapeType.roundRect, {
    x: 1.0,
    y: 2.0,
    w: 11.3,
    h: 2.1,
    radius: 0.1,
    line: { color: COLOR.line },
    fill: { color: COLOR.white },
  });
  s.addText("셀렉 지연", {
    x: 1.35,
    y: 2.74,
    w: 1.65,
    h: 0.38,
    fontFace: FONT.body,
    fontSize: 19,
    bold: true,
    color: COLOR.ink,
    align: "center",
  });
  s.addText("->", {
    x: 3.24,
    y: 2.75,
    w: 0.65,
    h: 0.35,
    fontFace: FONT.body,
    fontSize: 22,
    bold: true,
    color: COLOR.brand,
    align: "center",
  });
  s.addText("제안 지연", {
    x: 4.02,
    y: 2.74,
    w: 1.65,
    h: 0.38,
    fontFace: FONT.body,
    fontSize: 19,
    bold: true,
    color: COLOR.ink,
    align: "center",
  });
  s.addText("->", {
    x: 5.95,
    y: 2.75,
    w: 0.65,
    h: 0.35,
    fontFace: FONT.body,
    fontSize: 22,
    bold: true,
    color: COLOR.brand,
    align: "center",
  });
  s.addText("매출 전환 지연", {
    x: 6.75,
    y: 2.74,
    w: 2.3,
    h: 0.38,
    fontFace: FONT.body,
    fontSize: 19,
    bold: true,
    color: COLOR.ink,
    align: "center",
  });
  s.addText("->", {
    x: 9.37,
    y: 2.75,
    w: 0.65,
    h: 0.35,
    fontFace: FONT.body,
    fontSize: 22,
    bold: true,
    color: COLOR.brand,
    align: "center",
  });
  s.addText("기회 손실", {
    x: 10.15,
    y: 2.74,
    w: 1.65,
    h: 0.38,
    fontFace: FONT.body,
    fontSize: 19,
    bold: true,
    color: "B45309",
    align: "center",
  });
  addBullets(
    s,
    [
      "동일 인력 대비 월 처리 프로젝트 수가 제한됩니다.",
      "응답 지연이 길수록 고객 결정 속도가 떨어집니다.",
      "작업 집중도가 깨지며 팀 피로가 누적됩니다.",
    ],
    1.0,
    4.45,
    11.3,
    2.0
  );
  addNotes(s, "비용화는 절대 숫자보다 인과 구조를 보여주는 것이 중요합니다.");
  addFooter(s, 4);
}

// 5 Solution
{
  const s = pptx.addSlide();
  addBase(s, "Archion Search 솔루션", "Search-first MVP");
  s.addShape(pptx.ShapeType.roundRect, {
    x: 0.95,
    y: 2.12,
    w: 3.9,
    h: 2.18,
    radius: 0.1,
    line: { color: "BFDBFE" },
    fill: { color: "EFF6FF" },
  });
  s.addShape(pptx.ShapeType.roundRect, {
    x: 4.72,
    y: 2.12,
    w: 3.9,
    h: 2.18,
    radius: 0.1,
    line: { color: "99F6E4" },
    fill: { color: "F0FDFA" },
  });
  s.addShape(pptx.ShapeType.roundRect, {
    x: 8.49,
    y: 2.12,
    w: 3.9,
    h: 2.18,
    radius: 0.1,
    line: { color: "C7D2FE" },
    fill: { color: "EEF2FF" },
  });
  s.addText("1. Search", {
    x: 1.2,
    y: 2.45,
    w: 3.4,
    h: 0.26,
    fontFace: FONT.body,
    fontSize: 14,
    bold: true,
    color: COLOR.brand,
    align: "center",
  });
  s.addText("실무 맥락에 맞는\n가구 후보 추천", {
    x: 1.22,
    y: 2.83,
    w: 3.3,
    h: 0.85,
    fontFace: FONT.body,
    fontSize: 19,
    bold: true,
    color: COLOR.ink,
    align: "center",
  });
  s.addText("2. Select & Save", {
    x: 5.05,
    y: 2.45,
    w: 3.2,
    h: 0.26,
    fontFace: FONT.body,
    fontSize: 14,
    bold: true,
    color: COLOR.accent,
    align: "center",
  });
  s.addText("컬렉션 저장으로\n재사용성 확보", {
    x: 5.0,
    y: 2.83,
    w: 3.3,
    h: 0.85,
    fontFace: FONT.body,
    fontSize: 19,
    bold: true,
    color: COLOR.ink,
    align: "center",
  });
  s.addText("3. Improve", {
    x: 8.8,
    y: 2.45,
    w: 3.2,
    h: 0.26,
    fontFace: FONT.body,
    fontSize: 14,
    bold: true,
    color: "4F46E5",
    align: "center",
  });
  s.addText("로그 + 피드백 기반\n주간 개선 루프", {
    x: 8.78,
    y: 2.83,
    w: 3.25,
    h: 0.85,
    fontFace: FONT.body,
    fontSize: 19,
    bold: true,
    color: COLOR.ink,
    align: "center",
  });
  addBullets(
    s,
    [
      "기존 워크플로우를 유지한 상태에서 도입 가능합니다.",
      "도입 즉시 실행 가능한 구조로 파일럿 리드타임이 짧습니다.",
    ],
    0.98,
    4.72,
    11.5,
    1.6
  );
  addNotes(s, "기능 열거가 아니라 실제 사용자 흐름 3단계로 제시합니다.");
  addFooter(s, 5);
}

// 6 KPI
{
  const s = pptx.addSlide();
  addBase(s, "핵심 KPI: 가구 셀렉 시간 90% 단축", "Measurable proof");
  s.addShape(pptx.ShapeType.roundRect, {
    x: 1.0,
    y: 2.05,
    w: 11.25,
    h: 1.12,
    radius: 0.08,
    line: { color: COLOR.line },
    fill: { color: COLOR.white },
  });
  s.addText("측정 구간: 검색 시작 -> 컬렉션 저장", {
    x: 1.4,
    y: 2.38,
    w: 10.4,
    h: 0.42,
    fontFace: FONT.body,
    fontSize: 21,
    bold: true,
    color: COLOR.ink,
    align: "center",
  });
  const barX = 1.2;
  const barY = 3.6;
  const barW = 10.8;
  const stepW = barW / 4;
  for (let i = 0; i < 4; i += 1) {
    s.addShape(pptx.ShapeType.roundRect, {
      x: barX + i * stepW,
      y: barY,
      w: stepW - 0.06,
      h: 1.14,
      radius: 0.06,
      line: { color: COLOR.white, transparency: 100 },
      fill: { color: i < 2 ? "DCEAFE" : i === 2 ? "BFDBFE" : "93C5FD" },
    });
  }
  s.addText("W1\n0%", {
    x: barX,
    y: barY + 0.22,
    w: stepW - 0.06,
    h: 0.65,
    fontFace: FONT.body,
    fontSize: 16,
    bold: true,
    color: "1E3A8A",
    align: "center",
  });
  s.addText("W2\n60%", {
    x: barX + stepW,
    y: barY + 0.22,
    w: stepW - 0.06,
    h: 0.65,
    fontFace: FONT.body,
    fontSize: 16,
    bold: true,
    color: "1E3A8A",
    align: "center",
  });
  s.addText("W3\n80%", {
    x: barX + stepW * 2,
    y: barY + 0.22,
    w: stepW - 0.06,
    h: 0.65,
    fontFace: FONT.body,
    fontSize: 16,
    bold: true,
    color: "1E40AF",
    align: "center",
  });
  s.addText("W4\n90%", {
    x: barX + stepW * 3,
    y: barY + 0.22,
    w: stepW - 0.06,
    h: 0.65,
    fontFace: FONT.body,
    fontSize: 16,
    bold: true,
    color: "1E3A8A",
    align: "center",
  });
  addBullets(
    s,
    [
      "Mixpanel 이벤트 + 주간 리포트 방식으로 측정합니다.",
      "주간 목표 대비 Current를 공개해 실행 진척을 투명하게 관리합니다.",
    ],
    1.0,
    5.15,
    11.3,
    1.8
  );
  addNotes(s, "측정 단위를 명확히 고정해야 실행 중 논쟁이 줄어듭니다.");
  addFooter(s, 6);
}

// 7 Pilot Plan
{
  const s = pptx.addSlide();
  addBase(s, "4주 파일럿 실행안", "Pilot design");
  const weeks = [
    ["Week 1", "베이스라인 확정", "이벤트 세팅"],
    ["Week 2", "온톨로지/UX 개선", "계측 정합성 검증"],
    ["Week 3", "핵심 병목 개선", "80% 구간 진입"],
    ["Week 4", "최종 최적화", "90% KPI 검증"],
  ];
  for (let i = 0; i < weeks.length; i += 1) {
    const x = 1.0 + i * 2.95;
    s.addShape(pptx.ShapeType.roundRect, {
      x,
      y: 2.03,
      w: 2.72,
      h: 3.35,
      radius: 0.1,
      line: { color: i === 3 ? "93C5FD" : COLOR.line },
      fill: { color: COLOR.white },
    });
    s.addText(weeks[i][0], {
      x: x + 0.2,
      y: 2.3,
      w: 2.3,
      h: 0.28,
      fontFace: FONT.body,
      fontSize: 14,
      bold: true,
      color: COLOR.brand,
      align: "center",
    });
    s.addText(weeks[i][1], {
      x: x + 0.2,
      y: 2.86,
      w: 2.3,
      h: 0.55,
      fontFace: FONT.body,
      fontSize: 20,
      bold: true,
      color: COLOR.ink,
      align: "center",
      valign: "mid",
    });
    s.addText(weeks[i][2], {
      x: x + 0.2,
      y: 4.06,
      w: 2.3,
      h: 0.55,
      fontFace: FONT.body,
      fontSize: 12,
      color: COLOR.sub,
      align: "center",
      valign: "mid",
    });
  }
  s.addText("산출물: KPI 리포트 + 도입 권고안", {
    x: 1.0,
    y: 5.86,
    w: 11.3,
    h: 0.36,
    fontFace: FONT.body,
    fontSize: 16,
    bold: true,
    color: "0F766E",
    align: "center",
  });
  addNotes(s, "4주 동안 무엇을 끝내는지 선명하게 제시합니다.");
  addFooter(s, 7);
}

// 8 Operating Model
{
  const s = pptx.addSlide();
  addBase(s, "운영 모델 및 역할 분담", "How we run");
  s.addShape(pptx.ShapeType.roundRect, {
    x: 1.0,
    y: 2.05,
    w: 5.35,
    h: 3.75,
    radius: 0.1,
    line: { color: COLOR.line },
    fill: { color: COLOR.white },
  });
  s.addShape(pptx.ShapeType.roundRect, {
    x: 6.95,
    y: 2.05,
    w: 5.35,
    h: 3.75,
    radius: 0.1,
    line: { color: COLOR.line },
    fill: { color: COLOR.white },
  });
  s.addText("고객사 역할", {
    x: 1.3,
    y: 2.34,
    w: 4.8,
    h: 0.28,
    fontFace: FONT.body,
    fontSize: 15,
    bold: true,
    color: COLOR.brand,
  });
  addBullets(
    s,
    ["PM 1명 지정", "실사용 디자이너 2~3명 지정", "주간 리뷰 참석 + 피드백 제공"],
    1.3,
    2.7,
    4.8,
    2.8
  );
  s.addText("당사 역할", {
    x: 7.25,
    y: 2.34,
    w: 4.8,
    h: 0.28,
    fontFace: FONT.body,
    fontSize: 15,
    bold: true,
    color: COLOR.accent,
  });
  addBullets(
    s,
    ["세팅/운영/분석 전담", "주간 KPI 리포트 제공", "이슈 대응 및 개선안 반영"],
    7.25,
    2.7,
    4.8,
    2.8
  );
  s.addText("운영 리듬: 주 1회 30분 리뷰 + 비동기 이슈 대응", {
    x: 1.1,
    y: 6.05,
    w: 11.1,
    h: 0.28,
    fontFace: FONT.body,
    fontSize: 14,
    color: COLOR.sub,
    align: "center",
  });
  addNotes(s, "책임과 운영 리듬이 명확할수록 파일럿 성공률이 높아집니다.");
  addFooter(s, 8);
}

// 9 Canvas roadmap
{
  const s = pptx.addSlide();
  addBase(s, "Archion Canvas 확장 로드맵 (Planned)", "Future module");
  s.addShape(pptx.ShapeType.roundRect, {
    x: 0.95,
    y: 1.95,
    w: 12.38,
    h: 0.78,
    radius: 0.08,
    line: { color: "FDE68A", transparency: 100 },
    fill: { color: "FFFBEB" },
  });
  s.addText("고지: 본 섹션은 계획안이며, 범위/일정은 파일럿 결과에 따라 조정됩니다.", {
    x: 1.22,
    y: 2.18,
    w: 11.85,
    h: 0.3,
    fontFace: FONT.body,
    fontSize: 13,
    color: "92400E",
    bold: true,
    align: "center",
  });
  addBullets(
    s,
    [
      "자동 3D 배치: 대표 시나리오 중심으로 단계적 안정화",
      "플러그인 워크플로우: 실행 -> 검토 -> 내보내기 일원화",
      "제안서 산출물 자동화: 시각 결과 + 아이템 리스트 + 가정값 패키지",
      "가치 제안: Search의 시간 단축을 Canvas 협업/제안 시간 단축으로 확장",
    ],
    1.0,
    2.98,
    11.6,
    3.25
  );
  s.addShape(pptx.ShapeType.line, {
    x: 1.0,
    y: 6.05,
    w: 11.45,
    h: 0,
    line: { color: "CBD5E1", pt: 1.3 },
  });
  s.addText("Search MVP 성과를 증명한 뒤, Canvas로 확장하는 단계 전략", {
    x: 1.0,
    y: 6.12,
    w: 11.45,
    h: 0.3,
    fontFace: FONT.body,
    fontSize: 14,
    color: "334155",
    bold: true,
    align: "center",
  });
  addNotes(s, "과약속 방지를 위해 Planned 고지 문구를 명시합니다.");
  addFooter(s, 9);
}

// 10 Commercial model
{
  const s = pptx.addSlide();
  addBase(s, "상업화 모델 (초안)", "Pilot to recurring revenue");
  const rows = [
    ["단계 1", "파일럿", "측정/검증 중심", "4주"],
    ["단계 2", "월 구독", "핵심 사용자 그룹 적용", "월 단위"],
    ["단계 3", "연간 계약", "사용자/시나리오 확장", "연 단위"],
  ];
  s.addShape(pptx.ShapeType.rect, {
    x: 1.0,
    y: 2.0,
    w: 11.3,
    h: 0.52,
    line: { color: COLOR.brand, transparency: 100 },
    fill: { color: COLOR.brand },
  });
  s.addText("단계", { x: 1.2, y: 2.15, w: 1.3, h: 0.18, fontFace: FONT.body, fontSize: 12, color: COLOR.white, bold: true });
  s.addText("모델", { x: 3.0, y: 2.15, w: 1.3, h: 0.18, fontFace: FONT.body, fontSize: 12, color: COLOR.white, bold: true });
  s.addText("목적", { x: 5.0, y: 2.15, w: 3.3, h: 0.18, fontFace: FONT.body, fontSize: 12, color: COLOR.white, bold: true });
  s.addText("기간", { x: 10.0, y: 2.15, w: 1.3, h: 0.18, fontFace: FONT.body, fontSize: 12, color: COLOR.white, bold: true, align: "right" });
  for (let i = 0; i < rows.length; i += 1) {
    const y = 2.52 + i * 0.86;
    s.addShape(pptx.ShapeType.rect, {
      x: 1.0,
      y,
      w: 11.3,
      h: 0.86,
      line: { color: COLOR.line },
      fill: { color: i % 2 === 0 ? "FFFFFF" : "F8FAFC" },
    });
    s.addText(rows[i][0], { x: 1.2, y: y + 0.25, w: 1.3, h: 0.18, fontFace: FONT.body, fontSize: 12, color: COLOR.ink, bold: true });
    s.addText(rows[i][1], { x: 3.0, y: y + 0.25, w: 1.3, h: 0.18, fontFace: FONT.body, fontSize: 12, color: COLOR.ink, bold: true });
    s.addText(rows[i][2], { x: 5.0, y: y + 0.25, w: 4.4, h: 0.18, fontFace: FONT.body, fontSize: 12, color: COLOR.sub });
    s.addText(rows[i][3], { x: 10.0, y: y + 0.25, w: 1.1, h: 0.18, fontFace: FONT.body, fontSize: 12, color: COLOR.sub, align: "right" });
  }
  addBullets(
    s,
    [
      "확장 조건: 사용자 수, 적용 시나리오, 데이터 범위",
      "전환 판단은 파일럿 KPI 결과 기반으로 합의",
    ],
    1.0,
    5.35,
    11.3,
    1.1
  );
  addNotes(s, "파일럿은 검증 단계, 본 계약은 KPI 증명 이후라는 점을 강조합니다.");
  addFooter(s, 10);
}

// 11 Risks
{
  const s = pptx.addSlide();
  addBase(s, "리스크와 대응", "Risk management");
  const risks = [
    ["계측 불일치", "이벤트 스키마 고정 + 주간 데이터 검수"],
    ["범위 확장 요구", "KPI 직결 항목 우선, 범위 게이트 운영"],
    ["일정 지연", "주간 마일스톤 조기 경보 + 우선순위 재정렬"],
    ["사용성 이슈", "실사용자 피드백 즉시 반영 루프"],
  ];
  for (let i = 0; i < risks.length; i += 1) {
    const y = 2.0 + i * 1.08;
    s.addShape(pptx.ShapeType.roundRect, {
      x: 1.0,
      y,
      w: 4.25,
      h: 0.85,
      radius: 0.06,
      line: { color: "FEE2E2", transparency: 100 },
      fill: { color: "FEF2F2" },
    });
    s.addShape(pptx.ShapeType.roundRect, {
      x: 5.52,
      y,
      w: 6.78,
      h: 0.85,
      radius: 0.06,
      line: { color: "D1FAE5", transparency: 100 },
      fill: { color: "ECFDF5" },
    });
    s.addText(risks[i][0], {
      x: 1.2,
      y: y + 0.28,
      w: 3.8,
      h: 0.2,
      fontFace: FONT.body,
      fontSize: 14,
      bold: true,
      color: "991B1B",
    });
    s.addText(risks[i][1], {
      x: 5.8,
      y: y + 0.28,
      w: 6.2,
      h: 0.2,
      fontFace: FONT.body,
      fontSize: 14,
      bold: true,
      color: "065F46",
    });
  }
  addNotes(s, "위험은 은폐가 아니라 관리 대상입니다. 대응안까지 동시에 제시합니다.");
  addFooter(s, 11);
}

// 12 CTA
{
  const s = pptx.addSlide();
  s.background = { color: "0F172A" };
  s.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 13.333,
    h: 0.58,
    line: { color: "14B8A6", transparency: 100 },
    fill: { color: "14B8A6" },
  });
  s.addText("Next Step", {
    x: 0.85,
    y: 0.9,
    w: 5.0,
    h: 0.55,
    fontFace: FONT.title,
    fontSize: 36,
    color: "FFFFFF",
    bold: true,
  });
  s.addText("오늘 이 3가지만 결정하면 파일럿을 바로 시작할 수 있습니다.", {
    x: 0.85,
    y: 1.55,
    w: 8.6,
    h: 0.32,
    fontFace: FONT.body,
    fontSize: 14,
    color: "94A3B8",
  });
  const ctas = [
    "파일럿 시작 승인",
    "고객사 담당자 지정",
    "이번 주 킥오프 일정 확정",
  ];
  for (let i = 0; i < ctas.length; i += 1) {
    const y = 2.22 + i * 1.28;
    s.addShape(pptx.ShapeType.roundRect, {
      x: 0.9,
      y,
      w: 6.95,
      h: 0.92,
      radius: 0.1,
      line: { color: "334155", transparency: 100 },
      fill: { color: "1E293B" },
    });
    s.addText(`${i + 1}. ${ctas[i]}`, {
      x: 1.2,
      y: y + 0.28,
      w: 6.2,
      h: 0.3,
      fontFace: FONT.body,
      fontSize: 20,
      bold: true,
      color: "F8FAFC",
    });
  }
  s.addShape(pptx.ShapeType.roundRect, {
    x: 8.25,
    y: 2.22,
    w: 4.2,
    h: 3.48,
    radius: 0.1,
    line: { color: "14B8A6", transparency: 100 },
    fill: { color: "0B3B3C" },
  });
  s.addText("Kickoff 준비물", {
    x: 8.62,
    y: 2.52,
    w: 3.35,
    h: 0.25,
    fontFace: FONT.body,
    fontSize: 14,
    bold: true,
    color: "A7F3D0",
    align: "center",
  });
  addBullets(
    s,
    ["샘플 프로젝트 2~3개", "실사용자 계정", "KPI 측정 동의"],
    8.55,
    2.9,
    3.45,
    2.4
  );
  addNotes(s, "마지막은 요청이 아닌 결정 문구로 마무리합니다.");
  addFooter(s, 12);
}

pptx.writeFile({ fileName: ".opencode/skills/_work/archion-search-sales-proposal-v1.pptx" });
