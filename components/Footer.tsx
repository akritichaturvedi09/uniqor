'use client';

import { footer } from '@/lib/content';
import { SectionReveal } from './SectionReveal';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <SectionReveal className="footer-copy">
          <img src="/brand/Logo_Dark_BG.png" alt="Uniqor" />
          <h2>{footer.title}</h2>
          <p>{footer.text}</p>
          <a className="button-primary" href="mailto:fred@uniqor.com?subject=Uniqor%20Institutional%20Briefing">
            {footer.cta}
          </a>
        </SectionReveal>
        <SectionReveal className="footer-ops panel" delay={0.12}>
          <div className="ops-row"><span>Governance</span><strong>Default</strong></div>
          <div className="ops-row"><span>Audit ledger</span><strong>Active</strong></div>
          <div className="ops-row"><span>Policy gates</span><strong>Online</strong></div>
          <div className="ops-row"><span>Institutional memory</span><strong>Synced</strong></div>
          <div className="ops-map" aria-hidden="true">
            {[0, 1, 2, 3, 4, 5, 6].map((node) => <i key={node} />)}
          </div>
        </SectionReveal>
      </div>
    </footer>
  );
}
