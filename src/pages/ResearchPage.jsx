import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import sejongProfile from "../assets/images/team/optimized/sejong-profile.webp";
import junhyeokProfile from "../assets/images/team/optimized/junhyeok-profile.webp";
import seminProfile from "../assets/images/team/optimized/semin-profile.webp";
import "./research.css";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("in"); io.disconnect(); } },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ── Pain data ── */
const painPoints = [
  {
    q: "우리 아이 생기부, 이대로 괜찮은 걸까요?",
    parent: "정보는 많이 봤는데, 우리 아이한테 뭐가 맞는지 모르겠어요.",
    student: "선생님은 '잘 써와'라고만 하세요.",
  },
  {
    q: "믿고 맡길 수 있는 곳이 있을까요?",
    parent: "가격도 부담이고, 우리 아이 정보를 어디까지 줘야 할지 망설여져요.",
    student: "부모님이 알아보시는 곳이 정말 도움 되는 건지 잘 모르겠어요.",
  },
  {
    q: "특목·자사고 준비, 이미 늦은 건 아닐까요?",
    parent: "원서·면접·자소서 다 다른데, 뭐부터 손대야 할지 모르겠어요.",
    student: "시간은 없는데 해야 할 게 너무 많아요.",
  },
  {
    q: "고등학교 가기 전, 뭘 준비해 둬야 할까요?",
    parent: "학원은 과목을 가르치지만, 고1 첫 학기 전체 그림은 누가 그려주죠?",
    student: "어떤 고등학교를 가야 할지, 가서 뭘 해야 할지 막막해요.",
  },
  {
    q: "담임·진로 선생님께 뭘 여쭤봐야 할까요?",
    parent: "상담 시간은 짧은데, 정작 중요한 걸 못 묻고 나와요.",
    student: "상담 끝나고 나면 별로 남는 게 없어요.",
  },
];

const faqs = [
  { q: "인터뷰 내용은 어디에 사용되나요?", a: "TEAM 310 내부 연구 목적으로만 사용됩니다. 외부에 공개되지 않으며, 마케팅·영업 활동에 활용되지 않습니다." },
  { q: "녹음 파일은 어떻게 처리되나요?", a: "동의하신 경우에만 녹음하며, 분석 완료 후 3개월 내 폐기합니다. 녹음 동의 없이도 인터뷰 참여가 가능합니다." },
  { q: "미성년자도 신청할 수 있나요?", a: "네, 보호자 동의서 작성 후 신청 가능합니다. 신청 후 양식을 메일로 보내드리며, 인터뷰 당일까지 회신해 주시면 됩니다." },
  { q: "인터뷰는 누가 진행하나요?", a: "위 '팀 소개'에 있는 팀 310 멤버가 직접 진행합니다. 외주 리서처나 콜센터를 통해 연결되지 않습니다." },
  { q: "교통비는 따로 지원되나요?", a: "별도 교통비 지원은 없으며, 보상은 문화상품권 1만 원으로 통일됩니다. 인터뷰 종료 직후 모바일로 발송해 드립니다." },
  { q: "서울에 살지 않아도 신청할 수 있나요?", a: "네, 신청해 주시면 비대면(화상) 가능 여부를 개별 협의해 드립니다. 신청 메모란에 거주 지역과 선호 방식을 적어주세요." },
];

const slots = [
  { id: "s1", value: "0507-am", date: "5/7 (수)", time: "오전" },
  { id: "s2", value: "0507-pm", date: "5/7 (수)", time: "오후" },
  { id: "s3", value: "0508-am", date: "5/8 (목)", time: "오전" },
  { id: "s4", value: "0508-pm", date: "5/8 (목)", time: "오후" },
  { id: "s5", value: "0509-am", date: "5/9 (금)", time: "오전" },
  { id: "s6", value: "0509-pm", date: "5/9 (금)", time: "오후" },
  { id: "s7", value: "0510-am", date: "5/10 (토)", time: "오전" },
  { id: "s8", value: "0510-pm", date: "5/10 (토)", time: "오후" },
  { id: "s9", value: "0511-am", date: "5/11 (일)", time: "오전" },
  { id: "s10", value: "0511-pm", date: "5/11 (일)", time: "오후" },
  { id: "s11", value: "0512-am", date: "5/12 (월)", time: "오전" },
  { id: "s12", value: "0512-pm", date: "5/12 (월)", time: "오후" },
  { id: "s13", value: "0513-am", date: "5/13 (화)", time: "오전" },
  { id: "s14", value: "0513-pm", date: "5/13 (화)", time: "오후" },
];

/* ── Sections ── */

function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="pill"><span className="live" />중3 가정 인터뷰 모집 중 · 5월 13일까지</div>
        <h1>중3 학부모님,<br />요즘 어떤 점이<br /><em>가장 막막</em>하세요?</h1>
        <p className="hero-sub">TEAM 310이 중3 가정의 진짜 고민을 듣고 있습니다. <b>30분 인터뷰</b>에 참여해 주시면, <b>문화상품권 1만 원</b>을 드립니다.</p>
        <div className="hero-cta-row">
          <a href="#apply" className="btn-primary">인터뷰 신청하기 <span className="arr">→</span></a>
          <a href="#info" className="btn-ghost">자세히 보기</a>
        </div>
        <dl className="hero-meta">
          <div><dt>장소</dt><dd>공덕역 포스트타워</dd></div>
          <div><dt>시간</dt><dd>평일 · 주말 협의</dd></div>
          <div><dt>방식</dt><dd>학생 · 학부모 동반 가능</dd></div>
        </dl>
      </div>
    </section>
  );
}

function About() {
  const ref = useReveal();
  return (
    <section className="block">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <div className="section-label"><span className="idx">01</span><span>우리는 누구인가요</span><span className="ln" /></div>
          <div className="about-card">
            <span className="quote-mark">"</span>
            <p>TEAM 310은 중3 가정의 진로·입시 고민을 연구하는 팀입니다.</p>
            <p>우리는 아직 답을 만들지 않았습니다. 답을 만들기 전에, 먼저 질문을 정확히 이해하고 싶습니다.</p>
            <p>이번 인터뷰는 그 첫걸음입니다. 솔루션을 권유하지 않습니다. 답을 강요하지 않습니다.<br />다만, 가정의 이야기를 듣습니다.</p>
            <Link to="/" className="about-link">TEAM 310 더 알아보기 →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PainPoints() {
  const ref = useReveal();
  return (
    <section className="block" id="pains">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <div className="section-label"><span className="idx">02</span><span>우리가 듣고 싶은 다섯 가지 질문</span><span className="ln" /></div>
          <h2 className="h2">이 중에 <em>한 가지라도</em> 마음에 걸리신다면,<br />그 이야기를 들려주세요.</h2>
          <p className="lede">5가지 질문은 우리가 지금까지 만난 가정에서 가장 자주 들었던 고민입니다. 모든 것을 다 답해주실 필요는 없습니다. 가장 와닿는 것 하나만으로 충분합니다.</p>
        </div>
        <div className="pain-list">
          {painPoints.map((p, i) => (
            <PainCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PainCard({ q, parent, student }) {
  const ref = useReveal();
  return (
    <article className="pain-card reveal" ref={ref}>
      <div className="num-tag"><span /></div>
      <h3>{q}</h3>
      <div className="pain-voices">
        <div className="voice"><span className="who">학부모</span><span className="quote">"{parent}"</span></div>
        <div className="voice"><span className="who">학생</span><span className="quote">"{student}"</span></div>
      </div>
      <a href="#apply" className="pain-cta">이 고민이 가장 크다면, 인터뷰에서 더 자세히 들려주세요 →</a>
    </article>
  );
}

function InterviewInfo() {
  const ref = useReveal();
  return (
    <section className="block" id="info">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <div className="section-label"><span className="idx">03</span><span>인터뷰 안내</span><span className="ln" /></div>
          <h2 className="h2">짧고 부담 없이, <em>30분</em>이면 충분합니다.</h2>
          <dl className="info-grid">
            <div><dt>누가</dt><dd>중3 학생 / 중3 학부모<br /><span className="em">동반 환영</span></dd></div>
            <div><dt>언제</dt><dd>평일 · 주말<br />오전 · 오후 협의</dd></div>
            <div><dt>어디서</dt><dd>서울 마포구 공덕역<br />포스트타워 7층</dd></div>
            <div><dt>얼마나</dt><dd><span className="em">30분</span> 내외</dd></div>
            <div><dt>보상</dt><dd>문화상품권 <span className="em">1만 원</span></dd></div>
            <div><dt>녹음</dt><dd>동의하신 경우에만<br />내부 분석 후 폐기</dd></div>
          </dl>
          <div className="info-note">거리상 어려우신 경우 비대면(화상)으로도 진행 가능합니다. 신청 시 알려주세요.</div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const ref = useReveal();
  const members = [
    { photo: sejongProfile, alt: "박세종", name: "박세종", role: "팀 리드", bio: "18개국 550명+ 청소년 국제캠프 기획·운영 · 입시 컨설팅 및 진로 코칭" },
    { photo: junhyeokProfile, alt: "박준혁", name: "박준혁", role: "연구 · 기술", bio: "서울대학교 재학 · 충북 정보올림피아드 1위 · APIO 국가대표" },
    { photo: seminProfile, alt: "박세민", name: "박세민", role: "프로덕트 · 기획", bio: "목동 자사고 졸업 · 한양대 창업동아리 KOPLE 앱 제작 및 운영 중" },
  ];
  return (
    <section className="block">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <div className="section-label"><span className="idx">04</span><span>인터뷰는 누가 진행하나요</span><span className="ln" /></div>
          <h2 className="h2">팀 멤버가 직접 만나뵙습니다.</h2>
        </div>
        <div className="team-grid">
          {members.map((m) => (
            <article className="member" key={m.name}>
              <div className="avatar"><img src={m.photo} alt={m.alt} /></div>
              <h3 className="name">{m.name}</h3>
              <p className="role">{m.role}</p>
              <div className="bio">{m.bio}</div>
            </article>
          ))}
        </div>
        <p style={{ marginTop: "32px" }}>
          <Link to="/" style={{ fontFamily: "var(--mono)", fontSize: "13px", letterSpacing: "0.04em" }}>TEAM 310 회사 소개 보기 →</Link>
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const ref = useReveal();
  return (
    <section className="block" id="faq">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <div className="section-label"><span className="idx">05</span><span>자주 묻는 질문</span><span className="ln" /></div>
          <h2 className="h2">신청 전, <em>먼저 확인</em>해 주세요.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((f) => (
            <details className="faq" key={f.q}>
              <summary>{f.q}<span className="marker">+</span></summary>
              <div className="answer">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApplyForm() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [selectedSlots, setSelectedSlots] = useState([]);

  function toggleSlot(value) {
    setSelectedSlots(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!e.target.checkValidity()) { e.target.reportValidity(); return; }
    if (selectedSlots.length === 0) { alert("인터뷰 선호 시간대를 1개 이상 선택해 주세요."); return; }
    setSubmitted(true);
    window.scrollTo({ top: document.getElementById("apply").offsetTop - 120, behavior: "smooth" });
  }

  return (
    <section className="block" id="apply" style={{ borderBottom: "none" }}>
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <div className="section-label"><span className="idx">06</span><span>신청하기</span><span className="ln" /></div>
          <h2 className="h2">인터뷰 신청</h2>
          <p className="lede">신청 후 <b style={{ color: "var(--ink)" }}>12시간 이내</b>에 연락드려, 시간과 장소를 안내해 드립니다.</p>
        </div>
        <div className="form-wrap">
          {submitted ? (
            <div className="form-success" role="status">
              <h4>신청이 접수되었습니다.</h4>
              <p>12시간 이내에 입력해 주신 연락처로 연락드리겠습니다. 감사합니다.</p>
            </div>
          ) : (
            <form className="form-grid" onSubmit={handleSubmit} noValidate>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="name">이름 <span className="req">필수</span></label>
                  <input id="name" name="name" type="text" required placeholder="홍길동" autoComplete="name" />
                </div>
                <div className="field">
                  <label htmlFor="phone">연락처 <span className="req">필수</span></label>
                  <input id="phone" name="phone" type="tel" required placeholder="010-1234-5678" autoComplete="tel" inputMode="tel" />
                </div>
              </div>

              <div className="field">
                <label>방문자 <span className="req">필수</span></label>
                <div className="chip-row" role="radiogroup">
                  {[["v1","student","학생 본인"],["v2","parent","학부모"],["v3","both","학생 + 학부모 동반"]].map(([id,val,label]) => (
                    <span key={id}><input type="radio" id={id} name="visitor" value={val} required /><label htmlFor={id}>{label}</label></span>
                  ))}
                </div>
              </div>

              <div className="field">
                <label>학년 <span className="req">필수</span></label>
                <div className="chip-row" role="radiogroup">
                  {[["g1","1","중1"],["g2","2","중2"],["g3","3","중3"]].map(([id,val,label]) => (
                    <span key={id}><input type="radio" id={id} name="grade" value={val} required /><label htmlFor={id}>{label}</label></span>
                  ))}
                </div>
              </div>

              <div className="field">
                <label>인터뷰 선호 시간대 <span className="req">필수 · 복수 선택 가능</span></label>
                <div className="slot-grid">
                  {slots.map(({ id, value, date, time }) => (
                    <span key={id}>
                      <input
                        type="checkbox" id={id} name="slot" value={value}
                        checked={selectedSlots.includes(value)}
                        onChange={() => toggleSlot(value)}
                      />
                      <label htmlFor={id}><span className="date">{date}</span>{time}</label>
                    </span>
                  ))}
                </div>
              </div>

              <div className="field">
                <label htmlFor="memo">추가 메모 <span className="opt">선택</span></label>
                <textarea id="memo" name="memo" placeholder="가장 와닿은 질문, 비대면 희망 여부, 거주 지역 등 자유롭게 적어주세요." />
              </div>

              <div className="check-list">
                <label className="check">
                  <input type="checkbox" name="agree-privacy" required />
                  <span className="text"><b>개인정보 수집·이용에 동의합니다</b> <span className="req">(필수)</span><br /><span style={{ fontSize: "13px" }}>수집 항목: 이름, 연락처, 학년 / 보유 기간: 인터뷰 종료 후 3개월 / 이용 목적: 인터뷰 일정 안내 및 내부 연구</span></span>
                </label>
                <label className="check">
                  <input type="checkbox" name="agree-minor" />
                  <span className="text">만 18세 미만은 <b>보호자 동의서</b> 별도 제출이 필요합니다 — 이해했습니다 <span className="req">(학생 신청 시 필수)</span></span>
                </label>
              </div>

              <div className="submit-wrap">
                <button className="submit" type="submit">인터뷰 신청 보내기 →</button>
                <span className="submit-help">신청 후 12시간 이내에 연락드립니다.</span>
              </div>
            </form>
          )}
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
            <div className="footer-brand"><span className="tm">TEAM</span> <span className="num">310</span><span className="ko">삼일공</span></div>
            <div className="footer-tag">중3 가정의 진로·입시 페인포인트를 연구합니다.</div>
          </div>
          <div className="footer-meta">
            <div><a href="mailto:contact@team310.kr">contact@team310.kr</a></div>
            <div><Link to="/">TEAM 310 회사 소개</Link></div>
            <div><a href="#">개인정보 처리방침</a></div>
            <div><a href="#">보호자 동의서 다운로드</a></div>
          </div>
        </div>
        <div className="footer-rule" />
        <div className="footer-fine">
          <span>© 2026 TEAM 310. All rights reserved.</span>
          <span>research v0.1</span>
        </div>
      </div>
    </footer>
  );
}

/* ── Page ── */

export default function ResearchPage() {
  useEffect(() => {
    document.body.style.background = "oklch(0.16 0.025 265)";
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
    return () => {
      document.body.style.background = "";
      document.body.style.overflowX = "";
      document.documentElement.style.overflowX = "";
    };
  }, []);

  return (
    <div className="rp">
      <header className="topbar">
        <div className="wrap">
          <Link to="/" className="brandmark">
            <span className="tm">TEAM</span> <span className="num">310</span><span className="ko">삼일공</span>
          </Link>
          <a href="#apply" className="topbar-cta">신청하기</a>
        </div>
      </header>
      <main>
        <Hero />
        <About />
        <PainPoints />
        <InterviewInfo />
        <TeamSection />
        <FAQ />
        <ApplyForm />
      </main>
      <Footer />
    </div>
  );
}
