import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, CircleDollarSign, ShieldCheck, TimerReset } from "lucide-react";
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
          중3·예비고1 학부모님 50분 인터뷰
        </motion.p>

        <motion.h1
          id="hero-title"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: 0.04, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span>엄마의 고민, Team</span>
          <span>310이 듣습니다.</span>
        </motion.h1>

        <motion.div
          className="hero-rotator"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}
          aria-live="polite"
        >
          <span>요즘 가장 막막한 건</span>
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
          <span>인가요?</span>
        </motion.div>

        <motion.p
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
        >
          AI·SW마에스트로 17기 선발 청년들이 중3 학부모님의 생기부,
          예비고1 첫 90일, 담임 상담 전 고민을 먼저 듣습니다.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: 0.16, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <ApplyLink className="button primary-button">
            내 고민으로 인터뷰 신청하기
            <ArrowRight size={20} aria-hidden="true" />
          </ApplyLink>
          <a className="button ghost-button" href="#pain">
            엄마들이 겪는 고민 보기
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
          <CircleDollarSign size={17} aria-hidden="true" />
          무료 상담
        </span>
      </div>
    </section>
  );
}
