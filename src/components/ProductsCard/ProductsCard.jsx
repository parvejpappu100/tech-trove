import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaCartPlus, FaRegEye, FaRegHeart } from 'react-icons/fa';
import ProductDetailsModal from '../ProductDetailsModal/ProductDetailsModal';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import Swal from 'sweetalert2';


const ProductsCard = ({ product }) => {

    const { name, image, rating, price } = product;

    const [showModal, setShowModal] = useState(false);

    const productCurrentQuantity = product.availability;
    const number = parseInt(productCurrentQuantity.split('(')[1], 10);

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [ , refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = { productId: product._id, productQuantity: 1, name: product.name, image: product.image, email: user.email, price: product.price, offer: product.offer ? product.offer : 0 }
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
        <div className={` ${product.offer ? "border border-black" : "bg-white"}`}>
            <div className={`relative transition duration-1000 transform p-6 ${product.offer ? "hover:-translate-y-0" : "hover:-translate-y-2"} hover:shadow-md`}>
                <img className='max-w-xs h-72' src={image} alt={name} />
                <h4 className='text-xl font-semibold my-4'>{name}</h4>
                <div className='flex items-center gap-2 my-1'>
                    <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                    <p>{rating}</p>
                </div>
                {
                    product.offer ? <div className='flex gap-5 items-center'>
                        <p className='text-xl font-bold'>${price - (price * product.offer / 100)}</p>
                        <p className='text-xl text-red-500 line-through'>${price}</p>
                    </div> : <p className='text-xl font-bold'>${price}</p>
                }
                <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 absolute inset-0 flex justify-center items-center text-center transition-opacity duration-1000'>
                    <div className=' flex gap-4 items-center text-xl'>
                        <button onClick={handleAddToCart} className='bg-white p-2 rounded-full tooltip' data-tip="Add To Cart"><FaCartPlus></FaCartPlus></button>
                        <button className='bg-white p-2 rounded-full tooltip' data-tip="Save Product"><FaRegHeart></FaRegHeart></button>
                        <button onClick={() => setShowModal(true)} className='bg-white p-2 rounded-full tooltip' data-tip="Details"><FaRegEye></FaRegEye></button>
                    </div>
                </div>
                <div className={`absolute top-0 right-0 w-20 h-20 rounded-full ${product.offer ? "bg-red-700 hover:bg-[#113366] duration-1000" : "bg-[#113366] hover:bg-red-700 duration-500"} text-white font-bold`}>
                    <h5 className='py-6 px-5 text-xl'>{product.offer ? `-${product.offer}%` : "New"}</h5>
                </div>
            </div>
            <div>
                <ProductDetailsModal number={number} product={product} showModal={showModal} setShowModal={setShowModal}></ProductDetailsModal>
            </div>
        </div>
    );
};

export default ProductsCard;