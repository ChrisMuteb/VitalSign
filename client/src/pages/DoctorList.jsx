import React, { useEffect, useState } from 'react'
import DoctorCard from './DoctorCard'
import Navbar from './Navbar'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const DoctorList = ()=>{
    const {user_id,searchTerm} = useParams();


    const [doctorList, setDoctorList] = useState([]);
    const [user,setUser]=useState('');

    const getDoctorList =()=>{
        axios.get("http://127.0.0.1:3001/vitalsign/user/search/doctor",{params:{
            keyword: searchTerm
        }})
        .then((response)=>{
            console.log(response);
            setDoctorList(response.data);
        })
        .catch((err)=>{
            console.error("Can't get doctor list", err);
        })
        
    }

    const displayDoctorList = doctorList.map((doctor)=>
        {
        console.log("doctor:",doctor);
        return <DoctorCard 
            key={doctor.user_id}
            doctor_id={doctor.user_id}
            patient_id = {user_id}
            name = {doctor.name}
            speciality = {doctor.speciality}
            telephone = {doctor.telephone}
        />}
    )
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
    useEffect(()=>{
        getDoctorList();
        getUser();
    },[]);

    const appointmentURL = `/vitalsign/appointment/${user.user_id}`;

    return (
        <div className='DoctorList item-center'>
            <nav className="navbar w-full flex fixed top-0 h-20 bg-blue-500 px-4 items-center justify-between text-white z-50 relative">
                <div className="flex items-center">
                    <h1 className="text-4xl font-extrabold">
                        <Link to='/vitalsign'>VitalSign</Link>
                    </h1>
                </div>
                <div className="links">
                    <div className="flex items-center space-x-4">
                        <Link to="http://localhost:3500/" className=" text-white px-4 py-2 rounded-full text-center">Mes messages</Link>
                        <Link to={appointmentURL} className=" text-white px-4 py-2 rounded-full text-center">Mes rendez-vous</Link>
                        <Link to="/vitalsign/login" className=" text-white px-4 py-2 rounded-full text-center">
                            {user.firstname} {user.lastname}
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="place-items-center">
                <div className="relative w-4/5">
                    {displayDoctorList}
                </div>
            </div>
            

        </div>

    )
}

export default DoctorList