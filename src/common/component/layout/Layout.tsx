import { Outlet } from "react-router";
import Nav from "../navbar/NavBar";
import SecondaryNavbar from "../navbar/SecondaryNavbar";
import Footer from "../../../footer/Footer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";

const Layout = () => {

  const isSmallScreen = useMediaQuery("(min-width:1000px)");
  return (
    <>
      <Nav/>
      <Box>{isSmallScreen && <SecondaryNavbar/>}</Box>
      <Divider/>
      <Box sx={{ marginTop: "5px" }}>
        <Outlet />
      </Box>
      <Footer/>
    </>
  );
};

export default Layout;