import React,{useState} from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { GiHeartPlus } from "react-icons/gi";

const Nouveau = () => {

    return (
        <div className="nouveau">
            <nav className="navbar w-full flex relative h-20 bg-slate-100 px-4 items-center justify-between text-blue-600">
                <div className="flex">
                    <GiHeartPlus className="text-red-600 w-10 h-10"/>
                    <h1 className="text-2xl">VitalSign</h1>
                </div>
            </nav>
            <div className="grid grid-cols-1 gap-4 place-items-center flex relative w-full">
                <div className="bg-slate-400 w-3/5 text-center px-4 py-4 my-2">
                    <h1 className="text-3xl">Nouveau sur Vital Sign</h1>
                    <h1 className="text-2xl">Saisissez vos information pour continuer</h1>
                    <input type="text" placeholder="Téléphone portable" className="rounded-lg px-2 my-2 text-1xl w-3/5"/>
                    <input type="mail" placeholder="Votre addresse e-mail" className="rounded-lg px-2 my-2 text-1xl w-3/5"/>
                    <input type="mail" placeholder="Comfirmez votre addresse e-mail" className="rounded-lg px-2 my-2 text-1xl w-3/5"/>
                    <input type="text" 
                        onChange={(e) => console.log(e.target.value)}
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")} 
                        placeholder="Votre date de naissance (dd/mm/yyyy)" className="rounded-lg px-2 my-2 text-1xl w-3/5"/>
                    <input type="password" placeholder="Choisissez un mot de passe" className="rounded-lg px-2 my-2 text-1xl w-3/5"/>
                </div>
                <hr className="w-4/5"/>
                <div className="relative flex">
                    <input type="checkbox" className="relative"></input>
                    <p className="mx-1">J'accepte les condition d'utiliser</p>
                </div>
                <div className="relative flex">
                    <input type="checkbox" className="relative"></input>
                    <p className="mx-1">Se souvenir de mon identifiant</p>
                </div>
                <button className="bg-blue-600 text-white w-40 text-center rounded-lg text-2xl">
                    S'incrire
                </button>
                
            </div>
        </div>
    )
}

export default Nouveau