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
      className={`gap-4 hover:text-neutral-950 dark:hover:text-neutral-50 ${isActive ? 'font-medium text-neutral-950 dark:text-neutral-50' : ''}`}
    >
      {title}
    </Link>
  );
}
