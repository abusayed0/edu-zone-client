import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from "../../../assets/images/logo/Logo.png";
import { MdAccountCircle, MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { AuthContext } from '../../../contexts/auth-provider/AuthProvider';
import { secondary } from 'daisyui/src/colors';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const loginNavigate = useNavigate();
    const regNavigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log("sign out succesful"))
            .catch(error => console.error(`error ${error}`))
    }

    return (
        <div className="bg-indigo-50 shadow-xl px-2 md:px-0">
            <div className="flex flex-col xl:flex-row xl:justify-between md:items-center py-6 md:w-11/12 md:mx-auto gap-3 xl:gap-0 ">
                <div className="flex items-center gap-1">
                    <img src={Logo} alt="" className="h-7 w-7" />
                    <h3 className="text-2xl font-bold">Edu Zone</h3>
                </div>
                <div className="flex flex-col  md:items-center md:flex-row gap-3 md:gap-8">
                    <NavLink className={({isActive})=>isActive ? "text-secondary": "hover:text-secondary-focus"} to={"/"}>Home</NavLink>
                    <NavLink className={({isActive})=>isActive ? "text-secondary": "hover:text-secondary-focus"} to={"/course"}>Course</NavLink>
                    <NavLink className={({isActive})=>isActive ? "text-secondary": "hover:text-secondary-focus"} to={"/blog"}>Blog</NavLink>
                    <NavLink className={({isActive})=>isActive ? "text-secondary": "hover:text-secondary-focus"} to={"/faq"}>FAQ</NavLink>
                    
                    <input onChange={() => setIsDarkMode(!isDarkMode)} type="checkbox" className="toggle toggle-md" checked={isDarkMode} />

                    {
                        user?.uid ?
                            <>
                                {
                                    user.photoURL ?
                                        <img src={user.photoURL} className="h-7 w-7 rounded-full cursor-pointer" title={user.displayName && user.displayName} alt="" />
                                        :
                                        <MdAccountCircle className="text-3xl"></MdAccountCircle>
                                }

                                <button onClick={handleLogOut} className="px-2 py-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md text-white">Logout</button>
                            </>
                            :
                            <>
                                <button onClick={() => loginNavigate("/login")} className="px-2 py-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md text-white">Login</button>
                                <button onClick={() => regNavigate("/register")} className="px-2 py-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md text-white">Register</button>

                            </>
                    }

                </div>
            </div>
            {/* <div className="navbar md:w-11/12 md:mx-auto">
                <div className="w-full md:navbar-start gap-4 lg:gap-0">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <div tabIndex={0} className="flex flex-col gap-3 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary-focus"} to={"/"}>Home</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary-focus"} to={"/course"}>Course</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary-focus"} to={"/blog"}>Blog</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary-focus"} to={"/faq"}>FAQ</NavLink>
                            <input onChange={() => setIsDarkMode(!isDarkMode)} type="checkbox" className="toggle toggle-md" checked={isDarkMode} />
                            {
                        user?.uid ?
                            <div className='flex flex-col gap-3 md:hidden'>
                                {
                                    user.photoURL ?
                                        <img src={user.photoURL} className="h-7 w-7 rounded-full cursor-pointer" title={user.displayName && user.displayName} alt="" />
                                        :
                                        <MdAccountCircle className="text-3xl"></MdAccountCircle>
                                }

                                <button onClick={handleLogOut} className="px-2 py-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md text-white">Logout</button>
                            </div>
                            :
                            <div className="flex flex-col gap-3 md:hidden">
                                <button onClick={() => loginNavigate("/login")} className="px-2 py-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md text-white">Login</button>
                                <button onClick={() => regNavigate("/register")} className="px-2 py-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md text-white">Register</button>

                            </div>
                    }

                        </div>
                    </div>
                   
                    <div className="flex items-center gap-1">
                        <img src={Logo} alt="" className="h-7 w-7" />
                        <h3 className="text-2xl font-bold">Edu Zone</h3>
                    </div>
                </div>
                <div className="navbar-center gap-8 hidden lg:flex">

                    <NavLink className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary-focus"} to={"/"}>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary-focus"} to={"/course"}>Course</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary-focus"} to={"/blog"}>Blog</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary-focus"} to={"/faq"}>FAQ</NavLink>
                    <input onChange={() => setIsDarkMode(!isDarkMode)} type="checkbox" className="toggle toggle-md" checked={isDarkMode} />


                </div>
                <div className="navbar-end hidden md:flex md:gap-3">
                    {
                        user?.uid ?
                            <>
                                {
                                    user.photoURL ?
                                        <img src={user.photoURL} className="h-7 w-7 rounded-full cursor-pointer" title={user.displayName && user.displayName} alt="" />
                                        :
                                        <MdAccountCircle className="text-3xl"></MdAccountCircle>
                                }

                                <button onClick={handleLogOut} className="px-2 py-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md text-white">Logout</button>
                            </>
                            :
                            <>
                                <button onClick={() => loginNavigate("/login")} className="px-2 py-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md text-white">Login</button>
                                <button onClick={() => regNavigate("/register")} className="px-2 py-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md text-white">Register</button>

                            </>
                    }
                </div>
            </div> */}
        </div>


    );
};

export default Header;