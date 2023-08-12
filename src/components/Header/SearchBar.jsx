import React from 'react';
import { useState } from 'react';
import { FaCartArrowDown, FaHeart } from 'react-icons/fa';
import useCart from '../../hooks/useCart';

const SearchBar = () => {

    const [selectedCategory, setSelectedCategory] = useState('');
    const [cart , refetch] = useCart();

    const handleCategoryChange = event => {
        setSelectedCategory(event.target.value);
    }

    return (
        <div className='bg-[#15407F] py-2 lg:py-5 text-white '>
            <div className='lg:container mx-auto flex flex-col lg:flex-row gap-5 lg:gap-0  justify-between items-center'>
                <div>
                    <h5 className='text-4xl font-bold hidden lg:block'>TechTrove</h5>
                </div>
                <div className='md:w-[600px] flex border-4 border-white rounded-xl'>
                    <select className="select bg-[#15407F] w-full max-w-[140px]" value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="" disabled>Categories</option>
                        <option value="s">Svelte</option>
                        <option value="v">Vue</option>
                        <option value="r">React</option>
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
                        <span className="indicator-item badge badge-secondary">+ {cart?.length || 0}</span>
                        <button><FaCartArrowDown></FaCartArrowDown></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;