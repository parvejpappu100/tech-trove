import React, { useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import useCart from '../../hooks/useCart';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { set } from 'react-hook-form';

const MyCart = () => {

    const [cart] = useCart();

    const [quantity, setQuantity] = useState(1);

    const addQuantity = () => {
        setQuantity(quantity + 1)
    };

    const lessQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='bg-[#F5F5F5]'>
            <PageTitle currentPage={"My Cart"}></PageTitle>
            <div className='lg:container mx-auto py-16'>
                <div>
                    <div className="overflow-x-auto max-w-5xl">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='bg-white text-[16px]  shadow text-black'>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item, index) => <tr key={item._id} className='border-b border-gray-300 padding-y'>
                                        <td>
                                            <button className='bg-[#A4A4A4] text-white rounded-full p-1'><FaXmark></FaXmark></button>
                                        </td>
                                        <td>
                                            <img className='w-[80px]' src={item.image} alt="" />
                                        </td>
                                        <td className='font-semibold text-[16px]'>
                                            {item.name}
                                        </td>
                                        <td className='font-semibold text-[16px]'>
                                            ${item.price}
                                        </td>
                                        <td className='flex items-center '>
                                            <button onClick={lessQuantity} className='bg-[#A4A4A4] text-white rounded-full p-1'><FaMinus></FaMinus></button>
                                            <button className='mx-5 text-[20px]'>{quantity}</button>
                                            <button onClick={addQuantity} className='bg-[#A4A4A4] text-white rounded-full p-1'><FaPlus></FaPlus></button>
                                        </td>
                                        <td className='font-semibold text-[16px]'>
                                            ${item.price * quantity}
                                        </td>

                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;