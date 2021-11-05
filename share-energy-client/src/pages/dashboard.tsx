import { Grid } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import {
  Switch, Route, BrowserRouter,
} from 'react-router-dom';
import Header from '../components/header';
import PowerPlant from './powerPlant';
import TemporaryDrawer from '../components/sidebar';
import { ClienteManagerProvider } from '../context/ClientManagerContext';
import { PlantInfoContext } from '../context/PlantInfoContext';
import { UserContext } from '../context/UserContext';
import { useDashboardStyles } from '../styles/dashboard';
import ClientInfo from './clientInfo';
import FinancesInfo from './financesInfo';
import { FinancesContextProvider } from '../context/FinancesContext';

const Dashboard: React.FC = () => {
  const classes = useDashboardStyles();

  const { user } = useContext(UserContext);

  const { getPlantInfo } = useContext(PlantInfoContext);

  useEffect(() => {
    getPlantInfo(user?.token as string, user?.usuario as string, user?.tipo as string);
  }, []);

  return (
    <BrowserRouter>
      <ClienteManagerProvider>
        <FinancesContextProvider>
          <div className={classes.root}>
            <Header />
            <TemporaryDrawer />
            <Grid className={classes.contentContainer} container direction="column">
              <Switch>
                {user?.tipo === 'admin' && (<Route exact path="/clients" component={ClientInfo} />)}
                <Route exact path="/finances" component={FinancesInfo} />
                <Route path="/" component={PowerPlant} />
              </Switch>
            </Grid>
          </div>
        </FinancesContextProvider>
      </ClienteManagerProvider>
    </BrowserRouter>
  );
};

export default Dashboard;
