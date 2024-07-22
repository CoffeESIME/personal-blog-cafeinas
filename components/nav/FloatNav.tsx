'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Asegúrate de importar correctamente
import { generalLinks } from '@/data/links';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Avatar } from '@/components/UI/Avatar/Avatar';
import { Dock } from './Dock';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, onMouseEnter, onMouseLeave }) => {
  const isActive = useRouter().pathname === href;
  return (
    <li className="flex items-center">
      <Link
        href={href}
        className={cn(
          'relative block px-3 transition',
          isActive
            ? 'text-indigo-600 dark:text-indigo-400'
            : 'hover:text-indigo-600 dark:hover:text-indigo-400'
        )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
        {isActive && (
          <span className="absolute h-px inset-x-1 -bottom-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0 dark:from-indigo-400/0 dark:via-indigo-400/40 dark:to-indigo-400/0" />
        )}
      </Link>
    </li>
  );
};

interface DesktopNavigationProps {
  className?: string;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = (props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <nav {...props}>
      <ul className="flex gap-2 px-3 py-2 text-sm font-semibold transition rounded-xl text-neutral-900 hover:text-neutral-900 dark:text-white/90 dark:hover:text-white box-gen">
        <Avatar />
        {generalLinks.map((link, index) => {
          if (index !== 5) {
            return (
              <NavItem
                key={index}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {link.label}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      className="absolute inset-0 transition-colors rounded-md -z-10 bg-indigo-100/70 dark:bg-zinc-700/50"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>
              </NavItem>
            )
          }
        })}
      </ul>
    </nav>
  );
};

export function FloatNav() {
  return (
    <>
      <Dock className=" pointer-events-auto md:flex" />
    </>
  )
}
