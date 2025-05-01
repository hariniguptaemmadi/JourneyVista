import React, { createContext, useState, useContext, ReactNode } from 'react';
import { getStateData } from '/Users/hariniemmadi/Desktop/Projects/JourneyVista/bolt/Data/stateData.ts';

interface TravelGuideContextType {
  selectedState: string | null;
  setSelectedState: (state: string | null) => void;
  stateData: any;
  loading: boolean;
  fetchStateData: (state: string) => void;
}

const TravelGuideContext = createContext<TravelGuideContextType | undefined>(undefined);

export const TravelGuideProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [stateData, setStateData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchStateData = async (state: string) => {
    setLoading(true);
    try {
      // In a real app, this would be an API call
      // For this demo, we're using mock data
      const data = getStateData(state);
      
      // Simulate network delay
      setTimeout(() => {
        setStateData(data);
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error('Error fetching state data:', error);
      setLoading(false);
    }
  };

  return (
    <TravelGuideContext.Provider
      value={{
        selectedState,
        setSelectedState,
        stateData,
        loading,
        fetchStateData,
      }}
    >
      {children}
    </TravelGuideContext.Provider>
  );
};

export const useTravelGuide = (): TravelGuideContextType => {
  const context = useContext(TravelGuideContext);
  if (context === undefined) {
    throw new Error('useTravelGuide must be used within a TravelGuideProvider');
  }
  return context;
};