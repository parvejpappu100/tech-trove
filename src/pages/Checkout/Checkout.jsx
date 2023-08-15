import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import useCart from '../../hooks/useCart';
import CartsTotal from '../../components/CartsTotal/CartsTotal';
import Services from '../../components/Services/Services';
import { Helmet } from 'react-helmet-async';

const Checkout = () => {

    const [cart, refetch] = useCart();

    let totalPrice = 0;

    for (const product of cart) {
        const productTotal = product.price * product.productQuantity;
        totalPrice += productTotal;
    };

    const shipping = totalPrice >= 50 ? 0 : 5;
    const vat = totalPrice * 10 / 100;

    return (
        <div>
            <Helmet>
                <title>Checkout | Tech Trove</title>
            </Helmet>
            <PageTitle currentPage={"Checkout"}></PageTitle>
            <div className='lg:container mx-auto py-16'>
                <div className='flex gap-10 lg:gap-0 flex-col lg:flex-row items-start'>
                    <div className='max-w-5xl w-full p-4 lg:p-0'>
                        <h3 className='font-semibold text-2xl '>Billing Details</h3>
                        <hr className='w-full my-3' />
                        <div>
                            <form>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Name<span className='text-red-500'>*</span></span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered rounded-none" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Email<span className='text-red-500'>*</span></span>
                                    </label>
                                    <input type="email" placeholder="Your Email" className="input input-bordered rounded-none" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Phone<span className='text-red-500'>*</span></span>
                                    </label>
                                    <input type="number" placeholder="Phone" className="input input-bordered rounded-none" />
                                </div>
                                <div className='flex flex-col lg:flex-row gap-5'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl font-semibold">Country<span className='text-red-500'>*</span></span>
                                        </label>
                                        <input type="text" placeholder="Country" className="input input-bordered rounded-none" />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl font-semibold">City/Town<span className='text-red-500'>*</span></span>
                                        </label>
                                        <input type="text" placeholder="City" className="input input-bordered rounded-none" />
                                    </div>
                                </div>
                                <div className='flex flex-col lg:flex-row gap-5'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl font-semibold">Address<span className='text-red-500'>*</span></span>
                                        </label>
                                        <input type="text" placeholder="Address" className="input input-bordered rounded-none" />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl font-semibold">Post Code<span className='text-red-500'>*</span></span>
                                        </label>
                                        <input type="text" placeholder="Post Code" className="input input-bordered rounded-none" />
                                    </div>
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Notes</span>
                                    </label>
                                    <textarea name="message" placeholder='Message' className='p-5 border' id="" cols="30" rows="5"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='w-full'>
                        <CartsTotal
                            totalPrice={totalPrice}
                            shipping={shipping}
                            vat={vat}
                        ></CartsTotal>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <Services></Services>
            </div>
        </div>
    );
};

export default Checkout;