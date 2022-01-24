import { Typography, Grid, Button } from "@mui/material";
import * as React from "react";
import SaveIcon from "@mui/icons-material/Save";
import { styled } from "@mui/material/styles";
import Date from "./Date";
import InputPolluant from "./InputPolluant";
import UserProfile from "../UserProfile/UserProfile";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Input = styled("input")({
  display: "none",
});

function FilterContent({ polluant, trajets }) {
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setError(false);
  };

  async function upload(event) {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("id", UserProfile.getId());
    await fetch("http://localhost:8080/fileshandler/uploadone", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status === 200) {
          setOpen(true);
          downloadTrajets();
        } else {
          setError(true);
        }
      });
  }

  async function downloadTrajets() {
    await fetch("http://localhost:8080/personne/trajets/" + UserProfile.getId())
      .then((response) => response.json())
      .then((res) => {
        res.trajets.forEach((trajet) => {
          const geoJson = {
            type: "FeatureCollection",
            features: trajet.locations.map((point) => {
              return {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: [
                    point.data.loc.coordinates[0],
                    point.data.loc.coordinates[1],
                  ],
                },
              };
            }),
          };
          UserProfile.addTrajet(geoJson);
        });
        trajets(UserProfile.getTrajets())
      });
  }

  return (
    <>
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
              sx={{
                backgroundColor: "#0bbbd7",
                color: "white",
                ":hover": {
                  bgcolor: "#d9d9d9",
                  color: "black",
                },
              }}
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Fichier importé!
        </Alert>
      </Snackbar>
      <Snackbar open={error} autoHideDuration={6000} onClose={handleCloseError}>
        <Alert
          onClose={handleCloseError}
          severity="error"
          sx={{ width: "100%" }}
        >
          Erreur : fichier non importé!
        </Alert>
      </Snackbar>
    </>
  );
}

export default FilterContent;
