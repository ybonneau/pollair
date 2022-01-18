import {
  Box,
  FormControl,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import * as React from "react";

const polluants = [
  ["PM10", 1],
  ["PM2.5", 2],
  ["O3", 3],
  ["NO2", 4],
  ["SO2", 5],
];

function InputPolluant({ updatePolluant }) {
  const [polluant, setPolluant] = React.useState([
    polluants[0][0],
    polluants[0][1],
  ]);

  return (
    <>
      <Typography variant="button" sx={{ display: "block" }} gutterBottom>
        Type de polluant :
      </Typography>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select
            labelId="polluantl"
            id="polluant"
            value={polluant}
            onChange={(newPolluant) => {
              setPolluant(newPolluant.target.value);
              updatePolluant(newPolluant.target.value);
            }}
          >
            {polluants.map((polluant) => (
              <MenuItem key={polluant[1]} value={polluant}>
                {polluant[0]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default InputPolluant;
