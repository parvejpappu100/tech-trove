import React from 'react';
import PageTitle from '../../../components/PageTitle/PageTitle';
import useProduct from '../../../hooks/useProduct';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import { FaUsers, FaWallet, FaWeightHanging } from "react-icons/fa";
import OrderChart from '../../../components/OrderChart/OrderChart';

const AdminHome = () => {

    const [product] = useProduct();

    const [axiosSecure] = useAxiosSecure();

    const { data: usersPaymentData = [] } = useQuery(["users"], async () => {
        const res = await axiosSecure("/users-payment-data");
        return res.data;
    });

    let earningPrice = 0;

    for (const product of usersPaymentData) {
        earningPrice = product?.price + earningPrice;
    };

    const { data: users = [] } = useQuery(["users"], async () => {
        const res = await axiosSecure("/users");
        return res.data;
    });

    const pending = usersPaymentData.filter(pd => pd.status == "Pending");
    const processing = usersPaymentData.filter(pd => pd.status == "Processing");
    const delivered = usersPaymentData.filter(pd => pd.status == "Delivered");

    return (
        <div>
            <PageTitle currentPage={"Admin Home"}></PageTitle>
            <div className='max-w-[1120px] mx-auto px-4 my-24'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <div className='bg-gradient-to-r to-[#547099] flex items-center gap-5 rounded-md from-[#1861cf] p-5 text-white text-2xl font-semibold'>
                        <div>
                            <FaWallet className='text-4xl'></FaWallet>
                        </div>
                        <div>
                            <h4>${earningPrice.toFixed(2)}</h4>
                            <h4>Total Shell</h4>
                        </div>
                    </div>
                    <div className='bg-gradient-to-r from-[#638fd1] flex items-center gap-5 rounded-md to-[#1c6ae0] p-5 text-white text-2xl font-semibold'>
                        <div>
                            <FaUsers className='text-4xl'></FaUsers>
                        </div>
                        <div>
                            <h4>{users?.length}</h4>
                            <h4>Total Users</h4>
                        </div>
                    </div>
                    <div className='bg-gradient-to-r from-[#6c8ba9] flex items-center gap-5 rounded-md to-[#4886e3] p-5 text-white text-2xl font-semibold'>
                        <div>
                            <FaWeightHanging className='text-4xl'></FaWeightHanging>
                        </div>
                        <div>
                            <h4>{product?.length}</h4>
                            <h4>Total Product</h4>
                        </div>
                    </div>
                    <div className='bg-gradient-to-r from-[#72a7f5] flex items-center gap-5 rounded-md to-[#335d9b] p-5 text-white text-2xl font-semibold'>
                        <div>
                            <FaWallet className='text-4xl'></FaWallet>
                        </div>
                        <div>
                            <h4>{usersPaymentData?.length}</h4>
                            <h4>Total Orders</h4>
                        </div>
                    </div>
                </div>
                <div className='mt-24'>
                    <div className='text-3xl font-semibold'>
                        <h3>Total Pending Product : {pending.length}</h3>
                        <h3 className='my-4'>Total Processing Product : {processing.length}</h3>
                        <h3>Total Delivered Product : {delivered.length}</h3>
                    </div>
                    <div>
                        {
                            usersPaymentData?.map(paymentData => <OrderChart
                                key={paymentData._id}
                                paymentData={paymentData}
                            ></OrderChart>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;