'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

// Define the type for the role prop
interface Role {
    index: number;
    title: string;
    company: string;
    start: string;
    end: string;
}

// Define the props for the JobItem component
interface JobItemProps {
    role: Role;
    scrollPosition: number;
    heightItem: number;
    roleIndex: number;
}

export function JobItem({ role, scrollPosition, heightItem, roleIndex }: JobItemProps) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = role.index * heightItem;
    const offset = scrollPosition - distance;

    const blurtwo = offset >= -heightItem - 1 && offset <= 0 ? 0 : 2;
    const opacity = offset >= -heightItem - 1 && offset <= 0 ? 1 : 0.3;

    const marginBoxTop = 'last:mb-[128px]';
    return (
        <motion.div
            className={`flex gap-4 pb-4 snap-start work-item ${marginBoxTop}`}
            style={{
                filter: `blur(${blurtwo}px)`,
                opacity: opacity,
            }}
            ref={ref}
        >
            <div className="flex flex-wrap flex-auto gap-x-2">
                <div className="flex-none w-full text-sm font-medium body-primary">
                    {role.company}&nbsp;-&nbsp;
                    <div
                        className="inline text-xs body-secondary"
                        aria-label={`${role.start} until ${role.end
                            }`}
                    >
                        <time dateTime={role.start}>
                            {role.start}
                        </time>{' '}
                        <span aria-hidden="true">—</span>{' '}
                        <time dateTime={role.end
                        }>
                            {role.end}
                        </time>
                    </div>
                </div>

                <div className="sr-only">Rol</div>
                <div className="text-xs body-secondary">{role.title}</div>
            </div>
        </motion.div>
    );
}
