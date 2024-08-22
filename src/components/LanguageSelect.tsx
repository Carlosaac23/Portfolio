import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon, CheckIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Language = {
  code: string;
  name: string;
};

const languages: Language[] = [
  { code: 'en', name: 'EN' },
  { code: 'es', name: 'ES' },
];

const LanguageSelect: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className='relative inline-block' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='text-white geistMono-Regular bg-[#0a0a0a] border border-[#27272a] rounded-md w-[56px] p-1 ml-[15px] hover:border-[#52525b] focus:outline-none transition-all duration-300 ease cursor-pointer flex items-center justify-between'
        aria-haspopup='listbox'
        aria-expanded={isOpen}
        aria-label='Language'
      >
        <span className='ml-1'>{i18n.language.toUpperCase()}</span>
        <ChevronDownIcon className='h-4 w-4' />
      </button>
      {isOpen && (
        <ul className='absolute z-10 right-0 mt-1 w-[56px] bg-[#0a0a0a] border border-[#27272a] rounded-md shadow-lg' role='listbox' onKeyDown={handleKeyDown}>
          {languages.map(language => (
            <li
              key={language.code}
              className={`px-2 py-1 cursor-pointer flex items-center justify-between text-white geistMono-Regular ${
                i18n.language === language.code ? 'bg-[#27272a] rounded-[4px]' : 'hover:bg-[#1b1b1b] rounded-[5px] transition-all duration-300 ease'
              }`}
              onClick={() => handleLanguageChange(language.code)}
              role='option'
              aria-selected={i18n.language === language.code}
            >
              <span>{language.name}</span>
              {i18n.language === language.code && <CheckIcon className='h-4 w-4 text-white' />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelect;
