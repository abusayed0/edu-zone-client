import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleCourseSummary = ({ course }) => {
    const navigate = useNavigate();

    const {imgUrl,title,price,totalPurchase,courseId}=course;
    return (
        <div onClick={()=>navigate(`/course/${courseId}`)} className="card border border-gray-200 card-compact  bg-[#dfcece] shadow-xl cursor-pointer hover:border-secondary-focus">
            <figure><img src={imgUrl} alt="course-banner-img" /></figure>
            <div className="card-body">
            <h2 className="card-title">{title}</h2>
                <p className="font-semibold">Price : {price} tk</p>
                <p>Purchase : {totalPurchase} times</p>
                {/* <div>
                    <button onClick={()=>navigate(`/courses/${courseId}`)} className="bg-primary text-white text-xl py-2 rounded-md hover:bg-primary-focus w-full">See More</button>
                </div> */}
            </div>
        </div>
    );
};

export default SingleCourseSummary;