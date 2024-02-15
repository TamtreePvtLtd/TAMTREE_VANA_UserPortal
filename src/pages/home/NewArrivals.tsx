import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { getNewArrivalProductsData } from "../../services/api";
import { Product } from "../../interface/type";
import CommonProductCard from "../../common/component/commonCard/CommonProductCard";

function NewArrivals() {
  const [newArrivalProducts, setNewArrivalProducts] = useState<Product[]>([]);
  const handleMouseEnter = (productId: string) => {};
  const [hoveredProductImage, setHoveredProductImage] = useState<string | null>(
    null
  );
  const handleMouseLeave = () => {};

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

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pb: "10px",
        }}
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
        <Grid container spacing={2} justifyContent="center">
          {newArrivalProducts.map((product) => (
            <Grid item xs={12} md={3} sm={6}>
              <CommonProductCard
                product={product}
                onMouseEnter={(productId: string) =>
                  handleMouseEnter(productId)
                }
                onMouseLeave={() => handleMouseLeave()}
                hoveredProductImage={hoveredProductImage}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default NewArrivals;
