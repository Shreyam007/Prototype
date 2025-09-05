import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  gradient?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  hover = true, 
  glass = false,
  gradient = false 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -2, scale: 1.02 } : {}}
      className={cn(
        'rounded-2xl transition-all duration-300',
        glass ? 
          'bg-white/10 backdrop-blur-md border border-white/20 shadow-soft' :
          'bg-white/90 dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60 shadow-soft backdrop-blur-sm',
        gradient && 'bg-gradient-to-br from-white via-slate-50 to-cyan-50/30 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900',
        hover && 'hover:shadow-soft-lg hover:border-cyan-200/50 dark:hover:border-cyan-700/30',
        className
      )}
    >
      {children}
    </motion.div>
  );
};