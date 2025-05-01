import React from 'react';
import { Cloud, CloudRain, Sun, CloudSun } from 'lucide-react';

interface WeatherProps {
  weather: {
    condition: string;
    temperature: number;
    humidity: number;
  };
}

const WeatherInfo: React.FC<WeatherProps> = ({ weather }) => {
  const getWeatherIcon = () => {
    switch (weather.condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="w-8 h-8 text-gray-500" />;
      case 'rainy':
        return <CloudRain className="w-8 h-8 text-blue-500" />;
      default:
        return <CloudSun className="w-8 h-8 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white py-2 px-4 rounded-full shadow-sm flex items-center space-x-3 border border-gray-100">
      <div className="flex-shrink-0">{getWeatherIcon()}</div>
      <div>
        <div className="font-medium text-gray-800">{weather.temperature}°C</div>
        <div className="text-xs text-gray-500">{weather.condition}</div>
      </div>
    </div>
  );
};

export default WeatherInfo;