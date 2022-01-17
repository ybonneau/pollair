import { Typography, Grid, Button } from "@mui/material";
import * as React from "react";
import PublishIcon from "@mui/icons-material/Publish";

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
        <Typography>
          Date :
          <DesktopDatePicker
            inputFormat="dd/MM/yyyy"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Typography>
      </Grid>
    </Grid>
  );
}

export default FilterContent;
