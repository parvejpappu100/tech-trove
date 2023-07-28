import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const NewArrivalBanner = () => {
    return (
        <div className=' lg:container mx-auto my-24 bg-[#E3EFED] py-12 px-5'>
            <div className='flex gap-12 md:gap-0 flex-col md:flex-row justify-around items-center'>
                <div className=' w-full flex justify-center'>
                    <img src="https://i.ibb.co/ydS8hbV/collection-1-068eda16.png" alt="" />
                </div>
                <div className='flex flex-col justify-center items-center text-center  w-full'>
                    <h4 className='text-3xl font-semibold'>New Arrival</h4>
                    <h4 className='my-5 font-bold text-5xl'>Best Gadget</h4>
                    <h4 className='text-2xl'>Collection</h4>
                    <button className='btn mt-5 bg-[#113366] border-none rounded-none text-white lg:px-8 hover:bg-white hover:text-black duration-500'>
                        <FaShoppingCart className='hidden md:block'></FaShoppingCart>
                        <span>Shop Now</span>
                    </button>
                </div>
                <div className=' w-full flex justify-center py-20 md:py-0'>
                    <img className='lg:w-3/4 transform -rotate-90' src="https://i.ibb.co/4JYYQWs/collection-2-1cbe80ac.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default NewArrivalBanner;