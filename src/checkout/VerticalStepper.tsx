import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import Login from "../common/Login";
import Signup from "../common/Signup";
import AddressForm from "./AddressForm";
import ShippingAddress from "./ShippingAddress";
import {
  Container,
  Grid,
  IconButton,
  ThemeProvider,
  useTheme,
} from "@mui/material";

const VerticalStepper = () => {
  const [renderRegister, setRenderRegister] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const theme = useTheme();
  const secondaryColor = theme.palette.secondary.main;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const steps = [
    renderRegister ? "Register" : "Login",
    "Shipping Address",
    "AddressForm",
  ];

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return renderRegister ? (
          <Signup
            onSign={handleNext}
            onRegisterLinkClick={() => {
              setRenderRegister((preState) => !preState);
              setActiveStep(0);
            }}
          />
        ) : (
          <Login
            onLogin={handleNext}
            onRegisterLinkClick={() => {
              setRenderRegister((preState) => !preState);
              setActiveStep(0);
            }}
          />
        );
      case 1:
        return <ShippingAddress handleNext={handleNext} />;

      case 2:
        return <AddressForm />;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container>
          <Grid
            item
            container
            xs={12}
            md={8}
            textAlign={"center"}
            my={1}
            display={"flex"}
            alignItems={"center"}
          >
            <Grid item xs={1}>
              <IconButton
                sx={{
                  paddingLeft: 0,
                }}
                // onClick={handleArrowBackClick}
              >
                <ArrowBackIcon color="primary" />
              </IconButton>
            </Grid>
            <Grid item xs={10}>
              <Typography fontWeight={600} fontSize={"medium"} color={"black"}>
                Place your order
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel
                    StepIconProps={{
                      style: {
                        color:
                          index === activeStep ? "#dae3dc" : secondaryColor,
                      },
                    }}
                  >
                    {label}
                  </StepLabel>
                  <StepContent>
                    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                      {getStepContent(activeStep)}
                    </Box>
                    {activeStep == 2 && (
                      <Box sx={{p:2}}>
                        <Button variant="contained"  size="small">
                          GO Back
                        </Button>
                      </Box>
                    )}
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
export default VerticalStepper;
