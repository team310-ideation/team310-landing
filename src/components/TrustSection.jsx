import { mentorProfiles, mentorSignals, trustItems } from "../data/landingContent";
import Reveal from "./Reveal";

export default function TrustSection() {
  return (
    <section className="section surface-section" id="trust" aria-labelledby="trust-title">
      <div className="container">
        <Reveal className="section-intro">
          <p className="eyebrow">안심 정보</p>
          <h2 id="trust-title">믿고 이야기할 수 있도록 약속을 먼저 보여드립니다</h2>
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
            <h3>우리의 판단도 밖에서 다시 점검받습니다</h3>
          </div>
          <div className="mentor-chip-row">
            {mentorSignals.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Reveal>

        <div className="mentor-grid">
          {mentorProfiles.map((mentor, index) => (
            <Reveal
              className={`mentor-card${mentor.pending ? " mentor-card-pending" : ""}`}
              key={mentor.name}
              delay={0.1 + index * 0.04}
            >
              <div className="mentor-card-header">
                <span className="mentor-avatar" aria-hidden="true">
                  {mentor.name.slice(0, 1)}
                </span>
                <span className={`mentor-status${mentor.pending ? " pending" : ""}`}>
                  {mentor.status}
                </span>
              </div>
              <h3>{mentor.name}</h3>
              <p className="mentor-role">{mentor.role}</p>
              <p className="mentor-context">{mentor.context}</p>
              {mentor.summary ? <p>{mentor.summary}</p> : null}
              <div className="mentor-highlight-row">
                {mentor.highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>
              <ul>
                {mentor.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
