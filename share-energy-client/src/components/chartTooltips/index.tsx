import {
  Avatar,
  Grid, ListItem, ListItemText,
} from '@material-ui/core';
import React, { useContext } from 'react';
import {
  CgMathPlus, CgMathDivide, CgMathMinus, CgMathPercent,
} from 'react-icons/cg';
import { PlantInfoContext } from '../../context/PlantInfoContext';
import useTooltips from '../../hooks/useTooltips';
import { useDashboardStyles } from '../../styles/dashboard';
import { prefix } from '../../utils';

const ChartToolTips = () => {
  const { selectedPlant, chartKey } = useContext(PlantInfoContext);

  const classes = useDashboardStyles();

  const {
    getAverage, getMax, getMin, getStandardDeviation,
  } = useTooltips();

  return (
    <Grid container spacing={2} direction="row">
      <Grid xs={6} md={12} item>
        <ListItem className={classes.tooltipsWrapper}>
          <Avatar className={classes.tooltipsAvatar} style={{ backgroundColor: 'red' }}>
            <CgMathPlus />
          </Avatar>
          <ListItemText
            primary="Máxima"
            secondary={chartKey && selectedPlant
              ? `${getMax(selectedPlant.data, chartKey)} ${prefix(chartKey)}` : '-'}
          />
        </ListItem>
      </Grid>

      <Grid xs={6} md={12} item>
        <ListItem className={classes.tooltipsWrapper}>
          <Avatar className={classes.tooltipsAvatar} style={{ backgroundColor: 'orange' }}>
            <CgMathDivide />
          </Avatar>
          <ListItemText
            primary="Média"
            secondary={chartKey && selectedPlant
              ? `${getAverage(selectedPlant.data, chartKey)} ${prefix(chartKey)}` : '-'}
          />
        </ListItem>
      </Grid>

      <Grid xs={6} md={12} item>
        <ListItem className={classes.tooltipsWrapper}>
          <Avatar className={classes.tooltipsAvatar} style={{ backgroundColor: 'black' }}>
            <CgMathMinus />
          </Avatar>
          <ListItemText
            primary="Mínimo"
            secondary={chartKey && selectedPlant
              ? `${getMin(selectedPlant.data, chartKey)} ${prefix(chartKey)}` : '-'}
          />
        </ListItem>
      </Grid>

      <Grid xs={6} md={12} item>
        <ListItem className={classes.tooltipsWrapper}>
          <Avatar className={classes.tooltipsAvatar} style={{ backgroundColor: 'blue' }}>
            <CgMathPercent />
          </Avatar>
          <ListItemText
            primary="Des. Padrão"
            secondary={chartKey && selectedPlant
              ? `${getStandardDeviation(selectedPlant.data, chartKey)} ${prefix(chartKey)}` : '-'}
          />
        </ListItem>
      </Grid>

    </Grid>
  );
};

export default ChartToolTips;
