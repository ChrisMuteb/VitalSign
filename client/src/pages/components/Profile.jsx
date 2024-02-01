import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';

function Profile(props) {
    const {user} = props;
    console.log(user); 

    const appointmentURL = `/vitalsign/appointment/${user.user_id}`;

    const displayInformation = ()=>{
        if(user.role === "Doctor"){
            console.log("display");
            return(
                <div className='w-full flex relative text-1xl bg-slate-200 shadow-md justify-between text-center'>
                    <h1>Name: {user.firstname} {user.lastname}</h1>
                    <h1>Speciality: {user.speciality}</h1>
                </div>
            );
        }
        return(
            <div className='w-full flex relative text-1xl bg-slate-200 shadow-md justify-between text-center'>
                    <h1>Name: {user.firstname} {user.lastname}</h1>
                </div>
        );
        
    }

    return (
        <div className="flex flex-col items-center h-screen">
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
            {displayInformation()}

            <SearchBar user_id={user.user_id}/>
            <div className='cards flex space-x-4 p-8 border mt-auto'>
                <div className='card bg-white p-4 rounded-lg shadow-md'>
                    <img src="./vaccine2.jpeg" alt="Vaccine" className="w-full h-40 object-cover rounded-t-lg" />
                    <p className="text-center mt-4">Programme de vaccination contre le Covid-19</p>
                </div>
                <div className='card bg-white p-4 rounded-lg shadow-md'>
                    <img src="./vaccine2.jpeg" alt="Image2" className="w-full h-40 object-cover rounded-t-lg" />
                    <p className="text-center mt-4">Programme de vaccination contre le Covid-19</p>
                </div>
                <div className='card bg-white p-4 rounded-lg shadow-md'>
                    <img src="./vaccine2.jpeg" alt="Image3" className="w-full h-40 object-cover rounded-t-lg" />

                    <p className="text-center mt-4">Programme de vaccination contre le Covid-19</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
