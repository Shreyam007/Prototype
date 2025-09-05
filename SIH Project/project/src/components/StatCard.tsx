import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { Card } from './ui/Card';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease' | 'neutral';
  icon: LucideIcon;
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

const colorClasses = {
  primary: 'from-cyan-500 to-blue-500 shadow-cyan-500/20',
  secondary: 'from-slate-500 to-slate-600 shadow-slate-500/20',
  success: 'from-emerald-500 to-green-500 shadow-emerald-500/20',
  warning: 'from-amber-400 to-yellow-500 shadow-amber-500/20',
  error: 'from-rose-500 to-pink-500 shadow-rose-500/20',
};

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  color
}) => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
            {title}
          </p>
          <p className="text-3xl font-bold text-slate-900 dark:text-slate-100 font-poppins">
            {value}
          </p>
          <div className="flex items-center gap-1 mt-2">
            <span className={`text-sm font-medium ${
              changeType === 'increase' ? 'text-emerald-600 dark:text-emerald-400' :
              changeType === 'decrease' ? 'text-rose-600 dark:text-rose-400' :
              'text-slate-500 dark:text-slate-400'
            }`}>
              {change}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              vs last month
            </span>
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center shadow-lg`}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
      </div>
    </Card>
  );
};