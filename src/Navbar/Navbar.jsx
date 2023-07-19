import React from 'react';
import "./Navbar.css"
import { FaAlignLeft } from 'react-icons/fa';

const Navbar = () => {

    const navOptions = <>
        <li>
            <a>Home</a>
        </li>
        <li>
            <a>Pages</a>
        </li>
        <li>
            <a>Shop</a>
        </li>
        <li>
            <a>Blog</a>
        </li>
        <li>
            <a>Contact</a>
        </li>
    </>

    return (
        <div className=''>
            <div className="navbar lg:container mx-auto py-0 -mt-2">
                <div className="navbar-start custom">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FaAlignLeft className='text-2xl'></FaAlignLeft>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-xl">
                            {navOptions}
                        </ul>
                    </div>
                    <div className='py-1 bg-[#113366]'>
                        <select className=" select bg-[#113366]  text-white rounded-none w-full max-w-xs  focus:outline-none hidden lg:block">
                            <option disabled selected>All Categories</option>
                            <option>Svelte</option>
                            <option>Vue</option>
                            <option>React</option>
                        </select>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex custom ">
                    <ul className="menu menu-horizontal px-1 text-xl ">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <p className='font-bold hover:text-red-600 hidden lg:block'><span className='text-red-600'>Hotline : </span>+467247 - 94546</p>
                    <div>
                        <h5 className='text-2xl text-[#15407F] font-bold lg:hidden'>TechTrove</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;