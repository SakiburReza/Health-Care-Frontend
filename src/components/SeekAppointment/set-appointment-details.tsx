import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import React from "react";
import { Appointment, Patient } from "Classes/entity-class";
import { API } from "API Handler/api";

export default function SetAppointmentDetails({appointment,onChange}:{appointment:Appointment; onChange:(value)=>void}) {


  const[patient, setPatient] = React.useState<Patient>();
  let id = (JSON.parse(localStorage.getItem("Patient")||"") as Patient).id;
  useEffect(() => {   //Data will be loaded first time only
    API.patient.getPatientById(id as number).then(response=>{
      setPatient(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Patient's info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={
              (JSON.parse(localStorage.getItem("Patient") || "") as Patient)
                ?.person?.firstName
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={
              (JSON.parse(localStorage.getItem("Patient") || "") as Patient)
                ?.person?.lastName
            }
          />
        </Grid>
        <label htmlFor="Main symptom"></label>
        <Grid></Grid>

        <Grid item xs={12}>
          <TextField
            label="Briefly explain the problem"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={(e)=>{
              onChange({
                ...appointment,
                problem:e.target.value
              })
              
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Weight (kg)"
            fullWidth
            autoComplete="weight"
            variant="standard"
            value = {patient?.weight}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Height (cm)"
            fullWidth
            autoComplete="height"
            variant="standard"
            value = {patient?.height}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Mobile No."
            fullWidth
            autoComplete="mobileNo"
            variant="standard"
            value={
              (JSON.parse(localStorage.getItem("Patient") || "") as Patient)
                ?.person?.mobileNo
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
            value={
              (JSON.parse(localStorage.getItem("Patient") || "") as Patient)
                ?.person?.email
            }
          />
        </Grid>
        <Grid item xs={12}>
          {/*  <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          /> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
