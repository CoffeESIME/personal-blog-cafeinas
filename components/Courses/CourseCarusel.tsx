'use-client'
import React, { useRef } from 'react';
import { Course, CourseItem } from '@/components/Courses/CourseItem'; // Asegúrate de que la importación sea correcta


interface CourseCarouselProps {
  courses: Course[];
}
const CourseCarousel: React.FC<CourseCarouselProps> = ({ courses }) => {
  const containerRef = useRef(null);

  const handleScroll = (e:any) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      console.log("Reached the bottom!");
    }
  };

  return (
    <div className="relative h-96 overflow-auto" ref={containerRef} onScroll={handleScroll}>
      <div className="flex flex-col gap-4 p-4">
        {courses.map((course, index) => (
          <CourseItem key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseCarousel;