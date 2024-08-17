import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select
      className='text-white geistMono-Regular bg-[#0a0a0a] border border-[#27272a] rounded-md w-[53px] p-1 ml-[15px] hover:border-[#52525b] focus:outline-none transition-all duration-300 ease cursor-pointer '
      value={i18n.language}
      onChange={handleLanguageChange}
    >
      <option className='text-white geistMono-Regular' value='en'>
        EN
      </option>
      <option className='text-white geistMono-Regular' value='es'>
        ES
      </option>
    </select>
  );
};

export default LanguageSwitcher;
