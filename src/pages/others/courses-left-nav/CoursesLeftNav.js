import React from 'react';

const CoursesLeftNav = ({courses}) => {
    return (
        <div className="bg-base-100 shadow-xl rounded-2xl p-4 flex gap-3 flex-col">
                        {
                            courses.map(course => <button
                                key={course.courseId}
                                className="text-xl bg-base-200 border py-2 rounded-md w-full hover:bg-base-300"
                            >
                                {course.courseTropic}
                            </button>)
                        }
                    </div>
    );
};

export default CoursesLeftNav;