import Lottie from 'lottie-react';
import React, { use } from 'react';
import loginLottee from '../assets/login.json'
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const { signInUser } = use(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // createUser
        signInUser (email, password)
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
                    <Lottie style={{ width: '250px' }} loop={true} animationData={loginLottee}></Lottie>
                </div>
                <div className="card bg-base-100  max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;