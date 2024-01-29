// register patient
import React, { useState } from "react";
import axios from 'axios';
import Navbar from "./Navbar";

const Nouveau = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDOB] = useState('');
    const [insuranceID, setInsuranceID] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            firstname,
            lastname,
            email,
            password,
            dob,
            insuranceID
        };

        axios.post('/vitalsign/patient/register', data)
            .then((response) => {
                console.log('Signup successful:', response);
            })
            .catch((error) => {
                console.error('Signup failed:', error);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="container w-96 mx-auto px-4 py-8 border mt-12 rounded-2xl">
                <div className=" text-white text-3xl font-bold py-4 rounded-xl shadow-md">
                    <h1>S'inscrire</h1>
                </div>
                <form onSubmit={handleSubmit} className="py-8">
                    <div className="mb-4">
                        <input
                            type="text"
                            id="firstname"
                            placeholder="firstname"
                            value={firstname} onChange={(e) => setFirstname(e.target.value)}
                            className="rounded-md w-full border-2 border-gray-300 p-2" />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="lastname"
                            placeholder="lastname"
                            value={lastname} onChange={(e) => setLastname(e.target.value)}
                            className="rounded-md w-full border-2 border-gray-300 p-2" />
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            id="email"
                            placeholder="Votre adresse email"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            className="rounded-md w-full border-2 border-gray-300 p-2" />
                    </div>

                    <div className="mb-4">
                        <input
                            type="password"
                            id="password"
                            placeholder="Choisissez un mot de passe"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            className="rounded-md w-full border-2 border-gray-300 p-2" />
                    </div>

                    <div className="mb-4">
                        <input
                            type="date"
                            placeholder="Votre date de naissance (JJ/MM/AAAA)"
                            id="dob"
                            value={dob} onChange={(e) => setDOB(e.target.value)}
                            className="rounded-md w-full border-2 border-gray-300 p-2" />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="insuranceID"
                            placeholder="Votre assurance"
                            value={insuranceID} onChange={(e) => setInsuranceID(e.target.value)}
                            className="rounded-md w-full border-2 border-gray-300 p-2" />
                    </div>

                    <div className="mb-4">
                        <input type="checkbox" id="acceptConditions" />
                        <label htmlFor="acceptConditions" className="text-white">J'accepte les Conditions d'Utilisation de VitalSign</label>
                    </div>

                    <div className="mb-4">
                        <input type="checkbox" id="acceptConditions" />
                        <label htmlFor="acceptConditions" className="text-white">Se souvenir de mon identifiant</label>
                    </div>

                    <button type="submit" className="bg-blue-500 w-full text-white rounded-md py-2 px-4">S'INSCRIRE</button>
                </form>

            </div>
        </div>
    )
}

export default Nouveau