import React, { Component } from 'react';
import { Grid,Paper } from '@mui/material'



function Pollair() {
    const paperStyle={padding :20,width:280, margin:"20px auto"}

    return (
        
        <Grid align='center'>
             <Paper sx = {{border: 5,
            borderRadius: "40px",
            borderColor: "#0bbbd7",}} elevation={10} style={paperStyle}>

                <Grid align='center'>
                    <h2>Pollair c'est quoi ?</h2>
                </Grid>
                <p>
                Pollair est une application qui vous permet de visualiser vos données Tracemob sur une carte ainsi que de filtrer vos données sur une période en choisissant un type de polluant.<br></br>
                Pollair inclut aussi une visualisation sous forme d'histogramme selon les polluants choisis.
                </p>

             </Paper>
        </Grid>
    );
}


export default Pollair;