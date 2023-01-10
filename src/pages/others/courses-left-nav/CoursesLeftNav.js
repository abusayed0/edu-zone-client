import React from 'react';
import { useNavigate } from 'react-router-dom';

const CoursesLeftNav = ({courses}) => {
    const navigate = useNavigate();
    return (
        <div className="bg-base-100 border border-gray-200 shadow-xl rounded-2xl p-4 flex gap-3 flex-col">
            {
                courses.map(course=><button 
                    key={course.courseId}
                    onClick={()=>navigate(`/courses/${course.courseId}`)}
                    className="bg-base-200 hover:bg-base-300 text-xl py-2 rounded-md ">{course.courseTropic}</button>)
            }
            
        </div>
    );
};

export default CoursesLeftNav;