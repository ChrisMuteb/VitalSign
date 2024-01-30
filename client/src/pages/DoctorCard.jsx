import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { compareTimeOnly } from "../utils/DateTime";

const DoctorCard = (doctor_id, name, speciality,address)=>{

    name = "Doctor Name";
    speciality = "Dentiste";
    address = "35 rue Voltare, 72200 Torcy";

    const [appointments,setAppointment] = useState([]);
    /*const getAppointment = async()=>{
        const res = await axios.get("vitalsign/appointment",
        {params:{
            user_id: doctor_id
        }}).then((response)=>{
            setAppointment(response.data);
            console.log(appointments);
        }).catch((err)=>{
            console.error("Can't get appointment",err);
        })
    }*/

    const createAvailableAppointment = (appointment)=>{
        const dateTimeArray = [];
        const today = moment();
        for(let i = 0; i < 7; i++){
            const currentDate = today.clone().add(i,'days');
            if(![0,6].includes(currentDate.day())){
                const timeSlots = ['9:00','10:30','12:00','13:30','15:00','16:30'];

                timeSlots.forEach((timeSlot)=>{
                    const dateTimeString = {
                        date: `${currentDate.format('YYYY-MM-DD')}`,
                        time: `${timeSlot}`,
                        available: true
                    };
                    dateTimeArray.push(dateTimeString);
                });
            }
        }
        console.log(dateTimeArray);
        //getAppointment();
        appointment = ["2024-01-30 12:00","2024-01-30 10:30"];
        appointment.forEach((timeSlot)=>{
            const [date, time] = timeSlot.split(" ");

            dateTimeArray.forEach((item)=>{
                if(item["date"] === date && item["time"] === time){
                    item["available"] = false;
                }
            });
        });

        return dateTimeArray;
    }

    const displayAppointment = ()=>{
        const availableAppointment = createAvailableAppointment();
        console.log(availableAppointment);
        //create header
        const headerDateTime = [];
        const today = moment();
        for(let i = 0; i < 7; i++){
            const currentDate = today.clone().add(i,'days');
            if(![0,6].includes(currentDate.day())){
                const dateTimeString = `${currentDate.format('MM/DD')}`;
                headerDateTime.push(dateTimeString);
            }
        }
        console.log(headerDateTime);
        
        
          
        // Sort the dateTimeArray based on time only
        const sortedDateTimeArray = availableAppointment.sort(compareTimeOnly);
        console.log(sortedDateTimeArray);

        const displayCol = (item,time,available)=>{
            if(item["time"]===time){
                if(available) return <td className="text-center bg-blue-200 rounded-md border-2 hover:bg-blue-400"><a>{time}</a></td>;
                return <td><hr className=""/></td>;
            }
        }

        return (
            <table className="w-full">
              <thead className="justify-between">
                <tr>
                  {headerDateTime.map(header => (
                    <th key={header} >{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="">
                    {sortedDateTimeArray.map((item) => ( 
                        displayCol(item,"9:00",item["available"])
                    ))}
                </tr>
                <tr className="">
                    {sortedDateTimeArray.map((item) => ( 
                        displayCol(item,"10:30",item["available"])
                    ))}
                </tr>
                <tr className="">
                    {sortedDateTimeArray.map((item) => ( 
                        displayCol(item,"12:00",item["available"])
                    ))}
                </tr>
                <tr className="">
                    {sortedDateTimeArray.map((item) => ( 
                        displayCol(item,"13:30",item["available"])
                    ))}
                </tr>
                <tr className="">
                    {sortedDateTimeArray.map((item) => ( 
                        displayCol(item,"15:00",item["available"])
                    ))}
                </tr>
                <tr className="">
                    {sortedDateTimeArray.map((item) => ( 
                        displayCol(item,"16:30",item["available"])
                    ))}
                </tr>
              </tbody>
            </table>
          );

    }
    
    useEffect(()=>{
        displayAppointment();
    },[]);

    return (
        <div className="DoctorCard">
            <div className="flex relative my-4 mx-4 bg-slate-100">
                <div className="flex relative mx-4 my-4 w-">
                    <RxAvatar className="h-28 w-28"/>
                    <div>
                        <b className="text-2xl">{name}</b>
                        <h1 className="text-xl">Speciality: {speciality}</h1>
                        <h1 className="text-xl">{address}</h1>
                    </div>
                </div>
                <div className="flex relative my-4 mx-4 w-full">
                    {displayAppointment()}
                </div>

            </div>

        </div>
    );
}

export default DoctorCard;