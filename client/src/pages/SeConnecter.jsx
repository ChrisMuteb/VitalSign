import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const SeConnecter = () => {

    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = {
            username,
            password
        }
        console.log(data);
        axios.post("/vitalsign/login",data)
        .then((response)=>{
            console.log("logged in",response);
        })
        .catch((error)=>{
            console.log("wrong username of password",error)
        })

    }

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
                                id="familyname"
                                placeholder="Username"
                                value={username} onChange={(e) => setUserName(e.target.value)}
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

            </div>
        </div>
    )
}

export default SeConnecter