import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import CartsTotal from '../../components/CartsTotal/CartsTotal';
import Services from '../../components/Services/Services';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import usePrice from '../../hooks/usePrice';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import stripeLogo from "../../assets/images/stripe-logo.png";
import paypalLogo from "../../assets/images/paypal-logo.png"
import { Link } from 'react-router-dom';


const Checkout = () => {

    const [payAblePrice, subTotal, shipping, vat] = usePrice();
    const { user, setAddress} = useAuth();
    const [isDisable, setIsDisable] = useState(true);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data , event) => {
        event.preventDefault()
        
        if(Object.keys(errors).length == 0){
            setIsDisable(false)
        }
        else{
            setIsDisable(true)
        }
        const userAddress = { name: user.displayName, email: user.email, phone: data.phone, country: data.country, city: data.city, address: data.address, postCode: data.postCode, message: data.message , price: payAblePrice }
        setAddress(userAddress);
    }

    return (
        <div>
            <Helmet>
                <title>Checkout | Tech Trove</title>
            </Helmet>
            <PageTitle currentPage={"Checkout"}></PageTitle>
            <div className='lg:container px-4 mx-auto py-16'>
                <div className='flex gap-10 lg:gap-0 flex-col lg:flex-row items-start'>
                    <div className='max-w-5xl w-full p-4 lg:p-0'>
                        <h3 className='font-semibold text-2xl '>Billing Details</h3>
                        <hr className='w-full my-3' />
                        <div>
                            <form onChange={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Name<span className='text-red-500'>*</span></span>
                                    </label>
                                    <input type="text" placeholder="Name" readOnly className="input input-bordered rounded-none" defaultValue={user.displayName} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Email<span className='text-red-500'>*</span></span>
                                    </label>
                                    <input type="email" defaultValue={user.email} readOnly placeholder="Your Email" className="input input-bordered rounded-none" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Phone<span className='text-red-500'>*</span></span>
                                    </label>
                                    <input type="number" placeholder="Phone" {...register("phone", { required: true })} className="input input-bordered rounded-none" />
                                    {errors.phone && <span className='text-red-600'>Phone is required</span>}
                                </div>
                                <div className='flex flex-col lg:flex-row gap-5'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl font-semibold">Country<span className='text-red-500'>*</span></span>
                                        </label>
                                        <input type="text" placeholder="Country" {...register("country", { required: true })} className="input input-bordered rounded-none" />
                                        {errors.country && <span className='text-red-600'>Country is required</span>}
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl font-semibold">City/Town<span className='text-red-500'>*</span></span>
                                        </label>
                                        <input type="text" placeholder="City" {...register("city", { required: true })} className="input input-bordered rounded-none" />
                                        {errors.city && <span className='text-red-600'>City is required</span>}
                                    </div>
                                </div>
                                <div className='flex flex-col lg:flex-row gap-5'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl font-semibold">Address<span className='text-red-500'>*</span></span>
                                        </label>
                                        <input type="text" placeholder="Address" {...register("address", { required: true })} className="input input-bordered rounded-none" />
                                        {errors.address && <span className='text-red-600'>Address is required</span>}
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl font-semibold">Post Code<span className='text-red-500'>*</span></span>
                                        </label>
                                        <input type="text" placeholder="Post Code" {...register("postCode", { required: true })} className="input input-bordered rounded-none" />
                                        {errors.postCode && <span className='text-red-600'>Post Code is required</span>}
                                    </div>
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Notes(<sup>optional</sup>)</span>
                                    </label>
                                    <textarea name="message" placeholder='Message' {...register("message", { required: false })} className='p-5 border' id="" cols="30" rows="5"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='w-full'>
                        <CartsTotal
                            subTotal={subTotal}
                            shipping={shipping}
                            vat={vat}
                            payAblePrice={payAblePrice}
                        ></CartsTotal>
                        <div className='mt-12 bg-white p-10 max-w-[400px] mx-auto'>
                            <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Payment Method</h3>
                            <hr className='my-3' />
                            <div className='flex gap-3 items-center'>
                                <button disabled={isDisable} className={isDisable ? "tooltip tooltip-error tooltip-bottom cursor-not-allowed" : ""} data-tip="Please fill up the form">
                                    <img src={paypalLogo} className='w-[80px] border' alt="" />
                                </button>
                                <Link to={`/payment`} >
                                    <button disabled={isDisable} className={isDisable ? "tooltip tooltip-error tooltip-bottom cursor-not-allowed" : "tooltip tooltip-bottom"} data-tip={isDisable ? "Please fill up the form" : "Stripe"}>
                                        <img src={stripeLogo} className='w-[80px] border' alt="" />
                                    </button>
                                </Link>
                            </div>
                        </div>
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