import React from 'react';
import { Link } from 'react-router-dom';
import vaccine from './Vaccine2.jpeg';
import doctor from './doctor.jpeg';
// import SearchBar from '../SearchBar';

function Profile(props) {
    const { user } = props;
    console.log(user);

    const appointmentURL = `/vitalsign/appointment/${user.user_id}`;

    console.log('user: ', user.user_id)

    // const homeURL = `/vitalsign/patient/${user.user_id}`;
    return (
        <div className="flex flex-col items-center h-screen">
            <nav className="navbar w-full flex fixed top-0 h-20 bg-blue-500 px-4 items-center justify-between text-white z-50 relative">
                <div className="flex items-center">
                    <h1 className="text-4xl font-extrabold">
                        <Link to='/vitalsign'>VitalSign</Link>
                    </h1>
                </div>
                <div className="links">
                    <div className="flex items-center space-x-4">
                        <Link to={{
                            pathname: user.role === 'Doctor' ? "/vitalsign/doctor/message" : '/vitalsign/patient/message',
                            state: `${user.firstname}`
                        }}
                            className=" text-white px-4 py-2 rounded-full text-center">Mes messages</Link>
                        <Link to={appointmentURL} className=" text-white px-4 py-2 rounded-full text-center">Mes rendez-vous</Link>
                        <Link to="/vitalsign/login" className=" text-white px-4 py-2 rounded-full text-center">
                            {user.firstname} {user.lastname}
                        </Link>
                    </div>
                </div>
            </nav>

            {/* <SearchBar user_id={user.user_id}/> */}
            {
                user && user.role === 'Patient' ? (
                    <div className='grid grid-cols-2 divide-x w-5/6 h-96'>
                        <div>
                            <h3 className='text-white text-center m-4'>VOIR MES RENDEZ-VOUS PASSES</h3>
                        </div>
                        <div>
                            <h3 className='text-white m-4'>Aucun Rendez-vous a venir</h3>
                            <p className='text-white m-4'>Trouvez un practicien et prenez un rendez-vous en ligne a tout moment</p>
                            <br />
                            <Link to="/vitalsign" className='bg-white p-4 m-4'>PRENDRE UN RENDEZ-VOUS</Link>
                        </div>
                    </div>
                ) : user && user.role === 'Doctor' ? (
                    <div className='grid grid-cols-2 divide-x w-5/6 h-96'>
                        <div className=' p-4'>
                            <img src={doctor} alt="" className="object-contain h-28 w-28 rounded-full mx-auto m-4" />
                            <h3 className='text-white text-center m-4'>{user.firstname} {user.lastname}</h3>
                            <p className='text-white text-center m-4'>{user.dob}</p>
                            <p className='text-white text-center m-4'>{user.speciality}</p>
                        </div>
                        <div>
                            <h3 className='text-white m-4'>Aucun Rendez-vous a venir</h3>
                            <br />
                            <a href="" className='bg-white p-4 m-4'>AJOUTER VOS UN DISPONIBILITY</a>
                        </div>
                    </div>
                ) : null
            }


            <div className='cards flex space-x-4 p-8  mt-auto'>
                <div className='card bg-white p-4 rounded-lg shadow-md'>
                    <img src={vaccine} alt="Vaccine" className=" w-full h-40 object-cover rounded-t-lg" />
                    <p className="text-center mt-4">Programme de vaccination contre le Covid-19</p>
                </div>
                <div className='card bg-white p-4 rounded-lg shadow-md'>
                    <img src={vaccine} alt="Image2" className="w-full h-40 object-cover rounded-t-lg" />
                    <p className="text-center mt-4">Programme de vaccination contre le Covid-19</p>
                </div>
                <div className='card bg-white p-4 rounded-lg shadow-md'>
                    <img src={vaccine} alt="Image3" className="w-full h-40 object-cover rounded-t-lg" />

                    <p className="text-center mt-4">Programme de vaccination contre le Covid-19</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
