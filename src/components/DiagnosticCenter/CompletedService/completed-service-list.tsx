import { Button, Grid, Typography } from "@mui/material";
import Header from "components/header";
import { Link, useLocation } from "react-router-dom";
import AppointmentListCard from "./completed-service-card";
import DCUserPageAppbar from "../HompageConstruction/dc-user-page-appbar";

import CompletedServiceCard from "./completed-service-card";
import { DC_Test, Taker } from "Classes/entity-class";
import { useEffect } from "react";
import React from "react";
import { API } from "API Handler/api";

export default function CompletedServiceListUI() {

  const [dc_test_list,setDCTestList] = React.useState<DC_Test[]>();

  useEffect ( () => {
  
  const id = (JSON.parse(localStorage.getItem("Taker")||"") as Taker).id || undefined;  
  console.log("taker id ")
  console.log(id)

  API.diagnosticCenter.getCompletedService(id as number).then((response) =>{
   if(response.data == null)
   {
    console.log("No item here .")
   }
    setDCTestList(response.data)
    console.log("all completed serviced data")
    console.log(response.data)
    
  });

  },[]);

  return (
    <>
   <DCUserPageAppbar/>
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{ backgroundColor: "gray", padding: "10px", height: "100%" }}
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
         {dc_test_list?.map((dc_test,idx) => (
            <Grid key = {idx} item>
              <CompletedServiceCard
              dc_test_info = {dc_test}
              />

            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
   
    </>

  );
}
