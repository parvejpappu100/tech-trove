import React from 'react';
import PageTitle from '../../../components/PageTitle/PageTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import ManageOrderProducts from '../ManageOrderProducts/ManageOrderProducts';
import { Helmet } from 'react-helmet-async';

const ManageOrders = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: usersPaymentData = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure("/users-payment-data");
        return res.data;
    });

    return (
        <div>
            <PageTitle currentPage={"Manage Orders"}></PageTitle>
            <Helmet>
                <title>Manage Orders | Tech Trove</title>
            </Helmet>
            {usersPaymentData.length == 0 ? <div className='bg-[#15407F] max-w-[1120px] mx-auto mt-5 py-3 text-white ps-5 font-semibold'>
                <h3>No orders data yet !</h3>
            </div> : <div className='max-w-[1120px] mx-auto px-4 my-24 '>
                {
                    usersPaymentData.map(data => <ManageOrderProducts 
                    key={data._id} 
                    data={data}
                    refetch={refetch}
                    ></ManageOrderProducts>)
                }
            </div>}
        </div>
    );
};

export default ManageOrders;