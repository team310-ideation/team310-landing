import {
  BadgeCheck,
  BookOpenCheck,
  Brain,
  CalendarClock,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  FileCheck2,
  Gift,
  Handshake,
  HeartHandshake,
  LockKeyhole,
  MessageCircleQuestion,
  Mic,
  NotebookTabs,
  Route,
  School,
  SearchCheck,
  ShieldCheck,
  UserRoundCheck,
  UsersRound,
  Video,
} from "lucide-react";
import groupPortrait from "../assets/images/team/optimized/team310-group-portrait.webp";
import junhyeokProfile from "../assets/images/team/optimized/junhyeok-profile.webp";
import sejongProfile from "../assets/images/team/optimized/sejong-profile.webp";
import seminProfile from "../assets/images/team/optimized/semin-profile.webp";
import seminSejongTogether from "../assets/images/team/optimized/semin-sejong-together.webp";

export const contactEmail =
  import.meta.env.VITE_CONTACT_EMAIL || "lifedesigner88@gmail.com";

const tallyFormReference = import.meta.env.VITE_TALLY_FORM_URL || "";

function withTallyEmbedOptions(url) {
  url.searchParams.set("hideTitle", "1");
  url.searchParams.set("transparentBackground", "1");
  url.searchParams.set("dynamicHeight", "1");
  return url.toString();
}

function normalizeTallyEmbedUrl(value) {
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

    if (pathType === "embed" && formId) {
      return withTallyEmbedOptions(url);
    }

    if ((pathType === "r" || pathType === "forms") && formId) {
      return withTallyEmbedOptions(new URL(`/embed/${formId}`, "https://tally.so"));
    }
  } catch {
    if (/^[A-Za-z0-9_-]+$/.test(reference)) {
      return withTallyEmbedOptions(new URL(`/embed/${reference}`, "https://tally.so"));
    }
  }

  return "";
}

export const tallyEmbedUrl = normalizeTallyEmbedUrl(tallyFormReference);

export const teamImages = {
  groupPortrait,
  seminSejongTogether,
};

export const heroTopics = [
  "생기부를 어떻게 읽어야 할지",
  "예비고1 첫 90일을 어떻게 준비할지",
  "담임 상담 전에 무엇을 물어볼지",
  "특목·자사 준비가 늦은 건 아닌지",
];

export const heroTrustItems = [
  { label: "AI·SW마에스트로 17기", icon: BadgeCheck },
  { label: "100+ 인터뷰 기반 검증", icon: UsersRound },
  { label: "자료 업로드 없이 가능", icon: ShieldCheck },
];

export const quickFacts = [
  { value: "30분", label: "전화·Zoom·대면 선택" },
  { value: "100+", label: "3월부터 진행한 문제 인터뷰" },
  { value: "5개", label: "핵심 페인포인트 검증" },
  { value: "선택", label: "녹음·자료 공유 모두 동의 기반" },
];

export const painPoints = [
  {
    id: "record",
    icon: BookOpenCheck,
    tab: "아이 기록",
    title: "우리 아이 기록 기준으로 뭘 해야 할지 모르겠어요",
    quote:
      "입시 정보는 넘치는데, 우리 아이 생기부와 성적을 어떻게 읽어야 하는지는 잘 모르겠어요.",
    summary:
      "정보 부족이 아니라 판단 기준 부족의 문제입니다. 중학교 3년 기록에서 지금 우선해야 할 일을 함께 확인하고 싶습니다.",
    wants: [
      "현재 어떤 기록을 가장 불안하게 보고 있는지",
      "학원·활동·상담 중 무엇이 먼저라고 느끼는지",
      "아이 상황을 설명할 때 막히는 지점이 어디인지",
    ],
  },
  {
    id: "first90",
    icon: CalendarClock,
    tab: "예비고1",
    title: "고1 첫 90일을 어떻게 준비해야 할지 막막해요",
    quote:
      "첫 중간고사가 중요하다는데 이번 방학에 뭘 해야 할지, 학원을 더 보내는 게 답인지 모르겠어요.",
    summary:
      "예비고1의 고민은 과목 하나보다 학교 선택, 생기부 방향, 첫 시험 준비가 묶여 있습니다.",
    wants: [
      "중3 말부터 사교육 의사결정이 어떻게 바뀌는지",
      "고1 첫 학기에서 가장 불안한 장면이 무엇인지",
      "학교 선택과 학습 계획을 어디까지 연결해서 보는지",
    ],
  },
  {
    id: "teacher",
    icon: MessageCircleQuestion,
    tab: "담임 상담",
    title: "담임 상담 전에 뭘 물어봐야 할지 모르겠어요",
    quote:
      "상담 시간은 짧은데 그냥 듣고만 오면 아까울 것 같아요. 질문을 정리하고 싶어요.",
    summary:
      "학교 상담을 대체하려는 것이 아닙니다. 상담 전에 기록과 질문을 정리하는 준비 경험을 검증합니다.",
    wants: [
      "상담 전 가장 알고 싶은 정보",
      "학교에서 받은 답변 중 실행으로 이어지지 않은 부분",
      "질문지를 만들 수 있다면 꼭 넣고 싶은 항목",
    ],
  },
  {
    id: "privacy",
    icon: LockKeyhole,
    tab: "신뢰·개인정보",
    title: "상담은 비싸고, 아이 기록을 맡기는 것도 걱정돼요",
    quote:
      "무료 정보는 못 믿겠고, 비싼 상담은 부담돼요. 생기부 같은 자료를 보내는 것도 불안하고요.",
    summary:
      "인터뷰 단계에서는 자료 업로드가 필수가 아니며, 녹음과 자료 공유는 동의한 경우에만 진행합니다.",
    wants: [
      "결제 전환을 막는 불안이 가격인지 신뢰인지 개인정보인지",
      "어떤 설명이 있어야 기록을 공유할 수 있다고 느끼는지",
      "상담자와 서비스 운영자에게 기대하는 책임 수준",
    ],
  },
  {
    id: "special",
    icon: School,
    tab: "특목·자사",
    title: "특목·자사 준비가 늦은 건 아닌지 불안해요",
    quote:
      "원서, 면접, 자소서를 앞두고 지금 더 할 수 있는 일이 있는지 알고 싶어요.",
    summary:
      "모든 학부모에게 같은 메시지를 밀지 않고, 고관여 준비 상황은 별도 맥락으로 듣습니다.",
    wants: [
      "마감이 있는 과제에서 가장 급한 부분",
      "이미 받은 컨설팅이나 학원 조언의 한계",
      "원서·면접·자소서 준비에서 놓치고 싶지 않은 기준",
    ],
  },
];

export const interviewSteps = [
  {
    title: "현재 고민을 듣습니다",
    text: "아이의 학년, 기록, 학교 상담, 사교육 경험에서 지금 가장 막혀 있는 지점을 듣습니다.",
    icon: Mic,
  },
  {
    title: "맥락을 함께 정리합니다",
    text: "사람이 먼저 듣고, AI는 누적된 기록과 고민을 구조화해 다음 질문을 놓치지 않게 돕습니다.",
    icon: NotebookTabs,
  },
  {
    title: "문제 가설을 확인합니다",
    text: "우리가 이해한 문제가 실제 학부모와 학생에게 맞는지 확인하고, 제품 방향에 반영합니다.",
    icon: SearchCheck,
  },
];

export const safetyNotes = [
  { label: "자료 업로드 필수 아님", icon: FileCheck2 },
  { label: "녹음은 동의 시에만", icon: Mic },
  { label: "대면·전화·Zoom 선택", icon: Video },
  { label: "문화상품권 제공", icon: Gift },
];

export const teamMembers = [
  {
    name: "박세종",
    role: "Team Lead, 교육자형 개발자",
    photo: sejongProfile,
    photoAlt: "꽃이 핀 야외 배경 앞에 선 박세종",
    summary:
      "국제캠프 PM, 입시 데이터 3만 건 분석, 진로코칭 경험을 바탕으로 교육 맥락을 제품 언어로 옮깁니다.",
    details: ["550명+·18개국 국제캠프 운영", "입시 컨설팅·진로코칭", "48명 교육 서비스 사용자 검증"],
  },
  {
    name: "박준혁",
    role: "AI & Data, 사용자 맥락 연구",
    photo: junhyeokProfile,
    photoAlt: "계단에 앉아 웃고 있는 박준혁",
    summary:
      "기술을 먼저 과시하기보다 학부모와 학생의 실제 발화를 데이터 구조로 읽는 역할을 맡고 있습니다.",
    details: ["알고리즘 역량", "인류학적 현장 조사 관점", "LLM 기반 문제 구조화"],
  },
  {
    name: "박세민",
    role: "PM & Backend, 사용자 검증",
    photo: seminProfile,
    photoAlt: "야외 산책로에서 카메라를 바라보는 박세민",
    summary:
      "실제 사용자가 모이는 커뮤니티와 제품 검증 경험을 바탕으로 인터뷰와 실행 사이를 연결합니다.",
    details: ["KOPLE 2,700명 운영", "LOI 기반 시장 검증", "기획·개발·검증 통합"],
  },
];

export const workPrinciples = [
  {
    title: "먼저 듣습니다",
    text: "학부모와 학생의 실제 말이 제품의 출발점입니다.",
    icon: HeartHandshake,
  },
  {
    title: "맥락을 구조화합니다",
    text: "정보를 더 주는 것이 아니라 지금 우선할 질문을 찾습니다.",
    icon: Route,
  },
  {
    title: "작게 검증합니다",
    text: "한 번에 완벽한 답보다 작은 가설을 빠르게 확인합니다.",
    icon: CheckCircle2,
  },
  {
    title: "합격 보장을 말하지 않습니다",
    text: "불안을 자극하는 약속 대신 책임 있는 의사결정 보조에 집중합니다.",
    icon: ShieldCheck,
  },
];

export const trustItems = [
  {
    title: "정부 지원 프로젝트",
    text: "AI·SW마에스트로 17기 선발 과정 통과 후 기획심의를 준비 중인 팀입니다.",
    icon: BadgeCheck,
  },
  {
    title: "실명 담당자",
    text: `인터뷰 문의는 Team Lead 박세종이 ${contactEmail}로 직접 받습니다.`,
    icon: UserRoundCheck,
  },
  {
    title: "개인정보 원칙",
    text: "자료 공유는 선택이고, 외부 공개가 필요한 내용은 비식별화해 사용합니다.",
    icon: LockKeyhole,
  },
  {
    title: "멘토 네트워크",
    text: "기술·사업·VC 관점의 멘토링을 받으며 문제 정의와 검증을 진행합니다.",
    icon: Handshake,
  },
];

export const mentorSignals = [
  "기술·제품 멘토링",
  "문제정의·사업화 검토",
  "기획심의·투자 관점 피드백",
];

export const applyFields = [
  "이름과 연락처",
  "학부모·학생·교육기관 관계자 여부",
  "자녀 또는 본인 학년",
  "가장 가까운 고민",
  "희망 인터뷰 방식과 시간대",
];

export const faqs = [
  {
    question: "생기부나 성적표를 꼭 보내야 하나요?",
    answer:
      "아니요. 인터뷰 단계에서는 자료 업로드가 필수가 아닙니다. 필요하다고 느끼는 경우에도 공유 여부와 범위는 직접 선택할 수 있습니다.",
  },
  {
    question: "녹음은 반드시 하나요?",
    answer:
      "아닙니다. 녹음은 동의한 경우에만 진행합니다. 동의하지 않으면 메모로만 대체하고, 불편한 질문은 답하지 않아도 됩니다.",
  },
  {
    question: "인터뷰 내용은 어디에 쓰이나요?",
    answer:
      "Team 310의 문제 정의와 서비스 기획 검증에만 사용합니다. 외부 발표나 문서에 필요한 경우에는 개인을 특정할 수 없도록 비식별화합니다.",
  },
  {
    question: "서비스를 바로 판매하려는 인터뷰인가요?",
    answer:
      "아닙니다. 지금은 학부모와 학생의 실제 고민을 듣고 문제 가설을 검증하는 단계입니다. 제품 방향을 정하기 위한 30분 인터뷰입니다.",
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

export const noPromiseItems = [
  "합격 보장",
  "성적 상승 보장",
  "AI 학생부 문장 대필",
];

export const focusItems = [
  "내 아이 기록 기준 우선순위",
  "상담 전 질문 정리",
  "누적 맥락 기반 다음 선택",
];

export const footerLinks = [
  {
    label: "KOPLE",
    href: "https://thekople.com",
  },
  {
    label: "AI·SW마에스트로",
    href: "https://www.swmaestro.org",
  },
];

export const applySummaryIcons = [ClipboardCheck, Brain, CircleDollarSign];
