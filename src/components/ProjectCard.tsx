import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="group relative bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden hover:border-blue-300 dark:hover:border-cyan-400/50 transition-all duration-300 shadow-sm dark:shadow-none"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100/80 dark:from-slate-900/80 to-transparent" />
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-xs font-medium bg-blue-600 dark:bg-cyan-400 text-white dark:text-slate-900 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3 leading-relaxed">{project.description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Key Features</h4>
          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
            {project.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <ArrowRight className="w-3 h-3 mr-2 text-blue-600 dark:text-cyan-400 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.metrics.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Impact</h4>
            <div className="space-y-1">
              {project.metrics.map((metric, idx) => (
                <p key={idx} className="text-sm text-green-600 dark:text-green-400">
                  • {metric}
                </p>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};