import { Typography, Grid, Button } from "@mui/material";
import * as React from "react";
import SaveIcon from "@mui/icons-material/Save";
import Date from "./Date";
import InputPolluant from "./InputPolluant";

function FilterContent({ polluant }) {
  return (
    <Grid container alignItems="center" justifyContent="left">
      <Grid item xs={6}>
        <Typography variant="button" sx={{ display: "block" }} gutterBottom>
          Importer vos données Tracemob :
        </Typography>
        <Button
          sx={{ backgroundColor: "#d9d9d9", color: "black" }}
          startIcon={<SaveIcon />}
        >
          Importer
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Date />
      </Grid>
      <Grid item xs={3}>
        <InputPolluant updatePolluant={polluant} />
      </Grid>
      <Grid item xs={9}>
        <Button variant="contained" sx={{ backgroundColor: "#0bbbd7", margin: "auto" }}>
          Générer histogramme
        </Button>
      </Grid>
    </Grid>
  );
}

export default FilterContent;
