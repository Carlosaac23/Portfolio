'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { NavItem } from './NavItem';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';
import { useEffect } from 'react';

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
    <div className='flex justify-between items-center mb-16'>
      <div>
        <ul>
          <li className='flex text-neutral-500 text-lg gap-6 dark:text-neutral-400'>
            {navLinks.map(nav => {
              return <NavItem key={nav.path} path={nav.path} title={nav.title}></NavItem>;
            })}
          </li>
        </ul>
      </div>

      <div className='flex'>
        <div className='mr-2'>
          <Button variant='ghost' size='icon' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label='Toggle theme'>
            {theme === 'dark' ? <Sun /> : <Moon />}
          </Button>
        </div>

        <Avatar className='shadow-sm'>
          <AvatarImage src='https://github.com/Carlosaac23.png' alt='@Carlosaac23' />
          <AvatarFallback>CA</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
