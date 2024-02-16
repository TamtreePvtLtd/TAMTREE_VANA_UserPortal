import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { useLocation } from "react-router-dom"; // Import useLocation
import { paths } from "../../../routes/path";
import { AppBar } from "@mui/material";

interface NavItem {
  text: string;
  link: string;
}

// Dummy data for demonstration
const navItems: NavItem[] = [
  { text: "Home", link: paths.ROOT },
  { text: "Earrings", link: paths.EARRINGS },
  { text: "Necklaces", link: paths.NECKLACES },
  { text: "Bracelets", link: paths.BRACELETS },
  { text: "Best Seller", link: paths.BESTSELLER },
  { text: "New Arrivals", link: paths.NEWARRIVALS },
  { text: "Aboutus", link: paths.FAQABOUT },
];

const SecondaryNavbar: React.FC = () => {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      sx={{ boxShadow: 0, bgcolor: "primary", zIndex: 1 }}
    >
      <Toolbar>
        <Grid
          container
          display={"flex"}
          gap={12}
          justifyContent="center"
          fontFamily={"cursive"}
        >
          {navItems.map((item) => (
            <Grid item key={item.text} xs="auto" fontSize={"18px"}>
              <Link
                href={item.link}
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  borderBottom:
                    item.link === paths.ROOT
                      ? location.pathname === item.link
                        ? "1px solid black"
                        : "none"
                      : location.pathname.includes(item.link)
                      ? "1px solid black"
                      : "none",
                }}
              >
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
