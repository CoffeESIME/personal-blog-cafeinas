'use client'

import { ElementType, ForwardRefExoticComponent, RefAttributes, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { generalLinks } from '@/data/links';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LucideProps } from 'lucide-react';

interface DockProps {
  className: string;
}

export function Dock({ className }: DockProps) {
  let mouseX = useMotionValue(Infinity);

  return (
    <div
      className={cn(
        'fixed z-10 flex flex-col bottom-8 left-1/2 -translate-x-1/2',
        className
      )}
    >
      <motion.div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end h-16 gap-4 px-4 pb-2.5 mx-auto outline-0 rounded-2xl box-gen ring-1 ring-zinc-200 dark:ring-[#1a1a1a]"
      >
        {generalLinks.map((link, i) => (
                <AppIcon
                href={link.href}
                rel={link.target === '_blank' ? 'noopener noreferrer' : ''}
                target={link.target ? link.target : ''}
                aria-label={link.label}
                icon={link.icon} // Ensure that `icon` prop properly handles the component reference
                mouseX={mouseX}
                key={i} ariaLabel={''}                />
        ))}
        <hr className="h-10 w-[1px] bg-neutral-300 dark:bg-neutral-700 mt-2.5 border-none"></hr>
      </motion.div>
    </div>
  );
}

interface AppIconProps {
  href: string;
  target: string;
  rel: string;
  ariaLabel: string;
  icon: ElementType<any> | ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> | string;
  mouseX: any;
}

export function AppIcon({
  href,
  target,
  rel,
  ariaLabel,
  icon: Icon,
  mouseX,
}: AppIconProps) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val: number) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <Link href={href} rel={rel} target={target} aria-label={ariaLabel}>
      <motion.div
        ref={ref}
        style={{ width }}
        className="z-30 flex items-center justify-center w-10 rounded-full bg-neutral-200/70 dark:bg-neutral-900/70 aspect-square box-gen"
      >
        <Icon
          size={40}
          className="w-6/12 transition fill-white dark:fill-neutral-600 dark:stroke-neutral-300 stroke-neutral-900"
        />
      </motion.div>
    </Link>
  );
}