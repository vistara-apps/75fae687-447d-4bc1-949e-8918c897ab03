'use client';

import { AppShell } from './components/AppShell';
import { PromptInputForm } from './components/PromptInputForm';
import { MetricsGrid } from './components/MetricsGrid';
import { AnalyticsChart } from './components/AnalyticsChart';
import { FeaturedExperiences } from './components/FeaturedExperiences';
import { motion } from 'framer-motion';

// Sample data for analytics
const engagementData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 1000 },
  { name: 'Jun', value: 1200 },
];

const conversionData = [
  { name: 'Week 1', value: 45 },
  { name: 'Week 2', value: 52 },
  { name: 'Week 3', value: 48 },
  { name: 'Week 4', value: 61 },
];

export default function Home() {
  const handleGenerate = async (prompt: string, emotion: string, style: string) => {
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, emotion, style }),
      });

      const data = await response.json();
      
      if (data.success) {
        console.log('Generated experience:', data.experience);
        // Handle successful generation (e.g., show modal, redirect, etc.)
      } else {
        console.error('Generation failed:', data.error);
      }
    } catch (error) {
      console.error('Error generating experience:', error);
    }
  };

  return (
    <AppShell>
      <div className="space-y-8">
        {/* Hero Section */}
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
              Remix
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Enter AI prompts for emotional experiences that boost engagement and drive business impact.
            </p>
          </div>

          {/* 3D Visual Element */}
          <motion.div
            className="relative max-w-md mx-auto mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-64 h-64 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse" />
              <div className="absolute inset-8 bg-gradient-to-r from-purple-500/50 to-cyan-400/50 rounded-full blur-2xl" />
              <div className="absolute inset-16 bg-gradient-to-r from-purple-500/70 to-cyan-400/70 rounded-full blur-xl" />
              <div className="absolute inset-20 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full flex items-center justify-center glow-effect">
                <span className="text-white text-4xl">🎭</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Prompt Input */}
        <div className="max-w-2xl mx-auto">
          <PromptInputForm 
            variant="withSuggestions" 
            onGenerate={handleGenerate}
          />
        </div>

        {/* Metrics */}
        <MetricsGrid />

        {/* Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnalyticsChart
            variant="bar"
            data={engagementData}
            title="Engagement Conversion"
            subtitle="User engagement with AI-generated experiences"
            color="#8b5cf6"
          />
          <AnalyticsChart
            variant="line"
            data={conversionData}
            title="Engagement & Conversion"
            subtitle="Designed emotional experiences turning into conversions"
            color="#06b6d4"
          />
        </div>

        {/* Featured Experiences */}
        <FeaturedExperiences />
      </div>
    </AppShell>
  );
}
