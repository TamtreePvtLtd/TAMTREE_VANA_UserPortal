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
    location.pathname === `/${paths.LOGIN}` ||
    location.pathname === `/${paths.SIGNUP}`;

 const isProductDetailPage = location.pathname.startsWith(
   `/${paths.PRODUCTDETAIL.split("/")[1]}`
 );

  return (
    <>
      <Box style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <Nav />
      </Box>
      <Box style={{ position: "sticky", top: "110px", zIndex: 1000 }}>
        {isSmallScreen && <SecondaryNavbar />}
      </Box>
      <Divider />
      <Box sx={{ marginTop: "5px" }}>
        <Outlet />
      </Box>
      {!isLoginOrSignup && !isProductDetailPage && <Footer />}
    </>
  );
};

export default Layout;
