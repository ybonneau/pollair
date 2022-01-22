import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Stack } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile";

function Login() {
  const paperStyle = { padding: 20, width: 280, margin: "20px auto" };
  const avatarStyle = { backgroundColor: "#0bbbd7" };
  const [newId, setId] = React.useState("");
  let navigate = useNavigate();

  async function creation() {
    await fetch("http://localhost:8080/personne/createpersonne")
      .then((res) => res.json())
      .then((result) => {
        UserProfile.setId(result.data);
      });
    navigate("/home");
  }

  async function connexion() {
    await fetch("http://localhost:8080/personne/" + newId)
      .then((res) => res.json())
      .then((result) => {
        UserProfile.setId(result.data.idLogin);
      });

    navigate("/home");
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      style={{ minHeight: "100vh", marginTop: 150 }}
    >
      <Paper
        sx={{ border: 3, borderRadius: "3px", borderColor: "#0bbbd7" }}
        elevation={10}
        style={paperStyle}
      >
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Connexion</h2>
        </Grid>
        <Stack spacing={2}>
          <TextField
            label="ID"
            placeholder="Identifiant"
            onChange={(value) => {
              setId(value.target.value);
            }}
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            disabled={newId === ""}
            style={{ background: "#0bbbd7" }}
            fullWidth
            onClick={() => {
              connexion();
            }}
          >
            Connexion
          </Button>
          <Button
            type="submit"
            variant="contained"
            style={{ background: "#0bbbd7" }}
            fullWidth
            onClick={() => {
              creation();
            }}
          >
            Générer un ID
          </Button>
        </Stack>
      </Paper>
    </Grid>
  );
}

export default Login;
