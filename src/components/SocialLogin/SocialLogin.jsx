import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {

    const { googleSingIn } = useAuth();

    const handleGoogleLogin = () => {
        googleSingIn()
        .then(result => {
            const user = result.user;
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