import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const { loginUser } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log('ERROR', error.message)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p className="mb-4 text-xl text-center">New to this website?
                        <br />
                        <Link to='/register'>Register!</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;