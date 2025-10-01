import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, ChevronRight } from 'lucide-react';
import { experiences } from '../data/portfolio';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Professional Experience</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Building production-ready applications and driving technical innovation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-cyan-400 dark:to-blue-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-blue-700 dark:from-cyan-400 dark:to-blue-500" />
              
              <div className="flex items-start gap-6">
                {/* Timeline Dot */}
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-cyan-400 dark:to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  {experience.current && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl p-8 shadow-sm dark:shadow-none">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{experience.role}</h3>
                      <h4 className="text-xl font-semibold text-blue-600 dark:text-cyan-400 mb-3">{experience.company}</h4>
                    </div>
                    
                    <div className="flex flex-col md:items-end text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{experience.duration}</span>
                        {experience.current && (
                          <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Key Achievements</h5>
                    <div className="space-y-3">
                      {experience.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + idx * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <ChevronRight className="w-5 h-5 text-blue-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};