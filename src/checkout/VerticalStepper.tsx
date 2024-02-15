import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, Typography, Box } from "@mui/material";
import Login from "../common/Login";
import ShippingAddress from "./ShippingAddress";
import AddressForm from "./AddressForm";
import Signup from "../common/Signup";

const VerticalStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [renderRegister, setRenderRegister] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = [
    renderRegister ? "Register" : "Login",
    "Shipping Address",
    "Order Now",
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
        return <ShippingAddress />;
      case 2:
        return <AddressForm />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>All steps completed</Typography>
          </div>
        ) : (
          <div>
            <div>{getStepContent(activeStep)}</div>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerticalStepper;
