import { mentorSignals, trustItems } from "../data/landingContent";
import Reveal from "./Reveal";

export default function TrustSection() {
  return (
    <section className="section surface-section" id="trust" aria-labelledby="trust-title">
      <div className="container">
        <Reveal className="section-intro">
          <p className="eyebrow">Trust stack</p>
          <h2 id="trust-title">공식성보다 구체적인 책임을 먼저 보여드립니다</h2>
          <p>
            학부모에게 필요한 것은 큰 숫자만이 아니라, 아이 정보를 어떻게 다루고 누가
            책임지는지에 대한 명확한 답입니다.
          </p>
        </Reveal>

        <div className="trust-grid">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal className="trust-card" key={item.title} delay={index * 0.04}>
                <Icon size={28} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mentor-band" delay={0.08}>
          <div>
            <p className="eyebrow">Mentor network</p>
            <h3>기술·사업·VC 관점에서 검증합니다</h3>
          </div>
          <div className="mentor-chip-row">
            {mentorSignals.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
