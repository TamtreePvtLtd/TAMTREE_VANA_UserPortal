import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { getNewArrivalProductsData } from "../../services/api";
import { IProduct } from "../../interface/type";
import CommonProductCard from "../../common/component/commonCard/CommonProductCard";
import { paths } from "../../routes/path";
import { useNavigate } from "react-router";

function NewArrivals() {
  const [newArrivalProducts, setNewArrivalProducts] = useState<IProduct[]>([]);
  const handleMouseEnter = (productId: string) => {};
  const [hoveredProductImage, setHoveredProductImage] = useState<string | null>(
    null
  );
  const handleMouseLeave = () => { };
   const navigate = useNavigate();

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
          }}
        >
          New Arrival
        </Typography>
      </Box>
      <Box >
        <Button variant="contained" sx={{float:"right"}} onClick={() => navigate(`${paths.NEWARRIVALS}`)}> View ALL</Button>
      </Box>
      <Box>
        <Grid container spacing={2} justifyContent="center">
          {newArrivalProducts.map((product) => (
            <Grid item xs={12} md={3} sm={6}>
              <CommonProductCard
                product={product}
                // onMouseEnter={(productId: string) =>
                //   handleMouseEnter(productId)
                // }
                // onMouseLeave={() => handleMouseLeave()}
                // hoveredProductImage={hoveredProductImage}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default NewArrivals;
