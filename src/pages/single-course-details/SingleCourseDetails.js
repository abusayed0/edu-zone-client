import React from 'react';
import { MdCircle, MdOutlineFileDownload } from 'react-icons/md';
import { useLoaderData } from 'react-router-dom';

const SingleCourseDetails = () => {
    const course = useLoaderData();
    const { advantages, category, courseId, courseTropic, description, duration, imgUrl, price, title, totalPurchase } = course;
    console.log(course)
    return (
        <div className="mt-16 md:w-10/12 md:mx-auto">

            <div className="card bg-base-100 shadow-xl border">
                {/* card header  */}
                <div className="p-8 flex justify-between">
                    <h2 className="text-2xl font-bold">{courseTropic}</h2>
                    <MdOutlineFileDownload className="text-3xl cursor-pointer"></MdOutlineFileDownload>
                </div>
                <div>
                    <figure><img src={imgUrl} alt="" className="w-full h-96" /></figure>
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
                                    advantages.map(advantage => <li>{advantage}</li>)
                                }
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="card-actions justify-end pb-8 pr-8">
                    <button className="bg-primary text-white text-xl p-2 rounded-md hover:bg-primary-focus">Get Premium Access</button>
                </div>
            </div >
        </div >
    );
};

export default SingleCourseDetails;