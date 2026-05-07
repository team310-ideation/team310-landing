import { mentorProfiles, mentorSignals, trustItems } from "../data/landingContent";
import Reveal from "./Reveal";

export default function TrustSection() {
  return (
    <section className="section surface-section mentor-section" id="trust" aria-labelledby="mentor-title">
      <div className="container">
        <Reveal className="section-intro">
          <p className="eyebrow">자문 멘토</p>
          <h2 id="mentor-title">팀 310의 판단을 함께 점검하는 멘토진입니다</h2>
          <p>
            중3 학부모님의 고민을 듣는 과정이 기술 과시로 흐르지 않도록,
            서비스·보안·사업화 관점의 멘토들이 문제정의와 검증 방향을 함께 봅니다.
          </p>
        </Reveal>

        <Reveal className="mentor-band" delay={0.08}>
          <div>
            <p className="eyebrow">Mentor network</p>
            <h3>기술보다 먼저, 문제를 제대로 듣는지 확인합니다</h3>
          </div>
          <div className="mentor-chip-row">
            {mentorSignals.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Reveal>

        <div className="mentor-list">
          {mentorProfiles.map((mentor, index) => (
            <Reveal
              className={`mentor-card mentor-profile-card${mentor.pending ? " mentor-card-pending" : ""}`}
              key={mentor.name}
              delay={0.1 + index * 0.04}
            >
              <div className="mentor-photo-frame">
                <img src={mentor.photo} alt={mentor.photoAlt} loading="lazy" />
              </div>
              <div className="mentor-card-body">
                <div className="mentor-card-header">
                  <div>
                    <span className={`mentor-status${mentor.pending ? " pending" : ""}`}>
                      {mentor.status}
                    </span>
                    <h3>{mentor.name}</h3>
                  </div>
                  <p className="mentor-role">{mentor.role}</p>
                </div>
                <p className="mentor-context">{mentor.context}</p>
                {mentor.summary ? <p className="mentor-summary">{mentor.summary}</p> : null}
                <div className="mentor-highlight-row">
                  {mentor.highlights.map((highlight) => (
                    <span key={highlight}>{highlight}</span>
                  ))}
                </div>
                <div className="mentor-proof-grid">
                  <div>
                    <h4>경력</h4>
                    <ul>
                      {mentor.career.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>대외활동·자문</h4>
                    <ul>
                      {mentor.activities.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mentor-principle-grid">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal className="mentor-principle-item" key={item.title} delay={0.18 + index * 0.04}>
                <Icon size={22} aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
