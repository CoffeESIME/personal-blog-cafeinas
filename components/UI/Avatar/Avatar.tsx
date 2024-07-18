import Image from 'next/image';
import Link from 'next/link';
import avatarImage from '@/public/profile.jpg';
import avatarImageHover from '@/public/profile.jpg';
import { cn } from '@/lib/utils';

interface AvatarProps {
  className?: string;
  size?: 'default' | 'sm' | 'lg';
  nav?: boolean;
  [key: string]: any; // This allows for spreading other props dynamically
}

export const ImgAvatar = ({ className, size, ...props }: AvatarProps) => (
  <Link
    href="/"
    aria-label="Home"
    className={cn(
      '',
      'block pointer-events-auto group rounded-full p-0.5 box-gen'
    )}
    {...props}
  >
    <Image
      src={avatarImage}
      alt="avatar Eduardo Calvo López"
      placeholder="blur"
      className={cn('', 'group-hover:hidden')}
      priority
    />
    <Image
      src={avatarImageHover}
      alt="avatar Eduardo Calvo López"
      placeholder="blur"
      className={cn(
        '',
        'hidden group-hover:flex'
      )}
      priority
    />
  </Link>
);

export const ImgAvatarNav = ({ className, size, ...props }: AvatarProps) => (
  <div className="group">
    <Image
      src={avatarImage}
      alt="avatar Eduardo Calvo López"
      placeholder="blur"
      className={cn('', 'group-hover:hidden')}
      priority
    />
    <Image
      src={avatarImageHover}
      alt="avatar Eduardo Calvo López"
      placeholder="blur"
      className={cn('',
        'hidden group-hover:flex'
      )}
      priority
    />
  </div>
);

export const Avatar = ({ mouseX, className, size, nav, ...props }: AvatarProps) => (
  <>
    {nav ? (
      <ImgAvatarNav
        className={cn('')}
        {...props}
      />
    ) : (
      <ImgAvatar
        className={cn('')}
        {...props}
      />
    )}
  </>
);
