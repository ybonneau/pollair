import { Typography, Grid, Button } from "@mui/material";
import * as React from "react";
import PublishIcon from "@mui/icons-material/Publish";
import Date from "./Date";
import InputPolluant from "./InputPolluant";

function FilterContent({polluant}) {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={5}>
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
      <Grid item xs={7}>
        <Date />
      </Grid>
      <Grid item xs={12} sx={{marginTop: 5}}>
        <InputPolluant updatePolluant={polluant}/>
      </Grid>
    </Grid>
  );
}

export default FilterContent;
