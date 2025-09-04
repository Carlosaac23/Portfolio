'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavItemProps {
  path: string;
  title: string;
}

export function NavItem({ path, title }: NavItemProps) {
  const pathName = usePathname();
  const isActive = pathName === path;

  return (
    <Link
      href={{ pathname: path }}
      prefetch
      className={`rounded-sm px-3 py-1 duration-150 ease-out hover:bg-neutral-200 hover:text-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 ${isActive ? 'text-neutral-950 dark:text-neutral-50' : ''}`}
    >
      {title}
    </Link>
  );
}
