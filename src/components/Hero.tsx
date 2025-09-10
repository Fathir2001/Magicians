import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      {/* subtle layered background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,183,131,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,130,10,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-surface-50/40 backdrop-blur-[2px]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#0d1513_0%,#0d1513ee_80%,#0d1513fa_100%)]" />
      </div>

      <div className="container relative z-10 pt-28 pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-brand-200 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-flame-500 to-ember-400 animate-pulse" />
            Established 1995 — Building modern cricket excellence
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 font-display text-4xl leading-tight font-bold md:text-6xl text-balance"
          >
            Elevating the<br className="hidden md:block" />
            <span className="text-gradient"> Future of Club Cricket</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-slate-300"
          >
            Performance-driven culture, data-informed strategy, and a relentless commitment to player development and community impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button className="btn-primary">View Fixtures</button>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-brand-400/40 hover:text-white transition-colors">Meet the Team</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.4 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-md"
          >
            {[{
              k: 'Win Rate', v: '72%'
            }, { k: 'Academy Players', v: '40+'
            }, { k: 'Titles', v: '12' }].map(stat => (
              <div key={stat.k} className="relative">
                <div className="text-xs uppercase tracking-wide text-slate-400 font-medium">{stat.k}</div>
                <div className="mt-1 text-xl font-display font-semibold text-white">{stat.v}</div>
                <div className="absolute -bottom-1 left-0 h-px w-10 bg-gradient-to-r from-flame-500/60 to-ember-400/60" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
