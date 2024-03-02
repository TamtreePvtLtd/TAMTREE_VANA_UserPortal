import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import { styled } from '@mui/system';

import BarlowCondensedThin from '../../fonts/BarlowCondensed-Thin.ttf'; 
import BlackMango from '../../fonts/BlackMango-Medium.ttf';


const GlobalTypography = styled('div')({
  '@font-face': [
    {
      fontFamily: 'Barlow Condensed',
      src: `url(${BarlowCondensedThin}) format('truetype')`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Black Mango',
      src: `url(${BlackMango}) format('truetype')`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
  ],
});

function AboutByVana() {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        backgroundColor: " #FFE5CC",
        py: 4,
        marginBottom: 0,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "100%",
        }}
      >
        <Typography
          my={2}
          fontSize={matches ? "3vw" : "17px"}
          sx={{ opacity: 0.8 }}
        >
          YOU'RE REALLY PRETTY.
        </Typography>
        <GlobalTypography>
          <Typography
            variant="h4"  
          >
      <span style={{fontFamily:"Barlow Condensed",color:'#393535',fontWeight: "thin"}}>JEWELLERY BY</span>{' '}
      <span style={{fontFamily:"Black Mango",color:'#bf873b',fontWeight:400,fontSize:"30px"}}>VANA</span>
          </Typography>
        </GlobalTypography>
        <Typography
          variant="h6"
          fontSize={matches ? "3vw" : "17px"}
          fontFamily="Open Sans,sans-serif"
          sx={{ textAlign: "center", opacity: 0.8, py: 2 }}
        >
          Jewellery consists of decorative items worn for personal adornment,
          such as brooches, rings, necklaces, earrings, pendants, bracelets, and
          cufflinks. Jewellery may be attached to the body or the clothes. From
          a western perspective, the term is restricted to durable ornaments,
          excluding flowers for example. For many centuries metal such as gold
          often combined with gemstones, has been the normal material for
          jewellery, but other materials such as glass, shells and other plant
          materials may be used. Jewellery consists of decorative items worn for
          personal adornment, such as brooches, rings, necklaces, earrings,
          pendants, bracelets, and cufflinks.
        </Typography>
        <Link to="/aboutus">
          <Button
            variant="contained"
            sx={{
              color: "white",
              letterSpacing: "2px",
              borderRadius: 0,
              paddingX: 4,
              fontSize: "15px",
              backgroundColor: "#bf873b",
              "&:hover": {
                backgroundColor: "#bf873b",
              },
            }}
          >
            Read More
          </Button>
        </Link>
      </Container>
    </Box>
  );
}

export default AboutByVana;
