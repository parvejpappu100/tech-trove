import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Helmet } from 'react-helmet-async';
import usePayment from '../../hooks/usePayment';
import { Link } from 'react-router-dom';

const PaymentHistory = () => {

    const [paymentData, paymentRefetch] = usePayment();

    return (
        <div>
            <PageTitle currentPage={"Payment History"}></PageTitle>
            <Helmet>
                <title>Payment History | Tech Trove</title>
            </Helmet>
            <div className='max-w-[1120px] mx-auto my-12 px-4'>
                <h3 className='text-xl font-bold'>Total Payment: {paymentData.length}</h3>
                {paymentData.length == 0 ? <div className='bg-[#15407F] mt-5 py-3 text-white ps-5 font-semibold'>
                    <h3>You don't buy anything ! <Link className='text-red-500' to={`/shop/${"product"}`}>Shop Now</Link></h3>
                </div> : <div className="overflow-x-auto w-full mt-12">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='bg-[#113366] text-white text-xl'> # </th>
                                <th className='bg-[#113366] text-white text-xl'>Class Name</th>
                                <th className='bg-[#113366] text-white text-xl'>Email</th>
                                <th className='bg-[#113366] text-white text-xl'>Price</th>
                                <th className='bg-[#113366] text-white text-xl'>Date</th>
                                <th className='bg-[#113366] text-white text-xl'>TransactionId</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paymentData.map((paymentsHistory, index) => <tr
                                    key={paymentsHistory._id}
                                >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {paymentsHistory.name}
                                    </td>
                                    <td className=' font-semibold'>
                                        {paymentsHistory.email}
                                    </td>
                                    <td className='text-yellow-600 font-semibold'>
                                        ${paymentsHistory.price}
                                    </td>
                                    <td>
                                        {paymentsHistory.date}
                                    </td>
                                    <td>
                                        {paymentsHistory.transactionId}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>}
            </div>
        </div>
    );
};

export default PaymentHistory;