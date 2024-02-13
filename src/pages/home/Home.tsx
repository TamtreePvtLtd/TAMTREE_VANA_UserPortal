import Box from "@mui/material/Box";
import AboutByVana from "./AboutByVana";
import HomePageBanner from "./HomePageBanner";
import NewArrivals from "./NewArrivals";

function Home() {
   
  return (
    <>
      <Box>
        <HomePageBanner />
      </Box>
      <Box
        sx={{
          mb: 2,
        }}
      >
        <NewArrivals />
      </Box>
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



