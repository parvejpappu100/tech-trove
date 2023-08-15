import React, { useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import useCart from '../../hooks/useCart';
import MyCartProducts from '../../components/MyCartProducts/MyCartProducts';
import { Link } from 'react-router-dom';
import CartsTotal from '../../components/CartsTotal/CartsTotal';
import { Helmet } from 'react-helmet-async';

const MyCart = () => {

    const [cart, refetch] = useCart();
    const [disable, setDisable] = useState(false);


    let totalPrice = 0;

    for (const product of cart) {
        const productTotal = product.price * product.productQuantity;
        totalPrice += productTotal;
    };

    const shipping = totalPrice >= 50 ? 0 : 5;
    const vat = totalPrice * 10 / 100;

    console.log(totalPrice)

    return (
        <div className='bg-[#F5F5F5]'>
            <Helmet>
                <title>My Cart | Tech Trove</title>
            </Helmet>
            <PageTitle currentPage={"My Cart"}></PageTitle>
            <div className='lg:container mx-auto py-16'>
                <div className='flex gap-10 lg:gap-0 flex-col lg:flex-row items-start'>
                    <div className='max-w-5xl w-full'>
                        {
                            cart.length !== 0 ? cart.map(item => <MyCartProducts key={item._id} refetch={refetch} item={item} setDisable={setDisable}></MyCartProducts>) : <div className='bg-[#15407F] py-3 text-white ps-5 font-semibold'>
                                <h3>Your cart is currently empty ! <Link className='text-red-500' to={`/shop/${"product"}`}>Shop Now</Link></h3>
                            </div>
                        }
                    </div>
                    <div className='w-full'>
                        <CartsTotal 
                        totalPrice={totalPrice} 
                        shipping={shipping}
                        vat={vat}
                        disable={disable}
                        ></CartsTotal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;