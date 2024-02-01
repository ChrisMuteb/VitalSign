import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";

const Appointment = ()=>{

    const {user_id} = useParams();

    let [appointments,setAppointments] = useState([]);

    useEffect(()=>{
        console.log("get appointment");
        getAppointment();
    },[]);

    const getAppointment = async()=>{
        console.log("it work");
        const res = await axios.get("http://127.0.0.1:3001/vitalsign/appointment",
        {params:{
            user_id: user_id
        }}).then((response)=>{
            setAppointments(response.data);
            console.log("res",response.data);
        }).catch((err)=>{
            console.error("Can't get appointment",err);
        });
        console.log("appointment",appointments);

        /*const data = [
            {
                doctor_id: "1",
                name:"John",
                speciality: "dentiste",
                address: "15 rue Voltaire, 75000, Creteil"
            },
            {
                doctor_id: "2",
                name:"Fiona",
                speciality: "dentiste",
                address: "19 rue National, 77500, Kremlin-Bicêtre"
            },
            {
                doctor_id: "3",
                name:"Paul",
                speciality: "dentiste",
                address: "30 rue Tolbiac, 76500, Paris"
            },
        ];

        setAppointments(data);*/

    }

    const AppointmentCard = (props)=>{
        const {appointment} = props;
        console.log("props:",moment(appointment.start_time).format('YYYY-MM-DD HH:mm'));
        return(
            <div className="relative px-4 bg-slate-200">
                <h1 className="text-2xl mb-4">Appointment at: {moment(appointment.start_time).format('YYYY-MM-DD HH:mm')} </h1>
    
            </div>
        )
    }

    const displayAppointmentList = appointments.map((appointment)=>
    {
        console.log("appointment item",moment(appointment.start_time).format('YYYY-MM-DD HH:mm'));
        return (
        <div key={appointment.appointment_id} className="relative px-4 bg-slate-200">
            <h1 className="text-2xl mb-4">Appointment at: {moment(appointment.start_time).format('YYYY-MM-DD HH:mm')} </h1>

        </div>);
    });


    return(
        <div className="Appointment">
            <Navbar className="relative"/>
            <div className="place-items-center">
                <div className="relative w-4/5">
                    {displayAppointmentList}
                </div>
            </div>

        </div>
    );
}

export default Appointment;