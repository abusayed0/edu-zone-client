import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="md:w-7/12 bg-violet-200 mx-auto mt-16 rounded-md p-8">
            <form className="flex flex-col gap-2 ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full name</span>
                    </label>
                    <input type="text" placeholder="Enter your full name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo url</span>
                    </label>
                    <input type="text" placeholder="Enter your photo url" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Enter your email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter your password" className="input input-bordered" />

                </div>
                <div className="form-control mt-6">
                    <button className="bg-primary text-white text-xl py-2 rounded-md hover:bg-primary-focus">Register</button>
                </div>
            </form>
            <p className="text-center mt-8 ">Already have an account? <Link to={"/login"} className="underline decoration-primary hover:decoration-2">log in</Link></p>

        </div>
    );
};

export default Register;