import React, { useState } from "react";
import axios from 'axios';
import Navbar from "./Navbar";

const Practicien = () => {

    const [familyName, setFamilyName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [codePostal, setCodePostal] = useState('');
    const [telephone, setTelephone] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            familyName,
            firstName,
            codePostal,
            telephone,
            speciality,
            email,
            password,
        }

        axios.post("/vitalsign/doctor/register", data)
            .then((response) => {
                console.log("Inscrivez-vous avec succès", response);
            }).catch((error) => {
                console.log("Échec de l'enregistrement", error);
            })
    }

    return (
        <div className="practicien">
            <Navbar className="relative" />
            <div className="relative container w-3/5 mx-auto px-4 py-8 border mt-12 rounded-2xl">
                <div className="text-center text-3xl font-bold py-4 rounded-xl shadow-md">
                    <h1>S'inscrire</h1>
                </div>
                <form onSubmit={handleSubmit} className="py-8">
                    <div className="mb-4 flex justify-between relative">

                        <input
                            type="text"
                            id="familyname"
                            placeholder="Nom"
                            value={familyName} onChange={(e) => setFamilyName(e.target.value)}
                            className="relative rounded-md w-60 border-2 border-gray-300 p-2" />

                        <input
                            type="text"
                            id="familyname"
                            placeholder="Prénom"
                            value={firstName} onChange={(e) => setFirstName(e.target.value)}
                            className="relative rounded-md w-60 border-2 border-gray-300 p-2" />
                    </div>

                    <div className="mb-4 flex justify-between relative">

                        <input
                            type="text"
                            id="codePostal"
                            placeholder="Code Postal"
                            value={codePostal} onChange={(e) => setCodePostal(e.target.value)}
                            className="relative rounded-md w-40 border-2 border-gray-300 p-2" />
                        <input
                            type="text"
                            id="telephone"
                            placeholder="Téléphone portable"
                            value={telephone} onChange={(e) => setTelephone(e.target.value)}
                            className="relative rounded-md w-60 border-2 border-gray-300 p-2" />
                    </div>



                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Votre spécialité"
                            id="speciality"
                            value={speciality} onChange={(e) => setSpeciality(e.target.value)}
                            className="rounded-md w-full border-2 border-gray-300 p-2" />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Address e-mail"
                            id="email"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            className="rounded-md w-full border-2 border-gray-300 p-2" />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Choisissez un mot de passe"
                            id="password"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            className="rounded-md w-full border-2 border-gray-300 p-2" />
                    </div>

                    <div className="mb-4">
                        <input type="checkbox" id="acceptConditions" />
                        <label htmlFor="acceptConditions" className="">J'accepte les Conditions d'Utilisation de VitalSign</label>
                    </div>

                    <div className="mb-4">
                        <input type="checkbox" id="acceptConditions" />
                        <label htmlFor="acceptConditions" className="">Se souvenir de mon identifiant</label>
                    </div>

                    <button type="submit" className="bg-blue-500 w-full text-white rounded-md py-2 px-4">S'INSCRIRE</button>
                </form>

            </div>
        </div>
    )
}

export default Practicien