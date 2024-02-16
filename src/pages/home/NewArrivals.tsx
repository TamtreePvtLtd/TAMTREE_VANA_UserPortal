import { useEffect, useState } from "react";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { getNewArrivalProductsData } from "../../services/api";
import { IProduct } from "../../interface/type";
import CommonProductCard from "../../common/component/commonCard/CommonProductCard";
import Slider from "react-slick";

function NewArrivals() {
  const [newArrivalProducts, setNewArrivalProducts] = useState<IProduct[]>([]);
  const isBelowMediumScreen = useMediaQuery("(max-width:960px)");
  async function fetchData() {
    try {
      const newArrivalProducts = await getNewArrivalProductsData();
      setNewArrivalProducts(newArrivalProducts);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    // slidesToScroll: 1,
    autoplay: false,
    arrows: !isBelowMediumScreen,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container sx={{ py: 1 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pb={1}
      >
       <Typography
    variant="h5"
    sx={{
      margin: "0px 10px 0px 0px",
      fontWeight: 800,
      color: "black",
      lineHeight: 2,
      fontFamily: '"Crimson Text", serif', 
      fontStyle: "italic",
      fontSize:"35px",
      padding:2
    }}
  >
    New Arrival
  </Typography>
      </Box>
      <Box>
        <Slider {...sliderSettings}>
          {newArrivalProducts.map((product) => (
            <Box px={2}>
              <CommonProductCard product={product} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}

export default NewArrivals;
