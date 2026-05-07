---
title: Team 310 M2 Interview Landing Brief
status: canonical
type: product_design_content_brief
version: M2
updated_at: 2026-05-07
owner: Team 310
deployment:
  domain: team310.kr
  hosting: Vercel
  deploy_trigger: push_to_main
stack:
  framework: Vite
  ui: React
  motion: Framer Motion
  icons: lucide-react
  styling: plain_css
form:
  provider: Tally
  public_env: VITE_TALLY_FORM_URL
  fallback: email
source_history:
  - 20260506-landing-page-content.md
  - 20260506-m2-parent-design-guide.md
---

# Team 310 M2 인터뷰 랜딩 브리프

이 문서는 Team 310 인터뷰 모집 랜딩페이지의 단일 기준 문서다. 이전의 콘텐츠 문서와 M2 디자인 가이드는 이 파일로 통합한다.

원칙은 간단하다. 학부모를 디지털에 약한 세대로 보지 않는다. 바쁘지만 검색, 메신저, 동영상, 커뮤니티를 능숙하게 쓰는 40~50대 고관여 의사결정자로 보고, 빠른 문제 매칭과 신뢰, 개인정보 안심, 쉬운 신청 경험을 우선한다.

## Decision Rules

```yaml
priority:
  1: "학부모가 5초 안에 '내 문제'라고 느끼는가"
  2: "자료 업로드, 녹음, 개인정보 처리 원칙이 명확한가"
  3: "AI보다 사람과 맥락을 먼저 말하는가"
  4: "카카오/네이버/밴드 인앱 환경에서 CTA가 쉽게 보이고 눌리는가"
  5: "공식성보다 구체적인 책임 구조가 먼저 보이는가"
avoid:
  - "입시 학원 광고처럼 불안을 과하게 자극하는 톤"
  - "AI가 자동으로 입시 전략을 만들어준다는 표현"
  - "합격 보장, 성적 상승 보장, 학생부 대필"
  - "출처가 불명확한 경쟁률이나 상위 퍼센트 표현"
  - "이전에 제거한 맥락 밖 브랜드/도메인 재도입"
```

## Research Summary

| Source | Key Point | Design Implication |
|---|---|---|
| [국가데이터처, 2025년 초중고사교육비조사 결과](https://www.kostat.go.kr/board.es?act=view&bid=245&list_no=443953&mid=a10301070100&ref_bid=&tag=) | 2025년 초중고 사교육비 총액 약 27.5조원, 참여율 75.7%, 참여학생 월평균 60.4만원 | 학부모는 이미 돈을 쓴다. "무료"보다 잘못 쓰는 비용과 불안을 줄인다는 메시지가 강하다. |
| [NIA, 2025년 인터넷이용실태조사](https://nia.or.kr/site/nia_kor/ex/bbs/View.do?bcIdx=29198&cbIdx=99870) | 인터넷 이용률 95.0%, 생성형 AI 경험률 44.5%, 동영상 서비스 이용률 96.3% | 디지털 접점은 익숙하다. AI보다 신뢰와 안전장치를 먼저 보여준다. |
| [DataReportal, Digital 2025: South Korea](https://datareportal.com/reports/digital-2025-south-korea) | 카카오톡 활성 이용자 비율 97.2%, 유튜브 광고 도달률 86.2% | 공유/유입은 카카오톡, 유튜브, 네이버 검색 맥락으로 설계한다. |
| [한국언론진흥재단 조사 보도, MBC](https://imnews.imbc.com/news/2025/econo/article/6683924_36737.html) | 카카오톡 98.9%, 유튜브 84.9%; 50·60대는 밴드 선호가 상대적으로 큼 | 카카오 공유는 필수, 50대 확산은 밴드/네이버 카페까지 고려한다. |
| [CJ메조미디어 2026 타겟 리포트 40대](https://www.openads.co.kr/content/contentDetail?contsId=19364) | 40대는 자녀 교육·내 집·노후 등 현실 문제에 직면, 실질 구매 결정권 보유 | 긴 소개보다 첫 화면에서 문제 매칭을 강하게 보여준다. |
| [CJ메조미디어 2026 타겟 리포트 50대](https://www.openads.co.kr/content/contentDetail?contsId=19365) | 50대도 SNS·커뮤니티·OTT·디지털 플랫폼을 폭넓게 사용 | 큰 터치 타겟, 명확한 정보 구조, 안정적인 사용성이 중요하다. |
| [CJ메조미디어 2025 Target Report 4049](https://lib.mezzomedia.co.kr/newsletter/202505/01_MezzoMedia_2025_Target_Report_4049.pdf) | 40대 정보 탐색은 네이버·유튜브·구글 순 | 검색 결과와 공유 미리보기에서 바로 신뢰되어야 한다. |
| [KISDI, 연령별 생성형 AI 이용현황](https://kisdi.re.kr/report/view.do?arrMasterId=4333447&artId=1865976&key=m2101113025790&masterId=4333447) | 50대는 생성형 AI 인지도와 실제 이용 사이에 간극이 있음 | "AI-first"보다 "사람이 먼저 듣고 AI가 정리를 돕는다"가 안전하다. |
| [SAGE, 2025 교육 앱 UX 요소 연구](https://journals.sagepub.com/doi/10.1177/21582440251377385) | 교육 앱 UX에서 호환성, 기능 적합성, 사용성, 안정성이 중요 | 화려한 모션보다 안정성, 쉬운 조작, 명확한 진행 상태가 우선이다. |

## Target

```yaml
primary_target:
  - "중3·예비고1 자녀를 둔 학부모"
  - "담임·진로 상담 전에 질문을 정리하고 싶은 학부모"
  - "생기부·성적을 어떻게 해석해야 할지 막막한 학부모"
secondary_target:
  - "최근 입시·진로 고민이 있는 학생"
  - "특목·자사 원서·면접·자소서 준비를 고민하는 가정"
  - "학원, 학교, 교육기관 관계자"
core_emotion:
  - "정보는 많은데 내 아이 기준으로 무엇을 해야 할지 모르겠다"
  - "비싼 상담은 부담되고 아이 기록을 맡기는 것도 불안하다"
  - "상담 시간이 짧아서 질문을 제대로 준비하고 싶다"
```

## Page Structure

```yaml
sections:
  - id: hero
    role: "첫 화면 문제 매칭과 CTA"
    required: ["literal_h1", "problem_rotator", "trust_chips", "primary_cta", "secondary_cta"]
  - id: mission
    role: "AI·SW마에스트로 선발팀과 AI 사회문제 해결 미션을 명확히 보여주는 영역"
    required: ["asm_selection_signal", "ai_social_problem", "context_gap", "safe_ai_use"]
  - id: pain
    role: "5개 페인포인트 선택형 패널"
    required: ["segmented_control", "parent_quote", "interview_questions"]
  - id: interview
    role: "인터뷰 진행 방식과 안심 정보"
    required: ["3_step_process", "recording_consent", "upload_optional", "gift_voucher"]
  - id: team
    role: "왜 Team 310이 이 문제를 검증하는가"
    required: ["members", "work_principles", "not_promises"]
  - id: videos
    role: "Team 310 활동 영상 임베드"
    required: ["youtube_embeds", "team_process_context"]
  - id: trust
    role: "ASM, 멘토, 담당자, 개인정보 책임 구조"
    required: ["asm_signal", "contact_owner", "privacy_principles", "mentor_network"]
  - id: apply
    role: "Tally 폼 또는 이메일 fallback"
    required: ["name", "contact", "target", "grade", "concern", "time"]
  - id: faq
    role: "전환 장벽 제거"
    required: ["privacy", "recording", "usage", "not_sales", "who_should_join"]
```

## Hero Copy

```yaml
h1: "인공지능의 힘으로 대한민국 사교육 문제를 풉니다."
subheading: "아이 생기부, 예비고1 준비, 담임 상담 질문이 막막하다면 50분만 들려주세요."
support_lines:
  - "Team 310은 인공지능의 힘으로 교육의 정보격차를 줄이려는 팀입니다."
  - "생기부·예비고1·담임상담 준비가 막막한 학부모님과 학생의 이야기를 듣고"
  - "내 아이 기록 기준의 다음 선택을 돕는 AI 서비스를 검증하고 있습니다."
primary_cta: "50분 인터뷰 신청하기"
secondary_cta: "어떤 이야기를 듣나요?"
micro_trust:
  - "17기 선발 과정 통과"
  - "AI로 사회문제 해결"
  - "100+ 인터뷰 기반 검증"
  - "자료 업로드 없이 가능"
problem_rotator:
  - "생기부를 어떻게 읽어야 할지"
  - "예비고1 첫 90일을 어떻게 준비할지"
  - "담임 상담 전에 무엇을 물어볼지"
  - "특목·자사 준비가 늦은 건 아닌지"
```

## Mission

```yaml
headline: "AI로 입시문제를 합리적으로 풀어냅니다."
summary: "Team 310은 치열한 AI·SW마에스트로 17기 선발 과정을 통과한 팀이다. 기술 자체보다 학부모와 학생이 겪는 정보 격차, 상담 준비 격차, 개인정보 불안을 줄이는 문제에 집중한다."
asm_selection:
  - "AI·SW마에스트로 17기 선발 과정 통과"
  - "지원서 검토·코딩 테스트·심층면접 기반 선발"
  - "서울 300명·부산 150명 규모 공식 모집 과정"
social_problem_cards:
  - title: "교육 의사결정 격차"
    copy: "입시 정보는 넘치지만, 내 아이 기록을 기준으로 지금 무엇을 우선해야 하는지 판단하기 어렵다."
  - title: "누적 맥락의 단절"
    copy: "상담, 학원, 학교 기록이 흩어져 있어 매 학기 같은 고민이 반복된다. AI로 이 맥락을 구조화하려 한다."
  - title: "안전한 AI 활용"
    copy: "미성년자 기록과 개인정보를 가볍게 다루지 않고, 사람의 판단을 돕는 책임 있는 보조 도구로 검증한다."
```

## Pain Points

```yaml
pain_points:
  - id: record
    label: "아이 기록"
    priority: 1
    public_copy: "우리 아이 기록 기준으로 뭘 해야 할지 모르겠어요"
    quote: "입시 정보는 넘치는데, 우리 아이 생기부와 성적을 어떻게 읽어야 하는지는 잘 모르겠어요."
    landing_role: "Hero와 첫 문제 카드에서 가장 먼저 보여주는 핵심 공감 Hook"
    interview_questions:
      - "현재 어떤 기록을 가장 불안하게 보고 있는가"
      - "학원·활동·상담 중 무엇이 먼저라고 느끼는가"
      - "아이 상황을 설명할 때 막히는 지점은 어디인가"
  - id: first90
    label: "예비고1"
    priority: 2
    public_copy: "고1 첫 90일을 어떻게 준비해야 할지 막막해요"
    quote: "첫 중간고사가 중요하다는데 이번 방학에 뭘 해야 할지, 학원을 더 보내는 게 답인지 모르겠어요."
    landing_role: "중3 학부모 전환기 불안을 구체적으로 잡는 카드"
    interview_questions:
      - "중3 말부터 사교육 의사결정이 어떻게 바뀌는가"
      - "고1 첫 학기에서 가장 불안한 장면은 무엇인가"
      - "학교 선택과 학습 계획을 어디까지 연결해서 보는가"
  - id: teacher
    label: "담임 상담"
    priority: 3
    public_copy: "담임 상담 전에 뭘 물어봐야 할지 모르겠어요"
    quote: "상담 시간은 짧은데 그냥 듣고만 오면 아까울 것 같아요. 질문을 정리하고 싶어요."
    landing_role: "넓은 진입 페인. 인터뷰 신청 장벽을 낮춘다."
    interview_questions:
      - "상담 전 가장 알고 싶은 정보는 무엇인가"
      - "학교에서 받은 답변 중 실행으로 이어지지 않은 부분은 무엇인가"
      - "질문지를 만들 수 있다면 꼭 넣고 싶은 항목은 무엇인가"
  - id: privacy
    label: "신뢰·개인정보"
    priority: 4
    public_copy: "상담은 비싸고, 아이 기록을 맡기는 것도 걱정돼요"
    quote: "무료 정보는 못 믿겠고, 비싼 상담은 부담돼요. 생기부 같은 자료를 보내는 것도 불안하고요."
    landing_role: "FAQ와 Trust에서 전환 장벽을 제거한다."
    interview_questions:
      - "결제 전환을 막는 불안이 가격인지 신뢰인지 개인정보인지"
      - "어떤 설명이 있어야 기록을 공유할 수 있다고 느끼는지"
      - "상담자와 서비스 운영자에게 기대하는 책임 수준은 무엇인지"
  - id: special
    label: "특목·자사"
    priority: 5
    public_copy: "특목·자사 준비가 늦은 건 아닌지 불안해요"
    quote: "원서, 면접, 자소서를 앞두고 지금 더 할 수 있는 일이 있는지 알고 싶어요."
    landing_role: "고관여 세그먼트로 분리해 노출한다. 메인 메시지를 과도하게 좁히지 않는다."
    interview_questions:
      - "마감이 있는 과제에서 가장 급한 부분은 무엇인가"
      - "이미 받은 컨설팅이나 학원 조언의 한계는 무엇인가"
      - "원서·면접·자소서 준비에서 놓치고 싶지 않은 기준은 무엇인가"
```

## Interview Process

```yaml
steps:
  - title: "현재 고민을 듣습니다"
    detail: "아이의 학년, 기록, 학교 상담, 사교육 경험에서 지금 가장 막혀 있는 지점을 듣는다."
  - title: "맥락을 함께 정리합니다"
    detail: "사람이 먼저 듣고, AI는 누적된 기록과 고민을 구조화해 다음 질문을 놓치지 않게 돕는다."
  - title: "문제 가설을 확인합니다"
    detail: "우리가 이해한 문제가 실제 학부모와 학생에게 맞는지 확인하고 제품 방향에 반영한다."
safety:
  - "자료 업로드는 필수가 아니다"
  - "녹음은 동의한 경우에만 진행한다"
  - "불편한 질문은 답하지 않아도 된다"
  - "인터뷰 내용은 비식별화 후 기획 검증에만 사용한다"
  - "대면, 전화, Zoom, 카카오톡 조율 중 편한 방식을 선택한다"
```

## Team 310

```yaml
mission: "누적된 개인 맥락을 읽어, 학부모와 학생이 지금 무엇을 우선해야 하는지 명확히 아는 경험을 만든다."
members:
  - name: "박세종"
    role: "Team Lead, 교육자형 개발자"
    education_lines:
      - "서울시립대학교"
      - "전자전기컴퓨터공학부 학사"
    school_logo:
      label: "서울시립대학교"
      current_asset: "src/assets/images/schools/uos-logo.png"
      official_source: "https://isus.uos.ac.kr/eng/web/contents/UOS_About_04_02_01"
      note: "팀원 프로필 카드에 공식 로고 이미지로 표시한다."
    proof:
      - "전) 상상코칭 입시컨설턴트"
      - "박문호의자연과학세상 이사"
      - "월드유스랠리 12개국 국제캠프 PM"
      - "입시 데이터 3만 건 분석"
  - name: "박준혁"
    role: "AI & Data, 사용자 맥락 연구"
    education_lines:
      - "서울대학교"
      - "자유전공학부, 인류학과·컴퓨터공학과"
    school_logo:
      label: "서울대학교"
      current_asset: "src/assets/images/schools/snu-logo.png"
      official_source: "https://identity.snu.ac.kr/ui/1"
      note: "팀원 프로필 카드에 공식 로고 이미지로 표시한다."
    proof:
      - "한국정보올림피아드(KOI) 은상"
      - "인류학적 현장 조사 관점"
      - "LLM 기반 문제 구조화"
  - name: "박세민"
    role: "PM & Fullstack"
    education_lines:
      - "명지대학교"
      - "데이터사이언스, 데이터테크놀로지"
    school_logo:
      label: "명지대학교"
      current_asset: "src/assets/images/schools/mju-logo.gif"
      official_source: "https://www.mju.ac.kr/mjukr/328/subview.do"
      note: "팀원 프로필 카드에 공식 로고 이미지로 표시한다."
    proof:
      - "KOPLE 2,700명 운영"
      - "LOI 기반 시장 검증"
      - "기획·개발·검증 통합"
work_principles:
  - "먼저 듣는다"
  - "맥락을 구조화한다"
  - "작게 검증한다"
  - "합격 보장이나 성적 상승 보장을 말하지 않는다"
not_doing:
  - "AI 학생부 문장 대필"
  - "합격 보장"
  - "성적 상승 보장"
focus:
  - "내 아이 기록 기준 우선순위"
  - "담임 상담 전 질문 정리"
  - "누적 맥락 기반 다음 선택"
```

## Trust Stack

```yaml
trust_items:
  - title: "AI·SW마에스트로 선발팀"
    copy: "서울 300명·부산 150명 규모의 17기 모집에서 지원서 검토, 코딩 테스트, 심층면접을 거쳐 선발된 팀이다."
  - title: "AI 사회문제 해결 미션"
    copy: "교육 정보는 많지만 내 아이 기준 판단이 어려운 문제를 AI 기반 맥락 구조화로 줄이려 한다."
  - title: "개인정보 원칙"
    copy: "자료 공유는 선택이고, 외부 공개가 필요한 내용은 비식별화한다."
  - title: "멘토 네트워크"
    copy: "기술·사업·VC 관점의 멘토링을 받으며 문제 정의와 검증을 진행한다."
mentor_profiles:
  - name: "고세환"
    status: "확정"
    role: "공식 담당 멘토"
    context: "KIST AX, DX, IT 인프라 및 정보보안 체계를 총괄"
    highlights:
      - "KIST 정보보안·DX·AX"
      - "CISSP·CPPG"
      - "창업 4회 경험"
    proof:
      - "KT 보안컨설팅·네트워크 보안관제 경험"
      - "정부지원사업·기획심의·TIPS 전략 멘토링"
      - "개인정보·보안·서비스 운영 리스크 점검"
      - "VC 네트워크 연결과 피칭 코칭 지원"
  - name: "조재홍"
    status: "확정"
    role: "기술·창업 멘토"
    context: "삼성전자 AI플랫폼센터, 에듀테크 CTO 경험"
    highlights:
      - "삼성전자 AI플랫폼센터"
      - "모바일·IoT 20년+"
      - "10만 다운로드 서비스"
    proof:
      - "삼성리서치·무선사업부 기반 모바일·SmartThings 경험"
      - "에듀테크 필로토 CTO로 앱·서버 개발과 운영"
      - "데이터 수집·분석 기반 제품 개선 경험"
      - "AI·SW마에스트로 다수 팀 MVP·출시 멘토링"
  - name: "홍순엽"
    status: "추가 협의 예정"
    role: "VC 비기술 멘토"
    context: "모비딕벤처스 벤처투자팀"
    highlights:
      - "딥테크·ICT·SW 투자"
      - "TIPS·POST-TIPS"
      - "BM·피칭 전략"
    proof:
      - "예비·초기창업패키지, 도전 K-스타트업 심사·평가 경험"
      - "전자공학 기반 기술 사업성 검토 관점"
      - "기술거래사·기술신용평가사(TCB) 기반 검증"
      - "투자 유치 로드맵과 기획심의 전략 자문 예정"
    note: "확정 전까지는 예정 멘토로만 표시한다."
asm_public_expression:
  official_logo:
    current_asset: "public/asm-logo/asm-signature-web.png"
    original_folder: "public/asm-logo/"
    placement: "mission section ASM proof band"
  official_link:
    label: "공식 사이트 확인"
    url: "https://www.swmaestro.org"
    placement: "mission section below ASM proof band"
  preferred:
    - "AI·SW마에스트로 17기 프로젝트 팀"
    - "정부 지원 프로젝트 선발 과정 통과"
    - "기획심의 준비 중"
  avoid:
    - "공식 근거가 없는 지원자 수"
    - "공식 근거가 없는 합격률"
    - "상위 퍼센트 표현"
```

## Apply Form

```yaml
provider: "Tally"
env:
  VITE_TALLY_FORM_URL: "https://tally.so/r/dWQyQD"
  VITE_CONTACT_EMAIL: "lifedesigner88@gmail.com"
tracked_env_files:
  - ".env.development"
  - ".env.production"
public_form_url: "https://tally.so/r/dWQyQD"
application_flow: "상단·본문·하단 CTA는 먼저 #apply 신청 섹션으로 이동하고, 신청 카드 안의 버튼만 Tally 공개 링크로 이동한다."
public_links:
  - label: "AI·SW마에스트로"
    url: "https://www.swmaestro.ai"
  - label: "Team 310 유튜브"
    url: "https://www.youtube.com/@asm17_team310"
team_videos:
  - title: "[02화] - 멘토헌팅"
    source_url: "https://youtu.be/AB3xpRJejNE"
    embed_url: "https://www.youtube-nocookie.com/embed/AB3xpRJejNE?rel=0"
  - title: "[03화] - 뉴페이스"
    source_url: "https://youtu.be/pAjVOlvbz58"
    embed_url: "https://www.youtube-nocookie.com/embed/pAjVOlvbz58?rel=0"
offline_location:
  title: "오프라인 인터뷰 장소"
  name: "AI·SW마에스트로 연수센터"
  placement: "footer 바로 위"
  address: "서울특별시 마포구 마포대로 89 포스트타워 7층, 12층"
  postal_code: "04156"
  transit: "공덕역 1번 출구 앞, 도보 약 300m"
  kakao_roughmap:
    timestamp: "1747116575994"
    key: "2oz4e"
  sources:
    - "https://www.fkii.org/fkii/location.php"
    - "https://www.koreapost.go.kr/121/subIndex/3926.do"
required_fields:
  - "이름"
  - "연락처"
  - "인터뷰 대상: 학부모 / 학생 / 교육기관 관계자"
  - "자녀 또는 본인 학년"
  - "가장 가까운 고민"
  - "희망 방식: 전화 / Zoom / 대면 / 카카오톡 조율"
  - "편한 시간대"
  - "개인정보 수집 및 이용 동의"
optional_fields:
  - "현재 고민 1문장"
  - "녹음 동의 여부"
  - "자료 공유 가능 여부"
implementation_notes:
  - "Tally 공개 폼 URL 또는 공개 form ID는 VITE_TALLY_FORM_URL로 주입한다."
  - "외부 Tally 이탈 전 신청 섹션에서 신청 항목과 안심 정보를 한 번 더 보여준다."
  - "Tally API 키는 frontend에 넣지 않는다."
  - "폼 URL이 없으면 이메일 신청 fallback을 유지한다."
  - "폼 스타일은 M2 팔레트의 warm white, deep navy, CTA orange 기준으로 맞춘다."
```

## FAQ Canonical Answers

```yaml
faqs:
  - q: "생기부나 성적표를 꼭 보내야 하나요?"
    a: "아니다. 인터뷰 단계에서는 자료 업로드가 필수가 아니다. 필요하다고 느끼는 경우에도 공유 여부와 범위는 직접 선택할 수 있다."
  - q: "녹음은 반드시 하나요?"
    a: "아니다. 녹음은 동의한 경우에만 진행한다. 동의하지 않으면 메모로만 대체하고, 불편한 질문은 답하지 않아도 된다."
  - q: "인터뷰 내용은 어디에 쓰이나요?"
    a: "Team 310의 문제 정의와 서비스 기획 검증에만 사용한다. 외부 발표나 문서에 필요한 경우에는 개인을 특정할 수 없도록 비식별화한다."
  - q: "서비스를 바로 판매하려는 인터뷰인가요?"
    a: "아니다. 지금은 학부모와 학생의 실제 고민을 듣고 문제 가설을 검증하는 단계다."
  - q: "누가 참여하면 좋나요?"
    a: "중3·예비고1 학부모, 최근 입시·진로 상담을 고민한 학생, 특목·자사 준비 중인 가정, 담임 상담 전에 질문을 정리하고 싶은 분에게 특히 맞다."
  - q: "기관 협력도 가능한가요?"
    a: "가능하다. 학원, 학교, 교육기관에서 학부모 인터뷰나 파일럿 협력을 논의하고 싶다면 이메일로 연락한다."
```

## Visual System

```yaml
palette:
  primary_navy: "#1E3A5F"
  deep_navy: "#102035"
  warm_white: "#FFFDF9"
  surface: "#F7F8F9"
  cta_orange: "#F97316"
  sage_green: "#4A7C59"
  clear_blue: "#2563EB"
  soft_yellow: "#FEF3C7"
  text_charcoal: "#1F2937"
  text_secondary: "#5F6B7A"
  border: "#E5E7EB"
typography:
  font: "Pretendard Variable"
  hero_h1: "34px mobile / 46px tablet / up to 66px desktop, center aligned"
  section_h2: "24px mobile / 34-36px desktop"
  body: "16-18px"
  caption: "14px"
  body_line_height: "1.7-1.8"
  letter_spacing: 0
layout:
  desktop_max_width: "1120-1180px"
  mobile_cta: "bottom sticky"
  cards_radius: "8px"
  touch_target: "44px minimum"
image_strategy:
  preferred:
    - "팀원 실제 사진"
    - "팀 회의/인터뷰 준비/화이트보드 사진"
    - "서비스 데모 또는 생기부 맥락을 추상화한 UI 캡처"
    - "현실감 있는 교육 현장 사진"
  avoid:
    - "어두운 스톡 사진"
    - "외국 교실 이미지"
    - "과한 AI 느낌"
    - "실제 인물처럼 보이는 AI 생성 팀 사진"
```

## Motion Rules

```yaml
motion:
  duration: "180-260ms"
  easing: "cubic-bezier(0.2, 0.8, 0.2, 1)"
  distance: "12-20px"
  stagger_max: "60ms"
  reduced_motion: "required"
allowed:
  - "Hero 문구 1회 fade-up"
  - "문제 칩 선택 시 부드러운 전환"
  - "FAQ accordion height transition"
  - "스크롤 reveal은 한 번만"
avoid:
  - "계속 움직이는 배경"
  - "과한 parallax"
  - "긴 로딩 애니메이션"
  - "CTA 주변을 흔드는 애니메이션"
```

## SEO And Sharing

```yaml
og_title: "학부모·학생 50분 인터뷰 모집 | Team 310"
og_description: "AI·SW마에스트로 17기 선발팀 Team 310이 AI로 교육 의사결정 격차를 줄이기 위해 학부모·학생 50분 인터뷰를 모집합니다."
naver_first_paragraph: "Team 310은 AI·SW마에스트로 17기 선발 과정을 통과한 프로젝트 팀입니다."
sharing_context:
  - "카카오톡"
  - "네이버 검색"
  - "네이버 카페/블로그"
  - "밴드"
```

## Implementation Mapping

```yaml
files:
  source_brief: "docs/landing/m2-interview-landing-brief.md"
  app_entry: "src/App.jsx"
  content_data: "src/data/landingContent.js"
  styles: "src/App.css"
  team_image_originals: "src/assets/images/team/originals/"
  team_image_optimized: "src/assets/images/team/optimized/"
  agent_instructions: "AGENT.md"
checks:
  - "npm run images:team"
  - "npm run build"
  - "rg -n 'removed_brand_or_domain_terms' ."
  - "git diff --check"
```
