import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import sejongProfile from "../assets/images/team/optimized/sejong-profile.webp";
import junhyeokProfile from "../assets/images/team/optimized/junhyeok-profile.webp";
import seminProfile from "../assets/images/team/optimized/semin-profile.webp";
import "./home.css";

/* ── Hooks ── */

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add("in"); io.disconnect(); }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function useCountUp(target, duration = 1400, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return value;
}

function CountUp({ target, duration, suffix = "" }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const value = useCountUp(target, duration, active);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); io.disconnect(); } },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <span ref={ref}>{value}{suffix}</span>;
}

/* ── Ticker ── */

function Ticker() {
  const [stu, setStu] = useState(4);
  const [par, setPar] = useState(11);
  useEffect(() => {
    const id = setInterval(() => {
      setStu(s => s < 10 && Math.random() < 0.18 ? s + 1 : s);
      setPar(p => p < 30 && Math.random() < 0.18 ? p + 1 : p);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const items = [
    <span key="a"><em>● LIVE</em> 리서치 진행 중 — 학생 인터뷰 <em>{String(stu).padStart(2, "0")}</em>/10 완료</span>,
    <span key="b">학부모 인터뷰 <em>{String(par).padStart(2, "0")}</em>/30 완료</span>,
    <span key="c">D-<em>3</em> 인터뷰 모집 마감</span>,
    <span key="d">다음 약속 — <em>2026.05.10</em> 19:00 KST</span>,
  ];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}

/* ── Sections ── */

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="eyebrow"><span className="live" />Founded 2026 · Seoul · Currently in research</div>
        <h1>
          <span className="hero-team" aria-hidden="true">TEAM</span>
          <span className="word w2"><span className="num">310</span></span>
          <span className="hero-sub-mark" aria-hidden="true">삼일공</span>
        </h1>
        <p className="hero-sub">
          중3 가정의 진로·입시 페인포인트를 연구합니다<span className="typing-cursor" />
        </p>
        <div className="cta-row">
          <Link to="/research" className="cta">현재 진행 중인 리서치 보기 <span className="arr">→</span></Link>
          <a href="#contact" className="cta cta-ghost">함께하기</a>
        </div>
        <dl className="hero-meta">
          <div><dt>현재 단계</dt><dd><span className="accent">●</span> 사용자 리서치</dd></div>
          <div><dt>인터뷰 진행</dt><dd><CountUp target={15} suffix=" / 40명" /></dd></div>
          <div><dt>위치</dt><dd>서울</dd></div>
          <div><dt>설립</dt><dd>2026</dd></div>
        </dl>
      </div>
    </section>
  );
}

function OriginStory() {
  const ref = useReveal();
  return (
    <section className="block" id="origin">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <div className="section-label">
            <span className="idx">01</span>
            <span>우리의 시작</span>
            <span className="ln" />
          </div>
          <div className="origin">
            <div>
              <blockquote className="origin-quote">
                "우리 애 생기부, 이대로 괜찮은 건가요?"
                <span className="who">— 중3 자녀를 둔 한 학부모, 가을의 어느 저녁</span>
              </blockquote>
            </div>
            <div className="origin-body">
              <p>우리는 답을 갖고 있지 않았습니다.</p>
              <p>인터넷에는 정보가 넘쳤고, 학원은 성적을 책임졌고, 학교의 시선은 '다수'를 향해 있었지만, 우리 아이 한 명을 위한 답은 어디에도 없었습니다.</p>
              <p><strong>310</strong>은 그 질문에서 시작했습니다. 답을 만들기 전에, 먼저 질문을 정확히 이해하기로 했습니다.</p>
              <p><strong>지금 우리는 중3 가정의 이야기를 듣고 있습니다.</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Why310() {
  const ref = useReveal();
  return (
    <section className="why" id="why" ref={ref}>
      <div className="wrap">
        <div className="section-label">
          <span className="idx">02</span>
          <span>왜 310인가요?</span>
          <span className="ln" />
        </div>
        <p className="why-headline">우리가 스스로에게 건 약속은 하나입니다.</p>
        <h2 className="big-stat">
          <span className="num"><CountUp target={10} duration={1200} />년</span> 안에<br />
          <span className="num"><CountUp target={300} duration={1800} />명</span>의 일자리.
        </h2>
        <p className="why-sub">우리가 푸는 문제가 충분히 크다면, 그 약속은 자연스럽게 이뤄질 것이라 믿습니다. 그 시작은 한 가정의 진짜 고민을 듣는 일이라고 생각합니다.</p>
        <div className="why-figures">
          <div><div className="lbl">시간 약속</div><div className="v"><CountUp target={10} />년</div></div>
          <div><div className="lbl">일자리 목표</div><div className="v"><CountUp target={300} />명</div></div>
          <div><div className="lbl">지금 단계</div><div className="v">01</div></div>
          <div><div className="lbl">현재 인터뷰</div><div className="v"><CountUp target={40} />명</div></div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const headRef = useReveal();
  const gridRef = useReveal();
  const members = [
    {
      initials: "SJ", photo: sejongProfile, photoAlt: "박세종",
      name: "박세종", role: "Team Lead",
      bio: ["18개국 550명+ 청소년 국제캠프 기획·운영", "입시 컨설팅 · 진로 코칭"],
    },
    {
      initials: "JH", photo: junhyeokProfile, photoAlt: "박준혁",
      name: "박준혁", role: "Research · Engineering",
      bio: ["서울대학교 재학", "충청북도 정보올림피아드 1위", "APIO 국가대표"],
    },
    {
      initials: "SM", photo: seminProfile, photoAlt: "박세민",
      name: "박세민", role: "Product · Design",
      bio: ["목동 자사고 졸업", "한양대 창업동아리 KOPLE 앱 제작 및 운영 중"],
    },
  ];
  const mentors = [
    { name: "고세환", role: "보안·창업 자문", bio: "KIST 정보보안·DX·AX 전략 총괄. 창업 4회 경험. TIPS 전략 자문." },
    { name: "조재홍", role: "기술·제품 자문", bio: "삼성전자 AI플랫폼센터. 에듀테크 CTO 경험. 10만 다운로드 서비스." },
    { name: "홍순엽", role: "투자·사업화 자문", bio: "모비딕벤처스 벤처투자팀. 딥테크·ICT·SW 투자." },
  ];

  return (
    <section className="block" id="team">
      <div className="wrap">
        <div className="reveal" ref={headRef}>
          <div className="section-label">
            <span className="idx">03</span><span>Team</span><span className="ln" />
          </div>
          <h2 className="h2">세 명이서 <em>시작</em>했습니다.</h2>
        </div>
        <div className="team-grid reveal-stagger" ref={gridRef}>
          {members.map((m) => (
            <article className="member" key={m.name}>
              <div className="avatar">
                <img src={m.photo} alt={m.photoAlt} />
              </div>
              <h3 className="name">{m.name}</h3>
              <p className="role">{m.role}</p>
              <div className="bio">
                <ul>{m.bio.map(b => <li key={b}>{b}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mentor-strip">
          <div className="label">자문 네트워크 — 외부 관점으로 검증합니다</div>
          <div className="mentor-list">
            {mentors.map((m) => (
              <div className="mentor-item" key={m.name}>
                <div className="m-name">{m.name}</div>
                <div className="m-role">{m.role}</div>
                <div className="m-bio">{m.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResearchGateway() {
  const labelRef = useReveal();
  const cardRef = useReveal();
  return (
    <section className="block" id="research">
      <div className="wrap">
        <div className="reveal" ref={labelRef}>
          <div className="section-label">
            <span className="idx">04</span><span>지금 우리가 하고 있는 일</span><span className="ln" />
          </div>
        </div>
        <div className="research-card reveal" ref={cardRef}>
          <div>
            <h3>중3 학생과 학부모를<br />직접 만나고 있습니다.</h3>
            <p>7일간 학생 10명, 학부모 30명을 만나, 진로·입시 의사결정 과정에서 가장 자주 멈춰 서는 5가지 핵심 페인포인트를 검증합니다.</p>
            <Link to="/research" className="research-cta">리서치 페이지 <span className="arr">→</span></Link>
          </div>
          <div className="research-figures">
            <div className="figure"><div className="n"><span className="num"><CountUp target={10} /></span></div><div className="lbl">학생 인터뷰</div></div>
            <div className="figure"><div className="n"><span className="num"><CountUp target={30} /></span></div><div className="lbl">학부모 인터뷰</div></div>
            <div className="figure"><div className="n"><span className="num"><CountUp target={7} />일</span></div><div className="lbl">진행 기간</div></div>
            <div className="figure"><div className="n"><span className="num"><CountUp target={5} /></span></div><div className="lbl">검증 가설</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Videos() {
  const ref = useReveal();
  const videos = [
    { title: "[02화] — 멘토헌팅", embedUrl: "https://www.youtube-nocookie.com/embed/AB3xpRJejNE?rel=0" },
    { title: "[03화] — 뉴페이스", embedUrl: "https://www.youtube-nocookie.com/embed/pAjVOlvbz58?rel=0" },
  ];
  return (
    <section className="block" id="videos">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <div className="section-label">
            <span className="idx">05</span><span>팀 310 영상</span><span className="ln" />
          </div>
          <h2 className="h2">문제해결 과정을 <em>기록</em>합니다.</h2>
        </div>
        <div className="video-grid">
          {videos.map((v) => (
            <div key={v.embedUrl}>
              <div className="video-wrap">
                <iframe
                  src={v.embedUrl}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="video-label">{v.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const ref = useReveal();
  const cards = [
    {
      kind: "01 / Partnership",
      title: "기관 · 학교 협력 문의",
      desc: "청소년 멘토링 기관, 학교, 교육청과의 공동 프로그램 · 리서치 협력을 위한 채널입니다.",
      mail: "partnership@team310.kr",
    },
    {
      kind: "02 / General",
      title: "일반 문의",
      desc: "미디어 · 취재, 일반 질문, 그 외 모든 문의는 이쪽으로 보내주세요.",
      mail: "contact@team310.kr",
    },
  ];
  return (
    <section className="block" id="contact" style={{ borderBottom: "none" }}>
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <div className="section-label">
            <span className="idx">06</span><span>함께하기</span><span className="ln" />
          </div>
          <h2 className="h2">맞는 자리에 정확히 닿도록,<br /><em>채널을 나눠</em> 두었습니다.</h2>
        </div>
        <div className="contact-grid">
          {cards.map((c) => (
            <a href={`mailto:${c.mail}`} className="contact-card" key={c.mail}>
              <span className="kind">{c.kind}</span>
              <span className="title">{c.title}</span>
              <span className="desc">{c.desc}</span>
              <span className="mail">{c.mail} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <span className="tm">TEAM</span> <span className="num">310</span><span className="ko">삼일공</span>
            </div>
            <div className="footer-tag">중3 가정의 진로·입시 페인포인트를 연구합니다.</div>
          </div>
          <div className="footer-meta">
            <div><a href="mailto:contact@team310.kr">contact@team310.kr</a></div>
            <div><a href="mailto:partnership@team310.kr">partnership@team310.kr</a></div>
            <div>사업자 정보 — 등록 후 추가 예정</div>
            <div><a href="#">개인정보 처리방침</a></div>
          </div>
        </div>
        <div className="footer-rule" />
        <p className="footer-mark" aria-hidden="true">310</p>
        <div className="footer-fine">
          <span>© 2026 Team 310. All rights reserved.</span>
          <span>v0.1 — 회사 소개</span>
        </div>
      </div>
    </footer>
  );
}

/* ── Page ── */

export default function HomePage() {
  useEffect(() => {
    document.body.style.background = "oklch(0.16 0.012 250)";
    return () => { document.body.style.background = ""; };
  }, []);

  return (
    <div className="hp">
      <header className="topbar">
        <div className="wrap">
          <a href="#top" className="brandmark">
            <span className="dot" />
            <span className="tm">TEAM</span> <span className="num">310</span><span className="ko">삼일공</span>
          </a>
          <nav className="topnav">
            <a href="#origin">01 / Origin</a>
            <a href="#why">02 / Name</a>
            <a href="#team">03 / Team</a>
            <a href="#research">04 / Research</a>
            <a href="#contact">05 / Contact</a>
          </nav>
        </div>
      </header>
      <Ticker />
      <main>
        <Hero />
        <OriginStory />
        <Why310 />
        <TeamSection />
        <ResearchGateway />
        <Videos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
