import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({price}) => {

    const [cardError, setCardError] = useState("");
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    console.log(price)
   

    // useEffect(() => {
    //     if (price > 0) {
    //         fetch("http://localhost:5000/create-payment-intent", {
    //             method: "POST",
    //             headers: {
    //                 "content-type": "application/json"
    //             },
    //             body: JSON.stringify({price})
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 setClientSecret(data.clientSecret)
    //             })
    //     }
    // }, [price])

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
                    className='btn bg-[#113366] hover:bg-[#292929] text-white  font-semibold rounded disabled:bg-gray-400 disabled:cursor-not-allowed'
                    type="submit"
                >
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-500 font-semibold mt-4">{cardError}</p>}
        </div>
    );
};

export default CheckOutForm;