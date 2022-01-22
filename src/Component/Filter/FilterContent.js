import { Typography, Grid, Button } from "@mui/material";
import * as React from "react";
import SaveIcon from "@mui/icons-material/Save";
import { styled } from "@mui/material/styles";
import Date from "./Date";
import InputPolluant from "./InputPolluant";
import UserProfile from "../UserProfile/UserProfile";

const Input = styled("input")({
  display: "none",
});

function FilterContent({ polluant }) {

  async function upload(event) {
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    formData.append('id', UserProfile.getId());
    await fetch("http://localhost:8080/fileshandler/uploadone",{
      method: 'POST',
      body: formData
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.status)
      }
      );
  }

  
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
            onChange={upload}
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
