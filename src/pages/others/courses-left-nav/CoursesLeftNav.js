import React from 'react';
import { useNavigate } from 'react-router-dom';

const CoursesLeftNav = ({ courses }) => {
    const navigate = useNavigate();
    return (
        <div className="bg-base-100 border border-gray-200 shadow-xl px-4 pb-4 pt-16 h-full grid gap-3 grid-cols-1 md:grid-cols-3 xl:grid-cols-1 relative">
            <h3 className="text-xl font-semibold text-center absolute top-4 w-full">Categories</h3>

            {
                courses.map(course => <button
                    key={course.courseId}
                    onClick={() => navigate(`/course/${course.courseId}`)}
                    className="bg-base-200 hover:bg-base-300 text-xl py-2 rounded-md">{course.courseTropic}</button>)
            }

        </div>
    );
};

export default CoursesLeftNav;