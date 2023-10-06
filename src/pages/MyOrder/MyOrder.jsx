import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import usePayment from '../../hooks/usePayment';
import { Link } from 'react-router-dom';

const MyOrder = () => {

    const [paymentData, paymentRefetch] = usePayment();

    return (
        <div>
            <PageTitle currentPage={"My Order"}></PageTitle>
            {paymentData.length == 0 ? <div className='bg-[#15407F] max-w-[1120px] mx-auto mt-5 py-3 text-white ps-5 font-semibold'>
                <h3>No payment history yet ! <Link className='text-red-500' to={`/myCart`}>Complete Payment</Link></h3>
            </div> : <div className='max-w-[1120px] mx-auto px-4 my-24 '>
                {
                    paymentData.map(data => <div key={data._id}>
                        <div className='my-12 bg-white p-8'>
                            <div className='text-center'>
                                <button className='btn'>{data.status}</button>
                            </div>
                            <div className='grid grid-cols-2 gap-3 lg:grid-cols-3'>
                                {data.cart.map(pd => <div className='mt-5 p-5 border' key={pd._id}>
                                    <div className='flex flex-col md:flex-row gap-5 mb-12 md:mb-0 md:gap-0 justify-between'>
                                        <img className='w-[80px] h-[80px] border' src={pd.image} alt="" />
                                        <div>
                                            <h4 className='font-semibold'>{pd.name}</h4>
                                            <p className='font-semibold'>Quantity : {pd.productQuantity}</p>
                                        </div>
                                        <div>
                                            <p className='text-yellow-600 font-bold'>Price : ${pd.price}</p>
                                        </div>
                                    </div>
                                </div>)}
                            </div>
                        </div>
                    </div>)
                }
            </div>}
        </div>
    );
};

export default MyOrder;