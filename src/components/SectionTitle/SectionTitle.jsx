import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <div className='mt-24 mb-16 lg:container px-4 mx-auto'>
            <div className='flex items-center justify-center gap-4'>
                <div className='w-1/5 md:w-40 border border-gray-400'></div>
                <h3 className='text-2xl md:text-4xl font-bold'>{title}</h3>
                <div className='w-1/5 md:w-40 border border-gray-400'></div>
            </div>
        </div>
    );
};

export default SectionTitle;