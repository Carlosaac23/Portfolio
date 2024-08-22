import { Link } from 'react-router-dom';
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
    <div className='flex justify-between items-center mb-16'>
      <ul className='flex text-white text-lg geistMono-Regular gap-4 max-md:text-base max-md:gap-4 max-sm:text-sm max-sm:gap-2'>
        {navLinks.map(navLink => (
          <li key={navLink.path}>
            <Link to={navLink.path}>{navLink.title}</Link>
          </li>
        ))}
      </ul>
      <LanguageSelect />
    </div>
  );
}

export default NavBar;
