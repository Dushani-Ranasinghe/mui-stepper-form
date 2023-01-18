import { Box, Button } from "@mui/material";
import React from "react";
import FormStepper from "./FormStepper";

const btnStyle = {
  mx: 1,
  color: "white",
  background: "rgba(255, 255, 255, 0.2)",
  border: "2px solid rgba(255, 255, 255, 0.5)",
  boxshadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
  borderRadius: "11px",
  width:100,
  fontFamily: "Omnes",
  fontStyle: "normal",
  textTransform: 'none',
  fontSize: "13px"
};
export default function FormFooter() {
  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="center" p={5}>
        <Box>
          <Button variant="outlined" sx={btnStyle} type="submit" >
            Submit
          </Button>
          <Button variant="outlined" sx={btnStyle}>
            Next
          </Button>
        </Box>
       
      </Box>
      <FormStepper/>
    </div>
  );
}
