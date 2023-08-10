import React, { useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import Services from '../../components/Services/Services';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const SingUp = () => {

    const [checked, setChecked] = useState(false);
    const [passError, setPassError] = useState("");
    const [singUpError, setSingUpError] = useState("");
    const { createUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleChecked = () => {
        setChecked(!checked)
    };

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = data => {
        console.log(data);

        if (data.password === data.confirmPassword) {
            setPassError("");
            const formData = new FormData();
            formData.append("image", data.image[0]);

            fetch(image_hosting_url, {
                method: "POST",
                body: formData
            })
                .then(res => res.json())
                .then(imgResponse => {
                    if (imgResponse.success) {
                        const imgURL = imgResponse.data.display_url;

                        createUser(data.email, data.password)
                            .then(result => {
                                const user = result.user;
                                updateUserData(user, data.name, imgURL)
                                setSingUpError("");
                                sendVerificationEmail(user)
                                navigate(from, { replace: true });
                                reset();
                            })
                            .catch(error => {
                                setSingUpError(error.message)
                            })
                    }
                })

        }
        else {
            setPassError("Password dose not match . Please provide same password");
            return;
        }
    };

    const sendVerificationEmail = user => {
        sendEmailVerification(user)
            .then(() => {
                Swal.fire('Please verify your email ! Check Inbox.')
            })
            .catch(error => {
                setSingUpError(error.message)
            })
    }

    const updateUserData = (user, name, photoUrl) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoUrl
        })
            .then(() => {

            })
            .catch(error => {

            })
    }

    return (
        <div>
            <Helmet>
                <title>Sing Up | Tech Trove</title>
            </Helmet>
            <PageTitle currentPage={"Sing Up"}></PageTitle>
            <div className='my-16 bg-white  max-w-2xl mx-auto'>
                <div className="hero w-full">
                    <div className="hero-content w-full">
                        <div className="card flex-shrink-0 w-full">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <h3 className='text-4xl font-semibold border-b mb-3'>Sing Up</h3>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered " />
                                    {errors.name && <span className='text-red-600'>Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered " />
                                    {errors.email && <span className='text-red-600'>Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="number" {...register("phone", { required: true })} placeholder="Phone" className="input input-bordered " />
                                    {errors.phone && <span className='text-red-600'>Phone is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={checked ? "text" : "password"} {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} placeholder="Password" className="input input-bordered " />
                                    <label className="label cursor-pointer">
                                        <input onClick={handleChecked} type="checkbox" checked={checked} className="checkbox" />
                                        <span className="label-text">Show Password</span>
                                    </label>
                                    {errors.password?.type == "required" && <span className='text-red-600'>Password is required.</span>}
                                    {errors.password?.type == "minLength" && <span className='text-red-600'>Password should be at least 6 characters.</span>}
                                    {errors.password?.type == "maxLength" && <span className='text-red-600'>Password should be maximum 20 characters</span>}
                                    {errors.password?.type == "pattern" && <span className='text-red-600'>Password should be at least one uppercase, one lowercase , one digit and one special character</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type={checked ? "text" : "password"} {...register("confirmPassword", { required: true })} placeholder="Confirm Password" className="input input-bordered " />
                                    {errors.confirmPassword && <span className='text-red-600'>Confirm password is required</span>}
                                    <span className='text-red-600'>{passError}</span>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Photo</span>
                                    </label>
                                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full f" />
                                    {errors.image && <span className='text-red-600'>Image is required</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <input className='bg-[#113366] text-white font-semibold py-3 rounded cursor-pointer hover:bg-[#ED1D24] duration-700' type="submit" value="Sing Up" />
                                </div>
                            </form>
                            <p className="text-red-400 text-center font-semibold my-3">{singUpError}</p>
                            <p className='text-center font-semibold'>Already have an account? <Link to="/login" className='text-[#113366]'> Login Now!</Link></p>
                        </div>
                    </div>
                </div>
                <div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default SingUp;