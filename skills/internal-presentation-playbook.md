# Internal Presentation Playbook

사내 발표 자료를 `리서치 -> 원고 작성 -> PPTX 제작`으로 표준화하는 실전 가이드.

## 0) Installed Skills Check

- Research: `.opencode/skills/research-tavily`
- Writing: `.opencode/skills/writing-clearly-and-concisely`
- PPTX: `.opencode/skills/pptx`

## 1) Skill Quick Review + Prompt Templates

### A. Research (`research-tavily`)

핵심:
- Tavily API 기반 웹 리서치 + 출처 수집
- `output_schema`로 구조화된 결과(JSON) 강제 가능
- 사내 발표용으로는 `model: "pro"`, `citation_format: "numbered"` 권장

사전 조건:
- `TAVILY_API_KEY` 환경변수 필요

실행 커맨드 템플릿:
```bash
./.opencode/skills/research-tavily/scripts/research.sh '{
  "input": "[주제]에 대한 2024-2026 최신 동향과 실무 시사점",
  "model": "pro",
  "citation_format": "numbered",
  "output_schema": {
    "properties": {
      "executive_summary": {"type": "string", "description": "3-5문장 핵심 요약"},
      "key_findings": {
        "type": "array",
        "description": "핵심 발견 5개",
        "items": {"type": "string"}
      },
      "recommendations": {
        "type": "array",
        "description": "실행 권고안 3개",
        "items": {"type": "string"}
      },
      "risks": {
        "type": "array",
        "description": "주의 리스크 3개",
        "items": {"type": "string"}
      }
    },
    "required": ["executive_summary", "key_findings", "recommendations", "risks"]
  }
}' ./.opencode/skills/_work/research-output.json
```

프롬프트 템플릿(에이전트용):
```text
[Research 요청]
주제: [발표 주제]
목적: [의사결정/공유/정렬]
청중: [팀/리더십/전사]

아래 형식으로 근거 기반 리서치 결과를 만들어줘.
1) Executive Summary (3-5문장)
2) Key Findings (5개, 각 항목 1-2문장)
3) Recommendations (3개, 실행 관점)
4) Risks (3개)
5) Sources (번호 매겨 URL + 제목)

조건:
- 최근 2년 중심
- 서로 다른 출처를 우선
- 마케팅 문구 제외, 사실 중심
```

### B. Writing (`writing-clearly-and-concisely`)

핵심:
- Strunk 원칙 기반 문장 압축: 능동태, 구체어, 불필요한 단어 제거
- AI 티 나는 과장어/추상어 제거에 강함
- 발표 본문, 발표 스크립트, 요약문 개선에 적합

프롬프트 템플릿(슬라이드 원고 초안):
```text
[Writing 요청 - 사내 발표용]
아래 리서치 결과를 슬라이드 원고로 변환해줘.

출력 형식:
- Slide 1: 제목 + 한 줄 메시지
- Slide 2: 배경/문제 정의
- Slide 3: 핵심 인사이트 1
- Slide 4: 핵심 인사이트 2
- Slide 5: 실행안 (우선순위)
- Slide 6: 리스크와 대응
- Slide 7: 결론/요청사항

작성 규칙:
- 슬라이드당 본문 3~5 bullet
- bullet은 한 줄 원칙(최대 14~16단어 느낌)
- 능동태/구체적 수치 우선
- 과장형 형용사, 모호한 표현 제거
- 청중이 바로 행동할 수 있게 문장 끝을 명령/제안 형태로 정리
```

프롬프트 템플릿(발표자 스크립트):
```text
[Writing 요청 - 발표 스크립트]
위 슬라이드 원고를 기준으로 발표자 노트를 작성해줘.

조건:
- 슬라이드당 60~90초 분량
- 말하기 톤은 간결하고 단정하게
- 데이터 인용 시 "출처 기준"을 한 번씩 언급
- 마지막 슬라이드에서 의사결정 요청 2가지를 명확히 제시
```

### C. PPTX (`pptx`)

핵심:
- `.pptx` 생성/편집/분석 전체 워크플로우 제공
- 템플릿 기반 수정 또는 PptxGenJS 신규 생성 가능
- QA 루프(텍스트 추출 + 이미지 시각검수) 강제 권장

프롬프트 템플릿(신규 생성):
```text
[PPTX 제작 요청]
아래 슬라이드 원고로 16:9 비율의 7장짜리 PPTX를 생성해줘.

디자인 조건:
- 사내 발표용, 과한 장식 금지
- 색상 3개 이내(Primary/Secondary/Accent)
- 본문 가독성 최우선(14pt 이상)
- 모든 슬라이드에 최소 1개 시각 요소(아이콘/도형/차트)

출력 파일명: internal-weekly-[주제]-v1.pptx

마지막에 QA를 수행해줘:
1) markitdown으로 텍스트 누락/오타 확인
2) PDF->이미지 변환 후 겹침/overflow/정렬 오류 점검
3) 문제 수정 후 v2 저장
```

## 2) End-to-End Standard Workflow

## Step 1. Work Directory 준비

```bash
mkdir -p ./.opencode/skills/_work
```

## Step 2. 리서치 실행

```bash
./.opencode/skills/research-tavily/scripts/research.sh '{"input":"[주제] 사내 발표용 핵심 동향과 실행 시사점","model":"pro","citation_format":"numbered"}' ./.opencode/skills/_work/research.md
```

## Step 3. 원고 작성(에이전트 프롬프트)

아래 템플릿을 그대로 붙여서 실행:

```text
다음 파일을 읽고 사내 발표 슬라이드 원고를 작성해줘:
- 입력: .opencode/skills/_work/research.md

산출물 형식:
- 7장 구성 (제목/배경/인사이트1/인사이트2/실행안/리스크/결론)
- 각 슬라이드: 제목 1줄 + bullet 3~5개 + 발표자노트 3~5문장

문장 품질 규칙:
- 능동태
- 구체적 표현
- 불필요한 수식어 제거
- 같은 의미 반복 금지
```

권장 산출 파일:
- `.opencode/skills/_work/slide-script.md`

## Step 4. PPTX 제작

두 방식 중 하나 선택:

1) 템플릿 기반 편집
- `.opencode/skills/pptx/editing.md` 절차 따름

2) 신규 생성(PptxGenJS)
- `.opencode/skills/pptx/pptxgenjs.md` 기준으로 JS 생성 후 `output.pptx` 출력

권장 산출 파일:
- `.opencode/skills/_work/internal-presentation-v1.pptx`

## Step 5. 필수 QA

```bash
python -m markitdown ./.opencode/skills/_work/internal-presentation-v1.pptx > ./.opencode/skills/_work/v1-extract.md
python ./.opencode/skills/pptx/scripts/office/soffice.py --headless --convert-to pdf ./.opencode/skills/_work/internal-presentation-v1.pptx
pdftoppm -jpeg -r 150 ./.opencode/skills/_work/internal-presentation-v1.pdf ./.opencode/skills/_work/slide
```

체크 포인트:
- 텍스트 잘림/겹침/오탈자
- 출처 누락
- 정렬 불일치
- 여백 부족(0.5in 미만)

수정 후 최종:
- `.opencode/skills/_work/internal-presentation-v2.pptx`

## 3) One-Shot Master Prompt

아래를 그대로 사용하면, 3개 스킬 흐름을 한 번에 지시할 수 있음.

```text
사내 발표자료를 만들어줘. 아래 순서로 진행:

1) Research
- 주제: [발표 주제]
- 목적: [목적]
- 청중: [청중]
- 최근 2년 기준 핵심 근거와 출처를 수집

2) Writing
- 리서치 결과를 7장 슬라이드 원고로 변환
- 슬라이드당 bullet 3~5개, 문장 간결화
- 발표자 노트 포함

3) PPTX
- 16:9, 사내 발표용 톤
- 시각 요소 포함
- 파일 생성: .opencode/skills/_work/internal-presentation-v1.pptx

4) QA
- markitdown + 이미지 렌더링으로 오류 점검
- 수정본 생성: .opencode/skills/_work/internal-presentation-v2.pptx

최종으로 아래 3개를 보여줘:
- 핵심 메시지 3줄
- 슬라이드별 제목 리스트
- 수정 전후 주요 변경점
```
