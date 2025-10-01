import { useEffect, useState } from 'react';

export function useTheme() {
  const getInitial = () => {
    const ls = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (ls === 'dark' || ls === 'light') return ls;
    return typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState<'light' | 'dark'>(getInitial());

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    try { 
      localStorage.setItem('theme', theme); 
    } catch {}
  }, [theme]);

  return { 
    theme, 
    toggle: () => setTheme(t => (t === 'dark' ? 'light' : 'dark')),
    isDark: theme === 'dark',
    isLight: theme === 'light'
  };
}