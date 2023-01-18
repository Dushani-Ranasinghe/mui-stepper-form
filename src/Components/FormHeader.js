import React from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { Typography, Box } from "@mui/material";

export default function FormHeader() {
  return (
    <div>
      <Box display={"flex"} alignItems="center" justifyContent="left"   position= "absolute"
      width={900}
    //   sx={{left:{lg:220,md:130, sm:50, xs:40}}}
   >
        <ArrowBackIosNewRoundedIcon
          sx={{ color: "white", cursor: "pointer" }}
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
    </div>
  );
}
