import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="h-screen w-screen relative bg-[url('https://media.istockphoto.com/id/1308366072/vector/rocket.jpg?s=612x612&w=0&k=20&c=GuEQgM61-_lTSX_witw1WMcwU9dcHIK_IznBYnson-Y=')] bg-cover bg-center bg-no-repeat">
            <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center p-5 gap-3">
                <h2 className="text-4xl font-bold">Oops! Page Not Found.</h2>
                <p className="text-2xl">The page you were looking for doesn't exist.</p>
                <Link className="underline decoration-primary hover:decoration-secondary-focus hover:decoration-2" to={"/"}><span className="text-2xl ">back to courses</span></Link>
            </div>
        </div>
    );
};

export default Error;