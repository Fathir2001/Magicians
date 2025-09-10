import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  padded?: boolean;
}

const fadeIn = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 }
};

export function Section({ id, title, eyebrow, description, children, padded = true }: SectionProps) {
  return (
    <section id={id} className={padded ? 'section-wrapper relative' : 'relative'}>
      <div className="container relative z-10">
        {(eyebrow || title || description) && (
          <div className="max-w-3xl mb-12">
            {eyebrow && <div className="mb-3 text-xs font-semibold tracking-wider uppercase text-brand-300">{eyebrow}</div>}
            {title && (
              <motion.h2
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="text-balance font-display text-3xl md:text-4xl font-bold leading-tight text-white"
              >
                {title}
              </motion.h2>
            )}
            {description && (
              <motion.p
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeIn}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed"
              >
                {description}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
      {/* subtle gradient edge */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
    </section>
  );
}

export default Section;
