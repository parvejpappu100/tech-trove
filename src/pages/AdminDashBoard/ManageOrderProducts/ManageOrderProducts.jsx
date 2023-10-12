import React from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageOrderProducts = ({ data, refetch }) => {

    const [axiosSecure] = useAxiosSecure();
    const [isProcessing, setIsProcessing] = useState(false);
    const [isDelivered, setIsDelivered] = useState(false);

    const handleProcessing = () => {
        const updateStatus = { status: "Processing" };
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, do it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.put(`/user-payment-data/${data._id}`, updateStatus)
                    .then(data => {
                        if (data.data.modifiedCount > 0) {
                            refetch();
                            setIsProcessing(true);
                            Swal.fire(
                                'Success!',
                                `Order Delivered `,
                                'success'
                            )
                        }
                    })
            }
        })
    }

    const handleDelivered = () => {
        const updateStatus = { status: "Delivered" };
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, do it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.put(`/user-payment-data/${data._id}`, updateStatus)
                    .then(data => {
                        if (data.data.modifiedCount > 0) {
                            refetch();
                            setIsDelivered(true);
                            setIsProcessing(true)
                            Swal.fire(
                                'Success!',
                                `Order is processing `,
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='my-12 bg-white p-8'>
            <div className='text-center'>
                <button disabled={true} className='btn  bg-[#113366] hover:bg-[#292929] text-white  font-semibold rounded disabled:bg-gray-400'>Pending</button>
                <button disabled={isProcessing} onClick={handleProcessing} className='btn  bg-[#113366] hover:bg-[#292929] text-white  font-semibold rounded disabled:bg-gray-400 mx-3'>Processing...</button>
                <button disabled={isDelivered} onClick={handleDelivered} className='btn  bg-[#113366] hover:bg-[#292929] text-white  font-semibold rounded disabled:bg-gray-400'>Delivered</button>
                {data.status == "Pending" ? <p className='text-red-500 font-bold my-2'>Order is pending...</p> : "" }
                {data.status == "Processing" ? <p className='text-red-500 font-bold my-2'>Order is processing...</p> : "" }
                {data.status == "Delivered" ? <p className='text-green-500 font-bold my-2'>Order Delivered.</p> : "" }
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
    );
};

export default ManageOrderProducts;