

import Drawer from '@mui/material/Drawer';
import useStyles from '../styles/cartDrawer'; 
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
 interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const MyBagDrawer = ({ open, onClose }:CartDrawerProps) => {
  const classes = useStyles();

  return (
    <Drawer anchor="right" open={open} onClose={onClose} >
      <Grid container direction="column" sx={{width:"378px"}} className={classes.drawerContainer}>
        <Grid container item className={classes.drawerHeader}>
          <Typography variant="h6">My Bag</Typography>
          <IconButton onClick={onClose}>
            < CloseIcon/>
          </IconButton>
        </Grid>

        <Grid container item direction="column" className={classes.drawerContent}>
          <IconButton>
            <ProductionQuantityLimitsIcon fontSize="large" style={{ fontSize: 150 }}/>
          </IconButton>
          <Typography variant="body1" gutterBottom>
            Your cart is empty
          </Typography>
          <Button variant="contained" color="primary" onClick={onClose}>
            Go to Shopping
          </Button>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default MyBagDrawer;
