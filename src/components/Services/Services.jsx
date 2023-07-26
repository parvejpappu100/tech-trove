import React from 'react';
import { FaDollarSign, FaHeadset, FaShippingFast, FaUnlockAlt } from 'react-icons/fa';

const Services = () => {
    return (
        <div className='lg:container mx-auto bg-white px-8 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='flex items-center gap-2 text-xl text-[#292929] md:border-r'>
                <FaShippingFast className='text-5xl text-[#113366]'></FaShippingFast>
                <h5>Free Shipping Worldwide</h5>
            </div>
            <div className='flex items-center gap-2 text-xl text-[#292929] lg:border-r'>
                <FaDollarSign className='text-5xl text-[#113366]'></FaDollarSign>
                <h5>30 Days Money Returns</h5>
            </div>
            <div className='flex items-center gap-2 text-xl text-[#292929] md:border-r'>
                <FaUnlockAlt className='text-5xl text-[#113366]'></FaUnlockAlt>
                <h5>100% Secure Payment</h5>
            </div>
            <div className='flex items-center gap-2 text-xl text-[#292929]'>
                <FaHeadset className='text-5xl text-[#113366]'></FaHeadset>
                <h5>24/7 Customer Support</h5>
            </div>
        </div>
    );
};

export default Services;