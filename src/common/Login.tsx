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
import { useAuthContext } from "../context/AuthContext";
import { LoginCredentials } from "../services/api";



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
await LoginCredentials(data)
.then((response) => {
  if (response.data) {
    updateUserData({
      ...response.data,
    });
    if (isFromNavbar) {
      navigate(paths.ROOT);
    }
    if (isFromOrders) {
      navigate(`/${paths.ORDERS}`);
    }
    if (isFromSignup) {
      navigate(paths.ROOT);
    } else {
      if (onLogin) onLogin();
    }
  } else {
    updateUserData(null);
  }
})
.catch((error) => {
  if (error.response && error.response.data) {
    console.log(error.response.data);
    updateSnackBarState(true, error.response.data.message, "error");
  }
});
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
          p: "20px",
          
        }}
      >
        <Box sx={{border:"1px solid",p: "20px",}}>
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
