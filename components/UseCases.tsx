'use client';

import { motion } from 'framer-motion';
import { useCases } from '@/lib/content';
import { SectionReveal } from './SectionReveal';

function SectorVisual({ index }: { index: number }) {
  return (
    <div className="sector-visual" aria-hidden="true">
      <svg viewBox="0 0 120 72">
        {[0, 1, 2, 3].map((line) => (
          <motion.path
            key={line}
            d={`M${12 + line * 7} ${18 + line * 8} C 42 ${8 + line * 10}, 72 ${64 - line * 8}, 108 ${22 + line * 6}`}
            fill="none"
            stroke={line === index % 4 ? '#F6C85F' : '#21D4FD'}
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0.2 }}
            whileInView={{ pathLength: 1, opacity: 0.72 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.1, delay: line * 0.12, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
        {[0, 1, 2, 3, 4, 5].map((node) => (
          <motion.circle
            key={node}
            cx={18 + node * 17}
            cy={node % 2 === 0 ? 23 : 49}
            r="3.5"
            fill="#0D1F2E"
            stroke={node === index + 1 ? '#A7F3D0' : '#9FB5C8'}
            strokeWidth="0.8"
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: node * 0.07, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </svg>
    </div>
  );
}

export function UseCases() {
  return (
    <section className="section use-cases" id="use-cases">
      <div className="container">
        <SectionReveal className="section-header">
          <div>
            <div className="eyebrow">Built to be embedded</div>
            <h2 className="section-title">Precision across regulated domains.</h2>
          </div>
          <p className="lede">
            Uniqor is designed for institutions where the workflow is the product surface. The system is embedded where decisions already happen, not visited as a separate AI destination.
          </p>
        </SectionReveal>

        <div className="use-case-grid">
          {useCases.map((useCase, index) => (
            <SectionReveal className="use-case-card panel" key={useCase.sector} delay={index * 0.08}>
              <div className="use-case-topline">
                <span>{useCase.sector}</span>
                <strong>{useCase.grade}</strong>
              </div>
              <SectorVisual index={index} />
              <h3>{useCase.visual}</h3>
              <p>{useCase.text}</p>
              <div className="output-tags">
                {useCase.outputs.map((output) => (
                  <span key={output}>{output}</span>
                ))}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
