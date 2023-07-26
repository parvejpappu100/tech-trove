import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import Services from '../../components/Services/Services';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <PageTitle currentPage={"Login"}></PageTitle>
            <div className='my-16 bg-white max-w-2xl mx-auto'>
                <div className="hero w-full">
                    <div className="hero-content w-full">
                        <div className="card flex-shrink-0 w-full">
                            <form className="card-body">
                                <h3 className='text-4xl font-semibold border-b mb-3'>Login</h3>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Email" className="input input-bordered " />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="Password" className="input input-bordered " />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className='bg-[#113366] text-white font-semibold py-3 rounded cursor-pointer hover:bg-[#ED1D24] duration-700' type="submit" value="Login" />
                                </div>
                            </form>
                            <p className='text-center font-semibold'>Don't have an account? <Link to="/singUp" className='text-[#113366]'> Register Now!</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Login;