import {
  Box,
  TextField,
  Typography,
  Button,
  Link,
  FormHelperText,
} from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useLocation } from "react-router-dom";
import { useSnackBar } from "../context/SnackBarContext";
import { ILogin } from "../interface/type";
import { paths } from "../routes/path";
import { useLogin } from "../hooks/CustomRQHooks";
import { useAuthContext } from "../context/AuthContext";



interface LoginProps {
  onLogin?(): void;
  requiredHeading?: boolean;
  onRegisterLinkClick?(): void;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address"
    )
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

function Login({ onLogin, requiredHeading, onRegisterLinkClick }: LoginProps) {
  const { updateUserData } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const { updateSnackBarState } = useSnackBar();
  const { state } = location;
  const isFromNavbar = state?.fromNavbar || false;
  const isFromOrders = state?.fromOrders || false;
  const isFromSignup = state?.fromSignup || false;

  const mutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(schema),
    mode: "all",
  });

 // Handle successful login
const handleLogin = async (data: ILogin) => {
  try {
    const response = await mutation.mutateAsync(data); 
    const userData = response.data;

    if (userData) {
      // Save user data in localStorage upon successful login
      localStorage.setItem("userData", JSON.stringify(userData));
      updateUserData(userData);
      
      // Redirect to home page or previous location
      navigate(paths.ROOT);

      if (onLogin) {
        onLogin();
      }
    } else {
      // Handle login response with no user data
      updateSnackBarState(true, "Login failed: No user data returned", "error");
    }
  } catch (error) {
    updateSnackBarState(true, "Login failed", "error");
  }
};



  const handleRegisterLinkClick = () => {
    if (isFromNavbar) {
      navigate(`/${paths.SIGNUP}`, { state: { fromNavbarLogin: true } });
    }
    if (isFromOrders) {
      navigate(`/${paths.SIGNUP}`, { state: { fromOrdersLogin: true } });
    }
    if (isFromSignup) {
      navigate(`/${paths.SIGNUP}`, { state: { fromSignupLogin: true } });
    } else {
      if (onRegisterLinkClick) onRegisterLinkClick();
    }
  };


  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Box>
          {requiredHeading && (
            <Typography variant="h5" align="center" gutterBottom>
              Login
            </Typography>
          )}
          <form onSubmit={handleSubmit(handleLogin)}>
            <Typography>
              Email<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              type="tel"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message?.toString()}
              autoComplete="new"
              required
            />
            <Typography>
              Password<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              type="password"
              autoComplete="new"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message?.toString()}
              required
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 3 }}
              type="submit"
            >
              Login
            </Button>
            <FormHelperText sx={{ textAlign: "center", paddingTop: "5px" }}>
              <Box sx={{ cursor: "pointer" }} fontSize="15px">
                Don't have an Account?
                <br /> Please &nbsp;
                <Link sx={{ color: "blue" }} onClick={handleRegisterLinkClick}>
                  Register
                </Link>
              </Box>
            </FormHelperText>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default Login;
