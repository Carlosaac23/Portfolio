import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelect from './LanguageSelect';

function NavBar() {
  const { t } = useTranslation();

  const navLinks = [
    { title: t('home'), path: '/' },
    { title: t('projectsNav'), path: '/projects' },
    { title: t('work'), path: '/work' },
    { title: t('contact'), path: '/contact' },
  ];

  return (
    <div className='flex justify-between items-center mb-16 max-sm:flex-col'>
      <ul className='flex text-[#fafafa] text-lg geistMono-Regular gap-6 max-sm:text-base max-sm:gap-5'>
        {navLinks.map(navLink => (
          <li key={navLink.path}>
            <NavLink
              to={navLink.path}
              className={({ isActive }) => `duration-300 ease-button-ease hover:text-[#a3a3a3] ${isActive ? 'text-[#a3a3a3]' : ''}`}
            >
              {navLink.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className='flex justify-center max-sm:mt-6'>
        <LanguageSelect />
      </div>
    </div>
  );
}

export default NavBar;
