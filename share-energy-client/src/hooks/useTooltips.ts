/* eslint-disable no-restricted-properties */
import { IPlantDataItem } from '../context/interfaces';

const useTooltips = () => {
  const getMin = (
    data: IPlantDataItem[], key: keyof IPlantDataItem,
  ) => Math.min(...data.map((item) => item[key]));

  const getMax = (
    data: IPlantDataItem[], key: keyof IPlantDataItem,
  ) => Math.max(...data.map((item) => item[key]));

  const getStandardDeviation = (
    data: IPlantDataItem[], key: keyof IPlantDataItem,
  ) => {
    const avg = data.reduce((acc, cur) => acc + cur[key], 0) / data.length;
    const sum = data.reduce((acc, cur) => acc + Math.pow(cur[key] - avg, 2), 0);
    return Math.sqrt(sum / data.length).toFixed(2);
  };

  const getAverage = (
    data: IPlantDataItem[], key: keyof IPlantDataItem,
  ) => {
    const sum = data.reduce((acc, cur) => acc + cur[key], 0);
    return (sum / data.length).toFixed(2);
  };

  return {
    getMin,
    getMax,
    getAverage,
    getStandardDeviation,
  };
};

export default useTooltips;
