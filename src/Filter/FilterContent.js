import { Typography, Grid, Button } from "@mui/material";
import * as React from "react";
import PublishIcon from "@mui/icons-material/Publish";
import Date from "./Date";

function FilterContent() {

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      rowSpacing={2}
      columnSpacing={4}
    >
      <Grid item xs={6}>
        <Typography>
          Importer vos données Tracemob :{" "}
          <Button
            sx={{ backgroundColor: "#d9d9d9", color: "black" }}
            endIcon={<PublishIcon />}
          >
            Importer
          </Button>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Date :</Typography>
        <Date/>
      </Grid>
    </Grid>
  );
}

export default FilterContent;
