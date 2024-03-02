import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { paths } from "../routes/path";
import { ISignUp } from "../interface/type";
import { useAuthContext } from "../context/AuthContext";
import { signUp } from "../services/api";
import { useForm } from "react-hook-form";
import { useSnackBar } from "../context/SnackBarContext";
import { useState } from "react";
import CustomSnackBar from "./CustomSnackBar";

interface SignProps {
  onSign?(): void;
  requiredHeading?: boolean;
  onRegisterLinkClick?(): void;
}

interface ISignUpFormFields {
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  email?: string;
  userName: string;
}

const schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required()
    .typeError("Please enter the PhoneNumber")
    .matches(
      /[6-9]{1}[0-9 ]{4}[0-9 ]{4}[0-9]{1}/,
      "Please enter a valid phone number"
    )
    .max(10),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  userName: yup.string().required("Please enter Name"),
});

function Signup({ onSign, requiredHeading, onRegisterLinkClick }: SignProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { updateUserData } = useAuthContext();
  const { updateSnackBarState } = useSnackBar();
 const [showSnackbar, setShowSnackbar] = useState(false);
  const { state } = location;
  const isNavbarLogin = state?.fromNavbarLogin || false;
  const isOrderLogin = state?.fromOrdersLogin || false;
  const isSignupLogin = state?.fromSignupLogin || false;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpFormFields>({
    resolver: yupResolver(schema) as any,
    mode: "all",
  });

  const handleSign = async (data: ISignUpFormFields) => {
    console.log("data", data);
    if (data) {
      var signUpFormData = {
        ...data,
      } as ISignUp;
      await signUp(signUpFormData)
        .then((response) => {
          if (response.data) {
            updateUserData({
              ...response.data,
            });
            if (!isNavbarLogin && !isOrderLogin && !isSignupLogin) {
              if (onSign) onSign();
            } else {
              navigate(paths.ROOT);
            }
          }
          setShowSnackbar(true)
          updateSnackBarState(true, "Signup Successfully", "success")
        })
        .catch((error) => {
          if (error.response && error.response.data) {
            console.log(error.response.data);
          }
        });
    }
  };

  const moveToLogin = () => {
    if (!isNavbarLogin && !isOrderLogin && !isSignupLogin) {
    } else {
      navigate(`/${paths.LOGIN}`, { state: { fromSignup: true } });
    }
  };

  return (
    <Container
      sx={{
        width: "40%",
        marginY: "40px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        "@media (max-width: 600px)": {
          // Media query for mobile view (max-width: 600px)
          width: "90%", // Width for mobile view
        },
      }}
    >
      <Box sx={{ p: "10px" }}>
        {requiredHeading && (
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            padding="5px 0px 10px 0px"
          >
            Sign up
          </Typography>
        )}
        <form onSubmit={handleSubmit(handleSign)}>
          <Box paddingBottom="20px">
            <Box sx={{ padding: "2px 0" }}>
              <Typography padding="5px 0px">
                Name<span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                margin="normal"
                fullWidth
                inputProps={{ style: { padding: "10px" } }}
                {...register("userName")}
                error={!!errors.userName}
                helperText={errors.userName?.message?.toString()}
                FormHelperTextProps={{
                  sx: { color: "red", marginLeft: "0px" },
                }}
                autoComplete="new"
                type="text"
              />
            </Box>
            <Box sx={{ padding: "2px 0" }}>
              <Typography padding="3px 0px">
                PhoneNumber<span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                margin="normal"
                fullWidth
                inputProps={{ style: { padding: "10px" } }}
                {...register("phoneNumber")}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message?.toString()}
                FormHelperTextProps={{
                  sx: { color: "red", marginLeft: "0px" },
                }}
                autoComplete="new"
                type="tel"
              />
            </Box>
            <Box sx={{ padding: "2px 0" }}>
              <Typography padding="3px 0px">
                Email<span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                margin="normal"
                fullWidth
                inputProps={{ style: { padding: "10px" } }}
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message?.toString()}
                FormHelperTextProps={{
                  sx: { color: "red", marginLeft: "0px" },
                }}
                autoComplete="new"
                type="email"
              />
            </Box>
            <Box sx={{ padding: "2px 0" }}>
              <Typography padding="3px 0px">
                Password<span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                margin="normal"
                fullWidth
                inputProps={{ style: { padding: "10px" } }}
                {...register("password")}
                type="password"
                error={!!errors.password}
                helperText={errors.password?.message?.toString()}
                FormHelperTextProps={{
                  sx: { color: "red", marginLeft: "0px" },
                }}
              />
            </Box>
            <Box sx={{ padding: "2px 0" }}>
              <Typography padding="3px 0px">
                Confirm Password<span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                margin="normal"
                fullWidth
                inputProps={{ style: { padding: "10px" } }}
                {...register("confirmPassword")}
                type="password"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message?.toString()}
                FormHelperTextProps={{
                  sx: { color: "red", marginLeft: "0px" },
                }}
              />
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#e17c57",
              color: "white",
              letterSpacing: "2px",
              borderRadius: 0,
              paddingX: 4,
              fontSize: "15px",
              "&:hover": {
                backgroundColor: "#f2733d",
              },
            }}
            fullWidth
            type="submit"
          >
            Sign up
          </Button>
          <FormHelperText
            onClick={moveToLogin}
            sx={{ textAlign: "center", paddingTop: "5px" }}
          >
            <Box sx={{ cursor: "pointer" }} fontSize="15px">
              Already have an Account?
              <br />
              Please &nbsp;
              <Link
                sx={{ color: "blue" }}
                onClick={() => {
                  onRegisterLinkClick && onRegisterLinkClick();
                }}
              >
                Login
              </Link>
            </Box>
          </FormHelperText>
        </form>
      </Box>
       {showSnackbar && <CustomSnackBar />} 
    </Container>
  );
}

export default Signup;


