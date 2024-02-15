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
  email: yup.string().email("Please enter a valid email"),
  userName: yup.string().required("Please enter Name"),
});

function Signup({ onSign, requiredHeading, onRegisterLinkClick }: SignProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { updateUserData } = useAuthContext();

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
            }
          }
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
    <Container sx={{ width: "50%" }}>
      {requiredHeading && (
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          padding="20px 0px 10px 0px"
        >
          Sign up
        </Typography>
      )}
      <form onSubmit={handleSubmit(handleSign)}>
        <Box paddingBottom="20px">
          <Box sx={{ padding: "7px 0" }}>
            <Typography padding="5px 0px">
              Name<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              inputProps={{ style: { padding: "10px" } }}
              {...register("userName")}
              error={!!errors.userName}
              helperText={errors.userName?.message?.toString()}
              FormHelperTextProps={{
                sx: { color: "red", marginLeft: "0px" },
              }}
              autoComplete="new"
            />
          </Box>
          <Box sx={{ padding: "7px 0" }}>
            <Typography padding="5px 0px">
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
          <Box sx={{ padding: "7px 0" }}>
            <Typography padding="5px 0px">Email</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              type="email"
              inputProps={{ style: { padding: "10px" } }}
              {...register("email")}
              helperText={errors.email?.message?.toString()}
              FormHelperTextProps={{
                sx: { color: "red", marginLeft: "0px" },
              }}
              autoComplete="new"
            />
          </Box>
          <Box sx={{ padding: "7px 0" }}>
            <Typography padding="5px 0px">
              Password<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              inputProps={{ style: { padding: "10px" } }}
              {...register("password")}
              type="password"
              error={!!errors.password}
              helperText={errors.password?.message?.toString()}
              FormHelperTextProps={{ sx: { margin: "0px" } }}
            />
          </Box>
          <Box sx={{ padding: "7px 0" }}>
            <Typography padding="5px 0px">
              Confirm Password<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              inputProps={{ style: { padding: "10px" } }}
              {...register("confirmPassword")}
              type="password"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message?.toString()}
              FormHelperTextProps={{ sx: { margin: "0px" } }}
            />
          </Box>
        </Box>
        <Button variant="contained" fullWidth type="submit">
          Sign up
        </Button>
        <FormHelperText
          onClick={moveToLogin}
          sx={{ textAlign: "center", paddingTop: "5px" }}
        >
          <Box sx={{ cursor: "pointer" }}>
            Already have an Account?
            <br />
            Please &nbsp;
            <Link
              onClick={() => {
                onRegisterLinkClick && onRegisterLinkClick();
              }}
            >
              Login
            </Link>
          </Box>
        </FormHelperText>
      </form>
    </Container>
  );
}

export default Signup;
