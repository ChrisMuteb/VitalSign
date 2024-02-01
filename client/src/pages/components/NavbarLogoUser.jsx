import React from "react";
import { Link } from 'react-router-dom';


const NavbarLogoUser = () => {
    return (
        <nav className="navbar w-full flex fixed top-0 h-20 bg-blue-500 px-4 items-center justify-between text-white z-50">
            <div className="flex items-center">
                <h1 className="text-4xl font-extrabold">
                    <Link to='/vitalsign'>VitalSign</Link>
                </h1>
            </div>
            <div className="links">
                <div className="flex items-center space-x-4">

                    <Link to="/vitalsign/login" className="bg-white text-blue-600 px-4 py-2 rounded-full text-center">Se Connecter</Link>
                </div>
            </div>
        </nav>
    );
}

export default NavbarLogoUser;
