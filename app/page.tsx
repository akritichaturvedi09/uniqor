'use client';

import { SmoothScroll } from '@/components/SmoothScroll';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { TrustGap } from '@/components/TrustGap';
import { CoreSection } from '@/components/CoreSection';
import { AuditTrail } from '@/components/AuditTrail';
import { ArchitectureStack } from '@/components/ArchitectureStack';
import { UseCases } from '@/components/UseCases';
import { WhyNow } from '@/components/WhyNow';
import { GovernanceSecurity } from '@/components/GovernanceSecurity';
import { Principles } from '@/components/Principles';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="site-shell">
      <SmoothScroll />
      <Nav />
      <Hero />
      <TrustGap />
      <CoreSection />
      <AuditTrail />
      <ArchitectureStack />
      <UseCases />
      <WhyNow />
      <GovernanceSecurity />
      <Principles />
      <Footer />
    </main>
  );
}
