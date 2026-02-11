const pptxgen = require("pptxgenjs");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_16x9";
pptx.author = "The Dimension Company";
pptx.company = "The Dimension Company";
pptx.subject = "CAD AI for automotive design workflow";
pptx.title = "CAD AI 기반 자동차 설계 워크프로세스 혁신";
pptx.lang = "ko-KR";

const C = {
  bgLight: "F8FAFC",
  bgCard: "FFFFFF",
  bgDark: "111827",
  text: "111827",
  muted: "475569",
  accent: "0EA5A4",
  accentSoft: "CCFBF1",
  border: "CBD5E1",
  white: "FFFFFF",
};

function addSource(slide, text) {
  slide.addText(text, {
    x: 0.5,
    y: 5.22,
    w: 9.0,
    h: 0.25,
    fontFace: "Calibri",
    fontSize: 9,
    color: "64748B",
    margin: 0,
    align: "left",
  });
}

function addTitle(slide, title, subtitle) {
  slide.addText(title, {
    x: 0.6,
    y: 0.35,
    w: 8.8,
    h: 0.5,
    fontFace: "Arial",
    fontSize: 29,
    bold: true,
    color: C.text,
    margin: 0,
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.6,
      y: 0.84,
      w: 8.8,
      h: 0.28,
      fontFace: "Calibri",
      fontSize: 13,
      color: C.muted,
      margin: 0,
    });
  }
}

// Slide 1: Title
{
  const s = pptx.addSlide();
  s.background = { color: C.bgDark };

  s.addShape(pptx.shapes.RECTANGLE, {
    x: 0.0,
    y: 0.0,
    w: 3.2,
    h: 5.625,
    fill: { color: "0F172A" },
    line: { color: "0F172A", transparency: 100 },
  });

  s.addShape(pptx.shapes.RECTANGLE, {
    x: 3.2,
    y: 0.0,
    w: 6.8,
    h: 5.625,
    fill: { color: "111827" },
    line: { color: "111827", transparency: 100 },
  });

  s.addText("CAD AI 기반", {
    x: 0.75,
    y: 1.15,
    w: 4.8,
    h: 0.55,
    fontFace: "Arial",
    fontSize: 34,
    bold: true,
    color: C.white,
    margin: 0,
  });
  s.addText("자동차 설계 워크프로세스 혁신", {
    x: 0.75,
    y: 1.78,
    w: 8.7,
    h: 0.72,
    fontFace: "Arial",
    fontSize: 34,
    bold: true,
    color: C.white,
    margin: 0,
  });

  s.addText("모델링 생산성과 제조 워크플로우 효율을 동시에 끌어올리는 실행안", {
    x: 0.75,
    y: 2.78,
    w: 8.7,
    h: 0.45,
    fontFace: "Calibri",
    fontSize: 16,
    color: "D1D5DB",
    margin: 0,
  });

  s.addShape(pptx.shapes.RECTANGLE, {
    x: 0.75,
    y: 3.7,
    w: 2.2,
    h: 0.74,
    fill: { color: C.accent },
    line: { color: C.accent, transparency: 100 },
  });
  s.addText("내부 개발자 브리핑", {
    x: 0.9,
    y: 3.95,
    w: 1.9,
    h: 0.3,
    fontFace: "Calibri",
    fontSize: 12,
    bold: true,
    color: C.white,
    margin: 0,
    align: "center",
  });

  addSource(
    s,
    "Sources: 자동차 설계 리서치 · Automotive Design · CAD AI Technology Overview"
  );

  s.addNotes(`
[Sources]
- https://www.notion.so/ease-teamspace/2ff9fe64d75980f4af1ff0c87e1a113d?v=1b29fe64d7598035ab69000cee04d153
- https://www.notion.so/dbdc45f9b746467dac3cf2498f8f7e3d
- https://www.notion.so/a0cf1a96d2b5460d8f7e978d019494d3

[Script]
오늘의 핵심은 두 가지입니다.
첫째, CAD 모델링 생산성 자체를 강하게 올려야 합니다.
둘째, 그 생산성 개선을 검증과 제조 이관까지 연결해야 진짜 성과가 납니다.
이 발표는 자동차 설계 오퍼레이션과 우리 기술을 직접 매핑해서
어디에 우선 투자해야 하는지 제시합니다.
  `);
}

// Slide 2: Process + bottlenecks
{
  const s = pptx.addSlide();
  s.background = { color: C.bgLight };
  addTitle(s, "자동차 설계 오퍼레이션의 본질", "모델링 속도와 변경 비용 곡선을 동시에 관리해야 한다");

  const steps = [
    "Concept",
    "Design",
    "Validation",
    "Tooling",
    "Pilot/Mass",
  ];
  const x0 = 0.65;
  const y = 1.35;
  const w = 1.7;
  const h = 0.55;
  const gap = 0.25;

  steps.forEach((step, i) => {
    const x = x0 + i * (w + gap);
    s.addShape(pptx.shapes.RECTANGLE, {
      x,
      y,
      w,
      h,
      fill: { color: i < 3 ? "E2E8F0" : "D1FAE5" },
      line: { color: C.border, width: 1 },
    });
    s.addText(step, {
      x: x + 0.08,
      y: y + 0.16,
      w: w - 0.16,
      h: 0.22,
      fontFace: "Calibri",
      fontSize: 12,
      bold: true,
      color: C.text,
      align: "center",
      margin: 0,
    });
  });

  s.addShape(pptx.shapes.RECTANGLE, {
    x: 0.65,
    y: 2.15,
    w: 8.7,
    h: 2.55,
    fill: { color: C.bgCard },
    line: { color: C.border, width: 1 },
  });

  s.addText([
    { text: "문제 발견이 늦을수록 비용이 급증: 설계 1x → 프로토타입 10~100x → 양산 1,000x+", options: { bullet: true, breakLine: true } },
    { text: "부품 수보다 인터페이스 의존성이 병목: 변경 1건이 연쇄 검토를 유발", options: { bullet: true, breakLine: true } },
    { text: "Tooling 이후 변경은 금형 재작업으로 직결되어 일정과 원가에 큰 타격", options: { bullet: true, breakLine: true } },
    { text: "따라서 목표는 빠른 모델링 + 조기 검증 + 안정적 Freeze 도달", options: { bullet: true } },
  ], {
    x: 0.9,
    y: 2.42,
    w: 8.2,
    h: 2.15,
    fontFace: "Calibri",
    fontSize: 15,
    color: C.text,
    breakLine: true,
    paraSpaceAfterPt: 8,
  });

  addSource(s, "Sources: Automotive Design(컨셉~양산) 리서치 요약");

  s.addNotes(`
[Script]
자동차 개발에서는 모델링 속도와 변경비용 관리를 분리해서 볼 수 없습니다.
모델링이 느리면 검증 진입이 늦어지고, 결국 후반 단계에서 큰 비용을 냅니다.
우리가 해결해야 할 병목은 반복 설계, 인터페이스 충돌, Tooling 이후 변경입니다.
즉 빠른 모델링이 중요하고, 그 결과가 검증으로 바로 이어져야 합니다.
  `);
}

// Slide 3: Why CAD modeling speed still matters
{
  const s = pptx.addSlide();
  s.background = { color: C.bgLight };
  addTitle(s, "핵심 관점: 단순 모델링 속도도 매우 중요하다", "속도 개선이 탐색 폭과 의사결정 품질을 동시에 높인다");

  s.addShape(pptx.shapes.RECTANGLE, {
    x: 0.65,
    y: 1.35,
    w: 4.2,
    h: 3.95,
    fill: { color: C.bgCard },
    line: { color: C.border, width: 1 },
  });
  s.addText("모델링 생산성 임팩트", {
    x: 0.9,
    y: 1.62,
    w: 3.7,
    h: 0.35,
    fontFace: "Calibri",
    fontSize: 18,
    bold: true,
    color: C.text,
    margin: 0,
  });
  s.addText([
    { text: "부품당 설계 4~8시간 → 1~2시간 구간 단축(최대 75%)", options: { bullet: true, breakLine: true } },
    { text: "반복 설계 라운드 10회 → 1~2회 수준 축소 가능", options: { bullet: true, breakLine: true } },
    { text: "수작업 2일 도면 전환 → 자동 5분 케이스 확인", options: { bullet: true, breakLine: true } },
    { text: "엔지니어 시간을 드로잉에서 의사결정 업무로 이동", options: { bullet: true } },
  ], {
    x: 0.9,
    y: 2.04,
    w: 3.75,
    h: 2.95,
    fontFace: "Calibri",
    fontSize: 13,
    color: C.text,
    paraSpaceAfterPt: 7,
  });

  s.addShape(pptx.shapes.RECTANGLE, {
    x: 5.1,
    y: 1.35,
    w: 4.25,
    h: 3.95,
    fill: { color: "ECFEFF" },
    line: { color: "99F6E4", width: 1 },
  });
  s.addText("속도 개선이 만드는 2차 효과", {
    x: 5.35,
    y: 1.62,
    w: 3.8,
    h: 0.35,
    fontFace: "Calibri",
    fontSize: 18,
    bold: true,
    color: C.text,
    margin: 0,
  });
  s.addText([
    { text: "더 많은 대안 비교로 초기 아키텍처 선택 실패 확률 감소", options: { bullet: true, breakLine: true } },
    { text: "검증 준비가 빨라져 Freeze 직전 변경 건수 감소", options: { bullet: true, breakLine: true } },
    { text: "협업 리뷰를 감(感)이 아닌 데이터 중심으로 전환", options: { bullet: true, breakLine: true } },
    { text: "결과적으로 제조 이관 리스크와 릴리즈 지연을 축소", options: { bullet: true } },
  ], {
    x: 5.35,
    y: 2.04,
    w: 3.75,
    h: 2.95,
    fontFace: "Calibri",
    fontSize: 13,
    color: C.text,
    paraSpaceAfterPt: 7,
  });

  addSource(s, "Sources: CAD AI Technology Overview · 자동차 설계 오퍼레이션 리서치");
}

// Slide 4: Stage-by-stage opportunity map
{
  const s = pptx.addSlide();
  s.background = { color: C.bgLight };
  addTitle(s, "자동차 제조 프로세스별 적용 포인트", "어디에 무엇을 붙이면 실제 업무가 빨라지는가");

  const rows = [
    ["Concept/Styling", "Text·Sketch to CAD", "탐색 라운드 단축, 대안 비교 속도 향상"],
    ["Detailed Design", "파라메트릭 편집·코드 생성", "부품 모델링 시간 및 수동 수정 시간 절감"],
    ["DMU/Packaging", "변경 영향 분석·충돌 리포트", "검증 누락 감소, 리뷰 리드타임 단축"],
    ["DFM/Tooling", "제조 룰 체커", "후행 변경·금형 재작업 위험 감소"],
    ["Legacy 전환", "2D→3D 변환(D2C)", "레거시 자산 재활용률 증가"],
  ];

  s.addTable([
    [
      { text: "프로세스 단계", options: { bold: true, color: C.white, fill: { color: "0F766E" } } },
      { text: "CAD AI 적용", options: { bold: true, color: C.white, fill: { color: "0F766E" } } },
      { text: "업무 효과", options: { bold: true, color: C.white, fill: { color: "0F766E" } } },
    ],
    ...rows,
  ], {
    x: 0.65,
    y: 1.38,
    w: 8.7,
    h: 3.9,
    border: { pt: 1, color: C.border },
    fontFace: "Calibri",
    fontSize: 12,
    colW: [2.0, 2.9, 3.8],
    rowH: [0.43, 0.63, 0.63, 0.63, 0.63, 0.63],
    valign: "middle",
    fill: "FFFFFF",
  });

  addSource(s, "Sources: Automotive Design 리서치 · Dimension CAD AI 모듈 정의");
}

// Slide 5: Quantitative impact dashboard
{
  const s = pptx.addSlide();
  s.background = { color: C.bgLight };
  addTitle(s, "정량/정성 효과 추적 프레임", "모델 점수보다 운영 지표로 성과를 증명한다");

  const stats = [
    ["모델링 시간", "4~8h → 1~2h", "부품당 작업시간 최대 75% 단축 구간"],
    ["도면 전환", "2일 → 5분", "2D legacy를 즉시 3D 편집 자산으로 전환"],
    ["설계 반복", "10회 → 1~2회", "초기 대안 탐색과 수렴 속도 개선"],
    ["핵심 KPI", "Freeze 전 변경 건수", "후행 변경을 줄이는 방향으로 운영"],
  ];

  stats.forEach((st, i) => {
    const y = 1.35 + i * 0.96;
    s.addShape(pptx.shapes.RECTANGLE, {
      x: 0.65,
      y,
      w: 8.7,
      h: 0.8,
      fill: { color: i % 2 === 0 ? "FFFFFF" : "F1F5F9" },
      line: { color: C.border, width: 1 },
    });
    s.addText(st[0], {
      x: 0.88,
      y: y + 0.24,
      w: 1.6,
      h: 0.3,
      fontFace: "Calibri",
      fontSize: 13,
      bold: true,
      color: C.text,
      margin: 0,
    });
    s.addText(st[1], {
      x: 2.55,
      y: y + 0.18,
      w: 2.0,
      h: 0.36,
      fontFace: "Arial",
      fontSize: 19,
      bold: true,
      color: "0F766E",
      margin: 0,
      align: "center",
    });
    s.addText(st[2], {
      x: 4.95,
      y: y + 0.24,
      w: 3.95,
      h: 0.3,
      fontFace: "Calibri",
      fontSize: 12,
      color: C.text,
      margin: 0,
    });
  });

  addSource(s, "Sources: CAD AI Technology Overview 내부 성과 수치 · 자동차 설계 리서치");
}

// Slide 6: 30-60-90
{
  const s = pptx.addSlide();
  s.background = { color: C.bgLight };
  addTitle(s, "30-60-90일 실행안 (2026 로드맵 정렬)", "Q1→Q2→Q3 모듈 출시 순서에 맞춰 파일럿에서 운영으로 전환");

  const cards = [
    {
      t: "30일 · Q1",
      body: [
        "2D→3D 범위 고정(3개 부품군)",
        "품질 게이트: 생성/수정 성공률, 수동 보정 시간",
        "aData 입력 표준화, aCAD extrude proof",
      ],
      color: "E0F2FE",
    },
    {
      t: "60일 · Q2",
      body: [
        "Simple Parts Design 경로 연결",
        "DFM 체커 + DMU 사전 리포트 v1",
        "파일럿 지표를 라이선스 전환 지표로 전환",
      ],
      color: "DCFCE7",
    },
    {
      t: "90일 · Q3",
      body: [
        "Assembly/PLM 연동 스키마 표준화",
        "변경 티켓↔CAD↔검증 최소 연동 구현",
        "Freeze readiness score v1 운영",
      ],
      color: "FEF3C7",
    },
  ];

  cards.forEach((card, i) => {
    const x = 0.65 + i * 3.0;
    s.addShape(pptx.shapes.RECTANGLE, {
      x,
      y: 1.45,
      w: 2.75,
      h: 3.7,
      fill: { color: card.color },
      line: { color: C.border, width: 1 },
    });
    s.addText(card.t, {
      x: x + 0.18,
      y: 1.68,
      w: 2.35,
      h: 0.32,
      fontFace: "Arial",
      fontSize: 18,
      bold: true,
      color: C.text,
      margin: 0,
      align: "center",
    });
    s.addText(
      card.body.map((b, idx) => ({ text: b, options: { bullet: true, breakLine: idx !== card.body.length - 1 } })),
      {
        x: x + 0.18,
        y: 2.12,
        w: 2.35,
        h: 2.85,
        fontFace: "Calibri",
        fontSize: 11,
        color: C.text,
        paraSpaceAfterPt: 7,
      }
    );
  });

  addSource(s, "Source: Dimension 2026 Timeline & Product Roadmap");
}

// Slide 7: Closing
{
  const s = pptx.addSlide();
  s.background = { color: C.bgDark };

  s.addText("결론", {
    x: 0.75,
    y: 0.82,
    w: 2.0,
    h: 0.4,
    fontFace: "Calibri",
    fontSize: 20,
    bold: true,
    color: "A7F3D0",
    margin: 0,
  });
  s.addText("지금 우리 하고 있는 작업, 더 열심히 해보자.", {
    x: 0.75,
    y: 1.38,
    w: 8.6,
    h: 0.74,
    fontFace: "Arial",
    fontSize: 35,
    bold: true,
    color: C.white,
    margin: 0,
  });

  s.addShape(pptx.shapes.RECTANGLE, {
    x: 0.75,
    y: 2.45,
    w: 8.6,
    h: 1.9,
    fill: { color: "1F2937" },
    line: { color: "334155", width: 1 },
  });

  s.addText([
    { text: "모델링 속도 개선을 계속 밀고,", options: { bullet: true, breakLine: true } },
    { text: "검증/제조 워크플로우 연결을 더 깊게 만들고,", options: { bullet: true, breakLine: true } },
    { text: "Freeze/재작업/리드타임으로 성과를 증명하자.", options: { bullet: true } },
  ], {
    x: 1.0,
    y: 2.9,
    w: 8.0,
    h: 1.2,
    fontFace: "Calibri",
    fontSize: 16,
    color: "E5E7EB",
    paraSpaceAfterPt: 9,
  });

  addSource(s, "Prepared for internal CAD AI development team");
}

pptx.writeFile({
  fileName:
    "/Users/daniel/Library/CloudStorage/GoogleDrive-songch9511@gmail.com/My Drive/Obsidian/My vault/.opencode/skills/_work/internal-presentation-v2.pptx",
});
