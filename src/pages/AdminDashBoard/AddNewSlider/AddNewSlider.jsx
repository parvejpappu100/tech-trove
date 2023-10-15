import React from 'react';
import PageTitle from '../../../components/PageTitle/PageTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddNewSlider = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();
    const [isDisable, setIsDisable] = useState(false);

    const onSubmit = (data, event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("image", data.image[0]);
        setIsDisable(true);

        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const newSlider = { title: data.title, category: data.category, details: data.details, image: imgURL };
                    axiosSecure.post("/addSlider", newSlider)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                setIsDisable(false);
                                navigate("/sliders")
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Slider added !',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
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
            <PageTitle currentPage={"Add Slider"}></PageTitle>
            <div className='max-w-[940px] mx-auto my-24 px-4 bg-white p-4 md:p-5 lg:p-12'>
                <h3 className='text-2xl font-semibold'>Add New Slider</h3>
                <hr className='w-full my-3' />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Title<span className='text-red-500'>*</span></span>
                            </label>
                            <input type="text" placeholder="Title" {...register("title", { required: true })} className="input input-bordered rounded-none" />
                            {errors.title && <span className='text-red-600'>Title is required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Category<span className='text-red-500'>*</span></span>
                            </label>
                            <input type="text" placeholder="Category" {...register("category", { required: true })} className="input input-bordered rounded-none" />
                            {errors.category && <span className='text-red-600'>Category is required</span>}
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Slider Photo <span className='text-base'>(with 750 Width and 450 Height)</span></span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full f" />
                        {errors.image && <span className='text-red-600'>Image is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Details<span className='text-red-500'>*</span></span>
                        </label>
                        <textarea name="message" placeholder='Details' {...register("details", { required: false })} className='p-5 border' id="" cols="30" rows="5"></textarea>
                        {errors.details && <span className='text-red-600'>Category is required</span>}
                    </div>
                    <div className="form-control mt-6">
                        <input disabled={isDisable} className='bg-[#113366] text-white font-semibold py-3 rounded cursor-pointer hover:bg-[#15407F] duration-700 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-400' type="submit" value="ADD" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewSlider;