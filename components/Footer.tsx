export default async function Footer() {
  return (
    <footer className='mt-10 flex items-center justify-center gap-6 text-sm text-neutral-500 dark:text-neutral-400'>
      Carlos Acosta © {new Date().getFullYear()}
    </footer>
  );
}
