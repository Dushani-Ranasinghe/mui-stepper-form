import { Select, InputLabel, MenuItem, Box } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

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
    width: "30vw",
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
    width: "12vw",
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
    width: "11vw",
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
export default function Test() {
  const [gender, setGender] = useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      flexGrow={1}
      columns={12}
    >
      <Grid item xs={12} sm={5}>
        <InputLabel sx={inputstyle}>Pet Name</InputLabel>
        <TextField
          id="firstName"
          name="firstName"
          label=""
          autoComplete="off"
          variant="outlined"
          sx={textFieldStyle}
          width="411px"
        />
      </Grid>
      <Grid item xs={12} sm={5}>
        <InputLabel sx={inputstyle}>Street Address</InputLabel>
        <TextField
          id="firstName"
          name="firstName"
          label=""
          autoComplete="off"
          variant="outlined"
          sx={textFieldStyle}
        />
      </Grid>
      <Grid item xs={12} sm={5}>
        <InputLabel sx={inputstyle}>Family Name</InputLabel>
        <TextField
          id="firstName"
          name="firstName"
          label=""
          autoComplete="off"
          variant="outlined"
          sx={textFieldStyle}
        />
      </Grid>
      <Grid item xs={12} sm={5}>
        <InputLabel sx={inputstyle}>AptCity</InputLabel>
        <TextField
          id="firstName"
          name="firstName"
          label=""
          autoComplete="off"
          variant="outlined"
          sx={textFieldStyle}
        />
      </Grid>
      <Grid item xs={12} sm={5}>
        <InputLabel sx={inputstyle}>Date of Birth</InputLabel>
        <TextField
          id="firstName"
          name="firstName"
          label=""
          autoComplete="off"
          variant="outlined"
          type="date"
          sx={inputDateStyle}
        />
      </Grid>
      <Grid item xs={12} sm={5}>
        <InputLabel sx={inputstyle}>State</InputLabel>
        <TextField
          id="firstName"
          name="firstName"
          label=""
          autoComplete="off"
          variant="outlined"
          sx={textFieldStyle}
        />
      </Grid>
      <Grid item xs={12} sm={5}>
        <InputLabel sx={inputstyle}>Breed</InputLabel>
        <TextField
          id="firstName"
          name="firstName"
          label=""
          autoComplete="off"
          variant="outlined"
          sx={textFieldStyle}
        />
      </Grid>
      <Grid item xs={12} sm={5}>
        <InputLabel sx={inputstyle}>Zip Code</InputLabel>
        <TextField
          id="firstName"
          name="firstName"
          label=""
          autoComplete="off"
          variant="outlined"
          sx={textFieldStyle}
        />
      </Grid>
      <Grid item xs={8} sm={5} display={"flex"}>
        <Box mr={5}>
          <InputLabel sx={inputstyle} flexDirection={"row"}>
            Weight
          </InputLabel>
          <TextField
            id="firstName"
            name="firstName"
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
              width: "11vw",
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
      </Grid>
      <Grid item xs={8} sm={5}>
        <InputLabel sx={inputstyle}>Country</InputLabel>
        <TextField
          id="firstName"
          name="firstName"
          label=""
          autoComplete="off"
          variant="outlined"
          sx={textFieldStyle}
        />
      </Grid>

      <Grid item xs={8} sm={5} display={"flex"}>
        <Box mr={5}>
          <InputLabel sx={inputstyle} flexDirection={"row"}>
            Fur Color
          </InputLabel>
          <TextField
            id="firstName"
            name="firstName"
            label=""
            autoComplete="off"
            variant="outlined"
            sx={smallTextStyle}
          />
        </Box>
        <Box>
          <InputLabel sx={inputstyle}>Eye Color</InputLabel>
          <TextField
            id="firstName"
            name="firstName"
            label=""
            autoComplete="off"
            variant="outlined"
            sx={smallTextStyle}
          />
        </Box>
      </Grid>

      <Grid item xs={12} sm={5}>
        <InputLabel sx={inputstyle}>Marks</InputLabel>
        <TextField
          id="firstName"
          name="firstName"
          label=""
          autoComplete="off"
          variant="outlined"
          sx={textFieldStyle}
        />
      </Grid>
    </Grid>
  );
}
