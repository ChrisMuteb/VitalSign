import React, { useState } from "react";
import axios from 'axios';
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';


const Practicien = () => {
    const [lastname, setLastname] = useState('');
    const [firstname, setFirstName] = useState('');
    const [codepostal, setCodePostal] = useState('94270');
    const [telephone, setTelephone] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Doctor');
    const [dob, setDOB] = useState('');
    const [profileImg, setProfileImg] = useState('img.jpg');

    const navigate = useNavigate();


    const handleSubmit = (e)=>{
        e.preventDefault();

        const data = {
            email,
            password,
            lastname,
            firstname,
            codepostal,
            telephone,
            role,
            dob,
            profileImg,
            speciality,
        }

        axios.post("http://localhost:3001/vitalsign/doctor/register", data)
            .then((response) => {
                console.log("Inscrivez-vous avec succès", response);
                navigate('/vitalsign/doctor');
            }).catch((error) => {
                console.log("Échec de l'enregistrement", error);
            })
    }

    return (
        <div className="practicien">
            <Navbar className="relative" />
            <div className="relative container w-3/5 mx-auto px-4 py-8 border mt-12 rounded-2xl bg-slate-200">
                <div className="text-center text-3xl font-bold py-4 rounded-xl shadow-md bg-slate-100">
                    <h1>S'inscrire</h1>
                </div>
                <form onSubmit={handleSubmit} className="py-8">
                    <div className="mb-4 flex justify-between relative">

                        <input
                            type="text"
                            id="lastname"
                            placeholder="Nom"
                            value={lastname} onChange={(e) => setLastname(e.target.value)}
                            className="relative rounded-md w-60 border-2 border-gray-300 p-2" />
                        
                        <input
                            type="text"
                            id="firstname"
                            placeholder="Prénom"
                            value={firstname} onChange={(e) => setFirstName(e.target.value)}
                            className="relative rounded-md w-60 border-2 border-gray-300 p-2" />
                    </div>

                    <div className="mb-4 flex justify-between relative">

                        <input
                            type="text"
                            id="codePostal"
                            placeholder="Code Postal"
                            value={codepostal} onChange={(e) => setCodePostal(e.target.value)}
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
                        <input
                            type="date"
                            placeholder="Votre date de naissance (JJ/MM/AAAA)"
                            id="dob"
                            value={dob} onChange={(e) => setDOB(e.target.value)}
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

                    <button type="submit" className="bg-blue-500 w-full text-white rounded-md py-2 px-4">
                        {/* <Link to='/vitalsign/doctor'>S'INSCRIRE</Link> */}
                        S'INSCRIRE
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Practicien