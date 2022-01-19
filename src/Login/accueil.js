import React, { Component } from "react";
import {
    Grid,
    Paper,
    Avatar,
    TextField,
    Button,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Accueil() {
    const paperStyle = { padding: 20, width: 280, margin: "20px auto" };
    const avatarStyle = { backgroundColor: "#1bbd7e" };
    const [ID, setId] = React.useState(0);

    console.log(ID)
    return (
        <Grid>
            <Paper
                sx={{ border: 3, borderRadius: "3px", borderColor: "#0bbbd7" }}
                elevation={10}
                style={paperStyle}
            >
                <Grid align="center">
                    <Avatar style={avatarStyle} style={{ background: "#0bbbd7" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <h2>Connexion</h2>
                </Grid>
                <TextField label="ID" placeholder="champs id" fullWidth required />
                <p></p>
                <Button
                    type="submit"
                    variant="contained"
                    style={{ background: "#0bbbd7" }}
                    fullWidth
                >
                    Connexion
                </Button>
                <p></p>
                <Button
                    type="submit"
                    variant="contained"
                    style={{ background: "#0bbbd7" }}
                    fullWidth
                    onClick={
                        () => fetch("http://localhost:8080/personne/createpersonne")
                        .then(res => res.json())
                        .then(
                            (result) => {
                                this.setState({
                                    ID: result.ID,
                                });
                            })}
                >
                    Générer un ID{" "}
                </Button>
            </Paper>
        </Grid>
    );
}

export default Accueil;
