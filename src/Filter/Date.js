import * as React from "react";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import { Box, Typography } from "@mui/material";

function Date({ updateDate }) {
  const [value, setValue] = React.useState([null, null]);

  return (
    <>
      <Typography variant="button" sx={{ display: "block" }} gutterBottom>
        Date :
      </Typography>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DateRangePicker
          startText="Date de début"
          endText="Date de fin"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            updateDate(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> - </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </>
  );
}
export default Date;
