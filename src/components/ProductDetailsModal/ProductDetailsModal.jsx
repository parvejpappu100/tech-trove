import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaShoppingCart, FaWindowClose } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';

const ProductDetailsModal = ({ showModal, setShowModal, product, number }) => {

    const [quantity, setQuantity] = useState(1);
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [ , refetch] = useCart();

    const addQuantity = () => {
        if (quantity < number) {
            setQuantity(quantity + 1)
        }
    };

    const lessQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {productId: product._id , productQuantity: quantity , name: product.name , image: product.image , email: user.email , price: product.price , offer: product.offer ? product.offer : 0}
            fetch("http://localhost:5000/carts", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Product Added Successfully !',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'You have to Login first!',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go to login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            })
        }
    }

    return (
        <div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-7xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {product.name}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="h-6 w-6 text-2xl focus:outline-none">
                                            <FaWindowClose></FaWindowClose>
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className='flex gap-5 lg:gap-12 flex-col lg:flex-row items-center justify-center'>
                                        <div className='w-full'>
                                            <img src={product.image} alt="" />
                                        </div>
                                        <div className='w-full'>
                                            <h4 className='text-xl font-semibold my-4'>{product.name}</h4>
                                            <div className='flex items-center gap-2 my-1'>
                                                <Rating style={{ maxWidth: 100 }} value={product.rating} readOnly />
                                                <p>{product.rating}</p>
                                            </div>
                                            {
                                                product.offer ? <div className='flex gap-5 items-center'>
                                                    <p className='text-xl font-bold'>${product.price - (product.price * product.offer / 100)}</p>
                                                    <p className='text-xl text-red-500 line-through'>${product.price}</p>
                                                </div> : <p className='text-xl font-bold'>${product.price}</p>
                                            }
                                            <p className='my-2'>{product.description.details}</p>
                                            <h5 className='text-xl mb-3'><strong>Availability:</strong> {product.availability}</h5>
                                            <div className='flex items-center gap-3'>
                                                <strong className='text-xl'>Quantity:</strong>
                                                <div className='bg-gray-200 flex items-center text-xl px-4'>
                                                    <button onClick={lessQuantity} className='text-3xl'>-</button>
                                                    <input className='mx-4 w-16 h-10 bg-gray-200 text-center  font-semibold' type="number" name="number" value={quantity} min="0" id="" readOnly />
                                                    <button onClick={addQuantity} className='text-3xl'>+</button>
                                                </div>
                                            </div>
                                            <div className='mt-5 flex items-center gap-5'>
                                                <button onClick={handleAddToCart} className='btn  bg-[#113366] border hover:border-[#113366]  rounded-none text-white lg:px-8 hover:bg-white hover:text-black duration-500'>
                                                    <FaShoppingCart></FaShoppingCart>
                                                    <span>Add To Cart</span>
                                                </button>
                                                {
                                                    product.category && <Link to={`/productDetails/${product._id}`}>
                                                        <button className='btn  bg-[#113366] border hover:border-[#113366]  rounded-none text-white lg:px-8 hover:bg-white hover:text-black duration-500'>
                                                            Overview
                                                        </button>
                                                    </Link>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
};

export default ProductDetailsModal;