import { motion } from 'framer-motion';
import { SkillCard } from '../components/SkillCard';
import { skills } from '../data/portfolio';

export const SkillsSection = () => {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryLabels = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    database: 'Database Technologies',
    devops: 'DevOps & Cloud',
    tools: 'Development Tools',
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Core Competencies</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across the full development stack
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-cyan-400 dark:to-blue-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="space-y-16">
          {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categorySkills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};