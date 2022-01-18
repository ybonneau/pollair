import { Box, FormControl, Select, MenuItem, Typography } from "@mui/material";
import * as React from "react";

const polluants = ["PM10", "PM2.5","O3", "NO2", "SO2"];

function InputPolluant() {
  const [polluant, setPolluant] = React.useState([polluants[0]]);

  return (
    <>
      <Typography variant="button" sx={{ display: "block" }} gutterBottom>
        Type de polluant :
      </Typography>
      <Box sx={{width: "40%"}}>
        <FormControl fullWidth>
          <Select
            labelId="polluantl"
            id="polluant"
            value={polluant}
            onChange={(newPolluant) => {
              setPolluant(newPolluant.target.value);
            }}
          >
            {polluants.map((polluant) => (
              <MenuItem key={polluant} value={polluant}>
                {polluant}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default InputPolluant;
