import { motion } from 'framer-motion';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const Navigation = () => {
  const activeSection = useScrollSpy(navItems.map(item => item.id));

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/98 dark:bg-slate-900/98 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/90 rounded-full px-6 py-3 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? 'text-blue-600 dark:text-cyan-400 font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="absolute inset-0 bg-blue-100 dark:bg-cyan-400/10 rounded-full -z-10"
                  layoutId="activeSection"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};