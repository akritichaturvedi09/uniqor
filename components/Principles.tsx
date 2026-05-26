'use client';

import { motion } from 'framer-motion';
import { principles } from '@/lib/content';
import { SectionReveal } from './SectionReveal';

export function Principles() {
  return (
    <section className="section principles" id="principles">
      <div className="container">
        <SectionReveal className="section-header">
          <div>
            <div className="eyebrow">The 3 Cs</div>
            <h2 className="section-title">Clarity. Credibility. Consistency.</h2>
          </div>
          <p className="lede">
            The principles are not brand language. They are operating behavior for institutions that need decision integrity at scale.
          </p>
        </SectionReveal>
        <div className="principle-grid">
          {principles.map((principle, index) => (
            <SectionReveal className="principle-pillar panel" key={principle.name} delay={index * 0.1}>
              <motion.div
                className="pillar-beam"
                animate={{ opacity: [0.38, 0.9, 0.38], scaleY: [0.92, 1, 0.92] }}
                transition={{ duration: 3.4, delay: index * 0.24, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span>{principle.signal}</span>
              <h3>{principle.name}</h3>
              <p>{principle.text}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
