'use client';

import Link from 'next/link';
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
			className={`gap-4 hover:text-neutral-950 dark:hover:text-neutral-50 ${isActive ? 'font-medium text-neutral-950 dark:text-neutral-50' : ''}`}
			href={{ pathname: path }}
			prefetch
		>
			{title}
		</Link>
	);
}
