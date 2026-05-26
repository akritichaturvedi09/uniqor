'use client';

import { motion } from 'framer-motion';
import { trustGap } from '@/lib/content';
import { SectionReveal } from './SectionReveal';

const fragmentedNodes = [
  { x: 14, y: 30, label: 'Legal' },
  { x: 32, y: 16, label: 'Compliance' },
  { x: 60, y: 26, label: 'Ops' },
  { x: 82, y: 18, label: 'Finance' },
  { x: 22, y: 70, label: 'Risk' },
  { x: 48, y: 58, label: 'Policy' },
  { x: 76, y: 68, label: 'Data' }
];

export function TrustGap() {
  return (
    <section className="section trust-gap" id="trust-gap">
      <div className="container">
        <SectionReveal className="section-header">
          <div>
            <div className="eyebrow">{trustGap.eyebrow}</div>
            <h2 className="section-title">{trustGap.title}</h2>
          </div>
          <p className="lede">{trustGap.body}</p>
        </SectionReveal>

        <div className="trust-gap-grid">
          <SectionReveal className="fragment-map panel">
            <svg viewBox="0 0 100 84" role="img" aria-label="Fragmented institutional system map stabilizing into governed intelligence">
              <defs>
                <filter id="risk-glow">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {fragmentedNodes.slice(0, -1).map((node, index) => {
                const next = fragmentedNodes[(index + 2) % fragmentedNodes.length];
                return (
                  <motion.line
                    key={`${node.label}-${next.label}`}
                    x1={node.x}
                    y1={node.y}
                    x2={next.x}
                    y2={next.y}
                    stroke={index % 2 === 0 ? '#FF6B5F' : '#F6C85F'}
                    strokeWidth="0.5"
                    strokeDasharray="3 3"
                    filter="url(#risk-glow)"
                    initial={{ pathLength: 0, opacity: 0.16 }}
                    whileInView={{ pathLength: [0, 1, 0.72], opacity: [0.16, 0.45, 0.28] }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  />
                );
              })}
              {fragmentedNodes.map((node, index) => (
                <motion.g
                  key={node.label}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.12 + index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <circle cx={node.x} cy={node.y} r="4" fill="#0D1F2E" stroke={index % 3 === 0 ? '#FF6B5F' : '#9FB5C8'} strokeWidth="0.7" />
                  <circle cx={node.x} cy={node.y} r="1.15" fill={index % 3 === 0 ? '#FF6B5F' : '#21D4FD'} />
                  <text x={node.x + 5.5} y={node.y + 1.4} fill="#9FB5C8" fontSize="3.2">
                    {node.label}
                  </text>
                </motion.g>
              ))}
              <motion.circle
                cx="50"
                cy="42"
                r="12"
                fill="rgba(33,212,253,0.08)"
                stroke="#21D4FD"
                strokeWidth="0.7"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.text
                x="50"
                y="43.5"
                textAnchor="middle"
                fill="#A7F3D0"
                fontSize="3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 1.25 }}
              >
                UNIQOR STABILIZES CONTEXT
              </motion.text>
            </svg>
            <div className="fragment-map-caption">
              Fragmented systems create conflicting context. Uniqor activates a governed core that aligns state, policy, and evidence before decisions move.
            </div>
          </SectionReveal>

          <div className="trust-gap-cards">
            {trustGap.cards.map((card, index) => (
              <SectionReveal className={`gap-card panel gap-card-${card.tone}`} key={card.title} delay={index * 0.08}>
                <div className="gap-card-signal">{card.signal}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
