import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle, FaRegEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth-provider/AuthProvider';


const Login = () => {

    const [error, setError] = useState("");
    const [isVisible, setIsVisible] = useState(false)

    const { emailPassLogin, googleSignIn, gihubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleEmailPassLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        emailPassLogin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
                console.error(`error ${error}`)
            })
    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                console.log(`user ${(user)}`)
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    const githubProvider = new GithubAuthProvider();
    const handleGihubSignIn = () => {
        gihubSignIn(githubProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                console.log(`user ${user}`)
            })
            .catch(error => {
                console.error(`error ${error}`)
            })
    }

    const handleShowPassword = () => {
        setIsVisible(!isVisible)
    };

    return (
        <div className="md:w-7/12 bg-violet-200 mx-2 md:mx-auto mt-16 rounded-md p-8">
            <form onSubmit={handleEmailPassLogin} className="flex flex-col gap-2 ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" required placeholder="Enter your email" className="input input-bordered" />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={isVisible?"text":"password"} name="password" required placeholder="Enter your password" className="input input-bordered" maxLength="30"/>
                   <div onClick={handleShowPassword} className="text-2xl cursor-pointer absolute bottom-3 right-3">
                   {
                        isVisible ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                    }
                   </div>
                </div>
                {
                    error.length > 0 && <p className="text-red-400 px-1 py-2">{error}</p>
                }
                <div className="form-control mt-6">
                    <button className="bg-secondary text-white text-xl py-2 rounded-md hover:bg-secondary-focus">Login</button>
                </div>
            </form>
            <h3 className="text-center mt-8">
                Or log in with
            </h3>
            <div className="mt-5 flex flex-col md:flex-row gap-4">
                <div onClick={handleGoogleLogin} className="bg-[#ea4335] text-xl text-white py-2 rounded-md w-full flex gap-1 justify-center items-center cursor-pointer">
                    <FaGoogle></FaGoogle>
                    <p className="">Google</p>
                </div>

                <div onClick={handleGihubSignIn} className="bg-[#333] text-white py-2 rounded-md  w-full flex gap-1 justify-center items-center text-xl cursor-pointer">
                    <FaGithub></FaGithub>
                    <p>Github</p>
                </div>

            </div>

            <p className="text-center mt-8 ">New to Edu Zone? <Link to={"/register"} className="underline decoration-primary hover:decoration-2">Create an account</Link></p>

        </div>

    );
};

export default Login;