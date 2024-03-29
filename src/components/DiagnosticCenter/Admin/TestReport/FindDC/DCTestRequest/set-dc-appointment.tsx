import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SetAppointmentDetails from "./set-dc-appointment-details";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import PatientAppbar from "components/Patient/patient-appbar";
import { useLocation } from "react-router-dom";
import { Appointment, DC_Test, Patient } from "Classes/entity-class";
import { valueToPercent } from "@mui/base";
import { API } from "API Handler/api";
import PatientLayout from "components/Patient/patient-layout";
import SetDCAppointmentDetails from "./set-dc-appointment-details";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

//const steps = ['Patient info', 'Payment details', 'Review appointment details'];
const steps = ["Patient info", "Payment details"];

const theme = createTheme();

export default function SetDCAppointment() {
  const { state } = useLocation();
  console.log("SetDCAppointment: state : dc_test er object")
  console.log(state)
  // const [_appointment, setAppointment] = React.useState<Appointment>(
  //   new Appointment()
  // );

  const [dc_test,setDCTest] = React.useState<DC_Test>(state as DC_Test);
  console.log("SetDCAppointment: dc_test : after set")
  console.log(dc_test)
  
  useEffect(() => {
    //Data will be loaded first time only
    // state && setAppointment(state as Appointment);
    state && setDCTest(state as DC_Test);

  }, [state]);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1) {
      // setAppointment({
      //   ..._appointment,
      //   status:"pending"
      // })
      setDCTest({
        ...dc_test,
        status:"pending"
      })
      // API.appointment.saveAppointment
      API.diagnosticCenter.addDCTest({  // changed
        ...dc_test,
        status:"pending"
      }).then((response) => {
        // setAppointment({
        //   ..._appointment,
        //   id: response.data.id,

        setDCTest({
          ...dc_test,
          id: response.data.id,
        });
      });
      // API.patient.updatePatientByHeightWeight(_appointment.patient as Patient)
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return (
          <SetDCAppointmentDetails  // pc
            // appointment={_appointment}
            // onChange={(value) => {
            //   setAppointment(value);
            // }}

            dc_test={dc_test}
            onChange={(value) => {
              setDCTest(value);
            }}

          />
        );
      case 1:
        return <PaymentForm />;
      case 2:
        return <Review />;
      default:
        throw new Error("Unknown step");
    }
  }
  return (
    <PatientLayout>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center">
              Provide DC Appointment Details
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your DC appointment.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your DC appointment number is {dc_test.id}.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      {activeStep === steps.length - 1 ? "Confirm" : "Next"}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
          {/*   <Copyright /> */}
        </Container>
      </ThemeProvider>
    </PatientLayout>
  );
}
