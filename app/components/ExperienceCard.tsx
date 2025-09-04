'use client';

import { useState } from 'react';
import { Heart, Share, Eye, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExperienceCardProps {
  variant?: 'compact' | 'detailed';
  experience: {
    id: string;
    title: string;
    description: string;
    creator: string;
    price: string;
    imageUrl: string;
    likes: number;
    views: number;
    emotion: string;
    style: string;
  };
  onPurchase?: (id: string) => void;
}

export function ExperienceCard({ 
  variant = 'detailed', 
  experience, 
  onPurchase 
}: ExperienceCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      className="glass-card overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img
          src={experience.imageUrl}
          alt={experience.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-purple-500/80 text-xs font-medium text-white rounded-full">
            {experience.emotion}
          </span>
        </div>
        
        <div className="absolute top-3 right-3">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="p-2 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors"
          >
            <Heart 
              className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} 
            />
          </button>
        </div>

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-sm">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{experience.views}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart className="h-4 w-4" />
              <span>{experience.likes}</span>
            </div>
          </div>
          <span className="font-semibold text-cyan-400">{experience.price} ETH</span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-white truncate">
            {experience.title}
          </h3>
          <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded">
            {experience.style}
          </span>
        </div>
        
        {variant === 'detailed' && (
          <p className="text-white/70 text-sm mb-3 line-clamp-2">
            {experience.description}
          </p>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-white/60">
            by {experience.creator}
          </span>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-md transition-colors">
              <Share className="h-4 w-4" />
            </button>
            <motion.button
              onClick={() => onPurchase?.(experience.id)}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-400 text-white text-sm font-medium rounded-md hover:from-purple-600 hover:to-cyan-500 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Buy</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
