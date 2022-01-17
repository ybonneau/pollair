import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function Date() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <DatePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
export default Date;