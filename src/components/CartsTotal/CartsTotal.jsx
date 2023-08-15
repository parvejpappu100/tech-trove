import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CartsTotal = ({ totalPrice, shipping, vat, disable }) => {

    const location = useLocation();

    const checkoutPage = location.pathname.includes("checkout");

    return (
        <div>
            <div className='bg-white  p-10 h-[400px] w-full max-w-[400px] mx-auto lg:sticky lg:top-16'>
                <h4 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Cart Totals</h4>
                <hr className='my-3' />
                <div className='flex justify-between font-bold '>
                    <h3>Subtotal</h3>
                    <p>${totalPrice}</p>
                </div>
                <hr className='my-3' />
                <div className='flex justify-between font-bold '>
                    <h3>Shipping</h3>
                    <p>${shipping}</p>
                </div>
                <hr className='my-3' />
                <div className='flex justify-between font-bold '>
                    <h3>Vat(10%)</h3>
                    <p>${vat}</p>
                </div>
                <hr className='my-3' />
                <div className='flex justify-between font-bold '>
                    <h3>Payable Total</h3>
                    <p>${totalPrice + shipping + vat}</p>
                </div>
                <hr className='my-3' />
                {
                    checkoutPage == false ? <div>
                        <Link to={"/checkout"}>
                            <button disabled={disable} className='btn w-full bg-[#113366] hover:bg-[#292929] text-white rounded-none font-semibold'>
                                Proceed To Checkout
                            </button>
                        </Link>
                        {disable && <p className='text-red-500 font-bold text-center'>Please update the price...</p>}
                    </div> : ""
                }
            </div>
        </div>
    );
};

export default CartsTotal;