import { Button, Grid, Typography } from "@mui/material";
import Header from "components/header";
import { Link, useLocation } from "react-router-dom";
import DCAdminPageAppbar from "components/DiagnosticCenter/HompageConstruction/admin-page-appbar";
import { DCTestList, DC_Test, DiagnosticCenter } from "Classes/entity-class";
import { useEffect } from "react";
import React from "react";
import { API } from "API Handler/api";


import PatientLayout  from "../patient-layout";
import TestListCard from "./test-list-card";
export default function TestListUI() {

  const [dc_test_list,setDCTestList] = React.useState<DCTestList[]>();

  useEffect ( () => {
  API.dcTestList.getAllTest().then((response) =>{
   if(response.data == null)
   {
    console.log("No item here .")
   }
    setDCTestList(response.data)
    console.log(response)
    console.log("yes dctestlist read")
    
  });

  },[]);

  return (
    <>
   <PatientLayout children={undefined}/>

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
         {dc_test_list?.map((dc_test,idx) => (
            <Grid key = {idx} item>
              <TestListCard
              dc_test_list_info = {dc_test}
              
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
   
    </>

  );
}