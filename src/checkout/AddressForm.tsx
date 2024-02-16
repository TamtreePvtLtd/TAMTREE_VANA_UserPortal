import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

function AddressForm() {
   const handleOrderNowClick = () => {
     checkOrderNowValidation();
  };
  const checkOrderNowValidation = async () => {
  }
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {/* Content */}
      </Box>
      <Box
        mt={1}
        mb={2}
        sx={{
          padding: 2,
          boxShadow: 3,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography>
          <span style={{ float: "left" }}>Items Price:</span>
          <span style={{ float: "right" }}>&#8377;{}</span>
        </Typography>
        <Typography>
          <span style={{ float: "left" }}>Delivery:</span>
          <span style={{ float: "right" }}>&#8377;{}</span>
        </Typography>
        <Divider sx={{ marginTop: 1 }} />
        <Typography sx={{ fontWeight: 600 }}>
          <span style={{ float: "left" }}>Order Total:</span>
          <span style={{ float: "right" }}>&#8377;</span>
        </Typography>
      </Box>
      <Box my={2} sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
        <Typography sx={{ fontSize: "medium", fontWeight: "bold" }} mb={1}>
          Delivery Address
        </Typography>
        <Typography
          component="div"
          sx={{ fontSize: "small", lineHeight: 1.8, wordWrap: "break-word" }}
        >
          <span
            style={{
              fontWeight: "bold",
              opacity: 0.9,
            }}
          >
            Address:&nbsp;
          </span>
        </Typography>
        <Typography component="div" sx={{ fontSize: "small", lineHeight: 1.8 }}>
          <span style={{ fontWeight: "bold", opacity: 0.9 }}>
            District:&nbsp;
          </span>
        </Typography>
        <Typography component="div" sx={{ fontSize: "small", lineHeight: 1.8 }}>
          <span style={{ fontWeight: "bold", opacity: 0.9 }}>
            PinCode:&nbsp;
          </span>
        </Typography>
        <Typography component="div" sx={{ fontSize: "small", lineHeight: 1.8 }}>
          <span style={{ fontWeight: "bold", opacity: 0.9 }}>State:&nbsp;</span>
        </Typography>
        <Typography component="div" sx={{ fontSize: "small", lineHeight: 1.8 }}>
          <span style={{ fontWeight: "bold", opacity: 0.9 }}>
            MobileNo:&nbsp;
          </span>
        </Typography>
      </Box>
      <Box sx={{ bottom: 20, width: "100%", p: 1 }}>
        <Button
          variant="contained"
          
          fullWidth
          onClick={handleOrderNowClick}
        >
          Order Now
        </Button>
      </Box>
    </Box>
  );
}

export default AddressForm;
