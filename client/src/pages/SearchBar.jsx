import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        navigate(`/vitalsign/doctorlist/${searchTerm}`);
        console.log(`Search term: ${searchTerm}`);
    };

    return (
        <div className='w-[1200px] mx-auto rounded-xl shadow-2xl p-20 m-20'>
            <h2 className="text-5xl text-white font-semibold">Trouvez un rendez-vous avec</h2>
            <h2 className='text-5xl text-white font-semibold'>une dentiste</h2>
            <form className="m-3">
                <input
                    type="text"
                    placeholder="Nom, spécialité, établissement,..."
                    value={searchTerm}
                    onChange={handleChange}
                    className="w-full p-4 bg-white rounded-full"
                />
                <button className='text-white bg-blue-950 m-5 p-5 rounded' type="button" onClick={handleSubmit}>
                    <Link to='/vitalsign/doctorlist'>Rechercher</Link>
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
