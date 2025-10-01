import { motion } from 'framer-motion';
import { ArrowDown, Download, Eye, Mail } from 'lucide-react';
import { AnimatedText, Typewriter } from '../components/AnimatedText';
import { personalInfo } from '../data/portfolio';

export const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23334155%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-blue-600 dark:text-cyan-400 font-medium text-lg md:text-xl">Hi, I'm</span>
        </motion.div>

        <AnimatedText
          text={personalInfo.name}
          className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent"
          delay={0.3}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9, ease: 'easeOut' }}
          className="mb-8 flex items-center justify-center"
        >
          <div className="inline-flex items-center justify-center rounded-xl px-8 py-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-cyan-400/10 dark:to-blue-400/10 border border-blue-200/50 dark:border-cyan-400/30 min-h-[3.5rem] shadow-sm">
            <Typewriter
              texts={[
                'Full Stack Developer',
                'React Specialist',
                'Node.js Expert',
                'Python Developer',
                'AI Enthusiast'
              ]}
              typingSpeed={80}
              pauseMs={2000}
              deleteSpeed={40}
            />
          </div>
        </motion.div>

        <AnimatedText
          text={personalInfo.tagline}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          delay={1.2}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-cyan-500 dark:to-blue-500 dark:hover:from-cyan-600 dark:hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25 dark:shadow-cyan-500/25"
          >
            <Eye className="w-5 h-5" />
            View Projects
          </motion.button>

          <motion.a
            href="/Rajesh Purella.pdf"
            download="Rajesh_Purella_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 text-slate-900 dark:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>

          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 border-2 border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400 hover:bg-blue-600 dark:hover:bg-cyan-400 hover:text-white dark:hover:text-slate-900 font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </motion.button>
        </motion.div>

        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          aria-label="Scroll to next section"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </motion.div>
          <p className="text-sm mt-2">Scroll to explore</p>
        </motion.button>
      </div>
    </section>
  );
};