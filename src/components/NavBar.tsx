'use client';

import Avatar from './Avatar';
import { NavItem } from './NavItem';

export default function NavBar() {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Projects', path: '/projects' },
  ];

  return (
    <div className='flex justify-between items-center mb-16'>
      <ul>
        <li className='flex text-[#fafafa] text-lg gap-6'>
          {navLinks.map(nav => {
            return <NavItem key={nav.path} path={nav.path} title={nav.title}></NavItem>;
          })}
        </li>
      </ul>
      <div className='flex justify-center'>
        <Avatar />
      </div>
    </div>
  );
}
