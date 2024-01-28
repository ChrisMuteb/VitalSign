import React, { useState } from "react";
import axios from 'axios';
import Navbar from "./Navbar";



const Nouveau = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            username,
            email,
            password,
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
                            id="username"
                            placeholder="Téléphone portable (sinon fixe)"
                            value={username} onChange={(e) => setUsername(e.target.value)}
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
                            type="date"
                            id="password"
                            placeholder="Votre date de naissance (JJ/MM/AAAA)"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            className="rounded-md w-full border-2 border-gray-300 p-2" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="passwordConfirm"></label>
                        <input
                            type="password"
                            placeholder="Choisissez un mot de passe"
                            id="passwordConfirm"
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