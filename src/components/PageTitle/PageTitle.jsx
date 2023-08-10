import React from 'react';

const PageTitle = ({currentPage}) => {
    return (
        <div className='bg-[#F5F5F5] -mt-2'>
            <div className='lg:container mx-auto flex justify-between items-center py-8 px-3 lg:px-0'>
                <div>
                    <h3 className='text-xl md:text-4xl font-semibold'>{currentPage}</h3>
                </div>
                <div className='flex gap-9'>
                    <h5>Home</h5>
                    <ul className='list-disc'><li>{currentPage}</li></ul>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default PageTitle;