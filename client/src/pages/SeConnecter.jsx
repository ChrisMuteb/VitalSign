import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import axios from "axios";


const SeConnecter = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email,
            password
        }
        // console.log(data);
        axios.post("http://127.0.0.1:3001/vitalsign/login", data)
            .then((response) => {
                console.log("Token: ", response.data.token);
                if (response.data.result.role === 'Patient') {
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("user", response.data.result.user_id);
                    navigate(`/vitalsign/patient/${response.data.result.user_id}`);

                } else if (response.data.result.role === 'Doctor') {
                    navigate(`/vitalsign/doctor/${response.data.result.user_id}`);

                }
            })
            .catch((error) => {
                alert('"wrong username of password"')
                console.log("wrong username of password", error)
            })


    };

    return (
        <div className="seconnecter">
            <Navbar className="relative" />
            <div className="relative container w-3/5 mx-auto px-4 py-8 border mt-12 rounded-2xl">
                <div className=" text-center text-3xl font-bold py-4 rounded-xl shadow-md">
                    <h1>J'ai dèja un compte</h1>
                </div>
                <form onSubmit={handleSubmit} className="py-8">
                    <div className="mb-4 text-center">
                        <div className="mb-4">
                            <input
                                type="text"
                                id="Email"
                                placeholder="Email"
                                value={email} onChange={(e) => setEmail(e.target.value)}
                                className="rounded-md w-60 border-2 border-gray-300 p-2" />
                        </div>


                        <div className="mb-4">
                            <input
                                type="password"
                                id="familyname"
                                placeholder="Password"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                                className="rounded-md w-60 border-2 border-gray-300 p-2" />
                        </div>

                        <button type="submit" className="bg-blue-500 w-40 text-white rounded-md py-2 px-4">Se Connecter</button>

                    </div>

                </form>


                <Link to="/vitalsign/patient/register" >
                    <div className="text-white text-3xl py-4 rounded-xl shadow-md">



                        <p>Nouveau sur VitalSign?</p>
                        S'INSCRIRE
                    </div></Link>
            </div>
        </div>
    )
}

export default SeConnecter