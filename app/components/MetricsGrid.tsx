'use client';

import { TrendingUp, Users, Zap, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const metrics = [
  {
    name: 'Engagement Conversion',
    value: '1,199.00%',
    change: '+12.5%',
    changeType: 'increase',
    icon: TrendingUp,
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'Active Users',
    value: '8,549',
    change: '+4.3%',
    changeType: 'increase',
    icon: Users,
    color: 'from-cyan-400 to-cyan-500',
  },
  {
    name: 'Experience Generated',
    value: '1.5%',
    change: '+0.2%',
    changeType: 'increase',
    icon: Zap,
    color: 'from-green-400 to-green-500',
  },
  {
    name: 'Revenue',
    value: '$12.4K',
    change: '+8.1%',
    changeType: 'increase',
    icon: DollarSign,
    color: 'from-yellow-400 to-yellow-500',
  },
];

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <motion.div
            key={metric.name}
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 bg-gradient-to-r ${metric.color} rounded-lg`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <span className={`text-sm font-medium ${
                metric.changeType === 'increase' ? 'text-green-400' : 'text-red-400'
              }`}>
                {metric.change}
              </span>
            </div>
            
            <div>
              <p className="text-2xl font-bold text-white mb-1">{metric.value}</p>
              <p className="text-sm text-white/60">{metric.name}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
