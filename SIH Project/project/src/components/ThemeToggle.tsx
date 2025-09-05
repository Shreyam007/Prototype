import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200 backdrop-blur-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 360 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {theme === 'light' ? (
          <Sun className="w-5 h-5 text-amber-500" />
        ) : (
          <Moon className="w-5 h-5 text-cyan-400" />
        )}
      </motion.div>
    </motion.button>
  );
};