import { Button, Grid, Typography } from "@mui/material";
import AppointmentListCard from "./appointment-list-card";
import DoctorLayout from "../doctor-layout";
import { useEffect } from "react";
import { API } from "API Handler/api";
import { Appointment, Doctor} from "Classes/entity-class";
import React from "react";

export function RequestedAppointmentListUI() {

  const [appointment,setAppointment] = React.useState<Appointment[]>();
  
  useEffect(() => {
    const id = (JSON.parse(localStorage.getItem("Doctor")||"") as Doctor).id;
    console.log("idd: ",id);

    API.appointment.getAppointmentList((id as number).toString(),"pending").then((response) => {
        setAppointment(response.data)
        console.log(response)
    });
  }, []);

  return (
    
   <DoctorLayout>
     
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: "10px", height: "100%" }}
          spacing={5}
        >
          {appointment?.map((appt, idx) => (
            <Grid key={idx} item>
            
              <AppointmentListCard
              appointment = {appt}
              />
        
            </Grid>
          ))}
        </Grid>
    
    </DoctorLayout>


   

  );
}
