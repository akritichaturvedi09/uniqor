'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { hero, trustSignals } from '@/lib/content';
import { HeroCore } from './HeroCore';

export function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
      timeline
        .from('.hero-blackout', { opacity: 1, duration: 0.72 })
        .from('.hero-core', { opacity: 0, scale: 0.92, filter: 'blur(18px)', duration: 1.1 }, '-=0.2')
        .from('.core-chip', { opacity: 0, y: 12, stagger: 0.035, duration: 0.62 }, '-=0.72')
        .from('.hero-copy > *', { opacity: 0, y: 28, stagger: 0.08, duration: 0.82 }, '-=0.58')
        .from('.trust-strip-card', { opacity: 0, y: 18, stagger: 0.06, duration: 0.68 }, '-=0.54');
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="top" ref={rootRef}>
      <div className="hero-blackout" />
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="eyebrow">{hero.eyebrow}</div>
          <h1 className="display-title">{hero.title}</h1>
          <p className="hero-subheadline">{hero.subheadline}</p>
          <p className="hero-support">{hero.support}</p>
          <div className="hero-actions">
            <a className="button-primary" href="mailto:fred@uniqor.com?subject=Uniqor%20Institutional%20Briefing">
              {hero.primaryCta}
            </a>
            <a className="button-secondary" href="#architecture">
              {hero.secondaryCta}
            </a>
          </div>
        </motion.div>
        <HeroCore />
      </div>
      <div className="container trust-strip" aria-label="Uniqor trust signals">
        {trustSignals.map((signal) => (
          <div className="trust-strip-card panel" key={signal.label}>
            <span>{signal.label}</span>
            <strong>{signal.value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
