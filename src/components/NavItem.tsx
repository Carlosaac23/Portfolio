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
    <Link href={path} prefetch className={`duration-200 ease-in-out hover:text-[#9d9d9d] ${isActive ? 'text-[#9d9d9d]' : ''} `}>
      {title}
    </Link>
  );
}
