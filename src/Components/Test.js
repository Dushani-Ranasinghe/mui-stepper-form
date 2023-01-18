import { Select, InputLabel, MenuItem, Box } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormHeader from "./FormHeader";

const inputstyle = {
  color: "white",
  fontFamily: "Omnes",
  fontStyle: "normal",
  fontSize: "14px",
};
const textFieldStyle = {
  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "11px",
    height: "40px",
    margin: "none",
    padding: "none",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    background: "rgba(255, 255, 255, 0.2)",

    "&:hover fieldset": {
      borderColor: "grey",
    },
  },
  "& .MuiInputBase-root ": {
    width: { sm: 270, md: 400, xs: 300 },
    height: "40px",
  },
  "& .MuiFormControl-root": {
    padding: "0px 10px",
    height: "40px",
    color: "white",
  },
  "& .MuiOutlinedInput-root:hover ": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
  },
};

const inputDateStyle = {
  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "11px",
    height: "40px",
    margin: "none",
    padding: "none",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    background: "rgba(255, 255, 255, 0.2)",
  },
  "& .MuiInputBase-root ": {
    width:{sm:150 , md:190, xs:160},
    height: "40px",
  },
  "& .MuiFormControl-root": {
    padding: "0px 10px",
    height: "40px",
    color: "white",
  },
  "& .MuiOutlinedInput-root:hover ": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
  },
};
const smallTextStyle = {
  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "11px",
    height: "40px",
    margin: "none",
    padding: "none",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    background: "rgba(255, 255, 255, 0.2)",
  },
  "& .MuiInputBase-root ": {
    width:{sm:110 , md:175, xs:130},
    height: "40px",
  },
  "& .MuiFormControl-root": {
    padding: "0px 10px",
    height: "40px",
    color: "white",
  },
  "& .MuiOutlinedInput-root:hover ": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
  },
};
const gridStyle = {
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
};

export default function Test() {
  const [gender, setGender] = useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };
const DOBStyle ={
  width: { sm: 270, md: 400, xs: 300 },
}; 
const smallFieldBoxStyle ={
  width: { sm: 270, md: 400, xs: 300 },
  display: "flex",
  alignItems: "center",
  justifyContent: {md: "ceneter", sm :"left"},
}
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      flexGrow={1}
      columns={12}
      pt={3.5}
    >
      <Grid item xs={12} sm={6} md={6} lg={6} xl={5} sx={gridStyle}>
        <InputLabel sx={inputstyle}>Pet Name</InputLabel>
        <TextField
          id="petName"
          name="petName"
          label=""
          autoComplete="off"
          variant="outlined"
          sx={textFieldStyle}
          width="411px"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={5} sx={gridStyle}>
        <InputLabel sx={inputstyle}>Street Address</InputLabel>
        <TextField
          id="streetAddress"
          name="streetAddress"
          label=""
          autoComplete="off"
          variant="outlined"
          sx={textFieldStyle}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={5} sx={gridStyle}>
        <InputLabel sx={inputstyle}>Family Name</InputLabel>
        <TextField
          id="familyName"
          name="familyName"
          label=""
          autoComplete="off"
          variant="outlined"
          sx={textFieldStyle}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={5} sx={gridStyle}>
        <InputLabel sx={inputstyle}>AptCity</InputLabel>
        <TextField
          id="aptCity"
          name="aptCity"
          label=""
          autoComplete="off"
          variant="outlined"
          sx={textFieldStyle}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={5} sx={gridStyle}>
      <Box sx={DOBStyle}>
        <InputLabel sx={inputstyle}>Date of Birth</InputLabel>
        <TextField
          id="DOB"
          name="DOB"
          label=""
          autoComplete="off"
          variant="outlined"
          type="date"
          sx={inputDateStyle}
        />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={5} sx={gridStyle}>
        <InputLabel sx={inputstyle}>State</InputLabel>
        <TextField
          id="state"
          name="state"
          label=""
          autoComplete="off"
          variant="outlined"
          sx={textFieldStyle}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={5} sx={gridStyle}>
        <InputLabel sx={inputstyle}>Breed</InputLabel>
        <TextField
          id="breed"
          name="breed"
          label=""
          autoComplete="off"
          variant="outlined"
          sx={textFieldStyle}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={5} sx={gridStyle}>
        <InputLabel sx={inputstyle}>Zip Code</InputLabel>
        <TextField
          id="zipCode"
          name="zipCode"
          label=""
          autoComplete="off"
          variant="outlined"
          sx={textFieldStyle}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={5} sx={gridStyle}>
      <Box sx={smallFieldBoxStyle}>
        <Box mr={5}>
          <InputLabel sx={inputstyle} flexDirection={"row"}>
            Weight
          </InputLabel>
          <TextField
            id="weight"
            name="weight"
            label=""
            autoComplete="off"
            variant="outlined"
            sx={smallTextStyle}
          />
        </Box>
        <Box>
          <InputLabel sx={inputstyle}>Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Gender"
            onChange={handleChange}
            displayEmpty
            sx={{
              width:{sm:110 , md:175, xs:130},
              height: 50,
              "& .MuiOutlinedInput-notchedOutline": {
                border: "2px solid rgba(255, 255, 255, 0.5)",
                borderRadius: "11px",
                height: "40px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                background: "rgba(255, 255, 255, 0.2)",
              },
              "& .MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary ":
                {
                  height: "40px",
                },
              "& .MuiSelect-select": {
                padding: "0px 10px",
                height: "40px",
                color: "white",
              },
              // .css-duxqi2-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root:hover .MuiOutlinedInput-notchedOutline{border-color:rgba(0, 0, 0, 0.87);}
              "& .MuiInputBase-root": {
                "& .MuiOutlinedInput-root": {
                  "& .MuiSelect-root:hover": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                  },
                },
              },
            }}
          >
            <MenuItem value={1}>Male</MenuItem>
            <MenuItem value={2}>Female</MenuItem>
          </Select>
        </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={5} sx={gridStyle}>
        <InputLabel sx={inputstyle}>Country</InputLabel>
        <TextField
          id="country"
          name="country"
          label=""
          autoComplete="off"
          variant="outlined"
          sx={textFieldStyle}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={6} xl={5} sx={gridStyle}>
      <Box sx={smallFieldBoxStyle}>
        <Box mr={5}>
          <InputLabel sx={inputstyle} flexDirection={"row"}>
            Fur Color
          </InputLabel>
          <TextField
            id="furColor"
            name="furColor"
            label=""
            autoComplete="off"
            variant="outlined"
            sx={smallTextStyle}
          />
        </Box>
        <Box>
          <InputLabel sx={inputstyle}>Eye Color</InputLabel>
          <TextField
            id="eyeColor"
            name="eyeColor"
            label=""
            autoComplete="off"
            variant="outlined"
            sx={smallTextStyle}
          />
        </Box>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={6} xl={5} sx={gridStyle}>
        <InputLabel sx={inputstyle}>Marks</InputLabel>
        <TextField
          id="marks"
          name="marks"
          label=""
          autoComplete="off"
          variant="outlined"
          sx={textFieldStyle}
        />
      </Grid>
    </Grid>
  );
}
