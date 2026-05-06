import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "../data/landingContent";
import Reveal from "./Reveal";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-title">
      <div className="container narrow-container">
        <Reveal className="section-intro">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title">걱정되는 부분을 먼저 답합니다</h2>
        </Reveal>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal className="faq-item" key={faq.question} delay={index * 0.02}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={isOpen ? "is-open" : ""} size={21} aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      className="faq-panel"
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={reduceMotion ? undefined : { height: "auto", opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
