import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import NavbarDrawer from "../../../drawer/NavBarDrawer";
import SearchDrawer from "../../../drawer/SearchDrawer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import vanaLogo from "../../../../public/assets/Images to Shruthi/logo/Jewellery By Vana LOGO.png";
import MyBagDrawer from "../../../drawer/MyBagDrawer";

import { paths } from "../../../routes/path";
import { CartItem } from "../../../interface/type";

const Navbar = () => {
  const location = useLocation();
  const isMobileView = useMediaQuery("(max-width:1000px)");

  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
  const [myBagDrawerOpen, setMyBagDrawerOpen] = useState(false);
  const [myBagCount, setMyBagCount] = useState(0);

  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setNavDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setNavDrawerOpen(false);
  };

  const handleSearchDrawerOpen = () => {
    setSearchDrawerOpen(true);
  };

  const handleSearchDrawerClose = () => {
    setSearchDrawerOpen(false);
  };

  const handleMyBagDrawerOpen = () => {
    setMyBagDrawerOpen(true);
  };

  const handleMyBagDrawerClose = () => {
    setMyBagDrawerOpen(false);
  };

  const moveToLogin = () => {
    navigate(`/${paths.LOGIN}`, { state: { fromNavbar: true } });
  };

  useEffect(() => {
    const cartItems: CartItem[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
    let totalQuantity = 0;
    for (const item of cartItems) {
      totalQuantity += item.quantity;
    }
    setMyBagCount(cartItems.length);
  }, []);

  return (
    <>
      <AppBar
        position="static"
        sx={{ boxShadow: 0, height: "110px", bgcolor: "#ffffff" }}
      >
        <Toolbar>
          <Grid
            container
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            padding={2}
          >
            <Grid item xs={4} md={4}>
              {isMobileView ? (
                <Grid item xs={12}>
                  <Box display={"flex"}>
                    <IconButton color="inherit" onClick={handleDrawerOpen}>
                      <MenuIcon />
                    </IconButton>
                    <IconButton
                      color="inherit"
                      onClick={handleSearchDrawerOpen}
                    >
                      <SearchIcon />
                    </IconButton>
                  </Box>
                </Grid>
              ) : (
                <Grid item xs={12} md={8}>
                  <Box sx={{ width: "100%", padding: "8px" }}>
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      onClick={handleSearchDrawerOpen}
                      placeholder="Search..."
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "#754a39 ",
                          "& fieldset": {
                            border: "none",
                          },
                        },
                        "& .MuiSvgIcon-root": {
                          marginRight: "8px",
                        },
                      }}
                      InputProps={{
                        startAdornment: <SearchIcon />,
                        notched: false,
                      }}
                    />
                  </Box>
                </Grid>
              )}
            </Grid>
            <Grid
              item
              xs={4}
              md={4}
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Avatar
                alt="Company Logo"
                src={vanaLogo}
                sx={{
                  backgroundColor: "#F6F6F6",
                  height: "100px",
                  width: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </Grid>
            <Grid item xs={4} md={4}>
              <Box
                display={"flex"}
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <IconButton color="inherit">
                  <AccountCircleIcon onClick={moveToLogin} />
                </IconButton>
                <Link to={`/${paths.MY_BAG}`} style={{ textDecoration: 'none', color: location.pathname === `/${paths.MY_BAG}` ? '#754a39' : 'inherit' }}></Link>
                <IconButton color="inherit" onClick={handleMyBagDrawerOpen}>
                  <Badge badgeContent={myBagCount} color="secondary">
                    <ShoppingBasketIcon />
                  </Badge>
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Divider sx={{ width: "80%", margin: "auto" }} />
      <NavbarDrawer open={navDrawerOpen} onClose={handleDrawerClose} />
      <SearchDrawer open={searchDrawerOpen} onClose={handleSearchDrawerClose} />
      <MyBagDrawer open={myBagDrawerOpen} onClose={handleMyBagDrawerClose} />
    </>
  );
};

export default Navbar;
