import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../../../components/PageTitle/PageTitle';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import { FaTrashAlt } from 'react-icons/fa';
import Modal from 'react-modal';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const ManageSponsors = () => {

    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const [isDisable, setIsDisable] = useState(false);

    const { data: sponsors = [], refetch } = useQuery(["sponsors"], async () => {
        const res = await axiosSecure("/sponsors");
        return res.data;
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const modalStyles = {
        content: {
            height: '300px',
            width: '400px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
        },
    };



    const handleAddSponsor = (data, event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("image", data.image[0]);
        console.log(formData)
        console.log(data.image)
        setIsDisable(true);

        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    console.log(imgURL)
                    const newSponsor = { title: data.title, img: imgURL };
                    axiosSecure.post("/addSponsor", newSponsor)
                        .then(data => {
                            if (data.data.insertedId) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Sponsor added !',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                setIsDisable(false);
                                refetch();
                                handleCloseModal();
                            }
                            else {
                                setIsDisable(false);
                            }
                        })
                }
                else {
                    setIsDisable(false);
                }
            })

    }

    return (
        <div>
            <Helmet>
                <title>Manage Sponsors | Tech Trove</title>
            </Helmet>
            <PageTitle currentPage={"Manage Sponsors"}></PageTitle>
            <div className='max-w-[1120px] mx-auto px-4 my-24'>
                <div className='text-center mb-12'>
                    <button onClick={handleOpenModal} className='btn  bg-[#113366] border-none rounded-none text-white lg:px-8 hover:bg-[#15407F] hover:text-white normal-case duration-500'>Add New Sponsor</button>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold'>Total Slider :{sponsors?.length}</h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12'>
                    {
                        sponsors.map(sponsor => <div key={sponsor._id} className='  p-5 bg-white shadow-sm '>
                            <div className='flex flex-col'>
                                <div>
                                    <img className='w-[200px]' src={sponsor.img} alt="" />
                                </div>
                                <div>
                                    <h3 className='text-2xl font-semibold my-5'>{sponsor.title}</h3>
                                    <div className=' mt-8'>
                                        <button className='btn btn-sm  hover:bg-[#113366] border-none rounded-none text-white lg:px-8 bg-red-700 hover:text-white  duration-500'>Delete <FaTrashAlt></FaTrashAlt></button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={handleCloseModal}
                    contentLabel="Feedback Modal"
                    style={modalStyles}
                >
                    <h2 className='text-xl text-center font-semibold'>Sponsor</h2>
                    <div className='mt-3'>
                        <form onSubmit={handleSubmit(handleAddSponsor)}>
                            <div className="form-control">
                                <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs rounded-none" />
                                {errors.image && <span className='text-red-600'>Image is required</span>}
                            </div>
                            <div className="form-control w-full max-w-xs ">
                                <label className="label">
                                    <span className="label-text">Title*</span>
                                </label>
                                <input {...register("title", { required: true })} name='title' type="text" placeholder="Type here" className="input input-bordered rounded-none w-full max-w-xs" />
                                {errors.title && <span className='text-red-600'>Title is required</span>}
                            </div>
                            <div className='flex justify-end mt-4 max-w-xs'>
                                <input disabled={isDisable} className='btn  normal-case  bg-[#113366] border-none rounded-none text-white lg:px-4  hover:bg-[#113366] disabled:cursor-not-allowed' type="submit" value="Add Sponsor" />
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default ManageSponsors;