// CourseItem.tsx
import React from 'react';

export interface Course {
    id: number;
    title: string;
    platform: string;
    link: string;
    description: string;
}

interface CourseItemProps {
    course: Course;
}

const CourseItem: React.FC<CourseItemProps> = ({ course }) => {
    return (
        <div className="group relative p-4 transition-all sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover:list:opacity-50">
            <div className="p-4 -inset-y-4 z-0 rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148, 163, 184, 0.1)] lg:group-hover:drop-shadow-lg">
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {course.platform}
                </header>
                <div className="z-10">
                    <h3 className="font-medium leading-snug text-slate-200">
                        <div className="inline-flex items-baseline font-medium leading-light text-slate-200 hover:text-teal-300 text-lg">
                            <span>{course.title}</span>
                        </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-200">
                        {course.description}
                    </p>
                    <a href={course.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 mt-4 inline-block">
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    );
};

export {
    CourseItem
};
export type { Course };
