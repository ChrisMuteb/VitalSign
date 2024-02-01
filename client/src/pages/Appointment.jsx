import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import moment from "moment";

const Appointment = ()=>{

    const {user_id} = useParams();

    let [appointments,setAppointments] = useState([]);
    const [user,setUser]=useState('');

    useEffect(()=>{
        console.log("get appointment");
        getAppointment();
        getUser();
    },[]);

    const getUser = ()=>{
        console.log("user_id:",user_id);
        const res = axios.get("http://127.0.0.1:3001/vitalsign/user/patient",{
            params:{
                user_id,
            }
        }).then((response)=>{
            console.log("response:",response.data);
            setUser(response.data);
        }).catch((err)=>{
            console.error("can't get user.",err);
        })
    }

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


    const appointmentURL = `/vitalsign/appointment/${user.user_id}`;

    
    return(
        <div className="Appointment">
            <nav className="navbar w-full flex fixed top-0 h-20 bg-blue-500 px-4 items-center justify-between text-white z-50">
                <div className="flex items-center">
                    <h1 className="text-4xl font-extrabold">
                        <Link to='/vitalsign'>VitalSign</Link>
                    </h1>
                </div>
                <div className="links">
                    <div className="flex items-center space-x-4">
                        <Link to="/vitalsign/patient/message" className=" text-white px-4 py-2 rounded-full text-center">Mes messages</Link>
                        <Link to="/vitalsign/patient/rendez_vous" className=" text-white px-4 py-2 rounded-full text-center">
                            Mes rendez-vous</Link>
                        <Link to="/vitalsign/patient/document" className=" text-white px-4 py-2 rounded-full text-center">Mes document</Link>
                        <Link to={appointmentURL} className=" text-white px-4 py-2 rounded-full text-center">Mes rendez-vous</Link>
                        <Link to="/vitalsign/login" className=" text-white px-4 py-2 rounded-full text-center">
                            {user.firstname} {user.lastname}
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="place-items-center">
                <div className="relative w-4/5">
                    {displayAppointmentList}
                </div>
            </div>

        </div>
    );
}

export default Appointment;