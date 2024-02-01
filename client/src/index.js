import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Nouveau from "./pages/Nouveau";
import DoctorList from "./pages/DoctorList";
import SeConnecter from "./pages/SeConnecter";
import DocAI from "./pages/DocAI";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Practicien from "./pages/Practicien";
import AppointmentForm from "./pages/AppointmentForm";
import Appointment from "./pages/Appointment";
import PatientProfile from "./pages/PatientProfile";
import DoctorProfile from "./pages/DoctorProfile";

// const root = ReactDOM.createRoot();
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/vitalsign" element={<App />} />
      <Route path="/vitalsign/patient/register" element={<Nouveau />} />
      <Route path="/vitalsign/doctor/register" element={<Practicien />} />
      <Route
        path="/vitalsign/doctorlist/:searchTerm"
        element={<DoctorList />}
      />
      <Route path="/vitalsign/login" element={<SeConnecter />} />
      <Route path="/vitalsign/docai" element={<DocAI />} />
      <Route path="/vitalsign/appointment/:user_id" element={<Appointment />} />
      <Route
        path="/vitalsign/appointment/form/:doctor_id/:patient_id/:start_time"
        element={<AppointmentForm />}
      />
      <Route path="/vitalsign/patient/:user_id" element={<PatientProfile />} />
      <Route path="/vitalsign/doctor" element={<DoctorProfile />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
