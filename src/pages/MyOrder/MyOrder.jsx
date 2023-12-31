import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import usePayment from '../../hooks/usePayment';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const MyOrder = () => {

    const [paymentData] = usePayment();

    return (
        <div>
            <PageTitle currentPage={"My Order"}></PageTitle>
            <Helmet>
                <title>My Order | Tech Trove</title>
            </Helmet>
            {paymentData.length == 0 ? <div className='bg-[#15407F] max-w-[1120px] mx-auto mt-5 py-3 text-white ps-5 font-semibold'>
                <h3>No payment history yet ! <Link className='text-red-500' to={`/myCart`}>Complete Payment</Link></h3>
            </div> : <div className='max-w-[1120px] mx-auto px-4 my-24 '>
                {
                    paymentData.map(data => <div key={data._id}>
                        <div className='my-12 bg-white p-8'>
                            <div className='text-center'>
                                <button className='btn normal-case bg-[#113366] hover:bg-[#292929] text-white  font-semibold rounded disabled:bg-gray-400 cursor-not-allowed'>{data.status}</button>
                                {data.status == "Pending" ? <p className='text-red-500 font-bold my-2'>Order is pending...</p> : ""}
                                {data.status == "Processing" ? <p className='text-red-500 font-bold my-2'>Order is processing...</p> : ""}
                                {data.status == "Delivered" ? <p className='text-green-500 font-bold my-2'>Order Delivered.</p> : ""}
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