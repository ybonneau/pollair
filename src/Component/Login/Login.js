import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Stack } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";

function Login() {
  const paperStyle = { padding: 20, width: 280, margin: "20px auto" };
  const avatarStyle = { backgroundColor: "#0bbbd7" };
  const [id, setId] = React.useState("");

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
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
          <Link
            to={id !== "" ? '/home' : '#'}
            state={{ id: id }}
            style={{ textDecoration: "none" }}
          >
            <Button
              type="submit"
              variant="contained"
              disabled={id === ""}
              style={{ background: "#0bbbd7" }}
              fullWidth
            >
              Connexion
            </Button>
          </Link>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button
              type="submit"
              variant="contained"
              style={{ background: "#0bbbd7" }}
              fullWidth
            >
              Générer un ID
            </Button>
          </Link>
        </Stack>
      </Paper>
    </Grid>
  );
}

export default Login;