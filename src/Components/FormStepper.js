import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Box, Button, Container, Typography } from "@mui/material";
import Test from "./Test";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import PreviewPage from "./PreviewPage";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

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
    <Container sx={{ padding: "0px" }}>
      <Box display={"flex"} justifyContent="space-between" px={15}>
        <Box display={"flex"} alignItems="center" justifyContent="left">
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
        {activeStep === 1 && (
        <Box display={"flex"}>
          <EditOutlinedIcon
            sx={{
              color: "white",
              cursor: "pointer",
              marginRight: 1,
              border: "2px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "5px",
              boxshadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              background: "rgba(255, 255, 255, 0.2)",
            }}
          />
          <ShareOutlinedIcon
            sx={{
              color: "white",
              cursor: "pointer",
              border: "2px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "5px",
              boxshadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              background: "rgba(255, 255, 255, 0.2)",
            }}
          />
        </Box> )}
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
      {activeStep === 0 && (
        <Box display="flex" alignItems="center" justifyContent="center" p={5}>
          <Box display="flex">
            <Button variant="outlined" sx={btnStyle} type="submit">
              Submit
            </Button>

            <Button
              variant="outlined"
              sx={btnStyle}
              onClick={() => handleNext()}
            >
              Next
            </Button>
          </Box>
        </Box>
      )}
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
