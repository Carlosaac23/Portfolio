import Link from 'next/link';

export default function NotFound() {
	return (
		<section className='flex h-[40rem] flex-col items-center justify-center'>
			<h1 className='mb-2 text-7xl font-bold'>404</h1>
			<p className='mb-4 text-xl tracking-wider'>Page Not Found</p>
			<Link className='hover:underline hover:underline-offset-2' href={'/'}>
				Go back home
			</Link>
		</section>
	);
}
