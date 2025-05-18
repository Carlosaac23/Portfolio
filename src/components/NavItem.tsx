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
      className={`hover:text-[#171717] duration-200 ease-in-out dark:hover:text-white ${isActive ? 'text-[#171717] dark:text-white' : ''}`}
    >
      {title}
    </Link>
  );
}
