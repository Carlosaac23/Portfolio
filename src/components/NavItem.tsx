'use client';

import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';

interface NavItemProps {
  path: string;
  title: string;
}

export function NavItem({ path, title }: NavItemProps) {
  const pathName = usePathname();
  const isActive = pathName === path;

  return (
    <Link
      href={path}
      prefetch
      className={`hover:text-neutral-950 duration-200 ease-in-out dark:hover:text-neutral-50 ${isActive ? 'text-neutral-950 dark:text-neutral-50' : ''}`}
    >
      {title}
    </Link>
  );
}
