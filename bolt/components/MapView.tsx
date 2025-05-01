import React from 'react';
import { MapPin } from 'lucide-react';

interface MapViewProps {
  state: string;
  locations: Array<{
    name: string;
    location: string;
  }>;
}

const MapView: React.FC<MapViewProps> = ({ state, locations }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Interactive Map</h3>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-4 text-blue-800 text-sm border border-blue-100">
        <p>This is a placeholder for an interactive map of {state}. In a production environment, this would integrate with a mapping API like Google Maps, Mapbox, or Leaflet to show the locations.</p>
      </div>
      
      <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
        {/* This is a placeholder for the map */}
        <div className="text-center px-4">
          <p className="text-gray-500 font-medium">Interactive Map of {state}</p>
          <p className="text-gray-400 text-sm mt-2">Showing {locations.length} attraction locations</p>
        </div>
        
        {/* Simulated location pins */}
        {locations.map((location, idx) => {
          // Generate random positions for the pins
          const top = 20 + Math.random() * 60;
          const left = 20 + Math.random() * 60;
          
          return (
            <div 
              key={idx}
              className="absolute"
              style={{ top: `${top}%`, left: `${left}%` }}
            >
              <div className="relative group">
                <MapPin size={24} className="text-red-500 cursor-pointer" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block min-w-max">
                  <div className="bg-white text-gray-800 text-xs rounded py-1 px-2 shadow-md whitespace-nowrap">
                    {location.name}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6">
        <h4 className="font-semibold text-gray-800 mb-3">Locations on Map</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {locations.map((location, idx) => (
            <div key={idx} className="flex items-center p-3 bg-white rounded-md shadow-sm">
              <MapPin size={16} className="text-red-500 mr-2 flex-shrink-0" />
              <span className="text-gray-700">{location.name} - {location.location}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapView;