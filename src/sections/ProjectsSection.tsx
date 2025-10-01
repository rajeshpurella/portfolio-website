import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/portfolio';

export const ProjectsSection = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A showcase of innovative full-stack solutions that demonstrate my expertise in building scalable, production-ready applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-cyan-400 dark:to-blue-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Interested in seeing more projects or discussing a collaboration?
          </p>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-cyan-500 dark:to-blue-500 dark:hover:from-cyan-600 dark:hover:to-blue-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25 dark:shadow-cyan-500/25 hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-cyan-500/30"
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};