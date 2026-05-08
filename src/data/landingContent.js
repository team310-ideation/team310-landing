import {
  BadgeCheck,
  BookOpenCheck,
  Brain,
  CalendarClock,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  FileCheck2,
  HeartHandshake,
  LockKeyhole,
  MessageCircleQuestion,
  Mic,
  NotebookTabs,
  Route,
  School,
  SearchCheck,
  ShieldCheck,
  UsersRound,
  Video,
} from "lucide-react";
import groupPortrait from "../assets/images/team/optimized/team310-group-portrait.webp";
import junhyeokProfile from "../assets/images/team/optimized/junhyeok-profile.webp";
import sejongProfile from "../assets/images/team/optimized/sejong-profile.webp";
import seminProfile from "../assets/images/team/optimized/semin-profile.webp";
import seminSejongTogether from "../assets/images/team/optimized/semin-sejong-together.webp";
import donginMentor from "../assets/images/mentors/optimized/mentor-dongin.webp";
import jaehongMentor from "../assets/images/mentors/optimized/mentor-jaehong.webp";
import sehwanMentor from "../assets/images/mentors/optimized/mentor-sehwan.webp";
import soonyupMentor from "../assets/images/mentors/optimized/mentor-soonyup.webp";
import mjuLogo from "../assets/images/schools/mju-logo.gif";
import snuLogo from "../assets/images/schools/snu-logo.png";
import uosLogo from "../assets/images/schools/uos-logo.png";

export const contactEmail =
  import.meta.env.VITE_CONTACT_EMAIL || "lifedesigner88@gmail.com";

const tallyFormReference = import.meta.env.VITE_TALLY_FORM_URL || "";

function normalizeTallyPublicUrl(value) {
  const reference = value.trim();

  if (!reference) {
    return "";
  }

  try {
    const url = new URL(reference);
    const isTallyUrl = url.hostname === "tally.so" || url.hostname.endsWith(".tally.so");

    if (!isTallyUrl) {
      return "";
    }

    const [, pathType, formId] = url.pathname.split("/");

    if ((pathType === "r" || pathType === "forms" || pathType === "embed") && formId) {
      return new URL(`/r/${formId}`, "https://tally.so").toString();
    }
  } catch {
    if (/^[A-Za-z0-9_-]+$/.test(reference)) {
      return new URL(`/r/${reference}`, "https://tally.so").toString();
    }
  }

  return "";
}

export const tallyPublicUrl = normalizeTallyPublicUrl(tallyFormReference);
export const applySectionHref = "#apply";

export const teamImages = {
  groupPortrait,
  seminSejongTogether,
};

export const heroTopics = [
  "생기부를 어떻게 읽어야 할지",
  "고1 첫 시험 전 무엇부터 해야 할지",
  "담임 상담 전에 무엇을 물어봐야 할지",
  "특목·자사 준비가 늦은 건 아닌지",
];

export const heroTrustItems = [
  { label: "중3·예비고1 고민 중심", icon: UsersRound },
  { label: "무료 상담 인터뷰", icon: CircleDollarSign },
  { label: "AI·SW마에스트로 17기", icon: BadgeCheck },
];

export const quickFacts = [];

export const socialMissionItems = [
  {
    title: "엄마의 말에서 시작합니다",
    text: "답을 먼저 제시하기보다, 생기부·성적·상담·학원 선택 앞에서 어디가 가장 막막한지 듣습니다.",
    icon: Brain,
  },
  {
    title: "아이 기록 기준으로 정리합니다",
    text: "흩어진 기록과 고민을 한 번에 펼쳐 보고, 지금 무엇을 질문해야 하는지 놓치지 않도록 구조화합니다.",
    icon: NotebookTabs,
  },
  {
    title: "불안을 키우지 않는 AI를 만듭니다",
    text: "합격 보장이나 과장된 약속이 아니라, 학부모의 판단을 돕는 안전한 보조 도구로 검증합니다.",
    icon: ShieldCheck,
  },
];

export const asmProofItems = [
  "AI·SW마에스트로 17기 선발팀",
  "지원서·코딩 테스트·심층면접 기반 선발",
  "100명의 학부모 목소리를 듣는 것을 목표로 검증 중",
];

export const asmBrandLogo = {
  src: "/asm-logo/asm-signature-web.png",
  alt: "AI·SW마에스트로 공식 로고",
};

export const teamVideos = [
  {
    title: "[02화] - 멘토헌팅",
    subtitle: "Directed by 준혁 · AI 소마 17기",
    embedUrl: "https://www.youtube-nocookie.com/embed/AB3xpRJejNE?rel=0",
    watchUrl: "https://youtu.be/AB3xpRJejNE",
  },
  {
    title: "[03화] - 뉴페이스",
    subtitle: "Directed by 준혁 · AI 소마 17기",
    embedUrl: "https://www.youtube-nocookie.com/embed/pAjVOlvbz58?rel=0",
    watchUrl: "https://youtu.be/pAjVOlvbz58",
  },
];

export const painPoints = [
  {
    id: "record",
    icon: BookOpenCheck,
    tab: "아이 기록",
    subtitle: "생기부를 봐도 뭘 해야 할지 모르겠어요",
    title: "우리 아이 생기부, 이대로 괜찮은 걸까요?",
    quote:
      "기록은 있는데 이게 좋은 건지, 부족한 건지, 지금 뭘 보완해야 하는지 모르겠어요.",
    summary:
      "정보가 부족해서가 아니라, 내 아이 기록을 읽는 기준이 없어서 막막해지는 순간을 듣고 싶습니다.",
    details: [
      "세특이 있긴 한데 이게 입시에 실제로 도움이 되는 건지 모르겠어요",
      "다른 애들이랑 비교해볼 방법이 없으니 더 불안해요",
      "지금 뭘 보완해야 하는지 아무도 명확하게 말해주지 않아요",
    ],
    wants: [
      "현재 가장 신경 쓰이는 기록과 성적",
      "학원·활동·상담 중 먼저 결정해야 한다고 느끼는 것",
      "아이 상황을 누군가에게 설명할 때 막히는 지점",
    ],
  },
  {
    id: "first90",
    icon: CalendarClock,
    tab: "예비고1",
    title: "예비고1 첫 90일이 벌써 불안해요",
    quote:
      "중3 겨울방학을 놓치면 고1 첫 시험부터 흔들릴까 봐, 지금 무엇부터 해야 할지 불안해요.",
    summary:
      "예비고1 고민은 과목 하나가 아니라 학교 선택, 첫 시험, 생기부 방향, 사교육 결정이 한꺼번에 얽혀 있습니다.",
    details: [
      "겨울방학에 뭘 시켜야 할지 학원마다 말이 다 달라요",
      "고1 첫 중간고사 준비를 언제부터 해야 하는지 기준이 없어요",
      "학교를 선택하면 학습 전략도 바뀌는 건지 아직도 모르겠어요",
    ],
    wants: [
      "중3 말부터 사교육 결정이 어떻게 달라지는지",
      "고1 첫 학기에서 가장 두려운 장면",
      "학교 선택과 학습 계획을 어디까지 연결해서 보는지",
    ],
  },
  {
    id: "teacher",
    icon: MessageCircleQuestion,
    tab: "담임 상담",
    title: "담임 상담 시간, 그냥 듣고만 올까 봐 걱정돼요",
    quote:
      "상담 시간은 짧은데 뭘 물어봐야 할지 정리가 안 돼요. 그냥 듣고만 오면 놓치는 게 있을 것 같아요.",
    summary:
      "학교 상담을 대체하려는 것이 아니라, 상담 전에 기록과 질문을 정리하는 준비 경험을 검증합니다.",
    details: [
      "담임 선생님이 바쁘실 것 같아 물어보기가 미안해요",
      "상담 끝나고 나면 항상 '이걸 물어볼걸' 싶어요",
      "뭘 준비해 가야 상담이 의미 있어지는지 모르겠어요",
    ],
    wants: [
      "상담 전에 가장 알고 싶은 것",
      "학교에서 들었지만 실행으로 이어지지 않은 답변",
      "질문지를 만들 수 있다면 꼭 넣고 싶은 항목",
    ],
  },
  {
    id: "special",
    icon: School,
    tab: "특목·자사",
    title: "특목·자사 준비, 지금 늦은 건 아닌지 불안해요",
    quote:
      "원서, 면접, 자소서를 앞두고 지금 더 할 수 있는 일이 있는지, 이미 늦은 건 아닌지 알고 싶어요.",
    summary:
      "고관여 준비 상황은 마감, 학교별 기준, 이미 받은 조언이 다르기 때문에 별도 맥락으로 듣습니다.",
    details: [
      "컨설팅 받았는데도 뭘 어떻게 해야 할지 여전히 막막해요",
      "학교마다 기준이 다르다는데 어디서부터 비교해야 할지 모르겠어요",
      "자소서 쓰는 게 맞는 방향인지 확신이 없어요",
    ],
    wants: [
      "마감이 있는 과제에서 가장 급한 부분",
      "이미 받은 컨설팅이나 학원 조언의 한계",
      "원서·면접·자소서 준비에서 놓치고 싶지 않은 기준",
    ],
  },
  {
    id: "other",
    icon: HeartHandshake,
    tab: "그 밖에 고민",
    title: "딱 맞는 항목이 없어도 괜찮아요",
    quote:
      "위에 있는 고민은 아닌 것 같은데, 아이 문제로 계속 마음에 걸리는 게 있어요.",
    summary:
      "생기부, 예비고1, 담임 상담, 특목·자사 준비로 딱 나뉘지 않는 고민도 편하게 들려주세요.",
    details: [
      "학원을 바꿔야 하나 고민인데 누구한테 물어봐야 할지 모르겠어요",
      "아이랑 공부 얘기만 하면 분위기가 어색해져요",
      "이게 진짜 문제인지 내가 너무 예민한 건지 모르겠어요",
    ],
    wants: [
      "요즘 가장 자주 떠오르는 걱정",
      "누구에게 물어봐야 할지 애매했던 질문",
      "아이와 이야기할 때 조심스럽거나 막히는 지점",
    ],
  },
];

export const interviewSteps = [
  {
    title: "녹음은 동의 시에만",
    text: "녹음 여부는 참여자가 직접 결정합니다. 동의하지 않으면 메모로만 진행합니다.",
    icon: Mic,
  },
  {
    title: "대면·전화·Zoom 선택",
    text: "오프라인 대면, 전화, Zoom 중 편한 방식을 자유롭게 선택할 수 있습니다.",
    icon: Video,
  },
  {
    title: "무료 인터뷰",
    text: "결제를 유도하는 자리가 아닙니다. 50분 리서치 인터뷰이며 비용은 없습니다.",
    icon: CircleDollarSign,
  },
];

export const safetyNotes = [
  { label: "녹음은 동의 시에만", icon: Mic },
  { label: "대면·전화·Zoom 선택", icon: Video },
  { label: "무료 상담", icon: CircleDollarSign },
];

export const teamMembers = [
  {
    name: "박세종",
    role: "Team Lead, 교육자형 개발자",
    education: "서울시립대학교\n전자전기컴퓨터공학부 학사",
    school: {
      name: "서울시립대학교",
      logo: uosLogo,
      alt: "서울시립대학교 로고",
    },
    photo: sejongProfile,
    photoAlt: "꽃이 핀 야외 배경 앞에 선 박세종",
    details: [
      "전) 상상코칭 헤드 입시컨설턴트",
      "전) 국제캠프(12개국) 총괄 PM",
      "현) 박문호의 자연과학세상 이사",
    ],
  },
  {
    name: "박준혁",
    role: "AI & Data, 사용자 맥락 연구",
    education: "서울대학교\n자유전공학부, 인류학과·컴퓨터공학과",
    school: {
      name: "서울대학교",
      logo: snuLogo,
      alt: "서울대학교 로고",
    },
    photo: junhyeokProfile,
    photoAlt: "계단에 앉아 웃고 있는 박준혁",
    details: ["한국정보올림피아드(KOI) 은상", "인류학적 현장 조사 관점", "LLM 기반 문제 구조화"],
  },
  {
    name: "박세민",
    role: "PM & Fullstack",
    education: "명지대학교\n데이터사이언스, 데이터테크놀로지",
    school: {
      name: "명지대학교",
      logo: mjuLogo,
      alt: "명지대학교 로고",
    },
    photo: seminProfile,
    photoAlt: "야외 산책로에서 카메라를 바라보는 박세민",
    details: ["KOPLE 2,700명 운영", "LOI 기반 시장 검증", "기획·개발·검증 통합"],
  },
];

export const workPrinciples = [
  {
    title: "먼저 듣습니다",
    text: "정리가 안 되어 있어도 괜찮습니다. 지금 마음에 걸리는 것부터 편하게 이야기해 주세요.",
    icon: HeartHandshake,
  },
  {
    title: "내용을 함께 정리합니다",
    text: "학원, 성적, 학교 상담 — 따로따로 말해도 빠진 것 없이 이어서 정리합니다.",
    icon: Route,
  },
  {
    title: "과장된 약속은 하지 않습니다",
    text: "합격 보장이나 불안을 자극하는 말은 하지 않습니다. 지금 상황을 있는 그대로 확인합니다.",
    icon: ShieldCheck,
  },
];

export const trustItems = [
  {
    title: "국가 AI 인재 양성 과정 선발팀",
    text: "AI·SW마에스트로 17기 모집에서 지원서 검토, 코딩 테스트, 심층면접을 거쳐 선발된 청년팀입니다.",
    icon: BadgeCheck,
  },
  {
    title: "100명의 학부모 목소리를 듣는 목표",
    text: "2026년 3월부터 학부모·학생 인터뷰를 진행하며, 100명의 학부모 목소리를 모아 판단 기준이 부족한 순간을 확인하고 있습니다.",
    icon: Brain,
  },
  {
    title: "상담 판매가 아닌 리서치 인터뷰",
    text: "지금은 결제를 유도하는 상담 자리가 아니라, 실제 문제를 정확히 이해하기 위한 50분 인터뷰입니다.",
    icon: SearchCheck,
  },
  {
    title: "개인정보 원칙",
    text: "자료 공유는 선택이며, 외부 공개가 필요한 내용은 개인을 특정할 수 없도록 비식별화합니다.",
    icon: LockKeyhole,
  },
];

export const mentorProfiles = [
  {
    name: "고세환",
    status: "담당 멘토",
    role: "기술·서비스·전략 자문",
    context: "KIST AX, DX, IT 인프라 및 정보보안 체계를 총괄",
    photo: sehwanMentor,
    photoAlt: "정장을 입고 서 있는 고세환 멘토",
    summary:
      "문제정의, 개인정보·보안, 정부지원사업 전략까지 서비스가 실제 운영될 때 필요한 기준을 함께 점검합니다.",
    highlights: ["KIST DX·AX", "정보보안·개인정보", "창업 4회 경험"],
    career: [
      "한국과학기술연구원(KIST) AX, DX, IT 인프라 및 정보보안 체계를 총괄 (2013~)",
      "KT 보안컨설팅·네트워크 보안관제 (2010~2013)",
      "메일북 그룹웨어 개발 (2005~2006)",
      "빅풀 보드게임 개발 (2004~2005)",
    ],
    activities: [
      "CISSP 국제정보보안전문가",
      "CPPG 개인정보보호전문가",
      "KT 보안컨설팅·네트워크 보안관제 경험",
      "정부지원사업·기획심의·TIPS 전략 멘토링",
      "VC 네트워크 연결과 피칭 코칭 지원",
    ],
  },
  {
    name: "조재홍",
    status: "기술 멘토",
    role: "AI·IoT·에듀테크 자문",
    context: "삼성전자 AI플랫폼센터",
    photo: jaehongMentor,
    photoAlt: "민트색 배경 앞에서 웃고 있는 조재홍 멘토",
    summary:
      "대기업 AI·IoT 플랫폼과 에듀테크 스타트업 운영 경험을 바탕으로, 아이디어가 실제 사용자에게 닿는 과정을 함께 점검합니다.",
    highlights: ["삼성전자 AI플랫폼센터", "SmartThings", "에듀테크 운영"],
    career: [
      "삼성전자 AI플랫폼센터 (2024.11~현재) - AI 기반 업무 혁신(AX) 전략 수립 및 기술 리딩",
      "삼성전자 AI플랫폼센터 (2024.11~현재) - IoT 플랫폼 전략 기획 및 SmartThings 상품화 개발 관리",
      "필로토 (2022.6~2024.5) - 타키 서비스 개발 총괄 및 운영, 사용자 데이터 수집·분석",
      "삼성전자 삼성리서치 (2015.3~2022.5) - IoT 오픈소스 개발 Tech Leader, SmartThings 상품화",
      "삼성전자 무선사업부 (2006.12~2015.2) - 갤럭시 Launcher·Widget·Message, Gear VR Gallery·Video App 개발",
    ],
    activities: [
      "AI·SW 마에스트로 기술멘토 (2024~)",
      "창업진흥원 평가위원 (2024~)",
      "한국교육학술정보원 디지털교과서 전문위원 (2023)",
    ],
  },
  {
    name: "조동인",
    status: "비기술 멘토",
    role: "창업·고객개발·사업화 자문",
    context: "스프러너 대표",
    photo: donginMentor,
    photoAlt: "흰 배경 앞에서 웃고 있는 조동인 멘토",
    summary:
      "10,000명 이상의 창업가 교육과 200개 이상의 스타트업 육성 경험을 바탕으로, 문제-해결 적합성과 초기 시장 진입 전략을 함께 점검합니다.",
    highlights: ["창업가 10,000명+ 교육", "스타트업 200개+ 육성", "PSF·린 스타트업"],
    career: [
      "주식회사 스프러너 대표 - 극초기 기술 기반 스타트업 액셀러레이팅",
      "AI·SW마에스트로 멘토 - 아이디에이션, 고객 개발, 비즈니스 모델 자문",
      "행정안전부 지방자치단체 합동평가단 前 위원",
      "국무총리 직속 청년정책조정위원회 前 위원",
      "교육부 미래교육위원회 前 위원",
    ],
    activities: [
      "2013년부터 창업가 10,000명+ 교육",
      "2018년부터 스타트업 200개+ 육성",
      "그로스허브·코파운더 프로그램 총괄",
      "문제-해결 적합성(PSF), MVP, 고객 인터뷰 설계 멘토링",
      "IR·펀드레이징 관점의 피칭 논리 구조화",
      "기업가정신 확산 및 진흥 유공 중소벤처기업부장관 표창",
    ],
  },
  {
    name: "홍순엽",
    status: "VC 자문",
    role: "투자·사업화 자문",
    context: "모비딕벤처스 벤처투자팀",
    photo: soonyupMentor,
    photoAlt: "팔짱을 끼고 있는 홍순엽 멘토",
    summary:
      "투자자와 정부 심사위원의 관점으로 문제정의, 시장성, 기획심의 자료의 설득력을 함께 확인합니다.",
    highlights: ["딥테크·ICT·SW 투자", "TIPS·POST-TIPS", "BM·피칭 전략"],
    career: [
      "모비딕벤처스 벤처투자팀 팀장 - 딥테크·ICT·SW 투자",
      "초기 단계 투자 검토와 후속 투자 유치 지원",
      "기업가치 2,500억원 규모 성장 사례 지원",
      "SW 기반 스타트업 TIPS 선정 지원",
    ],
    activities: [
      "도전 K-스타트업 발표평가 선정위원",
      "TIPS·POST-TIPS 심사위원",
      "예비·초기창업패키지 서류평가 위원",
      "청년창업사관학교·대학 창업경진대회 평가위원",
      "전자공학 기반 기술 사업성 검토 관점",
      "기술거래사·기술신용평가사(TCB) 기반 검증",
      "투자 유치 로드맵과 기획심의 전략 자문",
    ],
  },
];

export const mentorSignals = [
  "기술·제품 검토",
  "고객·시장 검증",
  "개인정보·운영 리스크 점검",
  "문제정의 피드백",
];

export const applyFields = [
  "이름과 연락처",
  "학부모·학생 여부",
  "자녀 또는 본인의 학년",
  "가장 마음에 걸리는 고민",
  "희망 인터뷰 방식과 시간대",
];

export const offlineLocation = {
  title: "오프라인 인터뷰 장소",
  name: "AI·SW마에스트로 연수센터",
  building: "포스트타워 7층, 12층",
  address: "서울특별시 마포구 마포대로 89 포스트타워 7층, 12층",
  postalCode: "04156",
  transit: "공덕역 1번 출구 앞, 도보 약 300m",
  kakaoMapUrl:
    "https://map.kakao.com/link/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%A7%88%ED%8F%AC%EB%8C%80%EB%A1%9C%2089%20%ED%8F%AC%EC%8A%A4%ED%8A%B8%ED%83%80%EC%9B%8C",
  kakaoRouteUrl:
    "https://map.kakao.com/link/to/AI%C2%B7SW%EB%A7%88%EC%97%90%EC%8A%A4%ED%8A%B8%EB%A1%9C%20%EC%97%B0%EC%88%98%EC%84%BC%ED%84%B0,37.5431769,126.9499679",
  roughMap: {
    timestamp: "1747116575994",
    key: "2oz4e",
  },
};

export const faqs = [
  {
    question: "생기부나 성적표를 꼭 보내야 하나요?",
    answer:
      "아니요. 인터뷰 단계에서는 자료 업로드가 필수가 아닙니다. 말로만 현재 고민을 설명해 주셔도 괜찮고, 자료 공유 여부와 범위는 직접 선택할 수 있습니다.",
  },
  {
    question: "엄마 혼자 참여해도 되나요?",
    answer:
      "네. 학부모님 혼자 참여해도 됩니다. 아이와 함께 이야기하고 싶다면 함께 참여해도 되고, 민감한 내용은 말하지 않아도 됩니다.",
  },
  {
    question: "녹음은 반드시 하나요?",
    answer:
      "아닙니다. 녹음은 동의한 경우에만 진행합니다. 동의하지 않으면 메모로만 대체하고, 불편한 질문은 답하지 않아도 됩니다.",
  },
  {
    question: "상담이나 컨설팅을 판매하려는 자리인가요?",
    answer:
      "아닙니다. 지금은 학부모와 학생의 실제 고민을 듣고 문제 가설을 검증하는 단계입니다. 결제를 유도하는 상담이나 합격 보장을 약속하는 자리가 아닙니다.",
  },
  {
    question: "인터뷰 내용은 어디에 쓰이나요?",
    answer:
      "Team 310의 문제 정의와 서비스 기획 검증에만 사용합니다. 외부 발표나 문서에 필요한 경우에는 개인을 특정할 수 없도록 비식별화합니다.",
  },
  {
    question: "누가 참여하면 좋나요?",
    answer:
      "중3·예비고1 학부모, 최근 입시·진로 상담을 고민한 학생, 특목·자사 준비 중인 가정, 담임 상담 전에 질문을 정리하고 싶은 분에게 특히 도움이 됩니다.",
  },
  {
    question: "기관 협력도 가능한가요?",
    answer:
      "가능합니다. 학원, 학교, 교육기관에서 학부모 인터뷰나 파일럿 협력을 논의하고 싶다면 이메일로 연락해 주세요.",
  },
];

export const footerLinks = [
  {
    label: "AI·SW마에스트로",
    href: "https://www.swmaestro.ai",
  },
  {
    label: "Team 310 유튜브",
    href: "https://www.youtube.com/@asm17_team310",
  },
];

export const applySummaryIcons = [ClipboardCheck, Brain, CircleDollarSign];
