import React, { useState } from 'react';
import { FaMinus, FaPlus, FaRegHeart, FaTrashAlt } from 'react-icons/fa';


const MyCartProducts = ({ item }) => {

    const [isDisable , setIsDisable] = useState(true);
    
    const handleChangeQuantity = (event) => {
        console.log()
        if(item.productQuantity !== parseInt(event.target.value)){
            setIsDisable(false)
        }
        else{
            setIsDisable(true)
        }
    }

    const handleUpdatePrice = (event) => {
        event.preventDefault();
        const quantity = parseInt(event.target.quantity.value);
        console.log(quantity)
        
    };

    return (
        <div>
            <div className='bg-white p-8 my-5'>
                <div className='flex flex-col md:flex-row gap-5 md:gap-0 justify-between'>
                    <img className='w-[80px] h-[80px]' src={item.image} alt="" />
                    <h4 className='font-semibold'>{item.name}</h4>
                    <div className='flex items-center flex-col  gap-3'>
                        <p>${item.price * item.productQuantity}</p>
                        <p className='text-red-500 font-bold'>${item.price}</p>
                        <button><FaRegHeart></FaRegHeart></button>
                        <button><FaTrashAlt></FaTrashAlt></button>
                    </div>
                    <form onSubmit={handleUpdatePrice} className='flex flex-col justify-between'>
                        <input onChange={handleChangeQuantity} className='border bg-gray-200 text-center w-[100px]' type="number" name="quantity" defaultValue={item.productQuantity} id="" />
                        <input disabled={isDisable}  className='btn btn-xs normal-case bg-[#15407F] hover:bg-[#15407F] p-0 text-white font-semibold rounded-none' type="submit" value="Update Price" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyCartProducts;