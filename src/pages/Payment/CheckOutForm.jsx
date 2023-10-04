import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';

const CheckOutForm = ({ price }) => {

    const [axiosSecure] = useAxiosSecure();
    const [, refetch] = useCart();
    const { user, address } = useAuth();
    const [cardError, setCardError] = useState("");
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    console.log(address);
    const { name, email, phone, city, country, message, postCode, address: userAddress } = address;

    useEffect(() => {
        if (price > 5) {
            axiosSecure.post("/create-payment-intent", { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })

        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError("");
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || "unknown",
                        email: user?.email || "anonymous"
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message)
        }

        console.log(paymentIntent)
        setProcessing(false)

        if (paymentIntent.status === "succeeded") {
            const transactionId = paymentIntent.id;
            setTransactionId(transactionId);
            const payment = {
                email,
                transactionId,
                price,
                date: new Date(),
                name,
                phone,
                city,
                country,
                userAddress,
                message,
                postCode,
                status: "Pending"
            }

            axiosSecure.post("/payments", payment)
                .then(res => {
                    if (res.data.insertResult.insertedId && res.data.deletedResult.deletedCount) {
                        refetch();
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'Payment successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }


    }

    return (
        <div className='bg-white p-4 md:p-8 rounded-lg shadow-md'>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-6">Checkout</h2>
                    <label htmlFor="card-details" className="block text-gray-700 mb-2">
                        Card Details
                    </label>
                    <div id="card-details" className="p-3 border border-gray-300 rounded">
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
                <button
                    className={`btn bg-[#113366] hover:bg-[#292929] text-white  font-semibold rounded disabled:bg-gray-400 disabled:cursor-not-allowed ${processing == true ? "cursor-not-allowed" : ""}`}
                    type="submit" disabled={!stripe || !clientSecret || processing}
                >
                    {processing ? 'Processing...' : 'Pay'}
                </button>
            </form>
            {cardError && <p className="text-red-500 font-semibold mt-4">{cardError}</p>}
            {transactionId && (
                <p className="text-green-500 font-semibold mt-4">
                    Transaction complete with transactionId: {transactionId}
                </p>
            )}
        </div>
    );
};

export default CheckOutForm;