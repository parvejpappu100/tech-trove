import React from 'react';
import { FaCheck, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HeaderInfo = () => {
    return (
        <div className='bg-[#113366] text-white py-2 '>
            <div className='lg:container mx-auto flex flex-col md:flex-row md:px-4 lg:px-0 items-center justify-between '>
                <div className='flex items-center gap-3 '>
                    <FaCheck></FaCheck>
                    <h4>Free shipping on all orders over 50$</h4>
                </div>
                <div className='flex items-center gap-3'>
                    <select className="select bg-[#113366] w-full max-w-xs">
                        <option disabled selected>Languages</option>
                        <option>Svelte</option>
                        <option>Vue</option>
                        <option>React</option>
                    </select>
                    <span>|</span>
                    <div className='flex items-center gap-3'>
                        <FaLock></FaLock>
                        <Link to="/login"><button>Login</button></Link>
                        <span>Or</span>
                        <Link to="/singUp"><button>Register</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderInfo;