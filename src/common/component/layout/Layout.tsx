import { Outlet, useLocation } from "react-router";
import Nav from "../navbar/NavBar";
import SecondaryNavbar from "../navbar/SecondaryNavbar";
import Footer from "../../../footer/Footer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { paths } from "../../../routes/path";

const Layout = () => {

  const isSmallScreen = useMediaQuery("(min-width:1000px)");
  const location = useLocation();

  const isLoginOrSignup =
  location.pathname === `/${paths.LOGIN}` || location.pathname === `/${paths.SIGNUP}`;

  return (
    <>
      <Nav/>
      <Box>{isSmallScreen && <SecondaryNavbar/>}</Box>
      <Divider/>
      <Box sx={{ marginTop: "5px" }}>
        <Outlet />
      </Box>
      {!isLoginOrSignup && <Footer />}
    </>
  );
};

export default Layout;