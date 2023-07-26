import React, { useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import Services from '../../components/Services/Services';

const SingUp = () => {

    const [checked, setChecked] = useState(false);

    const handleChecked = () => {
        setChecked(!checked)
    }

    return (
        <div>
            <PageTitle currentPage={"Sing Up"}></PageTitle>
            <div className='my-16 bg-white p-8 max-w-2xl mx-auto'>
                <div className="">
                    <div className="">
                        <div className="card flex-shrink-0 w-full">
                            <form className="card-body">
                                <h3 className='text-4xl font-semibold border-b mb-3'>Sing Up</h3>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered " />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" className="input input-bordered " />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="number" placeholder="Phone" className="input input-bordered " />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Password" className="input input-bordered " />
                                    <label className="label cursor-pointer">
                                        <input onClick={handleChecked} type="checkbox" checked={checked} className="checkbox" />
                                        <span className="label-text">Show Password</span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" placeholder="Confirm Password" className="input input-bordered " />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Photo</span>
                                    </label>
                                    <input type="file" className="file-input file-input-bordered w-full " />
                                </div>
                                <div className="form-control mt-6">
                                    <input className='bg-[#113366] text-white font-semibold py-3 rounded cursor-pointer hover:bg-[#ED1D24] duration-700' type="submit" value="Sing Up" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default SingUp;