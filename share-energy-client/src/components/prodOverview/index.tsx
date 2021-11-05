import React, { useContext } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { Grid } from '@material-ui/core';
import { PlantInfoContext } from '../../context/PlantInfoContext';
import { ProdDetails } from '../../context/interfaces';
import Loading from '../loading';
import { hoursConverter } from '../../utils';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ProdOverview({ productionDetails } : { productionDetails: ProdDetails }) {
  const classes = useStyles();

  const { selectedPlant } = useContext(PlantInfoContext);

  if (selectedPlant && productionDetails) {
    return (
      <Grid item xs={12} md={3}>
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Lucro do dia"
              secondary={`R$ ${productionDetails.total.toFixed(2)}`}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Total de energia produzida"
              secondary={`${productionDetails.khwTotal.toFixed(2)} kw`}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Intervalo médio de amostragem"
              secondary={`${hoursConverter(productionDetails.interval)} minutos`}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Inicio da amostragem"
              secondary={`${hoursConverter(selectedPlant.data[0].tempo_h)} hrs`}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Final da amostragem"
              secondary={`${hoursConverter(selectedPlant.data[selectedPlant.data.length - 1].tempo_h)} hrs`}
            />
          </ListItem>
        </List>
      </Grid>
    );
  } return <Loading />;
}
