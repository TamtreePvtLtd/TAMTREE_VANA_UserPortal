import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  drawerContainer: {
    padding: '16px',
    height: '100%',
    justifyContent: 'space-between',
  },
  drawerHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2px',
  },
  drawerContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useStyles;
