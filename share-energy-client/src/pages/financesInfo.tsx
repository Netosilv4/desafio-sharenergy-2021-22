import { Grid } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import ChartMenu from '../components/chartMenu';
import FinanceTable from '../components/financeTable';
import ProdOverview from '../components/prodOverview';
import Title from '../components/uiComponents/title';
import { FinancesContext } from '../context/FinancesContext';
import { IPlantDataItem } from '../context/interfaces';
import { PlantInfoContext } from '../context/PlantInfoContext';

const FinancesInfo = () => {
  const { selectedPlant } = useContext(PlantInfoContext);

  const { productionDetails, integrate } = useContext(FinancesContext);

  useEffect(() => {
    integrate(selectedPlant?.data as IPlantDataItem[]);
  }, [selectedPlant]);

  if (selectedPlant && productionDetails) {
    return (
      <>
        <Title pageTitle="Faturamento " />
        <ChartMenu displayFilter={false} />
        <Grid id="pdf-element" container direction="row" spacing={2}>
          <ProdOverview productionDetails={productionDetails} />
          <FinanceTable productionDetails={productionDetails} />
        </Grid>
      </>
    );
  }

  return <h1>Loading</h1>;
};

export default FinancesInfo;
