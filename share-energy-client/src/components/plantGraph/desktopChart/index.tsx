import { Hidden } from '@material-ui/core';
import React, { useContext } from 'react';
import {
  AreaChart, XAxis, YAxis, Tooltip, Area, Label, ResponsiveContainer,
} from 'recharts';
import { PlantInfoContext } from '../../../context/PlantInfoContext';

const PlantGraph: React.FC = () => {
  const { selectedPlant, chartKey } = useContext(PlantInfoContext);

  if (!selectedPlant) return null;

  return (
    <>
      <Hidden smDown>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={selectedPlant.data}
            margin={{
              top: 10, right: 10, left: 15, bottom: 20,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="50%" stopColor="#45508e" stopOpacity={0.8} />
                <stop offset="95%" stopColor="white" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="tempo_h">
              <Label value="Tempo - H" offset={-15} position="insideBottom" />
            </XAxis>
            <YAxis>
              <Label value={chartKey} angle={-90} position="left" />
            </YAxis>
            <Tooltip />
            <Area type="monotone" dataKey={chartKey} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
        </ResponsiveContainer>
      </Hidden>
    </>

  );
};
export default PlantGraph;
