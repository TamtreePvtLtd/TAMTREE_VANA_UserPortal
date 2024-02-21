import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { paths } from "../routes/path";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import { Divider } from "@mui/material";

interface NavbarDrawerProps {
  open: boolean;
  onClose: () => void;
}

const NavbarDrawer = ({ open, onClose }: NavbarDrawerProps) => {
  const drawerItems = [
    { text: "Home", link: paths.ROOT },
    { text: "Ear Rings", link: paths.EARRINGS },
    { text: "Necklaces", link: paths.NECKLACES },
    { text: "Bracelets", link: paths.BRACELETS },
    { text: "New Arrivals", link: paths.NEWARRIVALS },
    { text: "Best Seller", link: paths.BESTSELLER },
    { text: "FAQ/Aboutus", link: paths.FAQABOUT },
  ];

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: "250px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" sx={{ marginLeft: 1, color: "#eba460" }}>
            VANA
          </Typography>
          <IconButton onClick={onClose}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {drawerItems.map((item, index) => (
            <ListItemButton
              key={index}
              component={Link}
              to={item.link}
              onClick={onClose}
            >
              <ListItemText>
                <Typography variant="body1" sx={{ fontFamily: "cursive" }}>
                  {item.text}
                </Typography>
              </ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default NavbarDrawer;
