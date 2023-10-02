import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle/PageTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import usePrice from '../../hooks/usePrice';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {

    const [price] = usePrice();

    return (
        <div>
            <Helmet>
                <title>Payment | Tech Trove</title>
            </Helmet>
            <PageTitle currentPage={"Payment"}></PageTitle>
            <div className='max-w-md mx-auto my-24 px-4'>
                {/* <Elements stripe={stripePromise}>
                    <CheckOutForm price={price}></CheckOutForm>
                </Elements> */}
            </div>
        </div>
    );
};

export default Payment;