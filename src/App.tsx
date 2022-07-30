
import * as React from 'react';
import {DoctorDetails} from "./components/Doctor/doctor-details";
import ResponsiveAppBar from "./components/Doctor/doctor-page-Appbar";
import Front_Page from "./components/front-page";
import Header from "./components/header";
import {DoctorInfo} from "./doctor-info";
import {DoctorListUI} from "./doctor-list";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Router} from "react-router-dom";
import SignIn from "./SignIn";
import SignUpDoctor from "./SignUpDoctor";
import SignUpPatient from "./SignUpPatient";
import PatientHomepage from "./components/Patient/patient-homepage";
import SetAppointmentDetails from "./components/Patient/set-appointment-details";
import {SpecialitiesUI} from "./specialities";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Front_Page/>}/>
                <Route path="/specialities" element={<SpecialitiesUI/>}/>
                <Route path="/doctor-list" element={<DoctorListUI/>}/>
                <Route path="/doctor-info" element={<DoctorInfo/>}/>
                <Route path="/doctor-home-page" element={<ResponsiveAppBar/>}/>
                <Route path="/sign-up-patient" element={<SignUpPatient/>}/>
                <Route path="/sign-up-doctor" element={<SignUpDoctor/>}/>
                <Route path="/sign-in" element={<SignIn/>}/>

                <Route path="/patient-homepage" element={<PatientHomepage/>}/>

                <Route path="/set-appointment-details" element={<SetAppointmentDetails/>}/>


            </Routes>
        </BrowserRouter>
    );
}

export default App;

