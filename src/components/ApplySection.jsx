import { ArrowRight, ExternalLink, Send } from "lucide-react";
import { useMemo, useState } from "react";
import {
  applyFields,
  applySummaryIcons,
  contactEmail,
  painPoints,
  tallyPublicUrl,
} from "../data/landingContent";
import ApplyLink from "./ApplyLink";
import Reveal from "./Reveal";

const defaultFormState = {
  name: "",
  contact: "",
  target: "학부모",
  grade: "",
  concern: "아이 기록",
  time: "",
  note: "",
};

function buildMailto(formState) {
  const subject = encodeURIComponent("[Team 310] 50분 인터뷰 신청");
  const body = encodeURIComponent(
    [
      "Team 310 인터뷰 신청",
      "",
      `이름: ${formState.name || "(작성 전)"}`,
      `연락처: ${formState.contact || "(작성 전)"}`,
      `인터뷰 대상: ${formState.target}`,
      `자녀/본인 학년: ${formState.grade || "(작성 전)"}`,
      `가장 가까운 고민: ${formState.concern}`,
      `편한 시간대: ${formState.time || "(작성 전)"}`,
      "",
      "현재 고민:",
      formState.note || "(작성 전)",
    ].join("\n"),
  );

  return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
}

function FallbackApplyForm() {
  const [formState, setFormState] = useState(defaultFormState);
  const mailtoHref = useMemo(() => buildMailto(formState), [formState]);

  const updateField = (field) => (event) => {
    setFormState((current) => ({ ...current, [field]: event.target.value }));
  };

  return (
    <form
      className="fallback-form"
      onSubmit={(event) => {
        event.preventDefault();
        window.location.href = mailtoHref;
      }}
    >
      <div className="field-grid">
        <label>
          이름
          <input value={formState.name} onChange={updateField("name")} placeholder="홍길동" />
        </label>
        <label>
          연락처
          <input
            value={formState.contact}
            onChange={updateField("contact")}
            placeholder="전화번호 또는 이메일"
          />
        </label>
        <label>
          인터뷰 대상
          <select value={formState.target} onChange={updateField("target")}>
            <option>학부모</option>
            <option>학생</option>
            <option>교육기관 관계자</option>
          </select>
        </label>
        <label>
          자녀 또는 본인 학년
          <input value={formState.grade} onChange={updateField("grade")} placeholder="예: 중3" />
        </label>
        <label>
          가장 가까운 고민
          <select value={formState.concern} onChange={updateField("concern")}>
            {painPoints.map((point) => (
              <option key={point.id}>{point.tab}</option>
            ))}
          </select>
        </label>
        <label>
          편한 시간대
          <input
            value={formState.time}
            onChange={updateField("time")}
            placeholder="예: 평일 저녁, 주말 오전"
          />
        </label>
      </div>
      <label>
        현재 고민 한 문장
        <textarea
          value={formState.note}
          onChange={updateField("note")}
          placeholder="예: 예비고1인데 첫 학기 준비 방향이 막막합니다."
          rows="4"
        />
      </label>
      <button className="button primary-button" type="submit">
        이메일로 인터뷰 신청하기
        <Send size={19} aria-hidden="true" />
      </button>
    </form>
  );
}

function TallyApplyCard() {
  return (
    <div className="tally-link-card">
      <div className="tally-link-icon">
        <ExternalLink size={26} aria-hidden="true" />
      </div>
      <h3>Tally 신청 폼으로 이동합니다</h3>
      <p>
        새 창에서 신청서를 작성하면 Team 310이 확인 후 가능한 시간대를 조율해
        연락드립니다.
      </p>
      <a className="button primary-button" href={tallyPublicUrl} target="_blank" rel="noreferrer">
        Tally에서 신청하기
        <ExternalLink size={19} aria-hidden="true" />
      </a>
      <div className="tally-link-meta">
        <span>자료 업로드 필수 아님</span>
        <span>녹음은 동의 시에만</span>
        <span>응답 후 일정 조율</span>
      </div>
    </div>
  );
}

export default function ApplySection() {
  const hasTally = Boolean(tallyPublicUrl);

  return (
    <section className="section apply-section" id="apply" aria-labelledby="apply-title">
      <div className="container apply-layout">
        <Reveal className="apply-copy">
          <p className="eyebrow">Apply</p>
          <h2 id="apply-title">50분 인터뷰를 신청해 주세요</h2>

          <div className="apply-summary">
            {applyFields.map((field, index) => {
              const Icon = applySummaryIcons[index % applySummaryIcons.length];
              return (
                <div key={field}>
                  <Icon size={20} aria-hidden="true" />
                  <span>{field}</span>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="apply-panel" delay={0.05}>
          {hasTally ? <TallyApplyCard /> : <FallbackApplyForm />}
        </Reveal>
      </div>

      <ApplyLink className="sticky-mobile-cta">
        50분 인터뷰 신청
        <ArrowRight size={18} aria-hidden="true" />
      </ApplyLink>
    </section>
  );
}
