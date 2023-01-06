import React, { useState } from 'react';
import {  NavLink, useNavigate } from 'react-router-dom';
import Logo from "../../../assets/images/logo/Logo.png";
import {MdDarkMode, MdOutlineLightMode } from "react-icons/md";
const Header = () => {
    const loginNavigate = useNavigate();
    const regNavigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <div className="bg-indigo-50 shadow-xl px-2 md:px-0">
            <div className="flex flex-col xl:flex-row md:justify-between md:items-center py-6 md:w-11/12 md:mx-auto gap-3 xl:gap-0 ">
                <div className="flex items-center gap-1">
                    <img src={Logo} alt="" className="h-8 w-8" />
                    <h3 className="text-2xl font-bold">Edu Zone</h3>
                </div>
                <div className="flex flex-col  md:items-center md:flex-row gap-3 md:gap-8">
                    <NavLink  to={"/"}>Home</NavLink>
                    <NavLink to={"/courses"}>Courses</NavLink>
                    <NavLink  to={"/blog"}>Blog</NavLink>
                    <NavLink to={"/faq"}>FAQ</NavLink>
                    {
                        isDarkMode?<MdOutlineLightMode onClick={()=>setIsDarkMode(!isDarkMode)} className="text-3xl cursor-pointer"></MdOutlineLightMode>:<MdDarkMode onClick={()=>setIsDarkMode(!isDarkMode)}  className="text-3xl cursor-pointer"></MdDarkMode>
                    }
                    <button onClick={() => loginNavigate("/login")} className="px-2 py-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md text-white">Login</button>
                    <button onClick={() => regNavigate("/register")} className="px-2 py-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md text-white">Register</button>
                   

                </div>
            </div>
        </div>


    );
};

export default Header;