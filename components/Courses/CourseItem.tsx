// CourseItem.tsx
import React from 'react';

export interface Course {
    id: string;
    title: string;
    provider: string; // Plataforma (Coursera, Credly, etc.)
    institution: string; // Universidad o Empresa (Google, AWS, Michigan, etc.)
    description: string;
    skills: string[];
    category: 'AI & Data Science' | 'IoT & Hardware' | 'Full Stack & Web' | 'Cloud & DevOps' | 'Fundamentals' | 'Soft Skills & Others';
    cert_link: string;
    featured: boolean;
}

interface CourseItemProps {
    course: Course;
}

// Colores para las etiquetas de skills basados en categoría
const getSkillBadgeColors = (index: number): string => {
    const colors = [
        'bg-teal-500/20 text-teal-300 border-teal-500/30',
        'bg-purple-500/20 text-purple-300 border-purple-500/30',
        'bg-amber-500/20 text-amber-300 border-amber-500/30',
        'bg-rose-500/20 text-rose-300 border-rose-500/30',
        'bg-sky-500/20 text-sky-300 border-sky-500/30',
        'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
        'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
        'bg-pink-500/20 text-pink-300 border-pink-500/30',
    ];
    return colors[index % colors.length];
};

// Icono para el proveedor
const getProviderIcon = (provider: string): string => {
    switch (provider.toLowerCase()) {
        case 'coursera':
            return '📚';
        case 'credly':
            return '🏅';
        default:
            return '🎓';
    }
};

const CourseItem: React.FC<CourseItemProps> = ({ course }) => {
    return (
        <div className="group relative p-4 transition-all sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover:list:opacity-50">
            <div className="p-4 -inset-y-4 z-0 rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                {/* Provider & Institution Header */}
                <header className="z-10 mb-3 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        <span>{getProviderIcon(course.provider)}</span>
                        {course.provider}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-300 border border-teal-500/30">
                        {course.institution}
                    </span>
                </header>

                <div className="z-10">
                    {/* Title */}
                    <h3 className="font-medium leading-snug text-slate-200">
                        <a
                            href={course.cert_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-baseline font-medium leading-light text-slate-200 hover:text-teal-300 text-lg group/link"
                        >
                            <span>{course.title}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="ml-1 h-4 w-4 shrink-0 translate-y-px opacity-0 group-hover/link:opacity-100 transition-opacity"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm leading-normal text-slate-400">
                        {course.description}
                    </p>

                    {/* Skills Badges */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {course.skills.map((skill, index) => (
                            <span
                                key={index}
                                className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border transition-transform hover:scale-105 ${getSkillBadgeColors(index)}`}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export {
    CourseItem
};
