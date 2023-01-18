import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import PaymentForm from "./PaymentForm";
import { Box, Button, Container, Typography } from "@mui/material";
import Test from "./Test";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import PreviewPage from "./PreviewPage";

const steps = ["step 01", "Step 02"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Test />;
    case 1:
      return <PreviewPage />;
    default:
      throw new Error("Unknown step");
  }
}

const btnStyle = {
  mx: 1,
  color: "white",
  background: "rgba(255, 255, 255, 0.2)",
  border: "2px solid rgba(255, 255, 255, 0.5)",
  boxshadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
  borderRadius: "11px",
  width: 100,
  fontFamily: "Omnes",
  fontStyle: "normal",
  textTransform: "none",
  fontSize: "13px",
};

export default function FormStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container>
      <Box
        display={"flex"}
        alignItems="center"
        justifyContent="left"
        position="absolute"
        width={900}
      >
        <ArrowBackIosNewRoundedIcon
          sx={{ color: "white", cursor: "pointer" }}
          onClick={() => handleBack()}
        />
        <Typography
          variant="h6"
          color="white"
          sx={{
            fontFamily: "Omnes",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "23px",
          }}
        >
          Pet Information
        </Typography>
      </Box>
      <Box>
        {activeStep === steps.length ? (
          <React.Fragment>
            <PreviewPage />
          </React.Fragment>
        ) : (
          <React.Fragment>
            {getStepContent(activeStep)}
            <Box>{activeStep !== 0}</Box>
          </React.Fragment>
        )}
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" p={5}>
        <Box>
          {activeStep === 0 && (
            <Button variant="outlined" sx={btnStyle} type="submit">
              Submit
            </Button>
          )}
          {activeStep === 0 && (
            <Button
              variant="outlined"
              sx={btnStyle}
              onClick={() => handleNext()}
            >
              Next
            </Button>
          )}
        </Box>
      </Box>
      <Stepper sx={{ width: "400px", margin: "auto" }} activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Container>
  );
}
