import React, { Component } from 'react';
import { Grid,Paper } from '@mui/material'



function Pollair() {
    const paperStyle={padding :20,width:280, margin:"20px auto"}

    return (
        
        <Grid align='center'>

                <Grid align='center'>
                    <h2>Pollair c'est quoi ?</h2>
               
                <p>
                Pollair est une application qui vous permet de visualiser vos données Tracemob sur une carte ainsi que de filtrer vos données sur une période en choisissant un type de polluant.<br></br>
                Pollair inclut aussi une visualisation sous forme d'histogramme selon les polluants choisis.
                </p>
                <h2>Gestion de données</h2>
                <p>
                Nous assurons que vos données sont anonymisées dans notre base ainsi que protégées au sein de notre infrastructure en utilisant un unique identifiant pour accéder aux données.<br></br>
                Toute données importé pour votre session est temporaire et sera supprimé après récupération de votre rapport ou jusqu'au lendemain 
                </p>
            </Grid>
             
        </Grid>
    );
}


export default Pollair;