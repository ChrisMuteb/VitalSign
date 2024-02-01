import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";

const AppointmentForm = ()=>{


    const {patient_id,doctor_id,start_time} = useParams();
    console.log("params",patient_id,doctor_id,start_time);

    const [patient,setPatient]=useState('');
    const [doctor,setDoctor]=useState('');

    const [symptom,setSymptom] = useState('');

    const navigate =useNavigate();

    const getPatient = async()=>{
        let user_id = patient_id;
        const res = await axios.get("http://127.0.0.1:3001/vitalsign/user/patient",
        {
            params:{
                user_id,
            }
        }).then((response)=>{
            console.log(response.data);
            setPatient(response.data);
        }).catch((err)=>{
            console.error("Can't get patient",err);
        });
    }

    const getDoctor = async()=>{
        let user_id = doctor_id;
        const res = await axios.get("http://127.0.0.1:3001/vitalsign/user/doctor",
        {
            params:{
                user_id,
            }
        }).then((response)=>{
            console.log(response.data);
            setDoctor(response.data);
        }).catch((err)=>{
            console.error("Can't get doctor",err);
        });
    }

    useEffect(()=>{
        getDoctor();
        getPatient();
    },[]);

    const time = new Date(start_time);
    console.log(time);

    const handleSubmit = async(e)=>{

        const res = await axios.post("http://127.0.0.1:3001/vitalsign/appointment",
        {
            doctor_id:doctor.user_id,
            patient_id:patient.user_id,
            start_time:time,
            symptom: symptom,
        }).then((response)=>{
            console.log(response.data);
            navigate(`/vitalsign/patient/${patient_id}`);
        }).catch((err)=>{
            console.error("can not book appointment",err);
        });

        

    }
    return(
        <div className="AppointmentForm">
            <Navbar className="relative"/>
            <div className="relative container w-3/5 mx-auto px-4 py-8 border mt-12 rounded-2xl bg-slate-200">
                <div className="text-center text-3xl font-bold py-4 rounded-xl shadow-md bg-slate-100">
                    <h1>Prendre rendez-vous</h1>
                </div>
                <form onSubmit={handleSubmit} className="py-8">
                    <label className="text-1xl">Informations sur le patient</label>
                    <div className="mb-4 flex justify-between relative">

                        <input
                            type="text"
                            id="familyname"
                            placeholder="Nom"
                            value={patient.firstname}
                            className="relative rounded-md w-60 border-2 border-gray-300 p-2 cursor-not-allowed" />
                        
                        <input
                            type="text"
                            id="familyname"
                            placeholder="Prénom"
                            value={patient.lastname}
                            className="relative rounded-md w-60 border-2 border-gray-300 p-2 cursor-not-allowed" />
                    </div>
                    <div className="mb-4 w-full justify-between relative">
                        <input
                            type="text"
                            id="symptom"
                            placeholder="Symptômes"
                            value={symptom}
                            onChange={(e)=>setSymptom(e.target.value)}
                            className="relative rounded-md w-full h-36 border-2 border-gray-300 p-2" />
                    </div>
                    <label className="text-1xl">Informations sur le rendez-vous</label>
                    <div className="mb-4 w-full justify-between relative pl-4">
                        <label className="text-1xl">Informations sur le docteur</label>
                        <div className="w-full mb-1">

                            <label className="text-1xl mr-2">Nom</label>
                            <input
                            type="text"
                            id="doctorname"
                            placeholder="Nom"
                            value={doctor.firstname + " " + doctor.lastname}
                            className="relative rounded-md w-60 border-2 border-gray-300 p-2 cursor-not-allowed" />
                            
                            <br/>
                            <label className="text-1xl mr-2">Spécialité</label>
                            <input
                            type="text"
                            id="speciality"
                            placeholder="Nom"
                            value={doctor.speciality}
                            className="relative rounded-md w-60 border-2 border-gray-300 p-2 cursor-not-allowed" />

                        </div>
                        <label className="text-1xl">Le rendez-vous commence à</label>
                        <input
                            type="text"
                            id="start_time"
                            placeholder="start_time"
                            value={time}
                            className="relative rounded-md w-60 border-2 border-gray-300 p-2 cursor-not-allowed" />
                    </div>
                    <div className="w-full text-center">
                        <button type="submit" className="bg-blue-500 w-40 text-white rounded-md py-2 px-4">Prendre rendez-vous</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default AppointmentForm;