'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionRevealProps = HTMLMotionProps<'div'> & {
  children: ReactNode;
  delay?: number;
};

export function SectionReveal({ children, delay = 0, ...props }: SectionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 44, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
