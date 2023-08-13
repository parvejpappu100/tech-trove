import React, { useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import useCart from '../../hooks/useCart';
import { FaMinus, FaPlus, FaRegHeart, FaTrashAlt } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import MyCartProducts from '../../components/MyCartProducts/MyCartProducts';
import { Link } from 'react-router-dom';

const MyCart = () => {

    const [cart] = useCart();

    return (
        <div className='bg-[#F5F5F5]'>
            <PageTitle currentPage={"My Cart"}></PageTitle>
            <div className='lg:container mx-auto py-16'>
                <div>
                    <div className='max-w-4xl'>
                        {
                           cart.length !== 0 ?  cart.map(item => <MyCartProducts key={item._id} item={item}></MyCartProducts>) : <div className='bg-[#15407F] py-3 text-white ps-5 font-semibold'>
                            <h3>Your cart is currently empty ! <Link className='text-red-500' to={`/shop/${"product"}`}>Shop Now</Link></h3>
                           </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;