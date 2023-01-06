import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleCourseSummary = ({ course }) => {
    const navigate = useNavigate();

    const {imgUrl,title,price,totalPurchase,courseId}=course;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={imgUrl} alt="" /></figure>
            <div className="card-body">
            <h2 className="card-title">{title}</h2>
                <p>Price : {price} tk</p>
                <p>Purchase : {totalPurchase} times</p>
                <div>
                    <button onClick={()=>navigate(`/courses/${courseId}`)} className="bg-primary text-white text-xl py-2 rounded-md hover:bg-primary-focus w-full">Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCourseSummary;