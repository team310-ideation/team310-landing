import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Gift, ShieldCheck, TimerReset } from "lucide-react";
import { useEffect, useState } from "react";
import { heroTopics, heroTrustItems, quickFacts } from "../data/landingContent";
import ApplyLink from "./ApplyLink";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [topicIndex, setTopicIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const timer = window.setInterval(() => {
      setTopicIndex((index) => (index + 1) % heroTopics.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <motion.p
          className="eyebrow hero-eyebrow"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
        >
          치열한 AI·SW마에스트로 17기 선발 과정 통과
        </motion.p>

        <motion.h1
          id="hero-title"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: 0.04, ease: [0.2, 0.8, 0.2, 1] }}
        >
          인공지능의 힘으로 대한민국 사교육 문제를 풉니다.
        </motion.h1>

        <motion.div
          className="hero-rotator"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}
          aria-live="polite"
        >
          <span>아이의</span>
          <AnimatePresence mode="wait">
            <motion.strong
              key={heroTopics[topicIndex]}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            >
              {heroTopics[topicIndex]}
            </motion.strong>
          </AnimatePresence>
          <span>막막하신가요?</span>
        </motion.div>

        <motion.p
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
        >
          Team 310은 인공지능의 힘으로 교육의 정보격차를 줄이려는 팀입니다.
          <br />
          생기부·예비고1·담임상담 준비가 막막한 학부모님과 학생의 이야기를 듣고
          <br />
          내 아이 기록 기준의 다음 선택을 돕는 AI 서비스를 검증하고 있습니다.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: 0.16, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <ApplyLink className="button primary-button">
            50분 인터뷰 신청하기
            <ArrowRight size={20} aria-hidden="true" />
          </ApplyLink>
          <a className="button ghost-button" href="#pain">
            어떤 이야기를 듣나요?
            <ArrowDown size={20} aria-hidden="true" />
          </a>
        </motion.div>

        <motion.ul
          className="hero-trust-list"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {heroTrustItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <Icon size={18} aria-hidden="true" />
                {item.label}
              </li>
            );
          })}
        </motion.ul>
      </div>

      <div className="container hero-facts" aria-label="인터뷰 핵심 정보">
        {quickFacts.map((fact, index) => (
          <motion.div
            className="fact-item"
            key={fact.label}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: 0.18 + index * 0.04 }}
          >
            <strong>{fact.value}</strong>
            <span>{fact.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="mobile-assurance" aria-label="인터뷰 안심 정보">
        <span>
          <TimerReset size={17} aria-hidden="true" />
          50분
        </span>
        <span>
          <ShieldCheck size={17} aria-hidden="true" />
          자료 선택
        </span>
        <span>
          <Gift size={17} aria-hidden="true" />
          문화상품권
        </span>
      </div>
    </section>
  );
}
