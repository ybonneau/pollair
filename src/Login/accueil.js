import React, { Component } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';



function Accueil() {
    const paperStyle={padding :20,width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return (
        
        <Grid>
            
            <Paper sx = {{border: 3,
            borderRadius: "3px",
            borderColor: "#0bbbd7",}} elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle} style={{background : "#0bbbd7"}}><LockOutlinedIcon/></Avatar>
                    <h2>Connexion</h2>
                </Grid>
                <TextField label='ID' placeholder='champs id' fullWidth required/>
                <p></p>
                <Button type='submit' variant="contained" style={{background : "#0bbbd7"}} fullWidth>Connexion</Button>
                <p></p>
                <Button type='submit' variant="contained" style={{background : "#0bbbd7"}} fullWidth>Générer un ID </Button>

                
            </Paper>
        </Grid>
    );
}


export default Accueil;