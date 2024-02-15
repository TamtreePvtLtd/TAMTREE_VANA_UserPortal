import { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import axios from "axios";

import useStyles from "../styles/cartDrawer";
import { CartItem, MyBagDrawerProps } from "../interface/type";

const MyBagDrawer = ({ open, onClose }: MyBagDrawerProps) => {
  const classes = useStyles();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Grid
        container
        direction="column"
        sx={{ width: "378px" }}
        className={classes.drawerContainer}
      >
        <Grid container item className={classes.drawerHeader}>
          <Typography variant="h6">My Bag</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
        {cartItems.length === 0 ? (
          <Grid container item direction="column" alignItems="center">
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
              <Grid container item key={item._id}>
                <img
                  src={item.posterURL}
                  alt={item.title}
                  className={classes.posterImage}
                />

                <Typography>{item.title}</Typography>
                <Typography>{item.price}</Typography>
                <IconButton onClick={() => handleDecrement(item._id)}>
                  -
                </IconButton>
                <Typography>{item.quantity}</Typography>
                <IconButton onClick={() => handleIncrement(item._id)}>
                  +
                </IconButton>
                <Button onClick={() => handleRemove(item._id)}>Remove</Button>
              </Grid>
            ))}
            <Typography>
              Total Price: $
              {cartItems.reduce(
                (total, item) => total + item.quantity * item.price,
                0
              )}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => localStorage.removeItem("cart")}
            >
              Clear Cart
            </Button>
            <Button variant="contained" color="primary">
              Proceed to Checkout
            </Button>
          </>
        )}
      </Grid>
    </Drawer>
  );
};

export default MyBagDrawer;
