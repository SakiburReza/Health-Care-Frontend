import { Button, Grid, Typography } from "@mui/material";
import Header from "components/header";
import { Link } from "react-router-dom";
import PrescriptionListCard from "./prescription-list-card";

import ResponsiveAppBar from "components/Doctor/doctor-page-Appbar";

export function PrescriptionListUI() {
  return (
    <>
   

   <ResponsiveAppBar/>
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{ backgroundColor: "yellow", padding: "10px", height: "100%" }}
      spacing={2}
    >
 
  
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          sx={{ backgroundColor: "blue", padding: "10px", height: "100%" }}
          spacing={5}
        >
          {Array.from(Array(10).keys()).map((i, idx) => (
            <Grid key={idx} item>
            
              <PrescriptionListCard
                title="Card Tittle"
                description="Necessary description"
                image={require("./images/doctor.jpg")}
                /* info = {
                    first_name1: "Dr. Faysal",
                    last_name: "Rana",
                    degree: "MBBS",
                    specialities: "General physician",
                    chamber:"lslls",
                    experience: 3,
                    rating : 4.8,
                    total rating: 3250,
                    fee : 250.50

                } */
              />
        
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
   

    </>


  );
}
