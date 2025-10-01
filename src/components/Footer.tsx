import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{personalInfo.name}</h3>
            <p className="text-slate-600 dark:text-slate-400">{personalInfo.tagline}</p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.slice(0, 2).map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-cyan-400 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 rounded-lg transition-all duration-300"
              >
                <span className="sr-only">{link.name}</span>
                {link.name === 'LinkedIn' && <span className="w-5 h-5 block">in</span>}
                {link.name === 'GitHub' && <span className="w-5 h-5 block">gh</span>}
              </motion.a>
            ))}
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
            <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400 text-sm mb-4">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-600 dark:text-amber-500" />
              <span>using</span>
              <Code className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              <span>React + TypeScript</span>
            </div>
            
            <p className="text-slate-500 dark:text-slate-500 text-sm">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            
            <p className="text-slate-400 dark:text-slate-600 text-xs mt-2">
              Designed and developed with attention to detail and performance in mind.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};