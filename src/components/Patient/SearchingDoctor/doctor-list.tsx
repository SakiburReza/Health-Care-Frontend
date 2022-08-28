import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DoctorDetailsCard from "components/Patient/SearchingDoctor/doctor-details-card";
import Header from "components/header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Doctor, Speciality } from "Classes/entity-class";
import { API } from "API Handler/api";
import ts from "typescript";
import PatientAppbar from "components/Patient/patient-appbar";
import PatientLayout from "components/Patient/patient-layout";

export function DoctorListUI() {
  const { state } = useLocation();
  const [doctor, setDoctor] = React.useState<Doctor[]>();
  console.log(state);
  useEffect(() => {
    (state as Speciality).id &&
      API.doctor
        .getDoctorsBySpeciality((state as Speciality).id || -1)
        .then((response) => {
          setDoctor(response.data);
          console.log(response.data);
        });
  }, []);

  return (
    <PatientLayout>
      <Grid container>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          sx={{  height: "100%" }}
          spacing={5}
        >
          {doctor?.map((doc, idx) => (
            <Grid key={idx} item>
              <DoctorDetailsCard doctor={doc} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </PatientLayout>
  );
}
