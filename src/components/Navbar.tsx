import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Matches', href: '#matches' },
    { name: 'News', href: '#news' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Trophies', href: '#trophies' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Contact', href: '#contact' },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 25 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-xl bg-slate-900/80 shadow-soft' : 'bg-transparent'}`}
    >
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="relative"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-flame-500 to-ember-400 flex items-center justify-center text-2xl shadow-glow ring-2 ring-white/10">
                🏏
              </div>
              <div className="absolute inset-0 animate-ping rounded-full bg-brand-400/20" />
            </motion.div>
            <div className="leading-tight select-none">
              <h1 className="font-display text-xl md:text-2xl font-bold tracking-wide text-gradient">Magicians</h1>
              <p className="text-xs md:text-sm font-medium text-flame-400/80 uppercase tracking-wider">Cricket Club</p>
            </div>
          </div>

            {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.2 }}
                whileHover={{ y: -2 }}
                className="relative px-4 py-2 text-sm font-medium text-slate-200 hover:text-white transition-colors group"
              >
                <span>{item.name}</span>
                <span className="pointer-events-none absolute inset-x-3 -bottom-px h-px w-0 bg-gradient-to-r from-brand-400 to-accent-400 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]" />
              </motion.a>
            ))}
          </nav>

          {/* Mobile */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.92 }}
              aria-label="Toggle navigation"
              onClick={() => setIsMenuOpen(s => !s)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                {isMenuOpen ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <>
                    <path d="M3 6h18" />
                    <path d="M3 12h18" />
                    <path d="M3 18h18" />
                  </>
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ type: 'tween', duration: 0.35 }}
        className="md:hidden overflow-hidden border-t border-white/10"
      >
        <div className="px-4 pb-6 pt-4 space-y-2 bg-slate-900/80 backdrop-blur-xl">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ x: -12, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.04 }}
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
