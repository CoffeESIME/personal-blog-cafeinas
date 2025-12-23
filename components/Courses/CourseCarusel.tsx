'use client'
import React, { useRef, useState, useMemo } from 'react';
import { Course, CourseItem } from '@/components/Courses/CourseItem';

// Available categories
const CATEGORIES = [
  'All',
  'AI & Data Science',
  'IoT & Hardware',
  'Full Stack & Web',
  'Cloud & DevOps',
  'Fundamentals',
  'Soft Skills & Others'
] as const;

type CategoryFilter = typeof CATEGORIES[number];

interface CourseCarouselProps {
  courses: Course[];
}

const CourseCarousel: React.FC<CourseCarouselProps> = ({ courses }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Filter courses based on selected filters
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      // Featured filter
      const featuredFilter = showAll ? true : course.featured;

      // Category filter
      const categoryFilter = selectedCategory === 'All'
        ? true
        : course.category === selectedCategory;

      return featuredFilter && categoryFilter;
    });
  }, [courses, showAll, selectedCategory]);

  // Count courses by category (only featured if showAll is false)
  const categoryCount = useMemo(() => {
    const baseFilter = showAll ? courses : courses.filter(c => c.featured);
    return CATEGORIES.reduce((acc, cat) => {
      if (cat === 'All') {
        acc[cat] = baseFilter.length;
      } else {
        acc[cat] = baseFilter.filter(c => c.category === cat).length;
      }
      return acc;
    }, {} as Record<CategoryFilter, number>);
  }, [courses, showAll]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const bottom = target.scrollHeight - target.scrollTop === target.clientHeight;
    if (bottom) {
      console.log("Reached the bottom!");
    }
  };

  return (
    <div className="w-full">
      {/* Top Control Bar */}
      <div className="sticky top-0 z-20 backdrop-blur-md bg-slate-900/80 border-b border-slate-700/50 p-4 rounded-t-lg mb-2">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          {/* Category Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm text-slate-200 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-teal-400">
                <path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clipRule="evenodd" />
              </svg>
              <span>{selectedCategory}</span>
              <span className="text-xs text-slate-400">({categoryCount[selectedCategory]})</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 border border-slate-600/50 rounded-lg shadow-xl py-2 z-30">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-2 text-sm transition-colors ${selectedCategory === category
                        ? 'bg-teal-500/20 text-teal-300'
                        : 'text-slate-300 hover:bg-slate-700/50'
                      }`}
                  >
                    <span>{category}</span>
                    <span className={`text-xs ${selectedCategory === category ? 'text-teal-400' : 'text-slate-500'}`}>
                      {categoryCount[category]}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Show Full History Button */}
          <button
            onClick={() => setShowAll(!showAll)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${showAll
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30 hover:bg-teal-500/30'
                : 'bg-slate-800/50 text-slate-300 border border-slate-600/50 hover:bg-slate-700/50'
              }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              {showAll ? (
                <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
              ) : (
                <path fillRule="evenodd" d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z" clipRule="evenodd" />
              )}
              <path d={showAll
                ? "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10z"
                : "M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 012.895-4.405L6.14 8.383a4.002 4.002 0 004.607 5.546zM10 5a4 4 0 014 4c0 .365-.062.715-.173 1.04l3.46 3.46c.58-.29 1.12-.66 1.604-1.1.485-.437.917-.946 1.28-1.516a9.97 9.97 0 00-.178-.184z"
              } />
            </svg>
            <span>{showAll ? 'Showing full history' : 'Show full history'}</span>
            <span className="px-1.5 py-0.5 rounded bg-slate-700/50 text-xs">
              {showAll ? courses.length : courses.filter(c => c.featured).length} courses
            </span>
          </button>
        </div>

        {/* Active Filters Indicator */}
        {(selectedCategory !== 'All' || showAll) && (
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-700/50">
            <span className="text-xs text-slate-500">Active filters:</span>
            {selectedCategory !== 'All' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-teal-500/20 text-teal-300 text-xs rounded-full border border-teal-500/30">
                {selectedCategory}
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="hover:text-teal-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                    <path d="M5.28 4.22a.75.75 0 00-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 101.06 1.06L8 9.06l2.72 2.72a.75.75 0 101.06-1.06L9.06 8l2.72-2.72a.75.75 0 00-1.06-1.06L8 6.94 5.28 4.22z" />
                  </svg>
                </button>
              </span>
            )}
            {showAll && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                Full history
                <button
                  onClick={() => setShowAll(false)}
                  className="hover:text-purple-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                    <path d="M5.28 4.22a.75.75 0 00-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 101.06 1.06L8 9.06l2.72 2.72a.75.75 0 101.06-1.06L9.06 8l2.72-2.72a.75.75 0 00-1.06-1.06L8 6.94 5.28 4.22z" />
                  </svg>
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Courses List */}
      <div
        className="relative max-h-[600px] overflow-auto scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-600"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {filteredCourses.length > 0 ? (
          <div className="flex flex-col gap-2 p-2">
            {filteredCourses.map((course) => (
              <CourseItem key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-4 text-slate-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            <p className="text-sm">No courses found with selected filters</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setShowAll(true);
              }}
              className="mt-4 px-4 py-2 bg-teal-500/20 text-teal-300 text-sm rounded-lg hover:bg-teal-500/30 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Footer with count */}
      <div className="sticky bottom-0 backdrop-blur-md bg-slate-900/80 border-t border-slate-700/50 px-4 py-2 rounded-b-lg">
        <p className="text-xs text-slate-500 text-center">
          Showing <span className="text-teal-400 font-medium">{filteredCourses.length}</span> of <span className="text-slate-400">{courses.length}</span> courses
        </p>
      </div>
    </div>
  );
};

export default CourseCarousel;