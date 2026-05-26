'use client';

import { motion } from 'framer-motion';
import { core } from '@/lib/content';
import { SectionReveal } from './SectionReveal';

export function CoreSection() {
  return (
    <section className="section core-section" id="core">
      <div className="container core-grid">
        <SectionReveal className="core-copy">
          <div className="eyebrow">{core.eyebrow}</div>
          <h2 className="section-title">{core.title}</h2>
          <p className="lede">{core.body}</p>
          <div className="core-bullets">
            {core.bullets.map((bullet) => (
              <div className="core-bullet panel" key={bullet}>
                <span />
                <p>{bullet}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="governed-core-panel panel" delay={0.12}>
          <div className="core-ui-topline">
            <span>Inference-time governance</span>
            <strong>Active</strong>
          </div>
          <div className="core-ui-orbit" aria-hidden="true">
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <motion.i
                key={item}
                style={{ transform: `rotate(${item * 60}deg) translateX(136px)` }}
                animate={{ opacity: [0.46, 1, 0.46] }}
                transition={{ duration: 2.2, delay: item * 0.12, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
            <div className="core-ui-center">
              <img src="/brand/Monogram_Dark_BG.png" alt="" />
            </div>
          </div>
          <div className="core-ui-stack">
            <div><span>Data</span><strong>Current</strong></div>
            <div><span>Policy</span><strong>Checked</strong></div>
            <div><span>Reasoning</span><strong>Validated</strong></div>
            <div><span>Ledger</span><strong>Written</strong></div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
