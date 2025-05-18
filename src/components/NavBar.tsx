'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { NavItem } from './NavItem';

export default function NavBar() {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Projects', path: '/projects' },
  ];

  return (
    <div className='flex justify-between items-center mb-16'>
      <ul>
        <li className='flex text-[#9d9d9d] text-lg gap-6'>
          {navLinks.map(nav => {
            return <NavItem key={nav.path} path={nav.path} title={nav.title}></NavItem>;
          })}
        </li>
      </ul>
      <div className='flex justify-center'>
        <a
          href='https://www.github.com/Carlosaac23'
          target='_blank'
          className='hover:cursor-pointer hover:opacity-80 transition-opacity duration-200 ease-in-out'
        >
          <Avatar>
            <AvatarImage src='https://github.com/Carlosaac23.png' alt='Carlosaac23' />
            <AvatarFallback>CA</AvatarFallback>
          </Avatar>
        </a>
      </div>
    </div>
  );
}
