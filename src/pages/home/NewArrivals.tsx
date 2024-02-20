import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import CommonProductCard from "../../common/component/commonCard/CommonProductCard";
import { useGetAllItemsByCollectionName } from "../../hooks/CustomRQHooks";
import { IProduct } from "../../interface/type";
import Slider from "react-slick";

function NewArrivals() {
  const { data: NewArrivalsCollection } =
    useGetAllItemsByCollectionName("New Arrivals");

  const isLaptopScreen = useMediaQuery("(min-width:1000px)");
  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    autoplay: false,
    arrows: isLaptopScreen,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container sx={{ py: 1 }}>
      <Box pb={1}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            color: "black",
            lineHeight: 2,
            fontFamily: "cursive",
            fontSize: "30px",
            padding: 2,
            textAlign: "center",
          }}
        >
          New Arrival
        </Typography>
      </Box>
      <Box sx={{ position: "relative" }}>
        <Slider {...sliderSettings}>
          {(NewArrivalsCollection?.jewelleryItems ?? []).map(
            (product: IProduct) => (
              <Box px={2} key={product._id}>
                <CommonProductCard product={product} />
              </Box>
            )
          )}
        </Slider>
      </Box>
    </Container>
  );
}

export default NewArrivals;
