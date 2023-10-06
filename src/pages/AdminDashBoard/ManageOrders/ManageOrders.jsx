import React from 'react';
import PageTitle from '../../../components/PageTitle/PageTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';

const ManageOrders = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: usersPaymentData = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure("/users-payment-data");
        return res.data;
    });

    console.log(usersPaymentData)

    return (
        <div>
            <PageTitle currentPage={"Manage Orders"}></PageTitle>
            {usersPaymentData.length == 0 ? <div className='bg-[#15407F] max-w-[1120px] mx-auto mt-5 py-3 text-white ps-5 font-semibold'>
                <h3>No orders data yet !</h3>
            </div> : <div className='max-w-[1120px] mx-auto px-4 my-24 '>
                {
                    usersPaymentData.map(data => <div key={data._id}>
                        <div className='my-12 bg-white p-8'>
                            <div className='text-center'>
                                <button disabled={true} className='btn  bg-[#113366] hover:bg-[#292929] text-white  font-semibold rounded disabled:bg-gray-400'>{data.status}</button>
                                <button className='btn  bg-[#113366] hover:bg-[#292929] text-white  font-semibold rounded disabled:bg-gray-400'>Processing...</button>
                                <button className='btn  bg-[#113366] hover:bg-[#292929] text-white  font-semibold rounded disabled:bg-gray-400'>Delivered</button>
                            </div>
                            <div className='my-4'>
                                <h3 className='font-semibold'>Customer Name :  {data.name}</h3>
                                <h3 className='font-semibold'>Customer Email :  {data.email}</h3>
                                <h3 className='font-semibold'>Customer Phone :  {data.phone}</h3>
                                <h3 className='font-semibold'>Order Date :  {data.date}</h3>
                                <h3 className='font-semibold'>Address :  {data.userAddress}, {data.city}, {data.country}</h3>
                                <h3 className='font-semibold'>Post Code :  {data.postCode}</h3>
                                <h3 className='font-semibold'>Earning Price :  ${data.price}</h3>
                                <h3 className='font-semibold'>Message :  {data.message ? data.message : "No Message"}</h3>
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

export default ManageOrders;