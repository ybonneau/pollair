import * as React from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import FrameContent from "./FrameContent";

function MapFrame() {
  return (
    <>
    <Grid container spacing={2}>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={8}>
            <Box
                sx={{
                boxShadow: 2,
                width: "50vw",
                bgcolor: "white",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "5vh",
                paddingTop: "2vh",
                paddingRight: "4vw",
                paddingLeft: "4vw",
                paddingBottom: "2vh",
                fontFamily: "Roboto",
                }}
            >
                <FrameContent />
            </Box>
        </Grid>
    </Grid>
    </>
  );
}

export default MapFrame;
