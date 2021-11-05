import axios from 'axios';
import { useEffect, useState } from 'react';
import { IPlantDataItem, IPlantInfo } from '../context/interfaces';

const usePlantData = () => {
  const [plantInfo, setPlantInfo] = useState<IPlantInfo[] | undefined>(undefined);

  const [selectedPlant, setSelectedPlant] = useState<IPlantInfo>();

  const [chartKey, setChartKey] = useState<keyof IPlantDataItem>('potencia_kW');

  const [plantRequestError, setPlantRequestError] = useState<string | undefined>(undefined);

  const selectPlant = (plantName : string) => {
    const plant = plantInfo?.find((e: IPlantInfo) => e.plantName === plantName);
    setSelectedPlant(plant);
  };

  const getPlantInfo = async (token: string, username: string, type: string) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      const response = await axios.get(`http://localhost:8080/powerplants?username=${username}&type=${type}`);
      setPlantRequestError(undefined);
      return setPlantInfo(response.data.plantData);
    } catch (err : any) {
      if (err.response) {
        return setPlantRequestError(err.response.data.message);
      }
      return setPlantRequestError(err.message);
    }
  };

  useEffect(() => (plantInfo ? setSelectedPlant(plantInfo[0])
    : setSelectedPlant(undefined)), [plantInfo]);

  return {
    plantInfo,
    getPlantInfo,
    plantRequestError,
    selectedPlant,
    selectPlant,
    chartKey,
    setChartKey,
  };
};

export default usePlantData;
