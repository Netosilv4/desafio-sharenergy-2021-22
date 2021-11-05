import { makeStyles } from '@material-ui/core/styles';

export const useLoginStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('./photovoltaic.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
  loginForm: {
    animation: 'fadeIn 0.5s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
    textAlign: 'center',
    gap: theme.spacing(2),
    width: '100%',
    padding: theme.spacing(4),
  },
  logo: {
    width: '60%',
    paddingBottom: theme.spacing(4),
  },
  button: {
    alignSelf: 'center',
    width: '100%',
    minWidth: '200px',
  },
  copyright: {
    position: 'absolute',
    bottom: theme.spacing(10),
    alignSelf: 'center',
  },
}));
