'use client';

export default function Footer() {
  return (
    <footer className='mt-10 flex items-center justify-center gap-6 text-sm text-neutral-600'>
      Carlos Acosta © {new Date().getFullYear()}
    </footer>
  );
}
