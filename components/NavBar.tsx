'use client';

import { NavItem } from './NavItem';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';
import { useEffect } from 'react';
import Image from 'next/image';

export default function NavBar() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 't') {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [theme, setTheme]);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Projects', path: '/projects' },
  ];

  return (
    <header className='mb-16 flex items-center justify-between'>
      <nav aria-label='Main navigation'>
        <ul className='flex gap-4 text-lg text-neutral-500 dark:text-neutral-400'>
          {navLinks.map((nav) => (
            <li key={nav.path}>
              <NavItem path={nav.path} title={nav.title} />
            </li>
          ))}
        </ul>
      </nav>

      <div className='flex'>
        <div className='mr-2'>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label='Toggle theme'
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </Button>
        </div>

        <Image
          className='rounded-full'
          src='https://github.com/Carlosaac23.png'
          width={36}
          height={36}
          alt='Github Profile photo'
        />
      </div>
    </header>
  );
}
