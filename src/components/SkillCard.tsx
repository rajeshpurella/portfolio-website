import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Server, 
  GitBranch, 
  Container, 
  Cloud,
  Paintbrush,
  Zap,
  Table,
  Send,
  Figma,
  Code2
} from 'lucide-react';
import { Skill } from '../types';

const iconMap: Record<string, any> = {
  code: Code,
  database: Database,
  server: Server,
  'git-branch': GitBranch,
  container: Container,
  cloud: Cloud,
  paintbrush: Paintbrush,
  zap: Zap,
  table: Table,
  send: Send,
  figma: Figma,
  code2: Code2,
  react: Code2,
  javascript: Code,
  snake: Code,
};

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export const SkillCard = ({ skill, index }: SkillCardProps) => {
  const IconComponent = iconMap[skill.icon] || Code;
  const categoryColors = {
    frontend: 'from-cyan-500 to-blue-500',
    backend: 'from-green-500 to-emerald-500',
    database: 'from-purple-500 to-violet-500',
    devops: 'from-orange-500 to-red-500',
    tools: 'from-pink-500 to-rose-500',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative p-6 bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl hover:border-blue-300 dark:hover:border-cyan-400/50 transition-all duration-300 shadow-sm dark:shadow-none"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${categoryColors[skill.category]} bg-opacity-20 dark:bg-opacity-10`}>
          <IconComponent className="w-6 h-6 text-slate-700 dark:text-white" />
        </div>
        <span className="text-2xl font-bold text-blue-600 dark:text-cyan-400">{skill.level}%</span>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{skill.name}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">{skill.experience}</p>

      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-3">
        <motion.div
          className={`h-2 rounded-full bg-gradient-to-r ${categoryColors[skill.category]}`}
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
        />
      </div>

      <span className="inline-block px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full capitalize">
        {skill.category}
      </span>

      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 to-blue-600/0 dark:from-cyan-400/0 dark:to-blue-400/0 group-hover:from-blue-400/5 group-hover:to-blue-600/5 dark:group-hover:from-cyan-400/5 dark:group-hover:to-blue-400/5 rounded-xl transition-all duration-300" />
    </motion.div>
  );
};