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
      <Box style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <Nav />
      </Box>
      <Box style={{ position: "sticky", top: "110px", zIndex: 1000 }}>
        {isSmallScreen && <SecondaryNavbar />}
        <Divider />
      </Box>

      <Box sx={{ marginTop: "5px" }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
