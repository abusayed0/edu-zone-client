import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth-provider/AuthProvider';

const Checkout = () => {

    const course = useLoaderData();
    const {title,price}=course;
    const{user}=useContext(AuthContext)

    return (
        <div className="mt-16 mx-2 md:w-10/12 md:mx-auto">
            <h3>Course name : <span className="font-bold text-xl">{title}</span></h3>
            <h4>Price : <span className="font-semibold">{price}</span> tk</h4>
           {
            user?.displayName &&  <p>User name : <span className="font-semibold">{user.displayName}</span></p>
           }
        </div>
    );
};

export default Checkout;