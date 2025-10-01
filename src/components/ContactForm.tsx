import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { ContactFormData } from '../types';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsLoading(true);
      setSubmitStatus('idle');
      
      // Submit to Formspree - you need to replace this with your actual endpoint
      const response = await fetch('https://formspree.io/f/xovkdpwe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setIsSubmitted(true);
        reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted && submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-xl shadow-sm"
      >
        <CheckCircle className="w-16 h-16 mx-auto text-green-600 dark:text-green-500 mb-4" />
        <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">Message Sent Successfully!</h3>
        <p className="text-slate-600 dark:text-slate-300">
          Thank you for reaching out! I've received your message and will get back to you within 24 hours.
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
          You should receive a confirmation email shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            autoComplete="name"
            {...register('name')}
            className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-blue-500 dark:focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-cyan-400/20 transition-all duration-200"
            placeholder="Your full name"
            disabled={isSubmitting || isLoading}
            autoComplete="name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            autoComplete="email"
            {...register('email')}
            className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-blue-500 dark:focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-cyan-400/20 transition-all duration-200"
            placeholder="your.email@example.com"
            disabled={isSubmitting || isLoading}
            autoComplete="email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          {...register('subject')}
          className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-blue-500 dark:focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-cyan-400/20 transition-all duration-200"
          placeholder="What's this about?"
          disabled={isSubmitting || isLoading}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
          Message *
        </label>
        <textarea
          id="message"
          rows={6}
          {...register('message')}
          className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-blue-500 dark:focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-cyan-400/20 transition-all duration-200 resize-none"
          placeholder="Tell me about your project or opportunity..."
          disabled={isSubmitting || isLoading}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.message.message}
          </p>
        )}
      </div>

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-lg text-center"
        >
          <p className="text-red-700 dark:text-red-400 text-sm mb-2">
            <strong>Form Setup Required:</strong> To enable email functionality, please:
          </p>
          <ol className="text-red-600 dark:text-red-400 text-xs text-left space-y-1">
            <li>1. Create a free account at <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="underline">formspree.io</a></li>
            <li>2. Get your form endpoint</li>
            <li>3. Replace 'YOUR_FORM_ID' in the code</li>
          </ol>
          <p className="text-red-700 dark:text-red-400 text-sm mt-2">
            Meanwhile, contact me directly at <a href="mailto:rajeshpurella2002@gmail.com" className="underline">rajeshpurella2002@gmail.com</a>
          </p>
        </motion.div>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting || isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-cyan-500 dark:to-blue-500 dark:hover:from-cyan-600 dark:hover:to-blue-600 disabled:from-slate-400 disabled:to-slate-500 dark:disabled:from-slate-600 dark:disabled:to-slate-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 dark:shadow-cyan-500/25 hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-cyan-500/30"
      >
        {isSubmitting || isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </motion.button>
      
      <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
        Your message will be delivered directly to my email inbox within minutes.
      </p>
    </motion.form>
  );
};