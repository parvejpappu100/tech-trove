import React, { useState } from 'react';
import "./Navbar.css"
import { FaBars } from 'react-icons/fa';
import { FaXmark } from "react-icons/fa6";

import { Link } from 'react-router-dom';

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = event => {
        setSelectedCategory(event.target.value);
    }

    return (
        <div className=' bg-white shadow lg:sticky lg:z-50 lg:top-0'>
            <div className="flex flex-row-reverse items-center justify-between lg:hidden">
                <button onClick={() => setOpen(!open)}>
                    <span>
                        {open === true ? (
                            <FaXmark className="h-10 w-10" />
                        ) : (
                            <FaBars className="h-10 w-10" />
                        )}
                    </span>
                </button>
                <div>
                    <h5 className='text-2xl text-[#15407F] font-bold lg:hidden'>TechTrove</h5>
                </div>
            </div>
            <nav className='flex items-center justify-between lg:container mx-auto pb-2 lg:pb-0 '>
                <div className='py-1 bg-[#113366] hidden lg:block'>
                    <select className=" select bg-[#113366]  text-white rounded-none w-full max-w-xs  focus:outline-none " value={selectedCategory} onChange={handleCategoryChange}>
                        <option disabled value="">All Categories</option>
                        <option value="c">Cameras</option>
                        <option value="e">Electronics</option>
                        <option value="a">Audio</option>
                        <option value="co">Computers</option>
                        <option value="ac">Accessories</option>
                        <option value="l">Laptop</option>
                        <option value="w">Watches</option>
                        <option value="m">Mobile</option>
                        <option value="h">Headphone</option>
                    </select>

                </div>
                <ul className={`z-50 rounded-bl-md lg:flex justify-center text-xl absolute lg:static duration-500 ${open ? `top-[270px] md:top-[247px] right-0 w-40 duration-[1s]` : `-top-[300px] right-0 duration-[1s] w-40`}  hover-nav-link font-semibold text-xl bg-white text-black  `}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="blog">Blog</Link>
                    </li>
                    <li>
                        <Link>Contact</Link>
                    </li>
                </ul>
                <div className='hidden lg:block'>
                    <p className='font-bold hover:text-red-600 '><span className='text-red-600'>Hotline : </span>+467247 - 94546</p>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;