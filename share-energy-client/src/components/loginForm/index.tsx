import React, { useContext } from 'react';
import {
  Grid, Paper, Button, TextField, Link, Checkbox, FormControlLabel, Slide, Typography,
} from '@material-ui/core';
import { useLoginStyles } from '../../styles/login';
import { Copyright } from '../copyright';
import { UserContext } from '../../context/UserContext';

export const LoginForm = () => {
  const classes = useLoginStyles();

  const {
    username, password, setUsername, setPassword, login, userErrorMessage,
  } = useContext(UserContext);

  return (
    <Slide direction="left" in mountOnEnter unmountOnExit timeout={{ enter: 600, exit: 100 }}>
      <Grid
        component={Paper}
        elevation={10}
        item
        xs={12}
        sm={7}
        md={4}
        className={classes.loginForm}
      >
        <div className={classes.loginForm}>
          <div>
            <img
              className={classes.logo}
              src="https://sharenergy.com.br/wp-content/uploads/2017/07/logo2_color-01-e1502902872425.png"
              alt="logo"
            />
          </div>
          <TextField
            id="username"
            label="Usuario"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="password"
            label="Senha"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <FormControlLabel
            control={<Checkbox value="Lembrar-me" />}
            label="Lembrar-me"
            style={{ fontSize: '50px' }}
          />
          <Typography variant="subtitle1" color="error">
            {userErrorMessage}
          </Typography>
          <Button onClick={() => login()} className={classes.button} variant="contained" color="secondary">Entrar</Button>
          <Link variant="body2" style={{ alignSelf: 'left' }} href="/">
            Esqueceu sua senha ?
          </Link>
          <Copyright />
        </div>
      </Grid>
    </Slide>
  );
};
