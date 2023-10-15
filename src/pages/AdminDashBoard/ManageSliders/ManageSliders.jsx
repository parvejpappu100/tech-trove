import React from 'react';
import PageTitle from '../../../components/PageTitle/PageTitle';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageSliders = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: sliders = [], refetch } = useQuery(["sliders"], async () => {
        const res = await axiosSecure("/sliders");
        return res.data;
    });

    const handleDelete = (slider) => {
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
                axiosSecure.delete(`/deleteSlider/${slider._id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Success!',
                                `Deleted Successful `,
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>
            <PageTitle currentPage={"Manage Slider"}></PageTitle>
            <div className='max-w-[1120px] mx-auto px-4 my-24'>
                <div className='text-center mb-12'>
                    <Link to="/addSlider">
                        <button className='btn  bg-[#113366] border-none rounded-none text-white lg:px-8 hover:bg-[#15407F] hover:text-white normal-case duration-500'>Add New Slider</button>
                    </Link>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold'>Total Slider : {sliders.length}</h3>
                </div>
                <div>
                    {
                        sliders.map(slider => <div key={slider._id} className='my-12 flex gap-5 items-center p-5 bg-white flex-col lg:flex-row shadow-sm'>
                            <div>
                                <img className=' md:w-[400px] lg:w-[600px] lg:h-[400px]' src={slider.image} alt="" />
                            </div>
                            <div>
                                <h3 className='text-2xl font-semibold'>{slider.title}</h3>
                                <h5 className='text-xl font-semibold my-3'>Category :  {slider.category}</h5>
                                <p>{slider.details}</p>
                                <div className='flex gap-5 mt-8'>
                                    <Link to={`/updateSlider/${slider._id}`}>
                                        <button className='btn  bg-[#113366] border-none rounded-none text-white lg:px-8 hover:bg-[#15407F] hover:text-white  duration-500'>Update <FaEdit></FaEdit></button>
                                    </Link>
                                    <button onClick={() => handleDelete(slider)} className='btn  bg-[#113366] border-none rounded-none text-white lg:px-8 hover:bg-red-700 hover:text-white  duration-500'>Delete <FaTrashAlt></FaTrashAlt></button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageSliders;