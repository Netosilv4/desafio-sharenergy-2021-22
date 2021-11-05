import React, { useContext } from 'react';
import {
  Grid, InputLabel, MenuItem, Select,
} from '@material-ui/core';
import { useDashboardStyles } from '../../styles/dashboard';
import { PlantInfoContext } from '../../context/PlantInfoContext';
import { IPlantDataItem } from '../../context/interfaces';
import Loading from '../loading';

const ChartMenu = ({ displayFilter } : { displayFilter: boolean }) => {
  const classes = useDashboardStyles();

  const {
    plantInfo, selectPlant, selectedPlant, chartKey, setChartKey,
  } = useContext(PlantInfoContext);

  if (plantInfo && selectedPlant) {
    return (
      <Grid className={classes.chartMenu} item container direction="row">

        <InputLabel className={classes.inputLabel}>
          <span>Selecione uma usina</span>
          <Select
            onChange={(event) => selectPlant(event.target.value as string)}
            value={plantInfo && !selectedPlant ? plantInfo[0].plantName : selectedPlant?.plantName}
          >
            {plantInfo?.map((plant) => (
              <MenuItem
                value={plant.plantName}
                key={plant.plantName}
              >
                {plant.plantName}
              </MenuItem>
            ))}
          </Select>
        </InputLabel>

        {
          displayFilter && (
            <InputLabel className={classes.inputLabel}>
              <span>Filtar por</span>
              <Select
                onChange={(event) => setChartKey(
                  event.target.value as keyof IPlantDataItem,
                )}
                value={chartKey}
              >
                {plantInfo
                  ? Object.keys(plantInfo[0].data[0]).filter((e) => e !== 'tempo_h').map((key) => (
                    <MenuItem value={key} key={key}>
                      {key}
                    </MenuItem>
                  )) : ''}
              </Select>
            </InputLabel>
          )
    }
      </Grid>
    );
  } return <Loading />;
};

export default ChartMenu;
