import React, { useEffect, useState } from 'react'
import DoctorCard from './DoctorCard'
import Navbar from './Navbar'
import axios from 'axios'

const DoctorList = (keyword)=>{

    const [doctorList, setDoctorList] = useState([]);

    const getDoctorList =()=>{
        /*axios.get("/vitalsign/doctors",{params:{
            "keyword": keyword
        }})
        .then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            console.error("Can't get doctor list", err);
        })*/
        const data = [
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

        setDoctorList(data)
        
    }

    const displayDoctorList = doctorList.map((doctor)=>
        {
        console.log("doctor:",doctor);
        return <DoctorCard 
            key={doctor.doctor_id}
            doctor_id={doctor.doctor_id}
            name = {doctor.name}
            speciality = {doctor.speciality}
            address = {doctor.address}
        />}
    )
    useEffect(()=>{
        getDoctorList();
    },[]);


    return (
        <div className='DoctorList item-center'>
            <Navbar/>
            <div className="place-items-center">
                <div className="relative w-4/5">
                    {displayDoctorList}
                </div>
            </div>
            

        </div>

    )
}

export default DoctorList