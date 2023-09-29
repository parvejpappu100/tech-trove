import React, { useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import useCart from '../../hooks/useCart';
import MyCartProducts from '../../components/MyCartProducts/MyCartProducts';
import { Link } from 'react-router-dom';
import CartsTotal from '../../components/CartsTotal/CartsTotal';
import { Helmet } from 'react-helmet-async';
import usePrice from '../../hooks/usePrice';

const MyCart = () => {

    const [cart, refetch] = useCart();
    const [payAblePrice ,subTotal , shipping , vat] = usePrice();
    const [disable, setDisable] = useState(false);


    return (
        <div className='bg-[#F5F5F5]'>
            <Helmet>
                <title>My Cart | Tech Trove</title>
            </Helmet>
            <PageTitle currentPage={"My Cart"}></PageTitle>
            <div className='lg:container px-4 mx-auto py-16'>
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
                        subTotal={subTotal} 
                        shipping={shipping}
                        vat={vat}
                        disable={disable}
                        payAblePrice={payAblePrice}
                        ></CartsTotal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;