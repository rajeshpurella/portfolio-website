import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { ThemeToggle } from './components/ThemeToggle';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';

function App() {
  return (
    <AnimatePresence>
      <div className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
        <SEO />
        
        <div className="overflow-x-hidden">
          <Navigation />
          <ThemeToggle />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;