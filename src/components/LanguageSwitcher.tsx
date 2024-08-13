import React from 'react';
import { useTranslation } from 'react-i18next';
import '../languageSelect.css';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select value={i18n.language} onChange={handleLanguageChange} className='language-select'>
      <option value='en'>EN</option>
      <option value='es'>ES</option>
    </select>
  );
};

export default LanguageSwitcher;
