import { useState } from 'react';
import { IPlantDataItem, ProdDetails } from '../context/interfaces';

const defaultValueProd = {
  total: 0,
  khwTotal: 0,
  interval: 0,
};

const useBilling = () => {
  const [productionDetails, setProductionDetails] = useState<ProdDetails>(defaultValueProd);

  const integrate = (aux: IPlantDataItem[] | undefined) => {
    if (aux) {
      let khwSum = 0;

      const data = [...aux];
      const interval = data.reduce((acc, curr, index) => {
        if (index < data.length - 1) {
          khwSum += curr.potencia_kW;
          return acc + ((data[index + 1].tempo_h - curr.tempo_h));
        }
        return acc;
      }, 0);
      const khwTotal = ((interval / (aux?.length - 1)) * khwSum);

      const total = (khwTotal * 0.95);

      setProductionDetails({ total, khwTotal, interval });
    }
  };

  return {
    integrate,
    productionDetails,
  };
};

export default useBilling;
