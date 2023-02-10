import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from "../../../assets/images/logo/Logo.png";
import { MdAccountCircle, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { AuthContext } from '../../../contexts/auth-provider/AuthProvider';

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
        <div className="bg-indigo-50 shadow-xl">
            <div className="navbar  md:w-11/12 md:mx-auto ">
                <div className="md:navbar-start gap-3 lg:gap-0">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <div tabIndex={0} className="flex flex-col gap-2 dropdown-content mt-3 p-2 shadow bg-indigo-50 rounded-box w-56">
                            <NavLink className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary-focus"} to={"/"}>Course</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary-focus"} to={"/blog"}>Blog</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary-focus"} to={"/faq"}>Faq</NavLink>
                            {
                                isDarkMode ? <MdOutlineLightMode onClick={() => setIsDarkMode(!isDarkMode)} className="w-8 h-8 cursor-pointer "></MdOutlineLightMode> : <MdOutlineDarkMode onClick={() => setIsDarkMode(!isDarkMode)} className="w-8 h-8 cursor-pointer"></MdOutlineDarkMode >
                            }

                            <div className="flex flex-col gap-2 md:hidden">
                            {
                                user?.uid ?
                                    <>
                                        {
                                            user.photoURL ?
                                                <img src={user.photoURL} className="h-7 w-7 rounded-full cursor-pointer" title={user.displayName && user.displayName} alt="" />
                                                :
                                                <MdAccountCircle className="text-3xl cursor-pointer" title={user.displayName && user.displayName} alt="" ></MdAccountCircle>
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

                    </div>
                    <div className="flex items-center gap-1">
                        <img src={Logo} alt="" className="h-7 w-7" />
                        <h3 className="text-2xl font-bold">Edu Zone</h3>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex gap-8">

                    <NavLink className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary-focus"} to={"/"}>Course</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary-focus"} to={"/blog"}>Blog</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary-focus"} to={"/faq"}>Faq</NavLink>
                    {
                        isDarkMode ? <MdOutlineLightMode onClick={() => setIsDarkMode(!isDarkMode)} className="w-8 h-8 cursor-pointer "></MdOutlineLightMode> : <MdOutlineDarkMode onClick={() => setIsDarkMode(!isDarkMode)} className="w-8 h-8 cursor-pointer"></MdOutlineDarkMode >
                    }

                </div>
                <div className="hidden md:flex gap-3 navbar-end">
                    {
                        user?.uid ?
                            <>
                                {
                                    user.photoURL ?
                                        <img src={user.photoURL} className="h-7 w-7 rounded-full cursor-pointer" title={user.displayName && user.displayName} alt="" />
                                        :
                                        <MdAccountCircle className="text-3xl cursor-pointer" title={user.displayName && user.displayName} alt="" ></MdAccountCircle>
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
        </div>





    );
};

export default Header;