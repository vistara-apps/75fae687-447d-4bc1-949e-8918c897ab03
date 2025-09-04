'use client';

import { ExperienceCard } from './ExperienceCard';
import { motion } from 'framer-motion';

const featuredExperiences = [
  {
    id: '1',
    title: 'Ethereal Dreamscape',
    description: 'A mesmerizing visual journey that evokes wonder and transcendence through flowing organic forms.',
    creator: 'ArtisanAI',
    price: '0.08',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop',
    likes: 142,
    views: 1205,
    emotion: 'Wonder',
    style: 'Abstract',
  },
  {
    id: '2',
    title: 'Neon Pulse',
    description: 'High-energy cyberpunk experience designed to inspire action and urgency.',
    creator: 'CyberCreator',
    price: '0.12',
    imageUrl: 'https://images.unsplash.com/photo-1541950516082-5c9d2c7c20c9?w=400&h=300&fit=crop',
    likes: 89,
    views: 756,
    emotion: 'Excitement',
    style: 'Cyberpunk',
  },
  {
    id: '3',
    title: 'Serene Forest Path',
    description: 'Calming natural environment that promotes mindfulness and inner peace.',
    creator: 'NatureFlow',
    price: '0.05',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
    likes: 203,
    views: 1834,
    emotion: 'Calm',
    style: 'Nature',
  },
];

export function FeaturedExperiences() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Featured Experiences</h2>
        <button className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
          View All
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredExperiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ExperienceCard
              experience={experience}
              onPurchase={(id) => console.log('Purchase experience:', id)}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
