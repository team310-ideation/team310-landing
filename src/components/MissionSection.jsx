import { ExternalLink } from "lucide-react";
import { asmBrandLogo, asmProofItems, socialMissionItems } from "../data/landingContent";
import Reveal from "./Reveal";

export default function MissionSection() {
  return (
    <section className="section mission-section" id="mission" aria-labelledby="mission-title">
      <div className="container">
        <Reveal className="section-intro">
          <p className="eyebrow">AI for social problem</p>
          <h2 id="mission-title">AI로 입시문제를 합리적으로 풀어냅니다.</h2>
        </Reveal>

        <div className="mission-grid">
          {socialMissionItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal className="mission-card" key={item.title} delay={index * 0.04}>
                <Icon size={28} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="asm-proof-band" delay={0.08}>
          <div className="asm-proof-logo-card">
            <img src={asmBrandLogo.src} alt={asmBrandLogo.alt} loading="lazy" />
          </div>
          <div className="asm-proof-copy">
            <p className="eyebrow">AI·SW Maestro 17</p>
            <h3>선발된 AI·SW 인재 팀으로 검증을 시작합니다</h3>
          </div>
          <div className="asm-proof-list">
            {asmProofItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Reveal>

        <Reveal className="official-link-row" delay={0.1}>
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
