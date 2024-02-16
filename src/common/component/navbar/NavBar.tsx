import { useEffect, useState } from "react";
import { MouseEvent } from "react";
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
import Logout from "@mui/icons-material/Logout";
import vanaLogo from "../../../../public/assets/Images to Shruthi/logo/Jewellery By Vana LOGO.png";
import MyBagDrawer from "../../../drawer/MyBagDrawer";
import { paths } from "../../../routes/path";
import { CartItem } from "../../../interface/type";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAuthContext } from "../../../context/AuthContext";
import { LogOut, isAuthorized } from "../../../services/api";
import Tooltip from "@mui/material/Tooltip";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useSnackBar } from "../../../context/SnackBarContext";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {

  const isMobileView = useMediaQuery("(max-width:1000px)");
  const navigate = useNavigate();
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
  const [myBagDrawerOpen, setMyBagDrawerOpen] = useState(false);
  const [myBagCount, setMyBagCount] = useState(0);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const { user, updateUserData } = useAuthContext();
  const { updateSnackBarState } = useSnackBar();

  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: MouseEvent) => {
    setAnchorEl(event.currentTarget as HTMLButtonElement);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const checkIsAuthorized = async () => {
    await isAuthorized()
      .then((data) => {
        if (data) {
          updateUserData(data);
        } else {
          updateUserData(null);
        }
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log(error.response.data);
          updateSnackBarState(true, error.response.data.message, "error");
        }
      });
  };

  const handleLogoutClick = async () => {
    await LogOut()
      .then((response) => {
        if (response.status) {
          updateUserData(null);
          navigate(paths.ROOT);
          handleMenuClose();
        }
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log(error.response.data);
          updateSnackBarState(true, error.response.data.message, "error");
        }
      });
  };

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

  useEffect(() => {
    checkIsAuthorized();
  }, []);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          boxShadow: 0,
          height: isMobileView ? "90px" : "110px",
          bgcolor: "#ffffff",
        }}
      >
        <Toolbar>
          <Grid
            container
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
          >
            <Grid item xs={4} md={4}>
              {isMobileView ? (
                <Grid item xs={12}>
                  <Box>
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
                  <Box>
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
              <Link to="/">
                <Avatar
                  alt="Company Logo"
                  src={vanaLogo}
                  sx={{
                    backgroundColor: "#F6F6F6",
                    height: "100px",
                    width: "130px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </Link>
            </Grid>
            <Grid item xs={4} md={4}>
              <Box
                display={"flex"}
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                {user ? null : (
                  <IconButton color="inherit">
                    {" "}
                    <AccountCircleIcon onClick={moveToLogin} />
                  </IconButton>
                )}
                {user && (
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleMenuOpen}
                      size="small"
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <Avatar sx={{ width: 28, height: 28 }}>
                        {user?.userName ? user?.userName.toUpperCase()[0] : ""}
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                )}
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
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            "& .MuiAvatar-root": {
              width: 25,
              height: 25,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleLogoutClick}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;
