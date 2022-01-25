import * as React from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Generator(props) {
  
  let navigate = useNavigate();

  function histogramme() {
    navigate("/histogramme");
    console.log(props.trajets)
  }
  return (
    <Box
      sx={{
        width: "50vw",
        margin: "auto",
        textAlign: "center",
        paddingTop: 2,
      }}
    >
      <Button
        sx={{
          backgroundColor: "#0bbbd7",
          ":hover": {
            bgcolor: "#d9d9d9",
            color: "black",
          },
        }}
        variant="contained"
        onClick={() => {
          histogramme();
        }}
      >
        Générer Histogramme
      </Button>
    </Box>
  );
}

export default Generator;
