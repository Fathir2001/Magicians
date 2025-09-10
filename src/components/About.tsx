import { motion } from 'framer-motion';
import { TrophyIcon, HeartIcon, StarIcon, UsersIcon } from '@heroicons/react/24/outline';

const About = () => {
  const achievements = [
    { year: '2023', title: 'Premier League Champions' },
    { year: '2022', title: 'T20 Title Winners' },
    { year: '2021', title: 'League Batting Benchmark' },
    { year: '2020', title: 'Fair Play Recognition' },
  ];

  const values = [
    { icon: <HeartIcon className="w-5 h-5" />, title: 'Passion', description: 'Purpose-driven commitment to the game.' },
    { icon: <StarIcon className="w-5 h-5" />, title: 'Excellence', description: 'Relentless pursuit of high performance.' },
    { icon: <UsersIcon className="w-5 h-5" />, title: 'Teamwork', description: 'Collective intelligence over ego.' },
    { icon: <TrophyIcon className="w-5 h-5" />, title: 'Growth', description: 'Elevating standards season after season.' },
  ];

  return (
    <section id="about" className="relative py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_0%,transparent_10%,transparent_90%,rgba(255,255,255,0.03)_100%)]" />
      <div className="container">
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-80px'}} transition={{duration:.6}} className="max-w-3xl mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">About the Club</h2>
          <p className="text-slate-300 leading-relaxed text-base md:text-lg">
            Founded in 1995, the Magicians Cricket Club program integrates athlete development, analytical preparation, and
            disciplined culture to compete at modern cricket standards. Our structure blends experienced leadership
            with a progressive academy pipeline.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 mb-20">
          <div className="space-y-10">
            <div>
              <h3 className="text-white font-display text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-accent-500 text-white text-sm">HQ</span>
                Strategic Foundation
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We architect sustainable performance frameworks: talent identification, workload monitoring,
                technical refinement, and leadership pathways — all underpinned by measurable progress metrics.
              </p>
            </div>

            <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.6}} className="grid sm:grid-cols-2 gap-4">
              {achievements.map(a => (
                <div key={a.year} className="group relative rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-colors hover:border-brand-400/30">
                  <div className="text-xs font-semibold tracking-wide text-brand-300 mb-1">{a.year}</div>
                  <div className="text-sm font-medium text-slate-200 leading-snug">{a.title}</div>
                  <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-brand-400/0 via-brand-400/0 to-accent-400/0 group-hover:from-brand-400/5 group-hover:to-accent-400/5 transition-all" />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="space-y-10">
            <div className="grid grid-cols-2 gap-4">
              {values.map(v => (
                <div key={v.title} className="relative rounded-xl border border-white/5 bg-surface-100/40 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-slate-200 mb-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-r from-brand-500/40 to-accent-500/40 text-brand-200">
                      {v.icon}
                    </span>
                    <span className="text-sm font-medium">{v.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pr-2">{v.description}</p>
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5" />
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-surface-50/60 to-surface-100/60 p-6 backdrop-blur-md">
              <h4 className="text-white font-medium mb-3 flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" /> Mission Focus</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Develop adaptable cricketers prepared for evolving formats while advancing integrity, tactical discipline,
                and collaborative standards across coaching, analytics, and player leadership structures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
