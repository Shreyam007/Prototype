import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  IndianRupee, 
  Bug,
  TrendingUp, 
  Activity,
  Eye,
  Clock,
  Target
} from 'lucide-react';
import { StatCard } from './StatCard';
import { RevenueChart, UserActivityChart, DeviceChart } from './Charts';
import { Card } from './ui/Card';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export const Dashboard: React.FC = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="p-6 space-y-6"
    >
      {/* Stats Grid */}
      <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Budget Alloted"
          value="₹8,42,460"
          change="+12.5%"
          changeType="increase"
          icon={IndianRupee}
          color="primary"
        />
        <StatCard
          title="Active Users"
          value="14,290"
          change="+8.2%"
          changeType="increase"
          icon={Users}
          color="secondary"
        />
        <StatCard
          title="Total Issues Reorted"
          value="28,470"
          change="-3.1%"
          changeType="decrease"
          icon={Bug}
          color="success"
        />
        <StatCard
          title="Issue Resolution Rate"
          value="23.8%"
          change="+2.4%"
          changeType="increase"
          icon={TrendingUp}
          color="warning"
        />
      </motion.div>

      {/* Charts Grid */}
      <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RevenueChart />
        <UserActivityChart />
      </motion.div>

      <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DeviceChart />
        
        {/* Recent Activity */}
        <Card className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Recent Activity
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Latest user interactions
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: Users, text: 'New issue reported from Pune', time: '2 min ago', color: 'text-cyan-500' },
              { icon: Bug, text: 'Issues Reported - Rewards Given ₹12,470', time: '5 min ago', color: 'text-emerald-500' },
              { icon: Eye, text: 'Page viewed 18,470 times', time: '12 min ago', color: 'text-blue-500' },
              { icon: Target, text: 'Monthly target achieved', time: '1 hour ago', color: 'text-amber-500' },
              { icon: Activity, text: 'System updated successfully', time: '2 hours ago', color: 'text-rose-500' },
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                <activity.icon className={`w-4 h-4 ${activity.color}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-900 dark:text-slate-100 truncate">
                    {activity.text}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <Clock className="w-3 h-3" />
                    {activity.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Quick Actions
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Common tasks and shortcuts
            </p>
          </div>
          <div className="space-y-3">
            {[
              { label: 'Report An Issue', color: 'cyan' },
              { label: 'Track Your Issue', color: 'blue' },
              { label: 'View Analytics', color: 'success' },
              { label: 'Export Data', color: 'warning' },
            ].map((action, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left p-3 rounded-xl transition-all duration-200 bg-gradient-to-r ${
                 action.color === 'cyan' ? 'from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/25' :
                 action.color === 'blue' ? 'from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25' :
                 action.color === 'success' ? 'from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/25' :
                 'from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25'
                } shadow-lg hover:shadow-xl`}
              >
                <span className="font-medium">{action.label}</span>
              </motion.button>
            ))}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};