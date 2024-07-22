'use client'

import { useRef } from 'react';
import { reviews } from '@/data/reviews';
import { motion } from 'framer-motion';

import { FADE_IN_ANIMATION_CARD } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface ReviewProps {
    title: string;
    body: string;
    author: string;
    className: string;
}
interface ReviewType {
    id: number;
    author: string;
    title: string;
    body: string;
}

const Review: React.FC<ReviewProps> = ({ title, body, author, className, ...props }) => {
    return (
        <motion.figure
            className={cn('rounded-3xl shadow p-6 box-gen m-1', className)}
            {...props}
            {...FADE_IN_ANIMATION_CARD}
        >
            <blockquote className="body-secondary">
                <p className="text-sm leading-6 before:content-['“'] after:content-['”']">{body}</p>
            </blockquote>
            <figcaption className="mt-3 text-sm font-semibold body-primary">
                {author} - {title}
            </figcaption>
        </motion.figure>
    );
};

function splitArray<T>(array: T[], numParts: number): T[][] {
    let result: T[][] = [];
    for (let i = 0; i < array.length; i++) {
        let index = i % numParts;
        if (!result[index]) {
            result[index] = [];
        }
        result[index].push(array[i]);
    }
    return result;
}

interface ReviewColumnProps {
    className: string;
    reviews: any[];
    reviewClassName?: (index: number) => string;
    msPerPixel?: number;
}

const ReviewColumn: React.FC<ReviewColumnProps> = ({
    className,
    reviews,
    reviewClassName = () => '',
    msPerPixel = 0,
}) => {
    return (
        <div className={cn('space-y-8 py-4', className)}>
            {reviews.map((review, reviewIndex) => (
                <Review
                    key={reviewIndex}
                    aria-hidden={reviewIndex >= reviews.length}
                    className={reviewClassName(reviewIndex % reviews.length)}
                    {...review}
                />
            ))}
        </div>
    );
};

function ReviewGrid() {
    let containerRef = useRef<HTMLDivElement>(null);
    let initialColumns = splitArray<ReviewType>(reviews, 3);
    let columns: ReviewType[][] = [
      initialColumns[0],
      initialColumns[1],
      ...splitArray(initialColumns[2], 2) // Esto crea dos subarrays si hay suficientes elementos
    ];
  
    return (
      <div
        ref={containerRef}
        className="relative grid items-start grid-cols-1 gap-8 overflow-hidden sm:mt-5 md:grid-cols-2 lg:grid-cols-3"
      >
        <ReviewColumn
          reviews={columns[0].concat(columns[2], columns[1])} // Concatenación adecuada si las divisiones son correctas
          reviewClassName={(reviewIndex) =>
            cn(
              reviewIndex >= columns[0].length + columns[2].length ? 'md:hidden' : '',
              reviewIndex >= columns[0].length && 'lg:hidden' ? 'lg:hidden' : ''
            )
          }
          className=''
          msPerPixel={10}
        />
        <ReviewColumn
          reviews={columns[1].concat(columns[3] || [])} // Asegura que columns[3] exista o concatena un array vacío
          className="hidden md:block"
          reviewClassName={(reviewIndex) =>
            reviewIndex >= columns[1].length ? 'lg:hidden' : ''
          }
          msPerPixel={15}
        />
        <ReviewColumn
          reviews={columns[3] || []} // Asegura que columns[3] exista
          className="hidden lg:block"
          msPerPixel={10}
        />
      </div>
    );
  }

export function Reviews() {
    return (
        <section
            id="reviews"
            aria-labelledby="reviews-title"
            className="pt-20 pb-16 sm:pt-32 sm:pb-24"
        >
            <h2
                id="reviews-title"
                className="text-3xl font-medium tracking-tight body-primary"
            >
                Testimonials
            </h2>
            <ReviewGrid />
        </section>
    );
}
