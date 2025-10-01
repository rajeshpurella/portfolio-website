import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TypewriterProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  pauseMs?: number;
  deleteSpeed?: number;
}

export const Typewriter = ({ 
  texts, 
  className = '', 
  typingSpeed = 80,
  pauseMs = 2000,
  deleteSpeed = 40
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setDisplayText(texts[0] || '');
      return;
    }

    let timeoutId: NodeJS.Timeout;

    const animate = () => {
      const currentText = texts[currentIndex] || '';
      
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
          timeoutId = setTimeout(animate, typingSpeed);
        } else {
          // Finished typing, wait then start deleting
          timeoutId = setTimeout(() => {
            setIsDeleting(true);
            animate();
          }, pauseMs);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
          timeoutId = setTimeout(animate, deleteSpeed);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          timeoutId = setTimeout(animate, 100);
        }
      }
    };

    // Start animation after a small delay
    timeoutId = setTimeout(animate, 500);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [displayText, currentIndex, isDeleting, texts, typingSpeed, pauseMs, deleteSpeed]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={`font-semibold tracking-tight text-slate-700 dark:text-slate-300 ${className}`}>
      {displayText}
      <span className={`ml-0.5 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
        |
      </span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedText = ({ text, className = '', delay = 0 }: AnimatedTextProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {text}
    </motion.div>
  );
};