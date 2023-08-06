import React from 'react';
import { FaCartArrowDown, FaHeart } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <div className='bg-[#15407F] py-2 lg:py-5 text-white '>
            <div className='lg:container mx-auto flex flex-col lg:flex-row gap-5 lg:gap-0  justify-between items-center'>
                <div>
                    <h5 className='text-4xl font-bold hidden lg:block'>TechTrove</h5>
                </div>
                <div className='md:w-[600px] flex border-4 border-white rounded-xl'>
                    <select className="select bg-[#15407F] w-full max-w-[140px]">
                        <option disabled selected>Categories</option>
                        <option>Svelte</option>
                        <option>Vue</option>
                        <option>React</option>
                    </select>
                    <div className='w-full'>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full rounded-none text-black" />
                    </div>
                </div>
                <div className='text-3xl flex gap-5 items-center'>
                    <div className='text-[#F75298] indicator'>
                    <span className="indicator-item indicator-start badge badge-secondary">4</span>
                        <button><FaHeart></FaHeart></button>
                    </div>
                    <div className=' indicator'>
                        <span className="indicator-item badge badge-secondary">1</span>
                        <button><FaCartArrowDown></FaCartArrowDown></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;