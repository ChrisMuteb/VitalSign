import React from "react";
import { GiHeartPlus } from "react-icons/gi";

const Navbar = () => {
    return (
 
        <nav className="navbar w-full flex fixed h-20 bg-slate-100 px-4 items-center justify-between text-blue-600">
            <div className="flex">
                <GiHeartPlus className="text-red-600 w-10 h-10"/>
                <h1 className="text-2xl">VitalSign</h1>
            </div>
            <div className="links">
                <div className="flex items-center space-x-4">
                    <a href="/" className="bg-blue-600 text-white w-40 text-center">Vous êtes practicien?</a>
                    <a href="/create" className="bg-blue-600 text-white w-40 text-center">Se Connecter</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;