'use client';

import { useState } from 'react';
import { Sparkles, Wand2, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface PromptInputFormProps {
  variant?: 'default' | 'withSuggestions';
  onGenerate?: (prompt: string, emotion: string, style: string) => void;
}

const emotions = [
  'Joy', 'Excitement', 'Calm', 'Inspiration', 'Trust', 'Urgency', 'Nostalgia', 'Wonder'
];

const styles = [
  'Minimalist', 'Cyberpunk', 'Nature', 'Abstract', 'Retro', 'Futuristic', 'Organic', 'Geometric'
];

export function PromptInputForm({ variant = 'default', onGenerate }: PromptInputFormProps) {
  const [prompt, setPrompt] = useState('');
  const [selectedEmotion, setSelectedEmotion] = useState('Joy');
  const [selectedStyle, setSelectedStyle] = useState('Minimalist');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    try {
      await onGenerate?.(prompt, selectedEmotion, selectedStyle);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <motion.div 
      className="glass-card p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Create Emotional Experience
          </h2>
          <p className="text-white/70">
            Enter AI prompts for emotional experiences that drive engagement
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Experience Prompt
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the emotional experience you want to create..."
              className="w-full p-4 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              rows={4}
            />
          </div>

          {variant === 'withSuggestions' && (
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Target Emotion
                </label>
                <div className="relative">
                  <select
                    value={selectedEmotion}
                    onChange={(e) => setSelectedEmotion(e.target.value)}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                  >
                    {emotions.map((emotion) => (
                      <option key={emotion} value={emotion} className="bg-gray-800">
                        {emotion}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Visual Style
                </label>
                <div className="relative">
                  <select
                    value={selectedStyle}
                    onChange={(e) => setSelectedStyle(e.target.value)}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                  >
                    {styles.map((style) => (
                      <option key={style} value={style} className="bg-gray-800">
                        {style}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                </div>
              </div>
            </motion.div>
          )}

          <motion.button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-semibold rounded-md hover:from-purple-600 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isGenerating ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Generating...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <Wand2 className="h-4 w-4" />
                <span>Generate Experience</span>
              </div>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
