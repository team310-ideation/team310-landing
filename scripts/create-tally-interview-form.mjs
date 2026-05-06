import { randomUUID } from "node:crypto";
import { readFileSync } from "node:fs";

const env = readEnvFile(".env");
const publicEnv = readEnvFile(".env.production");
const apiKey = process.env.TALLY_API_KEY || env.TALLY_API_KEY;

if (!apiKey) {
  console.error("Missing TALLY_API_KEY. Put it in .env before running this script.");
  process.exit(1);
}

const API_URL = "https://api.tally.so/forms";
const title = "Team 310 50분 인터뷰 신청";
const existingFormId =
  process.env.TALLY_CREATE_NEW === "1"
    ? ""
    : process.env.TALLY_FORM_ID ||
      env.TALLY_FORM_ID ||
      getTallyFormId(process.env.VITE_TALLY_FORM_URL || publicEnv.VITE_TALLY_FORM_URL || "");

function readEnvFile(path) {
  try {
    return Object.fromEntries(
      readFileSync(path, "utf8")
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith("#"))
        .map((line) => {
          const index = line.indexOf("=");
          return [line.slice(0, index), line.slice(index + 1)];
        }),
    );
  } catch {
    return {};
  }
}

function getTallyFormId(value) {
  const reference = value.trim();

  if (!reference) {
    return "";
  }

  try {
    const url = new URL(reference);
    const [, pathType, formId] = url.pathname.split("/");

    if ((pathType === "r" || pathType === "forms" || pathType === "embed") && formId) {
      return formId;
    }
  } catch {
    if (/^[A-Za-z0-9_-]+$/.test(reference)) {
      return reference;
    }
  }

  return "";
}

function block(type, groupType, payload, groupUuid = randomUUID()) {
  return {
    uuid: randomUUID(),
    type,
    groupUuid,
    groupType,
    payload,
  };
}

function formTitle(html) {
  return block("FORM_TITLE", "TEXT", {
    title,
    html,
    button: {
      label: "50분 인터뷰 신청하기",
    },
  });
}

function text(html) {
  return block("TEXT", "TEXT", { html });
}

function divider() {
  return block("DIVIDER", "DIVIDER", {});
}

function questionTitle(html, groupUuid) {
  return block("TITLE", "QUESTION", { html }, groupUuid);
}

function inputQuestion({ title: question, type = "INPUT_TEXT", placeholder = "", isRequired = false }) {
  const groupUuid = randomUUID();
  return [
    questionTitle(question, groupUuid),
    block(
      type,
      type,
      {
        isRequired,
        placeholder,
      },
      groupUuid,
    ),
  ];
}

function textareaQuestion({ title: question, placeholder = "", isRequired = false }) {
  return inputQuestion({
    title: question,
    type: "TEXTAREA",
    placeholder,
    isRequired,
  });
}

function dropdownQuestion({ title: question, options, isRequired = false }) {
  const questionGroupUuid = randomUUID();
  const dropdownGroupUuid = randomUUID();
  return [
    questionTitle(question, questionGroupUuid),
    ...options.map((option, index) =>
      block(
        "DROPDOWN_OPTION",
        "DROPDOWN",
        {
          index,
          text: option,
          isFirst: index === 0,
          isLast: index === options.length - 1,
          isRequired: isRequired && index === 0,
        },
        dropdownGroupUuid,
      ),
    ),
  ];
}

function multipleChoiceQuestion({ title: question, options, isRequired = false }) {
  const questionGroupUuid = randomUUID();
  const choiceGroupUuid = randomUUID();
  return [
    questionTitle(question, questionGroupUuid),
    ...options.map((option, index) =>
      block(
        "MULTIPLE_CHOICE_OPTION",
        "MULTIPLE_CHOICE",
        {
          index,
          text: option,
          isFirst: index === 0,
          isLast: index === options.length - 1,
          isRequired: isRequired && index === 0,
        },
        choiceGroupUuid,
      ),
    ),
  ];
}

function checkboxQuestion({ title: question, options, isRequired = false }) {
  const questionGroupUuid = randomUUID();
  const checkboxGroupUuid = randomUUID();
  return [
    questionTitle(question, questionGroupUuid),
    ...options.map((option, index) =>
      block(
        "CHECKBOX",
        "CHECKBOXES",
        {
          index,
          text: option,
          isFirst: index === 0,
          isLast: index === options.length - 1,
          hasMinChoices: isRequired && index === 0,
          minChoices: isRequired && index === 0 ? 1 : undefined,
        },
        checkboxGroupUuid,
      ),
    ),
  ];
}

const blocks = [
  formTitle('<span style="color: #102035"><b>Team 310 50분 인터뷰 신청</b></span>'),
  text(
    "학부모님이 편하게 이야기하실 수 있도록 필요한 정보만 받습니다. 응답 후 가능한 시간대를 조율해 Team 310이 직접 연락드립니다.",
  ),
  text("자료 업로드는 필수가 아니며, 녹음은 동의한 경우에만 진행합니다."),
  divider(),
  ...inputQuestion({
    title: "이름",
    placeholder: "홍길동",
    isRequired: true,
  }),
  ...inputQuestion({
    title: "연락처",
    placeholder: "전화번호 또는 이메일",
    isRequired: true,
  }),
  ...dropdownQuestion({
    title: "인터뷰 대상",
    isRequired: true,
    options: ["학부모", "학생", "교육기관 관계자", "기타"],
  }),
  ...inputQuestion({
    title: "자녀 또는 본인 학년",
    placeholder: "예: 중3, 예비고1, 고1",
    isRequired: true,
  }),
  ...checkboxQuestion({
    title: "가장 가까운 고민을 선택해 주세요",
    isRequired: true,
    options: [
      "아이 생기부·성적을 어떻게 읽어야 할지 모르겠어요",
      "예비고1 첫 90일 준비가 막막해요",
      "담임·진로 상담 전에 뭘 물어봐야 할지 모르겠어요",
      "상담 비용과 개인정보 제공이 걱정돼요",
      "특목·자사 원서·면접·자소서 준비가 불안해요",
    ],
  }),
  ...dropdownQuestion({
    title: "희망 인터뷰 방식",
    isRequired: true,
    options: ["전화", "Zoom", "대면", "카카오톡으로 조율", "아직 모르겠어요"],
  }),
  ...inputQuestion({
    title: "편한 시간대",
    placeholder: "예: 평일 저녁, 주말 오전",
    isRequired: true,
  }),
  ...textareaQuestion({
    title: "현재 고민을 한 문장으로 적어주세요",
    placeholder: "예: 예비고1인데 첫 학기 준비 방향이 막막합니다.",
  }),
  divider(),
  ...multipleChoiceQuestion({
    title: "녹음 동의 여부",
    isRequired: true,
    options: ["동의합니다", "동의하지 않습니다", "인터뷰 전에 다시 설명을 듣고 결정하고 싶습니다"],
  }),
  ...multipleChoiceQuestion({
    title: "자료 공유 가능 여부",
    isRequired: true,
    options: ["자료 없이 이야기하고 싶어요", "필요하면 일부 공유할 수 있어요", "아직 모르겠어요"],
  }),
  ...checkboxQuestion({
    title: "개인정보 수집 및 이용 동의",
    isRequired: true,
    options: [
      "인터뷰 일정 조율과 문제 정의 검증을 위해 이름, 연락처, 응답 내용을 수집·이용하는 데 동의합니다.",
    ],
  }),
  text(
    "인터뷰 내용은 Team 310의 문제 정의와 서비스 기획 검증에만 사용하며, 외부 공개가 필요한 경우 개인을 특정할 수 없도록 비식별화합니다.",
  ),
];

const payload = {
  name: title,
  status: "PUBLISHED",
  blocks,
  settings: {
    language: "ko",
    hasProgressBar: true,
    hasPartialSubmissions: true,
    pageAutoJump: false,
    saveForLater: true,
    styles: {
      theme: "CUSTOM",
      color: {
        background: "#fffdf9",
        text: "#1f2937",
        accent: "#f97316",
        buttonBackground: "#f97316",
        buttonText: "#ffffff",
      },
      css: [
        ".tally-submit-button { border-radius: 8px !important; font-weight: 800 !important; }",
        ".tally-block { letter-spacing: 0 !important; }",
        ".tally-input, .tally-textarea, .tally-select { border-radius: 8px !important; }",
      ].join("\n"),
      direction: "ltr",
    },
  },
};

const response = await fetch(existingFormId ? `${API_URL}/${existingFormId}` : API_URL, {
  method: existingFormId ? "PATCH" : "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
});

const body = await response.json().catch(() => ({}));

if (!response.ok) {
  console.error(`Tally form ${existingFormId ? "update" : "creation"} failed: ${response.status}`);
  console.error(JSON.stringify(body, null, 2));
  process.exit(1);
}

const publicUrl = `https://tally.so/r/${body.id}`;

console.log(
  JSON.stringify(
    {
      id: body.id,
      name: body.name,
      status: body.status,
      mode: existingFormId ? "updated" : "created",
      publicUrl,
    },
    null,
    2,
  ),
);
