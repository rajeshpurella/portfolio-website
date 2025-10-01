import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Copy, MessageCircle, Send } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { personalInfo } from '../data/portfolio';
import { useState } from 'react';

export const ContactSection = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      copyValue: personalInfo.email,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      copyValue: personalInfo.phone,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: personalInfo.phone,
      href: `https://wa.me/${personalInfo.phone.replace(/\D/g, '')}`,
      copyValue: personalInfo.phone,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`,
      copyValue: personalInfo.location,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-cyan-400 dark:to-blue-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Get In Touch</h3>
              
              <div className="bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-xl p-6 mb-8 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="font-semibold text-green-800 dark:text-green-300">Currently Available</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  {personalInfo.availability} • Response time: {personalInfo.responseTime}
                </p>
                <p className="text-sm text-green-700 dark:text-green-400 mt-2">
                  ✓ Open to freelance projects and full-time opportunities
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group relative bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-blue-300 dark:hover:border-cyan-400/50 transition-all duration-300 shadow-sm dark:shadow-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-cyan-400 dark:to-blue-500 bg-opacity-20 dark:bg-opacity-20 rounded-lg">
                        <contact.icon className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">{contact.label}</p>
                        <a
                          href={contact.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                    
                    <motion.button
                      onClick={() => copyToClipboard(contact.copyValue, contact.label)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                      title="Copy to clipboard"
                    >
                      {copiedField === contact.label ? (
                        <span className="text-xs text-green-600 dark:text-green-400">Copied!</span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl p-8 shadow-sm dark:shadow-none">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send Message</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};