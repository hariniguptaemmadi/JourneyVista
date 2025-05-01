import React, { useState } from 'react';
import { useTravelGuide } from '../Context/TravelGuidecontext';
import { MapPin, Utensils, Calendar, Leaf, Map } from 'lucide-react';
import WeatherInfo from './WeatherInfo';
import MapView from './MapView';

const TravelGuide: React.FC = () => {
  const { stateData, selectedState } = useTravelGuide();
  const [activeTab, setActiveTab] = useState('attractions');

  if (!stateData || !selectedState) {
    return null;
  }

  const tabs = [
    { id: 'attractions', label: 'Attractions', icon: <MapPin size={18} /> },
    { id: 'culture', label: 'Culture', icon: <Calendar size={18} /> },
    { id: 'cuisine', label: 'Cuisine', icon: <Utensils size={18} /> },
    { id: 'eco', label: 'Eco Travel', icon: <Leaf size={18} /> },
    { id: 'map', label: 'Map', icon: <Map size={18} /> },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'attractions':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Top Attractions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stateData.attractions.map((attraction, index) => (
                <AttractionCard key={index} attraction={attraction} />
              ))}
            </div>
          </div>
        );
      case 'culture':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cultural Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">Local Festivals</h4>
                  <ul className="space-y-3">
                    {stateData.culture.festivals.map((festival, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block bg-orange-100 text-orange-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-1">
                          {index + 1}
                        </span>
                        <div>
                          <span className="font-medium">{festival.name}</span>
                          <p className="text-gray-600 text-sm">{festival.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">Arts & Crafts</h4>
                  <ul className="space-y-4">
                    {stateData.culture.arts.map((art, index) => (
                      <li key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                        <span className="font-medium text-gray-800">{art.name}</span>
                        <p className="text-gray-600 mt-1">{art.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case 'cuisine':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Regional Cuisine</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {stateData.cuisine.map((dish, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={dish.image} 
                      alt={dish.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800">{dish.name}</h4>
                    <p className="text-gray-600 mt-1 text-sm">{dish.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'eco':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Eco-friendly Travel</h3>
            <div className="bg-green-50 border border-green-100 p-5 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Sustainable Travel Tips</h4>
              <ul className="space-y-2">
                {stateData.eco.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Eco-friendly Spots</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stateData.eco.spots.map((spot, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-5">
                    <h5 className="font-semibold text-gray-800">{spot.name}</h5>
                    <p className="text-gray-600 mt-1">{spot.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'map':
        return <MapView state={selectedState} locations={stateData.attractions} />;
      default:
        return null;
    }
  };

  return (
    <div className="py-12 px-4 bg-amber-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Exploring {selectedState}
          </h2>
          <WeatherInfo weather={stateData.weather} />
        </div>

        <div className="mb-8">
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            {stateData.description}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-4 py-4 flex items-center whitespace-nowrap transition-colors
                    ${
                      activeTab === tab.id
                        ? 'border-b-2 border-orange-500 text-orange-600 font-medium'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-orange-50'
                    }
                  `}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="p-6">{renderTabContent()}</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Best Time to Visit</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stateData.bestTimeToVisit.map((season, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-lg text-gray-800 mb-2">{season.season}</h4>
                <p className="text-gray-600">{season.description}</p>
                <div className="mt-3 flex items-center text-sm text-gray-500">
                  <Calendar size={16} className="mr-1" />
                  <span>{season.months}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface AttractionProps {
  attraction: {
    name: string;
    description: string;
    image: string;
    location: string;
  };
}

const AttractionCard: React.FC<AttractionProps> = ({ attraction }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={attraction.image}
          alt={attraction.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 flex-grow">
        <h4 className="text-xl font-semibold mb-2 text-gray-800">{attraction.name}</h4>
        <p className="text-gray-600 mb-3">{attraction.description}</p>
        <div className="mt-auto flex items-center text-sm text-gray-500">
          <MapPin size={16} className="mr-1" />
          <span>{attraction.location}</span>
        </div>
      </div>
    </div>
  );
};

export default TravelGuide;