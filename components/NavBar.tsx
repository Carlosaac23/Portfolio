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
    { title: 'Writing', path: '/writing' },
  ];

  return (
    <header className='mb-16 flex items-center justify-between'>
      <nav aria-label='Main navigation'>
        <ul className='flex gap-5 text-lg text-neutral-500 dark:text-neutral-400'>
          {navLinks.map((nav) => (
            <li key={nav.path}>
              <NavItem path={nav.path} title={nav.title} />
            </li>
          ))}
        </ul>
      </nav>

      <div className='flex items-center'>
        <div
          title='T shortcut'
          className='hidden h-6 w-6 items-center justify-center rounded-sm border border-neutral-300 inset-shadow-sm transition-all duration-200 lg:flex dark:border-neutral-800'
        >
          <p>t</p>
        </div>

        <Button
          className='mr-2'
          variant='ghost'
          size='icon'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label='Toggle theme'
        >
          {theme === 'dark' ? <Sun /> : <Moon />}
        </Button>

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
