import { ArrowRight } from "lucide-react";
import { interviewSteps, safetyNotes } from "../data/landingContent";
import Reveal from "./Reveal";

export default function InterviewProcess() {
  return (
    <section className="section" id="interview" aria-labelledby="interview-title">
      <div className="container">
        <Reveal className="section-intro">
          <p className="eyebrow">30-minute interview</p>
          <h2 id="interview-title">인터뷰는 부담 없이, 필요한 만큼만 진행합니다</h2>
          <p>
            학교 상담을 대체하거나 바로 서비스를 판매하려는 시간이 아닙니다. 실제 고민을 듣고,
            우리가 이해한 문제가 맞는지 확인하는 시간입니다.
          </p>
        </Reveal>

        <div className="process-grid">
          {interviewSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal className="process-step" key={step.title} delay={index * 0.04}>
                <span className="step-number">0{index + 1}</span>
                <Icon size={28} aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="assurance-row" delay={0.08}>
          {safetyNotes.map((note) => {
            const Icon = note.icon;
            return (
              <div className="assurance-item" key={note.label}>
                <Icon size={22} aria-hidden="true" />
                <span>{note.label}</span>
              </div>
            );
          })}
        </Reveal>

        <Reveal className="inline-cta" delay={0.12}>
          <div>
            <strong>불편한 질문은 답하지 않아도 됩니다.</strong>
            <span>인터뷰 내용은 비식별화 후 기획 검증에만 사용합니다.</span>
          </div>
          <a className="button secondary-button" href="#apply">
            신청 항목 보기
            <ArrowRight size={19} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
