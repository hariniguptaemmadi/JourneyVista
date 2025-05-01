import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { useTravelGuide } from '../Context/TravelGuidecontext';
import { indianStates } from '../Data/states';

const StateSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { setSelectedState, fetchStateData } = useTravelGuide();

  const filteredStates = indianStates.filter((state) =>
    state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStateSelect = (state: string) => {
    setSearchTerm(state);
    setIsOpen(false);
    setSelectedState(state);
    fetchStateData(state);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm && indianStates.includes(searchTerm)) {
      setSelectedState(searchTerm);
      fetchStateData(searchTerm);
    } else if (filteredStates.length > 0) {
      handleStateSelect(filteredStates[0]);
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto" ref={dropdownRef}>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={() => setIsOpen(true)}
          placeholder="Enter an Indian state..."
          className="w-full py-3 px-4 pr-12 bg-white bg-opacity-90 border-2 border-orange-500 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-800"
        />
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500"
          aria-label="Toggle dropdown"
        >
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </form>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg max-h-60 overflow-auto">
          <div className="p-2">
            {filteredStates.length > 0 ? (
              filteredStates.map((state) => (
                <div
                  key={state}
                  onClick={() => handleStateSelect(state)}
                  className="cursor-pointer py-2 px-3 hover:bg-orange-100 rounded-md flex items-center transition-colors"
                >
                  {state}
                </div>
              ))
            ) : (
              <div className="py-2 px-3 text-gray-500">No states found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StateSelector;