'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

import { Button } from './ui/button';

export default function NavBar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className='mb-10'>
      <div className='flex items-center justify-between'>
        <Image
          alt='Github Profile photo'
          className='rounded-full'
          height={36}
          priority
          src='https://github.com/Carlosaac23.png'
          width={36}
        />

        <Button
          aria-label='Toggle theme'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          size='icon'
          suppressHydrationWarning
          variant='ghost'
        >
          {theme === 'dark' ? (
            <Sun className='text-neutral-50' />
          ) : (
            <Moon className='text-neutral-950' />
          )}
        </Button>
      </div>
    </header>
  );
}
