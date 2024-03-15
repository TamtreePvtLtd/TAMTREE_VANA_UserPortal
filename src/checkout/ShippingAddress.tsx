import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  FormHelperText,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useGetAllShippingDetail } from "../hooks/CustomRQHooks";
import theme from "../theme/theme";

interface FormData {
  address: string;
  phoneNumber: string;
  pincode: string;
  district: string;
}
interface ShippingAddressProps {
  handleNext: () => void;
}

function ShippingAddress({ handleNext }: ShippingAddressProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedShippingOption, setSelectedShippingOption] = useState("");
  const { data: shippingDetails } = useGetAllShippingDetail();
  const handleShippingOptionChange = (event) => {
    setSelectedShippingOption(event.target.value);
  };

  const onSubmit = (data: any) => {
    const formData: FormData = {
      address: data.address,
      phoneNumber: data.phoneNumber,
      pincode: data.pincode,
      district: data.district,
    };
    console.log(formData);
    handleNext();
  };

  return (
    <Box mt={1}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography>
              Address<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              multiline
              rows={9}
              placeholder={`Name:  xxxxxxxxxx\nAddress:  xxxxx xxxxx xxxxx\nLandmark:  xxx xxx xxxx xxxxx\nPincode:  xxxxxx\nState:  xxxxxxxxxx\nMobile No.:  xxxxxxxxxx\n--------------------------------\nFrom name:  xxxxxxxxxx\nMobile Number:  xxxxxxxxxx`}
              {...register("address", { required: "Address is required" })}
              error={!!errors.address}
              //   helperText={errors.address?.message}
            />
            <FormHelperText sx={{ fontWeight: "bold" }}>
              (Note: Please send the address in this format. If the address is
              not proper, we don't have any responsibility for the parcel.)
            </FormHelperText>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Phone number<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              variant="outlined"
              type="tel"
              fullWidth
              required
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number",
                },
              })}
              error={!!errors.phoneNumber}
              //   helperText={errors.phoneNumber?.message}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>
              Pincode<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              type="number"
              required
              {...register("pincode", {
                required: "Pincode is required",
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: "Invalid pincode",
                },
              })}
              error={!!errors.pincode}
              //   helperText={errors.pincode?.message}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography>
              District<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              required
              {...register("district", { required: "District is required" })}
              error={!!errors.district}
              //   helperText={errors.district?.message}
            />
          </Grid>
          {shippingDetails && (
            <Grid item xs={12}>
              <Typography>
                Shipping<span style={{ color: "red" }}>*</span>
              </Typography>
              <Select
                variant="outlined"
                sx={{
                  width: 250,
                  height: 50,
                  "& .MuiSelect-select": {
                    color: "black !important",
                  },
                  "&:focus": {
                    borderColor: "black !important",
                  },
                  "& .MuiSelect-iconOutlined, & .MuiSelect-iconFilled": {
                    color: "black !important",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black !important",
                  },
                }}
                value={selectedShippingOption}
                onChange={handleShippingOptionChange}
              >
                {shippingDetails.map((shippingOption) => (
                  <MenuItem key={shippingOption._id} value={shippingOption._id}>
                    {shippingOption.title}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              sx={{ marginTop: "15px" }}
              type="submit"
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default ShippingAddress;
