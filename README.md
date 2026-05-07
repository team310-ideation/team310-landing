# Team 310 Landing

Team 310의 학부모·학생 50분 인터뷰 모집 랜딩페이지입니다.

이 페이지의 목적은 중3·예비고1 학부모와 학생이 겪는 생기부 해석, 첫 고등학교 준비, 담임 상담 질문 정리, 개인정보 불안 등의 문제를 빠르게 매칭하고 인터뷰 신청으로 이어지게 만드는 것입니다.

## Tech Stack

- Vite
- React
- Framer Motion
- lucide-react
- Plain CSS
- Tally 공개 폼 링크 이동 구조
- Vercel static deployment

## Project Structure

```text
.
├── AGENT.md
├── docs/landing/m2-interview-landing-brief.md
├── index.html
├── package.json
├── scripts/prepare-team-images.mjs
├── src
│   ├── App.jsx
│   ├── App.css
│   ├── assets/images
│   ├── components
│   ├── data/landingContent.js
│   └── main.jsx
└── vite.config.js
```

## Source Of Truth

랜딩페이지의 제품 방향, 카피, 디자인 원칙은 아래 문서를 기준으로 합니다.

```text
docs/landing/m2-interview-landing-brief.md
```

구현 시 주요 데이터는 아래 파일에 모여 있습니다.

```text
src/data/landingContent.js
```

## Getting Started

```bash
npm install
npm run dev
```

기본 로컬 주소:

```text
http://localhost:5173/
```

## Commands

```bash
npm run dev        # 로컬 개발 서버 실행
npm run build      # 프로덕션 빌드
npm run preview    # 빌드 결과 로컬 미리보기
npm run assets:brand # 파비콘과 OG 이미지 생성
npm run images:team # 팀 사진 원본을 webp 최적화 이미지로 변환
npm run forms:tally:create # .env의 Tally API 키로 인터뷰 폼 생성
```

## Environment Variables

`.env.example`을 참고해 필요한 값을 설정합니다.

```bash
cp .env.example .env
```

```text
VITE_TALLY_FORM_URL=https://tally.so/r/your-form-id
VITE_CONTACT_EMAIL=lifedesigner88@gmail.com
TALLY_API_KEY=your-private-tally-api-key
TALLY_FORM_ID=your-form-id
TALLY_CREATE_NEW=0
```

`VITE_TALLY_FORM_URL`에는 Tally 공개 폼 URL 또는 공개 form ID를 넣습니다. 상단과 본문 CTA는 먼저 랜딩의 신청 섹션으로 이동하고, 신청 섹션 안의 버튼만 Tally 공개 링크로 이동합니다. 값이 없으면 인터뷰 신청 영역은 이메일 기반 fallback 폼으로 동작합니다. Tally API 키 같은 private key는 frontend에 넣지 않습니다.

로컬 개발 기본 공개 폼 주소는 `.env.development`, 프로덕션 기본 공개 폼 주소는 `.env.production`의 `VITE_TALLY_FORM_URL`에 둡니다.

Tally API 키는 Git에 올리지 않는 `.env`에만 둡니다. 공개 폼 URL이 이미 `.env.production`에 있으면 `npm run forms:tally:create`는 기존 폼을 현재 랜딩 톤에 맞춰 업데이트하고, 새 폼이 필요하면 `TALLY_CREATE_NEW=1 npm run forms:tally:create`로 실행합니다.

```text
TALLY_API_KEY=...
TALLY_FORM_ID=...
```

## Image Assets

팀 사진 원본은 로컬에만 보관하고 Git에는 올리지 않습니다.

```text
src/assets/images/team/originals/
```

웹에 실제로 연결되는 최적화 이미지는 아래 폴더에 생성됩니다.

```text
src/assets/images/team/optimized/
```

원본 사진을 교체한 뒤 실행합니다.

```bash
npm run images:team
```

학교 로고는 공식 CI 파일을 제공받기 전까지 랜딩용 임시 배지 SVG를 사용합니다.

```text
src/assets/images/schools/
```

공식 파일로 교체할 때는 `src/data/landingContent.js`의 `teamMembers[].school.logo`만 바꾸면 됩니다.
학교 공식 CI는 사용 허가와 적용 규정을 확인한 뒤 교체합니다.

AI·SW마에스트로 공식 로고 원본은 `public/asm-logo/`에 두고, 랜딩에서는 웹 최적화본을 사용합니다.

```text
public/asm-logo/asm-signature-web.png
public/asm-logo/asm-symbol-web.png
```

## Deployment

프로덕션은 Vercel에 연결되어 있습니다.

```text
domain: team310.kr
hosting: Vercel
deploy trigger: push to main
```

Cloudflare로 보호되는 `team310.kr` 도메인을 사용합니다. `main` 브랜치에 push하면 Vercel 자동 배포가 트리거됩니다.

## Design Direction

- 학부모를 디지털 약자가 아니라 바쁜 고관여 의사결정자로 본다.
- 첫 화면에서 생기부, 예비고1, 담임 상담, 개인정보 불안이 빠르게 보여야 한다.
- AI를 마법처럼 말하지 않는다. 사람의 인터뷰와 맥락 정리가 먼저다.
- 자료 업로드, 녹음, 개인정보 처리 원칙을 명확히 말한다.
- 과한 학원 광고 톤이나 flashy AI SaaS 톤을 피한다.

## Verification

변경 후 최소한 아래를 확인합니다.

```bash
npm run build
git diff --check
```

이미지 원본을 바꿨다면:

```bash
npm run images:team
npm run build
```
