import React from 'react';
import { MdCircle, MdOutlineFileDownload } from 'react-icons/md';
import { useLoaderData, useNavigate } from 'react-router-dom';

const SingleCourseDetails = () => {
    const course = useLoaderData();
    const { advantages, courseId, courseTropic, description, duration, imgUrl, price, title, totalPurchase } = course;
    // console.log(course)
    const navigate =useNavigate();
    return (
        <div className="mt-16 md:w-10/12 md:mx-auto">

            <div className="card bg-base-100 shadow-xl border">
                {/* card header  */}
                <div className="p-8 flex justify-between">
                    <h2 className="text-2xl font-bold">{courseTropic}</h2>
                    <MdOutlineFileDownload className="text-3xl cursor-pointer"></MdOutlineFileDownload>
                </div>
                <div>
                    <figure><img src={imgUrl} alt="teacher" className="w-full h-96" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                        <div className="mt-3">
                            <p className="flex items-center gap-1"><MdCircle></MdCircle>Duration - {duration}</p>
                            <p className="flex items-center gap-1"><MdCircle></MdCircle>Purchase - {totalPurchase} times</p>
                            <p className="flex items-center gap-1"><MdCircle ></MdCircle>Price - {price} tk</p>
                        </div>
                        <div className="mt-3">
                            <h3 className="text-xl font-bold">Advantages :</h3>
                            <ul className="list-disc list-inside">
                                {
                                    advantages.map((advantage,index) => <li
                                    key={index}
                                    >
                                    {advantage}</li>)
                                }
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="card-actions justify-end pb-8 pr-8">
                    <button onClick={()=>navigate(`/checkout/${courseId}`)} className="bg-primary text-white text-xl py-2 px-4 rounded-md hover:bg-primary-focus">Buy Now</button>
                </div>
            </div >
        </div >
    );
};

export default SingleCourseDetails;