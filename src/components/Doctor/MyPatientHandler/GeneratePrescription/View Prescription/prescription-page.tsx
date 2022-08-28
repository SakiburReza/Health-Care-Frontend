import {
  Grid,
  Typography,
  Rating,
  Stack,
  Button,
  StyledEngineProvider,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import ResponsiveAppBar from "components/Doctor/doctor-page-Appbar";
import DCTestList from "../dc-test-list";
import MedicineList from "../medicine-list";
import DoctorLayout from "components/Doctor/doctor-layout";
import {
  Doctor,
  MC_Prescription,
  Patient,
  Test_Prescription,
  _Notification,
} from "Classes/entity-class";
import { useEffect } from "react";
import { GeneratePrescription } from "Classes/helper-class";
import PatientInPrescription from "./patient-in-prescription";
import DoctorInPrescription from "./doctor-in-prescription";
import MedicineInPrescription from "./medicine-in-prescription";
import TestInPrescription from "./test-in-prescription";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';
import { API } from "API Handler/api";
import React from "react";

export default function PrescriptionPage() {
  const { state } = useLocation();
  const [notification,setNotification] = React.useState<_Notification>();
  const navigate = useNavigate();
  let generatePrescription: GeneratePrescription =
    state as GeneratePrescription;
  console.log("Chec:",generatePrescription)
    const exportPDF = () => {
      const input = document.getElementById("prescription")

       html2canvas(input as HTMLElement, {logging:true,  useCORS:true, scale: 2}).then(canvas =>{
          const imgWidth = 208; //default 208
          const imgHeight = canvas.height * imgWidth / canvas.width;
          const imgData = canvas.toDataURL('img/png');
          const pdf = new jsPDF ('p', 'mm', 'a4');
          pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
          pdf.save("Prescription_PDF.pdf") 
      }) 

      API.notification.saveNotification({
        ...notification,
        receiver: generatePrescription?.patient?.person,
        type: "Prescription Uploaded",
        message: "From Doctor: "+generatePrescription?.doctor?.person?.firstName +" "+ generatePrescription?.doctor?.person?.lastName+ "("+generatePrescription?.doctor?.person?.mobileNo+")",
        status: "pending",
      }).then((response) => {
        console.log("Notification placed");
      });
   
  }
  return (
    <DoctorLayout>
        <Grid
         id="prescription"
          container
          direction="column"
          //alignItems="center"
          justifyContent="space-between"
          sx={{ backgroundColor: "white", padding: "10px", height: "100%" }}
          spacing={2}
        >
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ backgroundColor: "white",  height: "100%" }}
            spacing={2}
          >
            <Grid item>
              <PatientInPrescription patient={generatePrescription.patient} />
            </Grid>
            <Grid item>
              <DoctorInPrescription doctor={generatePrescription.doctor} />
            </Grid>
          </Grid>
          <Grid
            item
            container
            sx={{
              backgroundColor: "#9AEDF5",
              height: "100%",
              width: "50%",
            }}
          >
            <MedicineInPrescription
              mcPresArray={generatePrescription.medPresArray}
            />
          </Grid>
          <Grid  item
            container
            sx={{
              backgroundColor: "#F8E594",
              padding: "10px",
              height: "100%",
              width: "50%",
            }}>
            <TestInPrescription
              testPresArray={generatePrescription.testPresArray}
            />
          </Grid>
        </Grid>
      <Button variant="contained" onClick={exportPDF}>Download Prescription</Button>
    </DoctorLayout>
  );
}


