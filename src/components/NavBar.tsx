import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function NavBar() {
  const { t } = useTranslation();

  const navLinks = [
    { title: t('home'), path: '/' },
    { title: t('projectsNav'), path: '/projects' },
    { title: t('work'), path: '/work' },
    { title: t('contact'), path: '/contact' },
  ];

  return (
    <div className='flex justify-between items-center mb-16'>
      <ul className='flex text-white geistMono-Regular gap-2 lg:gap-5 text-[14px] sm:text-[16px] lg:text-[17px]'>
        {navLinks.map(navLink => (
          <li key={navLink.path}>
            <Link to={navLink.path}>{navLink.title}</Link>
          </li>
        ))}
      </ul>
      <LanguageSwitcher />
    </div>
  );
}

export default NavBar;
