import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Profile from './components/Profile';

function DoctorProfile() {
    const {user_id} = useParams();
    console.log("user_id:",user_id);

    const [user,setUser]=useState('');

    useEffect(()=>{
        getUser();
    },[]);

    const getUser = ()=>{
        console.log("user_id:",user_id);
        const res = axios.get("http://127.0.0.1:3001/vitalsign/user/doctor",{
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
    return (
        <Profile user={user}/>
    )
}

export default DoctorProfile