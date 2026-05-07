import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { painPoints } from "../data/landingContent";
import ApplyLink from "./ApplyLink";
import Reveal from "./Reveal";

export default function PainSegment() {
  const [selected, setSelected] = useState(painPoints[0].id);
  const reduceMotion = useReducedMotion();
  const active = painPoints.find((point) => point.id === selected) || painPoints[0];
  const ActiveIcon = active.icon;

  return (
    <section className="section surface-section" id="pain" aria-labelledby="pain-title">
      <div className="container">
        <Reveal className="section-intro">
          <p className="eyebrow">중3 엄마의 고민</p>
          <h2 id="pain-title">혹시 이런 마음으로 검색하고 계셨나요?</h2>
        </Reveal>

        <Reveal className="pain-layout" delay={0.04}>
          <div className="segmented-control" role="tablist" aria-label="고민 선택">
            {painPoints.map((point) => {
              const Icon = point.icon;
              const isActive = point.id === selected;
              return (
                <button
                  key={point.id}
                  className={`segment-button ${isActive ? "is-active" : ""}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="pain-panel"
                  onClick={() => setSelected(point.id)}
                >
                  <Icon size={19} aria-hidden="true" />
                  <span>{point.tab}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              className="pain-panel"
              id="pain-panel"
              key={active.id}
              role="tabpanel"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="panel-icon">
                <ActiveIcon size={28} aria-hidden="true" />
              </div>
              <div>
                <h3>{active.title}</h3>
                <blockquote>{active.quote}</blockquote>
                <p>{active.summary}</p>
                <h4>50분 동안 함께 정리할 이야기</h4>
                <ul className="check-list">
                  {active.wants.map((want) => (
                    <li key={want}>{want}</li>
                  ))}
                </ul>
                <ApplyLink className="text-link">
                  이 고민을 이야기하고 싶어요
                  <ArrowRight size={18} aria-hidden="true" />
                </ApplyLink>
              </div>
            </motion.article>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
