'use client';

import { motion } from 'framer-motion';
import { nav } from '@/lib/content';

export function Nav() {
  return (
    <motion.header
      className="nav"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container nav-inner">
        <a className="nav-logo" href="#top" aria-label="Uniqor home">
          <img src="/brand/Logo_Dark_BG.png" alt="Uniqor" />
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button-secondary nav-cta" href="mailto:fred@uniqor.com?subject=Uniqor%20Institutional%20Briefing">
          Briefing
        </a>
      </div>
    </motion.header>
  );
}
