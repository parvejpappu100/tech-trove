import React from 'react';
import { FaCheck, FaLock, FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useState } from 'react';

const HeaderInfo = () => {

    const { user, logOut } = useAuth();

    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = event => {
        setSelectedCategory(event.target.value);
    }

    const handleLogout = () => {
        logOut()
            .then(result => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logout successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch()
    }

    return (
        <div className='bg-[#113366] text-white py-2 '>
            <div className='lg:container px-4 mx-auto flex flex-col md:flex-row md:px-4 lg:px-0 items-center justify-between '>
                <div className='flex items-center gap-3 '>
                    <FaCheck></FaCheck>
                    <h4>Free shipping on all orders over 50$</h4>
                </div>
                <div className='flex items-center  gap-3'>
                    <select className="select bg-[#113366] max-w-xs" value={selectedCategory} onChange={handleCategoryChange}>
                        <option disabled value="">Languages</option>
                        <option value="s">Svelte</option>
                        <option value="v">Vue</option>
                        <option value="r">React</option>
                    </select>
                    <span>|</span>
                    <div>
                        {
                            user ? <div className="flex items-center gap-3">
                                <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                    {
                                        user.photoURL ? <img className="rounded-full h-10 w-10" src={user.photoURL}></img> : <FaUserCircle className="h-10 w-10"></FaUserCircle>
                                    }
                                </div>
                                <Link onClick={handleLogout} className="font-semibold text-base">Log out</Link>
                            </div> : <div className='flex items-center gap-3'>
                                <FaLock></FaLock>
                                <Link to="/login"><button>Login</button></Link>
                                <span>Or</span>
                                <Link to="/singUp"><button>Register</button></Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderInfo;