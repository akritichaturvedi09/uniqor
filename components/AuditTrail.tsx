'use client';

import { motion } from 'framer-motion';
import { auditTrail } from '@/lib/content';
import { SectionReveal } from './SectionReveal';

export function AuditTrail() {
  return (
    <section className="section audit-section" id="audit">
      <div className="container">
        <SectionReveal className="section-header">
          <div>
            <div className="eyebrow">Audit-ready intelligence</div>
            <h2 className="section-title">A decision trace that survives scrutiny.</h2>
          </div>
          <p className="lede">
            Each output is treated as an institutional decision event. Context, policy, reasoning, validation, output, and ledger entry become a traceable chain rather than an after-the-fact narrative.
          </p>
        </SectionReveal>

        <SectionReveal className="audit-flow panel">
          <div className="audit-rail" aria-hidden="true" />
          {auditTrail.map((item, index) => (
            <motion.article
              className="audit-step"
              key={item.step}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.72, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="audit-index">{String(index + 1).padStart(2, '0')}</div>
              <div>
                <h3>{item.step}</h3>
                <span>{item.meta}</span>
                <p>{item.detail}</p>
              </div>
            </motion.article>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
