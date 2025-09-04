'use client';

import { Home, Zap, BarChart3, ShoppingBag, Bell, Settings, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Dashboard', icon: Home, current: true },
  { name: 'Create', icon: Zap, current: false },
  { name: 'Analytics', icon: BarChart3, current: false },
  { name: 'Marketplace', icon: ShoppingBag, current: false },
  { name: 'Notifications', icon: Bell, current: false },
  { name: 'Settings', icon: Settings, current: false },
  { name: 'Help', icon: HelpCircle, current: false },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-white/5 backdrop-blur-md border-r border-white/10">
      <div className="flex h-16 items-center px-6">
        <motion.div 
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="text-xl font-bold text-gradient">Remix</span>
        </motion.div>
      </div>
      
      <nav className="px-4 pt-8 space-y-2">
        {navigation.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.name}
              href="#"
              className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                item.current
                  ? 'bg-purple-500/20 text-purple-300 border-l-2 border-purple-400'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </motion.a>
          );
        })}
      </nav>
    </div>
  );
}
