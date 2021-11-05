import { Hidden } from '@material-ui/core';
import React, { useContext } from 'react';
import {
  AreaChart, Tooltip, Area, ResponsiveContainer,
} from 'recharts';
import { PlantInfoContext } from '../../../context/PlantInfoContext';

const MobileChart: React.FC = () => {
  const { selectedPlant, chartKey } = useContext(PlantInfoContext);

  if (!selectedPlant) return null;

  return (
    <>
      <Hidden mdUp>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart
            data={selectedPlant.data}
            margin={{
              top: 10, bottom: 20,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area type="monotone" dataKey={chartKey} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
        </ResponsiveContainer>
      </Hidden>
    </>

  );
};
export default MobileChart;
