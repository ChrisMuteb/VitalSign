import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const SeConnecter = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = {
            email,
            password
        }
        console.log(data);
        axios.post("http://127.0.0.1:3001/vitalsign/login",data)
        .then((response)=>{
            console.log("logged in",response);
        })
        .catch((error)=>{
            console.log("wrong username of password",error)
        })

        axios.post('http://localhost:3001/vitalsign/login', data)
            .then((response) => {
                navigate('/vitalsign/patient');
                console.log('successful login ', response)

            })
            .catch((error) => {
                console.error('Login failed:', error);
                alert('An error occurred while logging in');
            });
    };

    return (
        <div className="seconnecter">
            <Navbar className="relative"/>
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
                <div className="text-white text-3xl py-4 rounded-xl shadow-md">
                    <p>Nouveau sur VitalSign?</p>
                    S'INSCRIRE
                </div>
            </div>
        </div>
    )
}

export default SeConnecter