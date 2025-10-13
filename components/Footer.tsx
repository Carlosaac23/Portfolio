'use client';

export default function Footer() {
	return (
		<footer className='mt-10 flex items-center justify-center gap-6 text-neutral-600 text-sm'>
			Carlos Acosta © {new Date().getFullYear()}
		</footer>
	);
}
