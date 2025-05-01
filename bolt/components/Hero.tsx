import React, { useState } from 'react';
import StateSelector from './StateSelector';
import TravelGuide from './TravelGuide';
import { useTravelGuide } from '../Context/TravelGuidecontext';

const Hero: React.FC = () => {
  const { selectedState, loading } = useTravelGuide();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-[url('https://images.pexels.com/photos/6712070/pexels-photo-6712070.jpeg')] bg-cover bg-center h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Discover the Wonders of India
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Explore vibrant cultures, ancient heritage, and breathtaking landscapes across India's diverse states.
          </p>
          <StateSelector />
        </div>
      </div>

      {/* Travel Guide Section */}
      {selectedState && !loading && <TravelGuide />}

      {/* Feature Highlights Section (visible when no state is selected) */}
      {!selectedState && (
        <div className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Experience India Like Never Before
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon="🏯"
                title="Explore Attractions"
                description="Discover famous landmarks and hidden gems across every Indian state."
              />
              <FeatureCard
                icon="🍛"
                title="Authentic Cuisine"
                description="Savor the diverse flavors and culinary traditions from different regions."
              />
              <FeatureCard
                icon="🎭"
                title="Cultural Immersion"
                description="Experience local festivals, traditions, and art forms that define India's rich heritage."
              />
              <FeatureCard
                icon="🌦️"
                title="Travel Seasons"
                description="Find the perfect time to visit with seasonal information and real-time weather."
              />
              <FeatureCard
                icon="🌿"
                title="Eco-Friendly Travel"
                description="Explore sustainable options and lesser-known spots that preserve India's natural beauty."
              />
              <FeatureCard
                icon="🗺️"
                title="Interactive Maps"
                description="Visualize your journey with detailed maps highlighting key destinations."
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-amber-50 p-6 rounded-lg shadow-sm border border-amber-100 transition-transform duration-300 hover:transform hover:scale-105">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Hero;