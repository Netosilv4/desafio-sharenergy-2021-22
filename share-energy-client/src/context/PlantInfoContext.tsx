import React, { createContext } from 'react';
import usePlantData from '../hooks/usePlantData';
import { IPlantContext } from './interfaces';

export const PlantInfoContext = createContext<IPlantContext>({} as IPlantContext);

export const PlantInfoProvider: React.FC = ({ children }) => {
  const {
    plantInfo, plantRequestError, getPlantInfo, selectPlant, selectedPlant, chartKey, setChartKey,
  } = usePlantData();
  return (
    <PlantInfoContext.Provider value={{
      plantInfo, plantRequestError, getPlantInfo, selectPlant, selectedPlant, chartKey, setChartKey,
    }}
    >
      {children}
    </PlantInfoContext.Provider>
  );
};
