import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className="md:w-7/12 bg-violet-200 mx-auto mt-16 rounded-md p-8">
            <form className="flex flex-col gap-2 ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Enter your email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="Enter your password" className="input input-bordered" />

                </div>
                <div className="form-control mt-6">
                    <button className="bg-primary text-white text-xl py-2 rounded-md hover:bg-primary-focus">Login</button>
                </div>
            </form>
            <h3 className="text-center  mt-8">
                Or log in with
            </h3>
            <div className="mt-5 flex flex-col md:flex-row gap-4">
                    <button className="bg-[#ea4335] text-white py-2 rounded-md w-full flex gap-1 justify-center items-center text-xl"><FaGoogle></FaGoogle>Google</button>
                
                    <button className="bg-[#333] text-white py-2 rounded-md  w-full flex gap-1 justify-center items-center text-xl"><FaGithub></FaGithub>Github</button>
                
            </div>
            <hr />
            <p className="text-center mt-8 ">New to Edu Zone? <Link to={"/register"} className="underline decoration-primary hover:decoration-2">Create an account</Link></p>

        </div>

    );
};

export default Login;