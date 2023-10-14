import React from 'react';
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';
import { useState } from 'react';

const SavedProduct = ({ refetchSaved, item }) => {

    const [axiosSecure] = useAxiosSecure();
    const [, refetch] = useCart();
    const [isDisable, setDisable] = useState(false);

    const handleAddToCart = (productItem) => {
        setDisable(true);
        const item = {
            productId: productItem.productId,
            productQuantity: productItem.productQuantity,
            name: productItem.name,
            image: productItem.image,
            email: productItem.email,
            price: productItem.price,
            availability: productItem.availability
        };

        axiosSecure.post("/add-saved-product", item)
            .then(res => {
                if (res.data.insertResult.insertedId && res.data.deletedResult.deletedCount) {
                    refetchSaved();
                    refetch();
                    setDisable(false)
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Product Added successfully',
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }

    const handleDeleteItem = (item) => {
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
                setDisable(true);
                axiosSecure.delete(`/saved-delete/${item._id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            setDisable(false);
                            refetchSaved();
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
        <div className='bg-white p-5 border'>
            <img className='h-72' src={item.image} alt="" />
            <h3 className='my-2 text-xl font-semibold'>{item.name}</h3>
            <h5 className='text-xl font-semibold'>{item.availability}</h5>
            <p className='my-2 text-xl font-semibold'>Price : ${item.price}</p>
            <div className='flex justify-between'>
                <button disabled={isDisable} onClick={() => handleAddToCart(item)} className={`btn `}>
                    <FaShoppingCart></FaShoppingCart>
                    <span>Add To Cart</span>
                </button>
                <button onClick={() => handleDeleteItem(item)} className='btn'>
                    <FaTrashAlt className='text-red-500'></FaTrashAlt>
                    <span>Delete</span>
                </button>
            </div>
        </div>
    );
};

export default SavedProduct;