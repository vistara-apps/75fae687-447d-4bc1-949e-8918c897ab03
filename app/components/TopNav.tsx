'use client';

import { Search, Bell, User } from 'lucide-react';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Identity, Name, Avatar } from '@coinbase/onchainkit/identity';
import { useAccount } from 'wagmi';
import { motion } from 'framer-motion';

export function TopNav() {
  const { address, isConnected } = useAccount();

  return (
    <header className="h-16 border-b border-white/10 bg-white/5 backdrop-blur-md">
      <div className="flex items-center justify-between h-full px-6">
        <motion.div 
          className="flex items-center space-x-4 flex-1 max-w-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
            <input
              type="text"
              placeholder="Search experiences..."
              className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </motion.div>

        <motion.div 
          className="flex items-center space-x-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <button className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-md transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          
          {isConnected && address ? (
            <div className="flex items-center space-x-2 px-3 py-1 bg-white/10 rounded-md">
              <Avatar address={address} />
              <Name address={address} />
            </div>
          ) : (
            <ConnectWallet />
          )}
        </motion.div>
      </div>
    </header>
  );
}
