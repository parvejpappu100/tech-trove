import React, { useState } from 'react';
import { FaMinus, FaPlus, FaRegHeart, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const MyCartProducts = ({ item, refetch , setDisable }) => {

    const [isDisable, setIsDisable] = useState(true);
    const [updating , setUpdating] = useState(false);
    const [axiosSecure] = useAxiosSecure();

    const handleChangeQuantity = (event) => {
        console.log()
        if (item.productQuantity !== parseInt(event.target.value)) {
            setIsDisable(false)
            setDisable(true)
        }
        else {
            setIsDisable(true)
            setDisable(false)
        }
    }

    const handleUpdatePrice = (event) => {
        event.preventDefault();
        setUpdating(true)
        const quantity = parseInt(event.target.quantity.value);
        const updatedQuantity = { newQuantity: quantity }
        axiosSecure.put(`/carts/${item._id}`, updatedQuantity)
            .then(data => {
                console.log(data)
                refetch();
                setIsDisable(true)
                setUpdating(false)
                setDisable(false)

            })

    };

    const handleDeleteProduct = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${item._id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className='bg-white p-8 mb-5'>
                <div className='flex flex-col md:flex-row gap-5 md:gap-0 justify-between'>
                    <img className='w-[80px] h-[80px] border' src={item.image} alt="" />
                    <h4 className='font-semibold'>{item.name}</h4>
                    <div className='flex md:items-center flex-col  gap-3'>
                        <p className='text-yellow-400 font-bold'>${item.price * item.productQuantity}</p>
                        <p className=' font-bold'>${item.price}</p>
                        <button><FaRegHeart></FaRegHeart></button>
                        <button onClick={handleDeleteProduct} className='text-red-500'><FaTrashAlt></FaTrashAlt></button>
                    </div>
                    <form onSubmit={handleUpdatePrice} className='flex gap-5 flex-col justify-between'>
                        <input onChange={handleChangeQuantity} className='border bg-gray-200 text-center w-[100px]' type="number" name="quantity" defaultValue={item.productQuantity} id="" />
                        <input disabled={isDisable} className='btn btn-xs normal-case bg-[#15407F] hover:bg-[#15407F] p-0 text-white font-semibold rounded-none w-24' type="submit" value={updating ? "Updating..." : "Update Price"} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyCartProducts;