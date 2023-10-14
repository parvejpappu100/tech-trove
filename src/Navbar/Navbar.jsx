import React, { useState } from 'react';
import "./Navbar.css"
import { FaAngleDown, FaBars, FaCartArrowDown, FaHeart } from 'react-icons/fa';
import { FaXmark } from "react-icons/fa6";

import { Link } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useCart from '../hooks/useCart';
import useSaved from '../hooks/useSaved';

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [cart] = useCart();
    const [saved] = useSaved();

    const [isAdmin] = useAdmin();

    return (
        <div className=' bg-white shadow lg:sticky lg:z-50 lg:top-0 px-4'>
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
            <nav className='flex items-center justify-between lg:container px-4 mx-auto pb-2 lg:pb-0 '>
                <div className="dropdown hidden lg:block">
                    <label tabIndex={0} className="btn normal-case  border-none rounded-none text-white lg:px-8 hover:bg-[#113366]  duration-500 bg-[#113366]">Categories <FaAngleDown></FaAngleDown></label>
                    <ul tabIndex={0} className="dropdown-content z-40 font-semibold menu p-2 shadow bg-base-100 w-52">
                        <li><Link to="/shop/Cameras">Cameras</Link></li>
                        <li><Link to="/shop/Electronics">Electronics</Link></li>
                        <li><Link to={"/shop/Audio"}>Audio</Link></li>
                        <li><Link to={"/shop/Computers"}>Computers</Link></li>
                        <li><Link to={"/shop/Accessories"}>Accessories</Link></li>
                        <li><Link to={"/shop/Laptop"}>Laptop</Link></li>
                        <li><Link to={"/shop/Watches"}>Watches</Link></li>
                        <li><Link to={"/shop/Mobile"}>Mobile</Link></li>
                        <li><Link to={"/shop/Headphone"}>Headphone</Link></li>
                    </ul>
                </div>
                <ul className={`z-50 rounded-bl-md lg:flex justify-center items-center text-xl absolute lg:static duration-500 ${open ? `top-[270px] md:top-[247px] right-0 w-40 duration-[1s]` : `-top-[400px] right-0 duration-[1s] w-40`} font-semibold text-xl bg-white text-black space-y-5 lg:space-y-0 py-4 lg:py-0 `}>
                    <li>
                        <Link className='link-hover-custom link-style' to="/">Home</Link>
                    </li>
                    <li>
                        <div className="dropdown dropdown-hover">
                            <label tabIndex={0} className='link-hover-custom link-style flex items-center'><span>Shop</span> <FaAngleDown></FaAngleDown></label>
                            <ul tabIndex={0} className="dropdown-content z-50 menu shadow bg-white w-52">
                                <li className='shop-dropdown'><Link to={`/shop/${"product"}`}>Shop</Link></li>
                                <li className='shop-dropdown'><Link to="/myCart">My Cart</Link></li>
                                <li className='shop-dropdown'><Link to="/wishlist">Wishlist</Link></li>
                                <li className='shop-dropdown'><Link to="/checkout">Checkout</Link></li>
                                <li className='shop-dropdown'><Link to={"/myOrder"}>My Order</Link></li>
                                <li className='shop-dropdown'><Link to={"/payment-history"}>Payment History</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link className='link-hover-custom link-style' to="blog">Blog</Link>
                    </li>
                    <li>
                        <Link className='link-hover-custom link-style'>Contact</Link>
                    </li>
                    <li>
                        <div className="dropdown dropdown-hover">
                            <label tabIndex={0} className='link-hover-custom link-style flex items-center'><span>Pages</span> <FaAngleDown></FaAngleDown></label>
                            <ul tabIndex={0} className="grid lg:grid-cols-3  dropdown-content z-50 menu shadow  bg-white lg:w-[400px]">
                                <li><Link>About Us</Link></li>
                                <li><Link>FAQ'S</Link></li>
                                <li><Link>Our Team</Link></li>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/singUp">Register</Link></li>
                                <li><Link>My Account</Link></li>
                                <li><Link to={"/404"}>404 Error</Link></li>
                                <li><Link>Coming Soon</Link></li>
                            </ul>
                        </div>
                    </li>
                    {isAdmin && <li>
                        <div className="dropdown dropdown-hover">
                            <label tabIndex={0} className='link-hover-custom link-style flex items-center'><span>Dashboard</span> <FaAngleDown></FaAngleDown></label>
                            <ul tabIndex={0} className="grid lg:grid-cols-3 dropdown-content z-50 menu shadow  bg-white lg:w-[500px]">
                                <li><Link>Admin Home</Link></li>
                                <li><Link to={"/manageOrders"}>Manage Orders</Link></li>
                                <li><Link>All Products</Link></li>
                                <li><Link>Manage Sliders</Link></li>
                                <li><Link>Discount Banner</Link></li>
                                <li><Link>New Arrivals</Link></li>
                                <li><Link to="/allUsers">Manage Users</Link></li>
                                <li><Link>Special Product</Link></li>
                                <li><Link>Manage Sponsors</Link></li>
                                <li><Link>Blog</Link></li>
                            </ul>
                        </div>
                    </li>}
                </ul>
                <div className='hidden lg:block'>
                    <div className='text-3xl flex gap-5 items-center'>
                        <div className='text-[#F75298] indicator'>
                            <Link to="/wishlist">
                                <span className="indicator-item indicator-start badge badge-secondary">+ {saved?.length || 0}</span>
                                <button><FaHeart></FaHeart></button>
                            </Link>
                        </div>
                        <div className=' indicator'>
                            <Link to="/myCart">
                                <button>
                                    <span className="indicator-item indicator-start badge badge-secondary">+ {cart?.length || 0}</span>
                                    <FaCartArrowDown></FaCartArrowDown>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;