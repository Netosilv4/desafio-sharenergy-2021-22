import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import ChartMenu from '../components/chartMenu';
import PlantGraph from '../components/plantGraph/desktopChart';
import Title from '../components/uiComponents/title';
import ChartToolTips from '../components/chartTooltips';
import { useDashboardStyles } from '../styles/dashboard';
import MobileChart from '../components/plantGraph/mobileChart';
import WelcomeText from '../components/uiComponents/welcome';
import { UserContext } from '../context/UserContext';

const PowerPlant: React.FC = () => {
  const classes = useDashboardStyles();

  const { user } = useContext(UserContext);

  return (
    <>
      <WelcomeText name={user ? user.nomeCliente : ''} />
      <Title pageTitle="Desempenho de usinas" />
      <ChartMenu displayFilter />
      <Grid container direction="row" spacing={3}>
        <Grid className={classes.chartContainer} item xs={12} sm={12} md={9}>
          <PlantGraph />
          <MobileChart />
        </Grid>
        <Grid className={classes.tooltipsContainer} item xs={12} sm={12} md={3}>
          <ChartToolTips />
        </Grid>
      </Grid>
    </>
  );
};

export default PowerPlant;
