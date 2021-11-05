import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PowerIcon from '@material-ui/icons/Power';
import { ComponentsContext } from '../../context/ComponentsContext';
import { UserContext } from '../../context/UserContext';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});
export type Anchor = 'left' | 'right';

export default function TemporaryDrawer() {
  const classes = useStyles();

  const { user } = useContext(UserContext);

  const history = useHistory();

  const { sidebarState, toggleDrawer } = useContext(ComponentsContext);

  const { logout } = useContext(UserContext);

  const routes = user?.tipo === 'admin' ? [['Usinas', '/'], ['Financeiro', '/finances'], ['Clientes', '/clients']]
    : [['Usinas', '/'], ['Financeiro', '/finances']];

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List>
        {routes.map((text, index) => (
          <ListItem button onClick={() => history.push(text[1])} key={text[0]}>
            <ListItemIcon>
              {index % 2 === 0 ? <PowerIcon /> : <MonetizationOnIcon />}
            </ListItemIcon>
            <ListItemText primary={text[0]} />
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        <ListItem onClick={() => logout()} button>
          <ListItemIcon><ExitToAppIcon /></ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItem>
      </List>

    </div>
  );

  return (
    <div>
      <Drawer anchor="left" open={sidebarState.left} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
    </div>
  );
}
