import Box from "@mui/material/Box";
import AboutByVana from "./AboutByVana";
import HomePageBanner from "./HomePageBanner";
import NewArrivals from "./NewArrivals";
import { Container } from "@mui/material";

function Home() {
   
  return (
    <>
      <Box>
        <HomePageBanner />
      </Box>
      <Container>
        <Box
          sx={{
            mb: 2,
          }}
        >
          <NewArrivals />
        </Box>
      </Container>
      <Box
        sx={{
          mb: 2,
        }}
      >
        <AboutByVana />
      </Box>
    </>
  );
}

export default Home;



