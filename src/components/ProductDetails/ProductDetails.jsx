import React, { useState } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import { FaShoppingCart } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import ProductOverview from '../ProductOverview/ProductOverview';
import Services from '../Services/Services';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import Swal from 'sweetalert2';

const ProductDetails = () => {

    const [product, loading] = useProduct();

    const { id } = useParams();

    const productDetail = product.find(pd => pd._id == id);
    console.log(productDetail)

    const productCurrentQuantity = productDetail?.availability;
    const number = parseInt(productCurrentQuantity?.split('(')[1], 10);

    const [quantity, setQuantity] = useState(1);

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

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();

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
        <div>
            <Helmet>
                <title>Product Details | Tech Trove</title>
            </Helmet>
            <PageTitle currentPage={"Product Details"}></PageTitle>
            {loading && <div className='text-center'>
                <progress className="progress w-56"></progress>
            </div>}

            <div className='max-w-7xl mx-auto my-24 px-4 lg:px-0'>
                <div className='flex gap-5 lg:gap-12 flex-col lg:flex-row items-center'>
                    <div className='w-full'>
                        <img src={productDetail?.image} alt="" />
                    </div>
                    <div className='w-full'>
                        <h4 className='text-xl font-semibold my-4'>{productDetail?.name}</h4>
                        <div className='flex items-center gap-2 my-1'>
                            <Rating style={{ maxWidth: 100 }} value={productDetail?.rating} readOnly />
                            <p>{productDetail?.rating}</p>
                        </div>
                        {
                            productDetail?.offer ? <div className='flex gap-5 items-center'>
                                <p className='text-xl font-bold'>${productDetail?.price - (productDetail?.price * productDetail?.offer / 100)}</p>
                                <p className='text-xl text-red-500 line-through'>${productDetail?.price}</p>
                            </div> : <p className='text-xl font-bold'>${productDetail?.price}</p>
                        }
                        <p className='my-2'>{productDetail?.description.details}</p>
                        <p className='text-xl my-2'><strong>Code : </strong>{productDetail?.code}</p>
                        <h5 className='text-xl mb-3'><strong>Availability:</strong> {productDetail?.availability}</h5>
                        <div className='flex items-center gap-3'>
                            <strong className='text-xl'>Quantity:</strong>
                            <div className='bg-gray-200 flex items-center text-xl px-4'>
                                <button onClick={lessQuantity} className='text-3xl'>-</button>
                                <input className='mx-4 w-16 h-10 bg-gray-200 text-center  font-semibold' type="number" name="number" value={quantity} min="0" id="" readOnly />
                                <button onClick={addQuantity} className='text-3xl'>+</button>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <button onClick={handleAddToCart} className='btn  bg-[#113366] border hover:border-[#113366]  rounded-none text-white lg:px-8 hover:bg-white hover:text-black duration-500'>
                                <FaShoppingCart></FaShoppingCart>
                                <span>Add To Cart</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <ProductOverview product={productDetail}></ProductOverview>
                </div>
            </div>
            <hr className='w-full' />
            <div className='max-w-7xl mx-auto mt-20'>
                <Services></Services>
            </div>
        </div>
    );
};

export default ProductDetails;