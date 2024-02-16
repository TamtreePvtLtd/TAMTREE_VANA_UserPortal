import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

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
        <Typography
          variant="h4"
          fontWeight={"500"}
          fontFamily="cursive"
          fontSize="30px"
        >
          Jewellery by VANA
        </Typography>
        <Typography
          variant="h6"
          fontSize={matches ? "3vw" : "17px"}
          fontFamily="'Crimson Text','serif'"
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
              backgroundColor: "#e17c57",
              "&:hover": {
                backgroundColor: "#f2733d",
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
