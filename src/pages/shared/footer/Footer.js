import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-[#C4C8DC] px-2 md:px-0 py-5 mt-16 ">
            <div className="md:w-11/12 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="flex flex-col gap-2 md:justify-self-start">
                    <h4 className="font-bold">Office Address</h4>
                    <div className="flex flex-col gap-1">
                        <p>Floor-3,Abc Market,Sylhet</p>
                        <p>Support : abc@gmail.com</p>
                        <p>Helpline : 000000001</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 md:justify-self-center">
                    <h4 className="font-bold">Important Links</h4>
                    <div className="flex flex-col gap-1">
                        <Link to="/terms-conditons"  className="hover:underline hover:decoration-secondary-focus">Terms & Conditions</Link>
                        <Link to="/privacy-policy" className="hover:underline hover:decoration-secondary-focus">Privacy & Policy</Link>
                        <Link to="refund-policy" className="hover:underline hover:decoration-secondary-focus">Refund Policy</Link>
                        <Link to="about-us" className="hover:underline hover:decoration-secondary-focus">About Us</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2 md:justify-self-end">
                    <h4 className="font-bold">Connect With Us</h4>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/">
                            <FaFacebook className="text-3xl cursor-pointer" ></FaFacebook>
                        </a>
                        <a href="https://twitter.com/">
                            <FaTwitter className="text-3xl cursor-pointer"></FaTwitter>
                        </a>
                        <a href="https://github.com/">
                            <FaGithub className="text-3xl cursor-pointer"></FaGithub>
                        </a>
                        <a href="https://www.linkedin.com/">
                            <FaLinkedin className="text-3xl cursor-pointer"></FaLinkedin>
                        </a>
                    </div>
                </div>
            </div>
            <hr className="mt-4 w-4/6 mx-auto"/>
            <p className='text-center mt-4'>©Edu Zone 2024</p>
        </div>
        
    );
};

export default Footer;