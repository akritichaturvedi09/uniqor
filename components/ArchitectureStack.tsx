'use client';

import { motion } from 'framer-motion';
import { architectureLayers } from '@/lib/content';
import { SectionReveal } from './SectionReveal';

export function ArchitectureStack() {
  return (
    <section className="section architecture-section" id="architecture">
      <div className="container">
        <SectionReveal className="section-header">
          <div>
            <div className="eyebrow">Platform architecture</div>
            <h2 className="section-title">Enter the operating system of institutional intelligence.</h2>
          </div>
          <p className="lede">
            Uniqor is structured as a four-layer intelligence stack: application interface, decision engine, knowledge and state store, and inference core. Each layer is built to preserve context, governance, and evidence through the decision path.
          </p>
        </SectionReveal>

        <div className="architecture-grid">
          <SectionReveal className="architecture-visual panel">
            <div className="architecture-core-mark">
              <img src="/brand/Monogram_Dark_BG.png" alt="" />
            </div>
            {architectureLayers.map((layer, index) => (
              <motion.div
                className="architecture-layer"
                key={layer.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -42 : 42 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.86, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <span>{layer.number}</span>
                <strong>{layer.name}</strong>
              </motion.div>
            ))}
            <div className="architecture-path architecture-path-a" />
            <div className="architecture-path architecture-path-b" />
          </SectionReveal>

          <div className="architecture-cards">
            {architectureLayers.map((layer, index) => (
              <SectionReveal className="architecture-card panel" key={layer.name} delay={index * 0.08}>
                <div className="architecture-card-number">{layer.number}</div>
                <h3>{layer.name}</h3>
                <p>{layer.subtitle}</p>
                <ul>
                  {layer.capabilities.map((capability) => (
                    <li key={capability}>{capability}</li>
                  ))}
                </ul>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
