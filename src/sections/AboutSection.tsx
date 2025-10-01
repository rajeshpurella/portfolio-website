import { motion } from 'framer-motion';
import { MapPin, Clock, CheckCircle } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-cyan-400 dark:to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400/20 to-blue-600/20 dark:from-cyan-400/20 dark:to-blue-500/20 rounded-2xl rotate-6" />
              <div className="absolute inset-0 w-80 h-80 mx-auto rounded-2xl -rotate-3 shadow-2xl shadow-slate-300/50 dark:shadow-slate-900/50 overflow-hidden">
                <img
                  src="/image.png"
                  alt={`${personalInfo.name} - Professional headshot`}
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-slate-900/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{personalInfo.role}</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Clock className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
                <span>Response time: {personalInfo.responseTime}</span>
              </div>
              <div className="flex items-center gap-3 text-green-600 dark:text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">{personalInfo.availability}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-cyan-400 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 rounded-lg transition-all duration-300"
                >
                  <span className="capitalize">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};