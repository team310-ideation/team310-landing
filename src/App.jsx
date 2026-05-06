import { ArrowRight } from "lucide-react";
import ApplySection from "./components/ApplySection";
import FaqSection from "./components/FaqSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InterviewProcess from "./components/InterviewProcess";
import PainSegment from "./components/PainSegment";
import TeamSection from "./components/TeamSection";
import TrustSection from "./components/TrustSection";
import { contactEmail, footerLinks } from "./data/landingContent";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="intro-search-copy" aria-label="Team 310 소개">
          <div className="container">
            <p>
              Team 310은 AI·SW마에스트로 17기 프로젝트 팀으로, 중3·예비고1 학부모와
              학생의 입시·진로 고민을 듣는 30분 인터뷰를 진행합니다.
            </p>
          </div>
        </section>

        <PainSegment />
        <InterviewProcess />
        <TeamSection />
        <TrustSection />
        <ApplySection />
        <FaqSection />

        <section className="closing-section" aria-labelledby="closing-title">
          <div className="container closing-content">
            <p className="eyebrow">Team 310 interview</p>
            <h2 id="closing-title">당신의 고민이 제품의 방향이 됩니다</h2>
            <p>
              더 많은 정보가 아니라, 내 아이의 누적된 맥락을 읽고 지금 무엇을 우선해야
              하는지 아는 경험을 만들고 있습니다.
            </p>
            <a className="button primary-button" href="#apply">
              인터뷰 신청하기
              <ArrowRight size={20} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-layout">
          <div>
            <span className="brand footer-brand">
              <span className="brand-mark">310</span>
              <span>Team 310</span>
            </span>
            <p>학부모·학생 30분 인터뷰 모집</p>
          </div>
          <div>
            <h2>문의</h2>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </div>
          <div>
            <h2>관련 링크</h2>
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
