import { teamImages, teamMembers, workPrinciples } from "../data/landingContent";
import Reveal from "./Reveal";

export default function TeamSection() {
  return (
    <section className="section team-section" id="team" aria-labelledby="team-title">
      <div className="container">
        <Reveal className="section-intro">
          <p className="eyebrow">함께 듣는 팀</p>
          <h2 id="team-title">선발 이력보다 먼저, 엄마의 말을 놓치지 않겠습니다</h2>
        </Reveal>

        <div className="team-feature">
          <Reveal className="team-photo-panel">
            <img
              src={teamImages.groupPortrait}
              alt="야외에서 함께 포즈를 취한 Team 310 세 명"
              loading="lazy"
            />
          </Reveal>

          <Reveal className="principle-panel" delay={0.04}>
            <h3>우리는 이렇게 듣습니다</h3>
            <div className="principle-list">
              {workPrinciples.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="principle-item" key={item.title}>
                    <Icon size={22} aria-hidden="true" />
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <img
              className="team-candid"
              src={teamImages.seminSejongTogether}
              alt="촬영 장비와 노트를 들고 함께 준비 중인 Team 310 팀원"
              loading="lazy"
            />
          </Reveal>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <Reveal className="team-card" key={member.name} delay={index * 0.04}>
              <img className="member-photo" src={member.photo} alt={member.photoAlt} loading="lazy" />
              <div className="member-name-row">
                <h3>{member.name}</h3>
                <div className="member-school" aria-label={member.school.name}>
                  <img src={member.school.logo} alt={member.school.alt} loading="lazy" />
                </div>
              </div>
              <p className="member-education">{member.education}</p>
              <p className="member-role">{member.role}</p>
              {member.summary ? <p>{member.summary}</p> : null}
              <ul>
                {member.details.map((detail) => (
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
