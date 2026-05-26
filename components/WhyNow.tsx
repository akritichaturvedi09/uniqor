'use client';

import { motion } from 'framer-motion';
import { whyNow } from '@/lib/content';
import { SectionReveal } from './SectionReveal';

export function WhyNow() {
  return (
    <section className="section why-now" id="why-now">
      <div className="container why-now-grid">
        <SectionReveal>
          <div className="eyebrow">Why now</div>
          <h2 className="section-title">The model layer is advancing. Institutions still need the trust layer.</h2>
        </SectionReveal>
        <div className="why-now-cards">
          {whyNow.map((item, index) => (
            <SectionReveal className="why-card panel" key={item.title} delay={index * 0.1}>
              <div className="why-index">0{index + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <motion.div
                className="why-card-meter"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, delay: 0.22 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
