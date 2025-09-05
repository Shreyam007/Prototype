import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50"
    >
      <div className="px-6 py-4 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 font-poppins">
                Welcome back, Admin
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Here's your report overview for today.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="hidden md:block relative"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-64 bg-slate-100/80 dark:bg-slate-800/80 rounded-xl border-0 focus:ring-2 focus:ring-cyan-500/20 focus:bg-white dark:focus:bg-slate-700 transition-all duration-200 backdrop-blur-sm"
              />
            </motion.div>

            {/* Notifications */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              </span>
            </motion.button>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
};