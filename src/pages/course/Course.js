import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseLeftNav from '../others/course-left-nav/CourseLeftNav';
import SingleCourseSummary from '../others/single-course-summary/SingleCourseSummary';

const Course = () => {
    const courses = useLoaderData();


    return (
        <div className="mt-16 md:w-10/12 mx-2 md:mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-7 gap-6">
                <div className="xl:col-span-2">

                    <CourseLeftNav courses={courses}></CourseLeftNav>
                </div>
                <div className="xl:col-span-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {
                            courses.map(course => <SingleCourseSummary
                                key={course.courseId}
                                course={course}
                            >
                            </SingleCourseSummary>)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Course;