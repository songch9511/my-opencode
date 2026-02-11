---
name: Retrospective
description: 경험 회고, 인사이트 추출, Knowledge Graph 반영 및 노트 기록 워크플로우
version: 1.0
---

# Retrospective Skill

## Purpose

경험을 체계적으로 돌아보고(회고), 경험적/실험적 인사이트를 추출하여 Obsidian과 Notion에 기록한다.  
일기(diary)이자, 나의 실험/경험에서 얻은 인사이트 캐처 역할을 수행한다.

## When to Use

- 하루를 마무리하며 회고할 때 (Daily Planner Phase 1)
- 프로젝트 마일스톤 완료 후 회고할 때
- 특정 경험/실험에서 배운 점을 기록하고 싶을 때
- 정기적인 주간/월간 리뷰 시
- 반복되는 실수나 패턴을 인식하고 개선하고 싶을 때

## Prerequisites

- 회고 대상이 되는 기록 (Daily Note, 태스크 로그, 프로젝트 문서)
- Obsidian Vault 접근 (MCP)
- Notion 접근 (MCP) — 액션 아이템 생성 시

---

## Instructions

### Step 1: 회고 대상 수집

```markdown
#### 수집 체크리스트

- [ ] 해당 기간의 Daily Note(s) 열기
- [ ] Daily Context(s) 확인 (Metacognition Agent 출력)
- [ ] Notion 완료/미완료 태스크 확인
- [ ] 관련 프로젝트 문서/로그 확인
```

**수집 범위**:

| 회고 유형 | 기간             | 소스                         |
| --------- | ---------------- | ---------------------------- |
| Daily     | 어제 하루        | Daily Note + Notion Tasks    |
| Weekly    | 최근 7일         | Daily Notes + Daily Contexts |
| Monthly   | 최근 30일        | Daily Contexts + KPI         |
| Project   | 프로젝트 전 기간 | Project docs + Tasks         |

### Step 2: 사실 기반 분석

```markdown
#### 분석 프레임워크

1. **What happened (사실)**
   - 완료한 것 (체크박스, 태스크)
   - 완료 못한 것 (미완료 + 이유)
   - 예상치 못한 일 (계획에 없던 것)

2. **How I felt (감정/에너지)**
   - Mood 레이블 (1-2 단어)
   - Energy 수준 (1-10)
   - 특별한 감정 트리거 (근거 포함)

3. **What I learned (인사이트)**
   - 경험적 인사이트: 직접 해보고 배운 것
   - 실험적 인사이트: 새로 시도해본 것의 결과
   - 관찰적 인사이트: 패턴/트렌드 발견
```

### Step 3: 인사이트 추출 및 분류

```markdown
#### 인사이트 분류 체계

| Category        | Description               | Example                             |
| --------------- | ------------------------- | ----------------------------------- |
| 🧪 Experimental | 새로 시도한 방법의 결과   | "포모도로 25분 → 45분이 더 효과적"  |
| 🔬 Empirical    | 반복 경험에서 확인된 패턴 | "오전 9-11시가 딥워크 최적 시간"    |
| 💡 Aha-moment   | 갑작스러운 깨달음         | "X와 Y가 사실 같은 문제였다"        |
| ⚠️ Anti-pattern | 피해야 할 패턴 발견       | "멀티태스킹 시 오류율 3배 증가"     |
| 🔄 Process      | 프로세스 개선 아이디어    | "코드 리뷰 전 셀프 체크리스트 추가" |

#### 인사이트 품질 기준

각 인사이트에는 다음을 포함:

- **Statement**: 한 문장으로 요약
- **Evidence**: 근거가 된 구체적 경험/데이터
- **Confidence**: High / Medium / Low
- **Actionable**: 이 인사이트로 바꿀 수 있는 행동이 있는가?
- **Tags**: 관련 프로젝트, 스킬, 영역
```

### Step 4: 패턴 인식

```markdown
#### 반복 패턴 체크

- [ ] 이전 회고에서도 같은/유사한 인사이트가 있었는가?
- [ ] 같은 류의 블로커가 반복되는가?
- [ ] Mood/Energy 패턴이 있는가? (요일별, 활동별)
- [ ] 생산성 패턴이 있는가? (시간대별, 환경별)

반복 패턴 발견 시:
→ 상위 "Meta-Insight"로 승격하여 별도 기록
→ 구체적 개선 행동 생성
```

### Step 5: 노트 작성 (Obsidian)

```markdown
---
type: retrospective
date: YYYY-MM-DD
scope: daily|weekly|monthly|project
mood: <label>
energy: X/10
tags: [retrospective, <tags>]
---

# 회고 — YYYY-MM-DD

## 📋 Summary

- Completion Rate: XX% (N/M)
- Mood: <label> | Energy: X/10

## ✅ Wins

- <accomplishment 1> — 근거: <evidence>
- <accomplishment 2> — 근거: <evidence>

## ❌ Misses

- <miss 1> — 원인: <reason> | 영향: <impact>
- <miss 2> — 원인: <reason> | 영향: <impact>

## 💡 Insights

### 🧪 <Insight Title>

- **Statement**: <one-liner>
- **Evidence**: <what happened>
- **Confidence**: High/Medium/Low
- **Action**: <what to change>

### 🔬 <Insight Title>

- **Statement**: <one-liner>
- **Evidence**: <pattern observed>
- **Confidence**: High/Medium/Low
- **Action**: <what to change>

## 🔄 Carry-over

- [ ] <unfinished task 1>
- [ ] <unfinished task 2>

## 🔮 Tomorrow's Focus

- <key priority for next day>
```

**저장 위치**: `4. Archives/Retrospectives/YYYY-MM-DD.md`

### Step 6: Notion 연동

```markdown
#### 인사이트 → 액션 아이템 변환 규칙

Actionable 인사이트는 Notion Action Items DB에 생성:

| Field    | Value                             |
| -------- | --------------------------------- |
| Name     | Verb-first, 인사이트 기반 행동    |
| Person   | Daniel Song (필수, 변경 불가)     |
| Source   | "Retrospective YYYY-MM-DD"        |
| Due Date | 다음 영업일 (기본)                |
| Status   | Not started                       |
| Tags     | retrospective, <insight-category> |

#### 변환 예시

- Insight: "오전 딥워크가 3배 효과적"
  → Action: "내일부터 오전 9-11시를 딥워크 블록으로 캘린더에 잠그기"

- Insight: "멀티태스킹 시 오류율 증가"
  → Action: "싱글태스킹 원칙 문서화하고 데일리 리마인더 설정"
```

### Step 7: KG 연계 (Optional)

```markdown
인사이트를 KG-updater에게 전달하기 위한 포맷:

{
"insights": [
{
"statement": "<인사이트 요약>",
"category": "experimental|empirical|aha|anti-pattern|process",
"confidence": "high|medium|low",
"evidence": "<근거>",
"related_entities": ["<project>", "<skill>", "<topic>"],
"source": "retrospective/YYYY-MM-DD"
}
]
}
```

---

## Output Format

### 파일 구조

```
4. Archives/Retrospectives/
├── 2026-02-09.md          (일일 회고)
├── 2026-W06-weekly.md     (주간 회고)
└── 2026-01-monthly.md     (월간 회고)
```

### 메타데이터

```yaml
---
type: retrospective
date: YYYY-MM-DD
scope: daily
mood: focused
energy: 7
completion_rate: 85
insights_count: 3
tags: [retrospective, daily, productivity]
---
```

---

## Best Practices

### ✅ Do's

- 사실(Fact)과 해석(Interpretation)을 구분하여 기록
- 감정을 솔직하게 기록 (편집하지 않기)
- 인사이트에 반드시 근거(Evidence) 포함
- Actionable 인사이트는 즉시 행동으로 변환
- 이전 회고를 참조하여 패턴 확인

### ❌ Don'ts

- 근거 없는 추상적 반성 ("더 열심히 해야지")
- 감정 억제 (솔직하지 않은 기록)
- 인사이트 과다 생성 (일일 5개 이내 권장)
- 액션 없는 인사이트 방치
- 이전 회고와 단절된 기록

---

## Integration

```
Daily Note / Notion Tasks
        ↓
  Retrospective Skill → 회고 분석
        ↓
  ┌─────┴─────┐
  ↓           ↓
Obsidian    Notion
(회고 노트)  (Action Items)
  ↓
KG-updater
(인사이트 → KG 반영)
```

---

## Quality Metrics

- ✅ 인사이트 중 Actionable 비율 > 60%
- ✅ 인사이트의 근거(Evidence) 포함률 100%
- ✅ 회고 노트 작성 시간 5분 이내
- ✅ 패턴 인식 정확도 향상 (반복 사용 시)

---

## Tips

1. **3-2-1 법칙**: 3 사실, 2 인사이트, 1 핵심 행동으로 시작해도 충분
2. **감정도 데이터**: Mood/Energy는 생산성 패턴 발견의 핵심 지표
3. **작게 시작**: 처음엔 5분 회고로 시작, 점진적으로 깊이 추가
4. **연결하기**: 이전 회고의 인사이트가 오늘 행동으로 이어졌는지 확인
5. **솔직함이 핵심**: 가공하지 않은 기록이 가장 가치 있음

---

**마지막 업데이트**: 2026-02-10
**버전**: 1.0
