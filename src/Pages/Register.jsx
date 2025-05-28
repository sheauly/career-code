import Lottie from 'lottie-react';
import React, { use } from 'react';
import registerLottee from '../assets/register.json'
import { AuthContext } from '../context/AuthContext';
import SocialLogin from '../LayOut/Shared/SocialLogin';

const Register = () => {
    const {createUser} = use(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        //create user

        createUser(email, password)
            .then(result => {
            console.log(result.user)
            })
            .catch(error => {
            console.log(error)
        });
        
    }
    
    return (
        <div className="hero p-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='text-center lg:text-left'>
                    <Lottie style={{ width: '250px' }} loop={true} animationData={registerLottee}></Lottie>
                </div>
                <div className="card bg-base-100  max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                {/* name */}
                                <label className="label">Name</label>
                                <input type="name" name='name' className="input" placeholder="name" />
                                {/* email */}
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;