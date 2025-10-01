import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggle}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/70 dark:border-slate-700/70 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 hover:border-blue-300 dark:hover:border-cyan-400/50 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Sun Icon for Light Mode */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            rotate: isDark ? 180 : 0,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <Sun className="w-5 h-5 text-amber-500" />
        </motion.div>

        {/* Moon Icon for Dark Mode */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : -180,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <Moon className="w-5 h-5 text-blue-400" />
        </motion.div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/20 to-orange-400/20 dark:from-blue-400/20 dark:to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );
};