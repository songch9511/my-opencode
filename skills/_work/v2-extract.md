<!-- Slide number: 1 -->

CAD AI 기반
자동차 설계 워크프로세스 혁신
모델링 생산성과 제조 워크플로우 효율을 동시에 끌어올리는 실행안

내부 개발자 브리핑
Sources: 자동차 설계 리서치 · Automotive Design · CAD AI Technology Overview

### Notes:

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

<!-- Slide number: 2 -->
자동차 설계 오퍼레이션의 본질
모델링 속도와 변경 비용 곡선을 동시에 관리해야 한다

Concept
Design
Validation
Tooling
Pilot/Mass

문제 발견이 늦을수록 비용이 급증: 설계 1x → 프로토타입 10~100x → 양산 1,000x+
부품 수보다 인터페이스 의존성이 병목: 변경 1건이 연쇄 검토를 유발
Tooling 이후 변경은 금형 재작업으로 직결되어 일정과 원가에 큰 타격
따라서 목표는 빠른 모델링 + 조기 검증 + 안정적 Freeze 도달
Sources: Automotive Design(컨셉~양산) 리서치 요약

### Notes:

[Script]
자동차 개발에서는 모델링 속도와 변경비용 관리를 분리해서 볼 수 없습니다.
모델링이 느리면 검증 진입이 늦어지고, 결국 후반 단계에서 큰 비용을 냅니다.
우리가 해결해야 할 병목은 반복 설계, 인터페이스 충돌, Tooling 이후 변경입니다.
즉 빠른 모델링이 중요하고, 그 결과가 검증으로 바로 이어져야 합니다.

<!-- Slide number: 3 -->
핵심 관점: 단순 모델링 속도도 매우 중요하다
속도 개선이 탐색 폭과 의사결정 품질을 동시에 높인다

모델링 생산성 임팩트
속도 개선이 만드는 2차 효과
부품당 설계 4~8시간 → 1~2시간 구간 단축(최대 75%)
반복 설계 라운드 10회 → 1~2회 수준 축소 가능
수작업 2일 도면 전환 → 자동 5분 케이스 확인
엔지니어 시간을 드로잉에서 의사결정 업무로 이동
더 많은 대안 비교로 초기 아키텍처 선택 실패 확률 감소
검증 준비가 빨라져 Freeze 직전 변경 건수 감소
협업 리뷰를 감(感)이 아닌 데이터 중심으로 전환
결과적으로 제조 이관 리스크와 릴리즈 지연을 축소
Sources: CAD AI Technology Overview · 자동차 설계 오퍼레이션 리서치

### Notes:

<!-- Slide number: 4 -->
자동차 제조 프로세스별 적용 포인트
어디에 무엇을 붙이면 실제 업무가 빨라지는가
| 프로세스 단계 | CAD AI 적용 | 업무 효과 |
| --- | --- | --- |
| Concept/Styling | Text·Sketch to CAD | 탐색 라운드 단축, 대안 비교 속도 향상 |
| Detailed Design | 파라메트릭 편집·코드 생성 | 부품 모델링 시간 및 수동 수정 시간 절감 |
| DMU/Packaging | 변경 영향 분석·충돌 리포트 | 검증 누락 감소, 리뷰 리드타임 단축 |
| DFM/Tooling | 제조 룰 체커 | 후행 변경·금형 재작업 위험 감소 |
| Legacy 전환 | 2D→3D 변환(D2C) | 레거시 자산 재활용률 증가 |
Sources: Automotive Design 리서치 · Dimension CAD AI 모듈 정의

### Notes:

<!-- Slide number: 5 -->
정량/정성 효과 추적 프레임
모델 점수보다 운영 지표로 성과를 증명한다

4~8h → 1~2h
모델링 시간
부품당 작업시간 최대 75% 단축 구간

2일 → 5분
도면 전환
2D legacy를 즉시 3D 편집 자산으로 전환

10회 → 1~2회
설계 반복
초기 대안 탐색과 수렴 속도 개선

Freeze 전 변경 건수
핵심 KPI
후행 변경을 줄이는 방향으로 운영
Sources: CAD AI Technology Overview 내부 성과 수치 · 자동차 설계 리서치

### Notes:

<!-- Slide number: 6 -->
30-60-90일 실행안 (2026 로드맵 정렬)
Q1→Q2→Q3 모듈 출시 순서에 맞춰 파일럿에서 운영으로 전환

30일 · Q1
60일 · Q2
90일 · Q3
2D→3D 범위 고정(3개 부품군)
품질 게이트: 생성/수정 성공률, 수동 보정 시간
aData 입력 표준화, aCAD extrude proof
Simple Parts Design 경로 연결
DFM 체커 + DMU 사전 리포트 v1
파일럿 지표를 라이선스 전환 지표로 전환
Assembly/PLM 연동 스키마 표준화
변경 티켓↔CAD↔검증 최소 연동 구현
Freeze readiness score v1 운영
Source: Dimension 2026 Timeline & Product Roadmap

### Notes:

<!-- Slide number: 7 -->
결론
지금 우리 하고 있는 작업, 더 열심히 해보자.

모델링 속도 개선을 계속 밀고,
검증/제조 워크플로우 연결을 더 깊게 만들고,
Freeze/재작업/리드타임으로 성과를 증명하자.
Prepared for internal CAD AI development team

### Notes:
