import React from 'react';
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa';

const SavedProduct = ({ refetchSaved, item }) => {

    console.log(item)

    return (
        <div className='bg-white p-5 border'>
            <img className='h-72' src={item.image} alt="" />
            <h3 className='my-2 text-xl font-semibold'>{item.name}</h3>
            <h5 className='text-xl font-semibold'>Available Quantity : {item.availability}</h5>
            <p className='my-2 text-xl font-semibold'>Price : ${item.price}</p>
            <div className='flex justify-between'>
                <button className='btn'>
                    <FaShoppingCart></FaShoppingCart>
                    <span>Add To Cart</span>
                </button>
                <button className='btn'>
                    <FaTrashAlt className='text-red-500'></FaTrashAlt>
                    <span>Delete</span>
                </button>
            </div>
        </div>
    );
};

export default SavedProduct;