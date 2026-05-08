import { ArrowRight } from "lucide-react";
import { painPoints } from "../data/landingContent";
import ApplyLink from "./ApplyLink";
import Reveal from "./Reveal";

export default function PainSegment() {
  return (
    <section className="section surface-section" id="pain" aria-labelledby="pain-title">
      <div className="container">
        <Reveal className="section-intro">
          <p className="eyebrow">중3 엄마의 고민</p>
          <h2 id="pain-title">혹시 이런 마음으로 검색하고 계셨나요?</h2>
        </Reveal>

        <div className="pain-cards">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal className="pain-card" key={point.id} delay={index * 0.04}>
                <div className="pain-card-top">
                  <span className="pain-num">0{index + 1}</span>
                  <div className="pain-icon">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                </div>
                {point.subtitle && <p className="pain-subtitle">{point.subtitle}</p>}
                <h3>{point.title}</h3>
                <blockquote>{point.quote}</blockquote>
                <p>{point.summary}</p>
                {point.details && (
                  <ul className="pain-wants">
                    {point.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}
                <ApplyLink className="text-link">
                  이 고민을 이야기하고 싶어요
                  <ArrowRight size={16} aria-hidden="true" />
                </ApplyLink>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
