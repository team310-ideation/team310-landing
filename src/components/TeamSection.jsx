import { ExternalLink } from "lucide-react";
import {
  focusItems,
  noPromiseItems,
  teamMembers,
  workPrinciples,
} from "../data/landingContent";
import Reveal from "./Reveal";

export default function TeamSection() {
  return (
    <section className="section team-section" id="team" aria-labelledby="team-title">
      <div className="container">
        <Reveal className="section-intro">
          <p className="eyebrow">Why Team 310</p>
          <h2 id="team-title">정보보다 맥락을 먼저 보는 팀입니다</h2>
          <p>
            교육 현장, AI·Data, 사용자 검증 경험이 만나는 지점에서 학부모와 학생의 실제
            고민을 작게 검증하고 있습니다.
          </p>
        </Reveal>

        <div className="team-feature">
          <Reveal className="team-photo-panel">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=80"
              alt="노트북과 노트를 두고 교육 서비스 회의를 준비하는 장면"
              loading="lazy"
            />
          </Reveal>

          <Reveal className="principle-panel" delay={0.04}>
            <h3>우리는 이렇게 일합니다</h3>
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
          </Reveal>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <Reveal className="team-card" key={member.name} delay={index * 0.04}>
              <div className="avatar" aria-hidden="true">
                {member.name.slice(0, 1)}
              </div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p>{member.summary}</p>
              <ul>
                {member.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="promise-grid" delay={0.06}>
          <div className="promise-block promise-no">
            <h3>말하지 않을 것</h3>
            {noPromiseItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="promise-block promise-yes">
            <h3>집중할 것</h3>
            {focusItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Reveal>

        <Reveal className="official-link-row" delay={0.08}>
          <span>Team 310은 AI·SW마에스트로 17기 프로젝트 팀입니다.</span>
          <a href="https://www.swmaestro.org" target="_blank" rel="noreferrer">
            공식 사이트 확인
            <ExternalLink size={17} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
