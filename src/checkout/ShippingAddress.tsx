import {
  Box,
  Typography,
  Grid,
  TextField,
  FormHelperText,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";

interface FormData {
  address: string;
  phoneNumber: string;
  pincode: string;
  district: string;
}
interface ShippingAddressProps {
  handleNext: (
    address: string,
    phoneNumber: string,
    pincode: string,
    district: string,
  ) => void;
}

const schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required()
    .typeError("Please enter the PhoneNumber")
    .matches(/^[0-9]{10}$/, "Please enter a valid phone number"),
  address: yup.string().required("Address is mandatory"),
  pincode: yup
    .string()
    .required()
    .typeError("Please enter the Pincode")
    .matches(/^[0-9]{6}$/, "Please enter a valid Pincode"),
  district: yup.string().required("District is mandatory"),
});

function ShippingAddress({ handleNext }: ShippingAddressProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const { user } = useAuthContext();


  const [shippingDetailsFormData, setShippingDetailsFormData] =
  useState<FormData>({
    phoneNumber: "",
    address: "",
    pincode: "",
    district: "",
  });


  useEffect(() => {
    const fetchData = async () => {
       if (user && user.userId) {
        const savedFormData = localStorage.getItem(user?.userId);
        if (savedFormData) {
          const parsedFormData = JSON.parse(savedFormData);
          setShippingDetailsFormData(parsedFormData);

          setValue("address", parsedFormData.address);
          setValue("phoneNumber", parsedFormData.phoneNumber);
          setValue("district", parsedFormData.district);
          setValue("pincode", parsedFormData.pincode);
        }
      }
    };

    fetchData();
  }, []);
  const handleSubmitShippingDetails = async (data: FormData) => {
    try {
      handleNext(
        data.address,
        data.phoneNumber,
        data.pincode,
        data.district,
      );
      const formShippingData = {
        ...data,
      };
      if (user && user.userId) {
        localStorage.setItem(user.userId, JSON.stringify(formShippingData));
      }
      setShippingDetailsFormData(data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <Box mt={1}>
      <form onSubmit={handleSubmit(handleSubmitShippingDetails)}>
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
              helperText={errors.address?.message}
              FormHelperTextProps={{
                sx: { color: "red", marginLeft: "0px" },
               
              }}
              value={shippingDetailsFormData.address}
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
              inputProps={{ style: { padding: "10px" } }}
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number",
                },
              })}
              value={shippingDetailsFormData.phoneNumber}
              error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message?.toString()}
                FormHelperTextProps={{
                  sx: { color: "red", marginLeft: "0px" },
                }}
                autoComplete="new"
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
              value={shippingDetailsFormData.pincode}
              error={!!errors.pincode}
              helperText={errors.pincode?.message?.toString()}
              FormHelperTextProps={{
                sx: { color: "red", marginLeft: "0px" },
              }}
              autoComplete="new"
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
              value={shippingDetailsFormData.pincode}
              error={!!errors.district}
              helperText={errors.district?.message?.toString()}
              FormHelperTextProps={{
                sx: { color: "red", marginLeft: "0px" },
              }}
              autoComplete="new"
            />
          </Grid>
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
