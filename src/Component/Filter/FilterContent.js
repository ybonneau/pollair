import { Typography, Grid, Button } from "@mui/material";
import * as React from "react";
import SaveIcon from "@mui/icons-material/Save";
import { styled } from "@mui/material/styles";
import Date from "./Date";
import InputPolluant from "./InputPolluant";

const Input = styled("input")({
  display: "none",
});

function FilterContent({ polluant }) {
  return (
    <Grid container alignItems="center" justifyContent="left">
      <Grid item xs={12}>
        <Typography variant="button" sx={{ display: "block" }} gutterBottom>
          Importer vos données Tracemob :
        </Typography>
        <label htmlFor="contained-button-file">
          <Input
            accept=".timeline"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button
            variant="contained"
            component="span"
            sx={{ backgroundColor: "#0bbbd7", color: "white", ":hover": {
              bgcolor: "#d9d9d9",
              color: "black",
            } }}
            startIcon={<SaveIcon />}
          >
            Importer
          </Button>
        </label>
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
