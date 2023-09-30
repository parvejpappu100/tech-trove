import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const { googleSingIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleSingIn()
            .then(result => {
                const user = result.user;
                const savedUser = { name: user.displayName, email: user.email, image: user.photoURL, role: "user", phone: "", country: "", city: "", address: "", postCode: "", message: "" };
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Login Successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='max-w-xs mx-auto py-8'>
            <div className="divider text-xl font-semibold">Or continue with</div>
            <div className='flex gap-5 justify-center text-[#15407F] text-4xl my-5'>
                <button onClick={handleGoogleLogin}><FaGoogle></FaGoogle></button>
                <button><FaGithub></FaGithub></button>
                <button><FaFacebook></FaFacebook></button>
            </div>
        </div>
    );
};

export default SocialLogin;