import { Box, Typography } from "@mui/material";

function HomePageBanner() {
  return (
    <>
      <Box sx={{ textAlign: "center", py: 2 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            fontFamily: "cursive",
            fontStyle: "italic",
            color: "#eba460",
          }}
        >
          Shine bright, just like a diamond's light.
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "15px", py: 2 }}>
          Shine bright, a beacon in the night, With brilliance that dazzles,
          pure and white.
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundImage: "url('/public/images/2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "90vh",
          width: "100%",
          "@media (max-width: 600px)": {
            height: "35vh",
          },
        }}
      ></Box>
    </>
  );
}

export default HomePageBanner;
