import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth-provider/AuthProvider';

const Register = () => {

    const [error,setError]=useState("");

    const { createUserWithEmailPass, updateUserInfo } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(fullName, photoUrl, email, password)

        createUserWithEmailPass(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                handleUpdateUserInfo(fullName, photoUrl)
                navigate("/")
            })
            .catch(error => {
                setError(error.message)
                console.error(`error ${error}`)
            })
    }

    const handleUpdateUserInfo = (name, photoUrl) => {
        updateUserInfo(name, photoUrl)
            .then(() => {
                console.log("profile updated")
            })
            .catch(error => console.error(`error ${error}`))
    }

    return (
        <div className="md:w-7/12 bg-violet-200 mx-auto mt-16 rounded-md p-8">
            <form onSubmit={handleRegister} className="flex flex-col gap-2 ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full name</span>
                    </label>
                    <input type="text" name="name" required placeholder="Enter your full name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo url</span>
                    </label>
                    <input type="text" name="photo" required placeholder="Enter your photo url" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" required placeholder="Enter your email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" required placeholder="Enter your password" className="input input-bordered" />
                </div>
                {
                    error.length > 0 && <p className="px-1 py-2 text-red-400 ">{error}</p>
                }
                <div className="form-control mt-6">
                    <button className="bg-primary text-white text-xl py-2 rounded-md hover:bg-primary-focus">Register</button>
                </div>
            </form>
            <p className="text-center mt-8 ">Already have an account? <Link to={"/login"} className="underline decoration-primary hover:decoration-2">log in</Link></p>

        </div>
    );
};

export default Register;