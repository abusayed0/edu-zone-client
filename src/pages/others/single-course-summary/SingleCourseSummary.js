import React from 'react';

const SingleCourseSummary = ({ course }) => {

    const {imgUrl,title,courseTropic,price,totalPurchase}=course;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={imgUrl} alt="" /></figure>
            <div className="card-body">
            <h2 className="card-title">{courseTropic}</h2>
                <p>{title}</p>
                <p>Price : {price} tk</p>
                <p>Purchase : {totalPurchase} times</p>
                <div>
                    <button className="bg-primary text-white text-xl py-2 rounded-md hover:bg-primary-focus w-full">Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCourseSummary;