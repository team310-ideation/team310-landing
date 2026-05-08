import { ArrowRight } from "lucide-react";
import { interviewSteps } from "../data/landingContent";
import ApplyLink from "./ApplyLink";
import Reveal from "./Reveal";

export default function InterviewProcess() {
  return (
    <section className="section" id="interview" aria-labelledby="interview-title">
      <div className="container">
        <Reveal className="section-intro">
          <p className="eyebrow">50-minute interview</p>
          <h2 id="interview-title">상담이 아니라, 엄마의 상황을 정확히 듣는 시간입니다</h2>
          <p>
            아이 자료가 없어도 괜찮습니다. 지금 가장 마음에 걸리는 장면부터
            이야기해 주세요.
          </p>
        </Reveal>

        <div className="process-grid">
          {interviewSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal className="process-step" key={step.title} delay={index * 0.04}>
                <div className="step-icon">
                  <Icon size={32} aria-hidden="true" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="inline-cta" delay={0.08}>
          <div>
            <strong>불편한 질문은 답하지 않아도 됩니다.</strong>
            <span>자료 공유와 녹음은 동의한 경우에만 진행하고, 내용은 기획 검증에만 사용합니다.</span>
          </div>
          <ApplyLink className="button secondary-button">
            신청 방법 보기
            <ArrowRight size={19} aria-hidden="true" />
          </ApplyLink>
        </Reveal>
      </div>
    </section>
  );
}
