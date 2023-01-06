import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    const {title}=course;
    return (
        <div className="mt-16 md:w-10/12 md:mx-auto">
            <h3>Course name : {title}</h3>
        </div>
    );
};

export default Checkout;