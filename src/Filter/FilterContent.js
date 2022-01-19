import { Typography, Grid, Button } from "@mui/material";
import * as React from "react";
import SaveIcon from "@mui/icons-material/Save";
import Date from "./Date";
import InputPolluant from "./InputPolluant";

function FilterContent({ polluant }) {
  
  return (
    <Grid container alignItems="center" justifyContent="left">
      <Grid item xs={12}>
        <Typography variant="button" sx={{ display: "block" }} gutterBottom>
          Importer vos données Tracemob :
        </Typography>
        <Button
          sx={{ backgroundColor: "#d9d9d9", color: "black" }}
          startIcon={<SaveIcon />}
        >
          Importer
          <input type="file" hidden />
        </Button>
      </Grid>
      <Grid item xs={6} sx={{ marginTop: 2 }}>
        <InputPolluant updatePolluant={polluant} />
      </Grid>
      <Grid item xs={6} sx={{ marginTop: 2 }}>
        <Date />
      </Grid>
    </Grid>
  );
}

export default FilterContent;
