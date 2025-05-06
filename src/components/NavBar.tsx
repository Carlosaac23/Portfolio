'use client';

import Avatar from './Avatar';
import { NavItem } from './NavItem';

function NavBar() {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Projects', path: '/projects' },
  ];

  return (
    <div className='flex justify-between items-center mb-16 max-sm:flex-col'>
      <ul className='flex text-[#fafafa] text-lg gap-6'>
        {navLinks.map(nav => {
          return <NavItem key={nav.path} path={nav.path} title={nav.title}></NavItem>;
        })}
      </ul>
      <div className='flex justify-center max-sm:mt-6'>
        <Avatar />
      </div>
    </div>
  );
}

export default NavBar;
