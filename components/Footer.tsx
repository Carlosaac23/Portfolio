async function getCurrentYear() {
  'use cache';
  return new Date().getFullYear();
}

export default async function Footer() {
  return (
    <footer className='mt-10 flex items-center justify-center gap-6 text-sm text-neutral-600'>
      Carlos Acosta © {await getCurrentYear()}
    </footer>
  );
}
