import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nouveau from './pages/Nouveau';
import DoctorList from './pages/DoctorList';
import SeConnecter from './pages/SeConnecter';
import DocAI from './pages/DocAI';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Practicien from './pages/Practicien';



// const root = ReactDOM.createRoot();
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/vitalsign' element={<App />} />
      <Route path='/vitalsign/patient/register' element={<Nouveau />} />
      <Route path='/vitalsign/doctor/register' element={<Practicien />} />
      <Route path='/vitalsign/doctorlist' element={<DoctorList />} />
      <Route path='/vitalsign/login' element={<SeConnecter />} />
      <Route path='/vitalsign/docai' element={<DocAI />} />

    </Routes>

  </BrowserRouter>,
  document.getElementById('root')

);
