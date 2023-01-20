import React from 'react';
import { useNavigate } from 'react-router-dom';

const CoursesLeftNav = ({courses}) => {
    const navigate = useNavigate();
    return (
        <div className="bg-base-100 border border-gray-200 shadow-xl p-4 grid gap-3 grid-cols-1 md:grid-cols-3 xl:grid-cols-1 ">
            {
                courses.map(course=><button 
                    key={course.courseId}
                    onClick={()=>navigate(`/course/${course.courseId}`)}
                    className="bg-base-200 hover:bg-base-300 text-xl py-2 rounded-md ">{course.courseTropic}</button>)
            }
            
        </div>
    );
};

export default CoursesLeftNav;