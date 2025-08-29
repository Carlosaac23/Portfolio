import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='h-[40rem] flex flex-col justify-center items-center'>
      <h1 className='text-7xl font-bold mb-2'>404</h1>
      <p className='text-xl tracking-wider mb-4'>Page Not Found</p>
      <Link className='hover:underline hover:underline-offset-2' href={'/'}>
        Go back home
      </Link>
    </div>
  );
}
