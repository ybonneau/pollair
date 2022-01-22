import React from "react";
import { Box } from "@mui/material";

function Pollair() {
  return (
    <>
      <Box
        sx={{
          boxShadow: 2,
          width: "50vw",
          bgcolor: "white",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "5vh",
          border: 3,
          borderRadius: "3px",
          borderColor: "#0bbbd7",
          paddingTop: "2vh",
          paddingRight: "4vw",
          paddingLeft: "4vw",
          paddingBottom: "2vh",
          fontFamily: "Roboto",
          textAlign: "justify",
        }}
      >
        <h2>Pollair c'est quoi ?</h2>
        <p>
          Pollair est une application qui vous permet de visualiser vos données
          Tracemob sur une carte ainsi que de filtrer vos données sur une
          période en choisissant un type de polluant.
          Pollair inclut aussi une visualisation sous forme d'histogramme selon
          les polluants choisis.
        </p>
      </Box>
      <Box
        sx={{
          boxShadow: 2,
          width: "50vw",
          bgcolor: "white",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "5vh",
          border: 3,
          borderRadius: "3px",
          borderColor: "#0bbbd7",
          paddingTop: "2vh",
          paddingRight: "4vw",
          paddingLeft: "4vw",
          paddingBottom: "2vh",
          fontFamily: "Roboto",
          textAlign: "justify",
        }}
      >
        <h2>Gestion de données</h2>
        <p>
          Nous assurons que vos données sont anonymisées dans notre base ainsi
          que protégées au sein de notre infrastructure en utilisant un unique
          identifiant pour accéder aux données.
          Toute données importé pour votre session est temporaire et sera
          supprimé après récupération de votre rapport ou jusqu'au lendemain
        </p>
      </Box>
    </>
  );
}

export default Pollair;
