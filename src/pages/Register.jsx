import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.log('ERROR', error.message)
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Register</h1>
                </div>
                <div className="card bg-base-100 w-full shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                    <p className="mb-4 mx-3 text-xl text-center">Already have an account?
                        <br />
                        Please
                        <Link to='/login'> Login.</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;