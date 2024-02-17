import { useEffect, useState } from "react";
import { Box, Divider } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import {  useParams } from "react-router";
import { useProductDetailById } from "../hooks/CustomRQHooks";
import { CartItem } from "../interface/type";
import CustomSnackBar from "../common/CustomSnackBar";
import { useSnackBar } from "../context/SnackBarContext";


function ProductDetail() {
  const { productId } = useParams();
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { updateSnackBarState } = useSnackBar();
  const [showSnackbar, setShowSnackbar] = useState(false); 

  const productDetailQuery = useProductDetailById(productId ?? "");

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleImageClick = (image: string) => {
    setMainImage(image);
  };

  const productDetails = productDetailQuery.data;

  useEffect(() => {
    if (productDetails && productDetails.images.length > 0) {
      setMainImage(productDetails.images[0]);
    }
  }, [productDetails]);

  const addToCart = () => {
    const cartItem: CartItem = {
      _id: productId! || productDetails?._id!,
      quantity: quantity || productDetails?.quantity!,
      posterURL: "" || productDetails?.posterURL!,
      title: "" || productDetails?.title!,
      price: 0 || productDetails?.price!,
    };
    let existingCart: CartItem[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
    const existingItemIndex = existingCart.findIndex(
      (item) => item._id === productId
    );
    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].quantity += quantity;
    } else {
      existingCart.push(cartItem);
    }
    localStorage.setItem("cart", JSON.stringify(existingCart));
    setQuantity(1);
    console.log(existingCart);
    setShowSnackbar(true);
    // Trigger the Snackbar using the context
    updateSnackBarState(true, "Added to Cart Successfully", "success");
  };

  return (
    <Container sx={{ mb: 15 }}>
      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={5} lg={6}>
          <Box sx={{ pb: 2 }}>
            <img
              src={mainImage}
              // alt="product image"
              style={{
                display: "block",
                // margin: "1px auto",
                borderRadius: "5px",
                objectFit: "contain",
                height: "100%",
                maxWidth: "70%",
              }}
            />
          </Box>

          <Grid
            item
            xs={12}
            md={2}
            sx={{ display: "flex", flexDirection: "row", gap: 2 }}
          >
            {productDetails &&
              productDetails.images.map((image, index) => (
                <Box
                  key={index}
                  onClick={() => handleImageClick(image)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    style={{
                      height: "87px",
                      width: "75px",
                      borderRadius: "5px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {productDetails ? (
              <>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {productDetails.title}
                </Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  ${productDetails.price}
                </Typography>
                <Box sx={{ marginTop: 2 }}>
                  <Divider />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: 1 }}
                  >
                    Quantity:
                  </Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <ButtonGroup
                    className="test"
                    sx={{
                      lineHeight: 1,
                      padding: 0,

                      "& .MuiButtonGroup-grouped": {
                        minWidth: "32px",
                      },
                      "& .MuiButtonBase-root:hover": {
                        border: "none",
                      },
                      marginLeft: "8px",
                      border: "1px solid #dfdfdf",
                    }}
                    size="small"
                    aria-label="small outlined button group"
                  >
                    <Button onClick={decrementQuantity} sx={{ color: "black" }}>
                      -
                    </Button>
                    <Button sx={{ color: "black" }}>{quantity}</Button>
                    <Button onClick={incrementQuantity} sx={{ color: "black" }}>
                      +
                    </Button>
                  </ButtonGroup>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    sx={{
                      width: "70%",
                      marginTop: "10px",
                      backgroundColor: "#e17c57",
                      "&:hover": {
                        backgroundColor: "#f2733d",
                      },
                    }}
                    onClick={addToCart}
                  >
                    Add to Cart
                  </Button>
                  {showSnackbar && <CustomSnackBar />}
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: 2 }}
                  >
                    Description:
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "8px", height: "0.5em" }}>
                  <Typography>{productDetails.description}</Typography>
                </Box>
              </>
            ) : (
              <Box>Product Not Found</Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetail;
