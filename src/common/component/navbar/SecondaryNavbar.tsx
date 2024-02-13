import  AppBar  from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

import { paths } from '../../../routes/path';

const navItems = [
    { text: 'Home', link: paths.ROOT },
    { text: 'Earrings', link: paths.EARRINGS },
    { text: 'Necklaces', link:paths.NECKLACES },
    { text: 'Bracelets', link: paths.BRACELETS },
    { text: 'Best Seller', link: paths.BESTSELLER },
    { text: 'Aboutus', link: paths.FAQABOUT },
];

const SecondaryNavbar = () => {
  return (
    <AppBar position="static" sx={{ boxShadow: 0 ,bgcolor:"primary"}}>
      <Toolbar>
        <Grid container display={"flex"}  gap={12} justifyContent="center">
          {navItems.map((item) => (
            <Grid item key={item.text} xs="auto" fontSize={"18px"}>
              <Link href={item.link} sx={{textDecoration:"none",}} color="#ffffff">
                {item.text}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default SecondaryNavbar;
