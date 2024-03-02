import { useEffect, useState } from "react";
import { Box, Divider } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { useParams } from "react-router";
import { useProductDetailById } from "../hooks/CustomRQHooks";
import { CartItem } from "../interface/type";
import CustomSnackBar from "../common/CustomSnackBar";
import { useSnackBar } from "../context/SnackBarContext";
import Slider from "react-slick";
import { useCommonFontStyle } from "../styles/fontstyle";

function ProductDetail() {
  const { productId } = useParams();
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { updateSnackBarState } = useSnackBar();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const productDetailQuery = useProductDetailById(productId ?? "");
  const classes = useCommonFontStyle();

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

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    autoplay: false,
    arrows: true,
  };

  return (
    <Container sx={{ mb: 15 }}>
      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={6} lg={6}>
          <Box sx={{ px: 6 }}>
            <Slider {...sliderSettings}>
              {productDetails &&
                productDetails.images.map((image: string, index: number) => (
                  <Box key={index}>
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      onClick={() => handleImageClick(image)}
                      style={{
                        cursor: "pointer",
                        height: "100%",
                        maxWidth: "100%",
                        borderRadius: "5px",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                ))}
            </Slider>
          </Box>
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
                <Box className={classes.commonFontStyle}>
                <Typography variant="h5" sx={{ fontWeight: "700" }} className={classes.commonFontStyle} >
                  {productDetails.title}
                  </Typography>
                </Box>
                <Box className={classes.commonFontStyle}>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  ${productDetails.price}
                  </Typography>
                </Box>
                <Box sx={{ marginTop: 2 }} >
                  <Divider />
                </Box>
                <Box className={classes.commonFontStyle}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "500", marginTop: 1, }}
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
                        fontFamily: "cursive"
                      },
                    }}
                    onClick={addToCart}
                  >
                    Add to Cart
                  </Button>
                  {showSnackbar && <CustomSnackBar />}
                </Box>
                <Box className={classes.commonFontStyle}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "500", marginTop: 2, }}

                  >
                    Description:
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "8px" }}>
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
