import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaCartPlus, FaRegEye, FaRegHeart } from 'react-icons/fa';


const ProductsCard = ({ product }) => {

    const { name, image, rating, _id, price } = product;

    return (
        <div className=' bg-white'>
            <div className='relative transition duration-1000 transform p-6 hover:-translate-y-2 hover:shadow-md'>
                <img className='max-w-xs h-72' src={image} alt={name} />
                <h4 className='text-xl font-semibold my-4'>{name}</h4>
                <div className='flex items-center gap-2 my-1'>
                    <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                    <p>{rating}</p>
                </div>
                <p className='text-xl font-bold'>${price}</p>
                <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 absolute inset-0 flex justify-center items-center text-center transition-opacity duration-1000'>
                    <div className=' flex gap-4 items-center text-3xl'>
                        <button className='bg-white p-2 rounded-full tooltip' data-tip="Add To Cart"><FaCartPlus></FaCartPlus></button>
                        <button className='bg-white p-2 rounded-full tooltip' data-tip="Save Product"><FaRegHeart></FaRegHeart></button>
                        <button className='bg-white p-2 rounded-full tooltip' data-tip="Details"><FaRegEye></FaRegEye></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;