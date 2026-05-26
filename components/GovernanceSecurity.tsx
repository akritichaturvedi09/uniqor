'use client';

import { governance } from '@/lib/content';
import { SectionReveal } from './SectionReveal';

export function GovernanceSecurity() {
  return (
    <section className="section governance" id="governance">
      <div className="container">
        <SectionReveal className="section-header">
          <div>
            <div className="eyebrow">Security & governance</div>
            <h2 className="section-title">Policy gates, encrypted pathways, accountable authority.</h2>
          </div>
          <p className="lede">
            Governance is not a reporting layer added after the model responds. In Uniqor, governance is part of the inference path: permissions, policies, lineage, and human ownership move with the decision.
          </p>
        </SectionReveal>

        <div className="governance-grid">
          {governance.map((item, index) => (
            <SectionReveal className="governance-card panel" key={item.title} delay={index * 0.08}>
              <div className="shield-icon" aria-hidden="true">
                <span />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
