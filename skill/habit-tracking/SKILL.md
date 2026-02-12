---
name: habit-tracking
description: Standalone lightweight habit tracker with daily score logging
version: 1.0
---

# habit-tracking

This is the canonical standalone entrypoint for habit tracking.

## Purpose
- Keep habit tracking independent from daily-planner.
- Accept one simple daily score and one short memo.
- Return three outputs only: total score, delta vs previous day, and one next action.
- Append one daily log entry and maintain a rolling 7-day average.

## When to use
- User explicitly asks to run habit tracking.
- User asks for quick check-in or trend only.
- Manual morning/evening review.

## Required inputs
- `today_score` (number, 0-100)
- `memo` (one short line)

## Required behavior
1. Validate `today_score` is within 0-100.
2. Read the latest previous entry from `4. Archives/Skill-Tree/habit-tracker-log.md`.
3. Compute:
   - `delta_vs_prev_day = today_score - prev_score`
   - `avg_7d` from latest up to 7 scores (including today after append)
4. Generate exactly one `next_action`:
   - If score < 60: suggest one concrete recovery action for today.
   - If 60-79: suggest one consistency action.
   - If >= 80: suggest one sustain/scale action.
5. Append one entry block to `4. Archives/Skill-Tree/habit-tracker-log.md`.
6. Do not require or invoke daily-planner.

## Output
Return a compact markdown report with only:
- `total_score`
- `delta_vs_prev_day`
- `avg_7d`
- `next_action`
- `memo`

## Log format (append-only)
```markdown
## YYYY-MM-DD
- score: <0-100>
- delta_vs_prev_day: <signed number>
- avg_7d: <number>
- next_action: <one sentence>
- memo: <one line>
```

## Notes
- If there is no previous entry, set `delta_vs_prev_day: N/A`.
- If there are fewer than 7 entries, calculate average with available entries.
- Keep this skill lightweight; avoid 12-question and domain-level tables.

## Canonical Spec
- Full source of truth: this file (`.opencode/skill/habit-tracking/SKILL.md`)
