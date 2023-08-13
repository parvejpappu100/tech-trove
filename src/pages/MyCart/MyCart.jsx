import React, { useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import useCart from '../../hooks/useCart';
import { FaMinus, FaPlus, FaRegHeart, FaTrashAlt } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import MyCartProducts from '../../components/MyCartProducts/MyCartProducts';
import { Link } from 'react-router-dom';

const MyCart = () => {

    const [cart , refetch] = useCart();
    console.log(cart)

    let totalPrice = 0;
    const shipping = totalPrice >= 50 ? 0 : totalPrice - (totalPrice * 10 / 100);

    for(const product of cart){
        const productTotal = product.price * product.productQuantity;
        totalPrice += productTotal;
    };

    console.log(totalPrice)

    return (
        <div className='bg-[#F5F5F5]'>
            <PageTitle currentPage={"My Cart"}></PageTitle>
            <div className='lg:container mx-auto py-16'>
                <div className='flex gap-10 flex-col lg:flex-row items-start'>
                    <div className='max-w-4xl w-full'>
                        {
                           cart.length !== 0 ?  cart.map(item => <MyCartProducts key={item._id} refetch={refetch} item={item}></MyCartProducts>) : <div className='bg-[#15407F] py-3 text-white ps-5 font-semibold'>
                            <h3>Your cart is currently empty ! <Link className='text-red-500' to={`/shop/${"product"}`}>Shop Now</Link></h3>
                           </div>
                        }
                    </div>
                    <div className='bg-white p-10 h-[400px] w-full max-w-[400px] mx-auto'>
                        <h4 className='text-3xl font-semibold'>Cart Totals</h4>
                        <hr className='my-3' />
                        <div className='flex justify-between font-bold '>
                            <h3>Subtotal</h3>
                            <p>${totalPrice}</p>
                        </div>
                        <hr className='my-3' />
                        <div className='flex justify-between font-bold '>
                            <h3>Shipping</h3>
                            <p>${shipping}</p>
                        </div>
                        <hr className='my-3' />
                        <div className='flex justify-between font-bold '>
                            <h3>Total</h3>
                            <p>${totalPrice + shipping}</p>
                        </div>
                        <hr className='my-3' />
                        <div className='flex justify-between font-bold '>
                            <h3>Payable Total</h3>
                            <p>${totalPrice + shipping}</p>
                        </div>
                        <hr className='my-3' />
                        <button className='btn w-full bg-[#113366] hover:bg-[#292929] text-white rounded-none font-semibold'>Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;