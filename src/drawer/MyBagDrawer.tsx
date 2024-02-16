import { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import axios from "axios";
import { ButtonGroup, Container } from "@mui/material";
import useStyles from "../styles/cartDrawer";
import { CartItem, MyBagDrawerProps } from "../interface/type";
import { useNavigate } from "react-router";
import { Box } from "@mui/material";

const MyBagDrawer = ({ open, onClose }: MyBagDrawerProps) => {
  const classes = useStyles();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0); // Set the initial active step for the vertical stepper

  useEffect(() => {
    const fetchCartDetails = async () => {
      try {
        const storedCartItems: CartItem[] = JSON.parse(
          localStorage.getItem("cart") || "[]"
        );
        console.log(storedCartItems);

        const promises = storedCartItems.map(async (item) => {
          const response = await axios.get(
            `http://localhost:3000/JewelleryItem/mybag/${item._id}`
          );
          const productData = response.data;
          console.log(productData);

          if (response.status === 200 && productData) {
            return {
              _id: productData._id,
              posterURL: productData.posterURL,
              title: productData.title,
              price: productData.price,
              quantity: item.quantity,
            };
          } else {
            throw new Error("Failed to fetch product data");
          }
        });

        const updatedCartItems = await Promise.all(promises);
        setCartItems(updatedCartItems);
        console.log(updatedCartItems);
      } catch (error) {
        console.error("Error fetching cart details:", error);
      }
    };

    fetchCartDetails();
  }, [open]);

  const handleIncrement = (productId: string) => {
    const updatedCart = cartItems.map((item) => {
      if (item._id === productId) {
        const newQuantity = item.quantity + 1;
        updateLocalStorage(productId, newQuantity);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleDecrement = (productId: string) => {
    const updatedCart = cartItems.map((item) => {
      if (item._id === productId && item.quantity > 1) {
        const newQuantity = item.quantity - 1;
        updateLocalStorage(productId, newQuantity);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
  };
  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const handleRemove = (productId: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== productId);
    setCartItems(updatedCart);
    updateLocalStorage(productId, 0);
  };

  const updateLocalStorage = (productId: string, quantity: number) => {
    const storedCartItems: CartItem[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
    const updatedCartItems = storedCartItems.map((item) => {
      if (item._id === productId) {
        return { ...item, quantity };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const handleProceedToCheckout = () => {
    setActiveStep(0);
    navigate("/verticalStepper"); 
     onClose(); 
  };

  return (
    <Container>
      <Drawer anchor="right" open={open} onClose={onClose}>
        <Grid
          container
          direction="column"
          sx={{ width: "360px" }}
          className={classes.drawerContainer}
        >
          <Grid container item className={classes.drawerHeader}>
            <Typography variant="h6" sx={{ mb: "30px" }}>
              My Bag
            </Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
          {cartItems.length === 0 ? (
            <Grid
              container
              item
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{ height: "50%" }}
              gap={5}
            >
              <Typography variant="body1" gutterBottom>
                Your cart is empty
              </Typography>
              <Button variant="contained" color="primary" onClick={onClose}>
                Go to Shopping
              </Button>
            </Grid>
          ) : (
            <>
              {cartItems.map((item) => (
                <Grid container>
                  <Grid item xs={6}>
                    <Box>
                      <img
                        src={item.posterURL}
                        alt={item.title}
                        className={classes.posterImage}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography>{item.title}</Typography>
                      <IconButton onClick={() => handleRemove(item._id)}>
                        <CloseIcon fontSize="small" sx={{ color: "#9e9e9e" }} />
                      </IconButton>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: 2,
                      }}
                    >
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

                          border: "1px solid #dfdfdf",
                        }}
                        size="small"
                        aria-label="small outlined button group"
                      >
                        <Button
                          onClick={() => handleDecrement(item._id)}
                          sx={{ color: "black" }}
                        >
                          -
                        </Button>
                        <Button sx={{ color: "black" }}>{item.quantity}</Button>
                        <Button
                          onClick={() => handleIncrement(item._id)}
                          sx={{ color: "black" }}
                        >
                          +
                        </Button>
                      </ButtonGroup>
                      <Typography sx={{ marginLeft: "8px" }}>
                        ${item.price}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              ))}
              <Box sx={{ marginTop: "50px" }}>
                <Typography fontWeight={"bold"}>
                  Total Price:&nbsp;&nbsp; $
                  {cartItems.reduce(
                    (total, item) => total + item.quantity * item.price,
                    0
                  )}
                </Typography>
              </Box>
            </>
          )}
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "sticky",
            bottom: "10px",
            padding: "10px",
            gap: 2,
          }}
        >
          {/* <Button variant="outlined" color="primary" onClick={handleClearCart}>
            Clear Cart
          </Button> */}
          <Button variant="contained" sx={{ backgroundColor: "#FFE5CC" }}  onClick={handleProceedToCheckout}>
            Proceed to Checkout
          </Button>
        </Box>
      </Drawer>
    </Container>
  );
};

export default MyBagDrawer;
