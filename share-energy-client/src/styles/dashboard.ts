import { makeStyles } from '@material-ui/core/styles';

export const useDashboardStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    overflowX: 'hidden',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
  },
  header: {
    backgroundColor: 'black',
    width: '100vw',
    height: '8vh',
    alignItems: 'center',
    padding: theme.spacing(1),
    justifyContent: 'space-between',
    paddingRight: theme.spacing(2),
  },
  box: {
    display: 'flex',
    gap: '1vw',
    alignItems: 'flex-end',
  },
  icons: {
    color: 'white',
    fontSize: '30px',
    cursor: 'pointer',
  },
  contentContainer: {
    paddingTop: theme.spacing(2),
    paddingLeft: '3vw',
    gap: '2vh',
  },
  inputLabel: {
    display: 'flex',
    gap: '1vw',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 'bold',
  },
  chartMenu: {
    gap: '0.5rem',
    paddingBottom: '1vw',
  },
  tooltipsWrapper: {
    display: 'flex',
    gap: '1vw',
  },
  tooltipsContainer: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  modalWrapper: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editClientModal: {
    display: 'flex',
    width: '80vw',
    height: '80vh',
    backgroundColor: 'white',
    alignItems: 'center',
    gap: '1vw',
    padding: '5vw',
    borderRadius: '1vw',
    overflowY: 'scroll',
  },
  table: {
    width: '95%',
    border: '1px solid rgba(0,0,0,0.3)',
    boxShadow: '5px 5px 4px rgba(0,0,0,0.75)',
  },
  chartContainer: {
    height: '60vh',
    [theme.breakpoints.down('sm')]: {
      height: '100%',
    },
  },
  tooltipsAvatar: {
    width: '30px',
    height: '30px',
    marginRight: '1vw',
  },
}));
