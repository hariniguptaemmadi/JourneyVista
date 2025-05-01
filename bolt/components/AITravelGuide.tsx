import React, { useState } from 'react';
import { Compass, Loader2, MapPin, Calendar, Utensils, Leaf } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { indianStates } from '../Data/states';

const AITravelGuide: React.FC = () => {
  const [state, setState] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setState(value);
    
    if (value.trim()) {
      const filtered = indianStates.filter(s => 
        s.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setState(suggestion);
    setSuggestions([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.trim()) return;

    setLoading(true);
    setError(null);
    setResponse(null);
    setSuggestions([]);

    try {
      // Mock API call - replace with actual AI API integration
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Enhanced mock response with specific details
      const mockResponse = `# Your Guide to ${state}

## 🏛️ Must-Visit Attractions

### Iconic Landmarks
* **${state} State Museum** - Home to rare artifacts and cultural exhibits
* **Ancient Temple Complex** - 12th-century architecture with intricate carvings
* **${state} Palace** - Former royal residence with guided tours available

### Hidden Gems
* **Local Artisan Village** - Watch traditional craftspeople at work
* **Sunset Point** - Panoramic views of the valley
* **Heritage Walking Trail** - 2km path through historic quarters

## 🎭 Cultural Experiences

### Festivals & Events
* **Spring Festival** (March) - Traditional dance performances and local music
* **Harvest Celebration** (September) - Agricultural festivities and folk games
* **Winter Fair** (December) - Handicraft exhibitions and cultural shows

### Arts & Traditions
* **Classical Dance Forms** - Daily performances at Cultural Center
* **Traditional Weaving** - Interactive workshops available
* **Folk Music Evenings** - Live performances at Heritage Square

## 🍽️ Local Cuisine

### Must-Try Dishes
* **Regional Thali** - Complete meal with local specialties
* **Traditional Sweets** - Made with local ingredients and ancient recipes
* **Street Food Specialties** - Available at the Night Market

### Where to Eat
* **Heritage Restaurant** - Fine dining with royal recipes
* **Local Food Street** - Authentic street food experience
* **Family-Run Eateries** - Home-style cooking

## 🌤️ Best Time to Visit

### Season Guide
* **Peak Season**: October to March
  * Pleasant temperatures (15-25°C)
  * Major festivals and events
* **Off-Season**: April to September
  * Some rain showers
  * Less crowded, better hotel rates

## 🌿 Sustainable Travel

### Eco-Friendly Options
* **Community Homestays** - Support local families
* **Organic Farm Visits** - Learn about traditional farming
* **Craft Workshops** - Support local artisans

### Green Tips
* Use local transport
* Choose eco-friendly accommodations
* Support community-based tourism initiatives`;

      setResponse(mockResponse);
    } catch (err) {
      setError('Failed to generate travel guide. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Compass className="h-12 w-12 text-orange-600" />
            <h1 className="ml-3 text-4xl font-bold text-gray-800">
              Journey<span className="text-orange-600">Vista</span>
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the authentic essence of India with our AI-powered travel guides, featuring local insights and cultural experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center text-orange-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="font-medium">Discover Places</span>
              </div>
              <div className="flex items-center text-orange-600">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="font-medium">Festival Calendar</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center text-orange-600">
                <Utensils className="h-5 w-5 mr-2" />
                <span className="font-medium">Local Cuisine</span>
              </div>
              <div className="flex items-center text-orange-600">
                <Leaf className="h-5 w-5 mr-2" />
                <span className="font-medium">Eco Travel</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <label htmlFor="state" className="block text-lg font-medium text-gray-800 mb-2">
                Which state would you like to explore?
              </label>
              <input
                type="text"
                id="state"
                value={state}
                onChange={handleInputChange}
                placeholder="Enter an Indian state (e.g., Kerala, Rajasthan)"
                className="w-full px-4 py-3 rounded-lg border-2 border-orange-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                disabled={loading}
              />
              {suggestions.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full text-left px-4 py-2 hover:bg-orange-50 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={loading || !state.trim()}
              className={`w-full py-4 px-6 rounded-lg font-medium text-white transition-colors
                ${loading || !state.trim() 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-orange-600 hover:bg-orange-700'}`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="animate-spin mr-2" size={20} />
                  Creating Your Personal Travel Guide...
                </span>
              ) : (
                'Generate Travel Guide'
              )}
            </button>
          </form>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 mb-8">
            {error}
          </div>
        )}

        {/* Guide Display */}
        {response && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="prose prose-orange prose-headings:text-gray-800 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl max-w-none">
              <ReactMarkdown>{response}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AITravelGuide;