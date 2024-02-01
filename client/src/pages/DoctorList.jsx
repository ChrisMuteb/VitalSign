import React, { useEffect, useState } from 'react'
import DoctorCard from './DoctorCard'
import Navbar from './Navbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const DoctorList = ()=>{
    const {searchTerm} = useParams();

    const [doctorList, setDoctorList] = useState([]);

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
            key={doctor.doctor_id}
            doctor_id={doctor.doctor_id}
            name = {doctor.name}
            speciality = {doctor.speciality}
            telephone = {doctor.telephone}
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