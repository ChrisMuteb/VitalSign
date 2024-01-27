import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Nouveau from "./pages/Nouveau";
import Practicien from "./pages/Practicien";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/vitalsign" element={<App />} />
      <Route path="/vitalsign/patient/register" element={<Nouveau />} />
      <Route path="/vitalsign/doctor/register" element={<Practicien />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
