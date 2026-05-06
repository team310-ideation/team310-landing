import { ArrowRight } from "lucide-react";
import { interviewSteps, safetyNotes } from "../data/landingContent";
import ApplyLink from "./ApplyLink";
import Reveal from "./Reveal";

export default function InterviewProcess() {
  return (
    <section className="section" id="interview" aria-labelledby="interview-title">
      <div className="container">
        <Reveal className="section-intro">
          <p className="eyebrow">50-minute interview</p>
          <h2 id="interview-title">인터뷰는 부담 없이, 필요한 만큼만 진행합니다</h2>
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
          <ApplyLink className="button secondary-button">
            신청 카드 보기
            <ArrowRight size={19} aria-hidden="true" />
          </ApplyLink>
        </Reveal>
      </div>
    </section>
  );
}
