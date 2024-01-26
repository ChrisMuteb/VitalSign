import React, { useState } from 'react';
import axios from 'axios';
import Navbar from "./Navbar";


const SeConnecter = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            email,
            password,
        };

        axios.post('/vitalsign/login', data)
            .then((response) => {
                if (response.data.success) {
                    // Redirect to the logged-in page
                    window.location.href = '/dashboard';
                } else {
                    alert('Invalid email or password');
                }
            })
            .catch((error) => {
                console.error('Login failed:', error);
                alert('An error occurred while logging in');
            });
    };

    return (
        <div>
            <Navbar />
            <div className="container w-96 mx-auto px-4 py-8 border mt-12 rounded-2xl">
                <div className="text-white text-3xl font-bold py-4 rounded-xl shadow-md">
                    <h1>Se connecter</h1>
                </div>
                <form onSubmit={handleSubmit} className="py-8">
                    <div className="mb-4">

                        <input
                            type="email"
                            placeholder='Adresse email'
                            id="email"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            className="rounded-md border-2 border-gray-300 p-2 w-full" />
                    </div>

                    <div className="mb-4">
                        <input
                            type="password"
                            id="password"
                            placeholder='Mot de pass'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="rounded-md border-2 border-gray-300 p-2 w-full" />
                    </div>

                    <div className="mb-4">
                        <input type="checkbox" id="acceptConditions" />
                        <label htmlFor="acceptConditions" className="text-white">Se souvenir de mon identifiant</label>
                    </div>

                    <div className="mt-12">
                        <button type="submit" className="bg-blue-500 w-full text-white rounded-md py-2 px-4">SE CONNECTER</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SeConnecter