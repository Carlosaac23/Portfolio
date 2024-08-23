import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon, CheckIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Language = {
  code: string;
  name: string;
};

const languages: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
];

const LanguageSelect: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsVisible(false);
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
      setIsVisible(false);
    }
  };

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
    setIsVisible(false);
  };

  const selectedLanguage = languages.find(language => language.code === i18n.language);

  const handleToggleDropdown = () => {
    if (isOpen) {
      setIsVisible(false);
      setTimeout(() => setIsOpen(false), 100);
    } else {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 100);
    }
  };

  return (
    <div className='relative inline-block' ref={dropdownRef}>
      <button
        onClick={handleToggleDropdown}
        className='text-[#fafafa] geistMono-Regular bg-[#0a0a0a] border border-[#262626] rounded-md w-28 p-1 ml-[15px] hover:border-[#5a5a5a] focus:outline-none transition-all duration-300 ease cursor-pointer flex items-center justify-between'
        aria-haspopup='listbox'
        aria-expanded={isOpen}
        aria-label='Language'
      >
        <span className='ml-1 text-sm'>{selectedLanguage?.name}</span>
        <ChevronDownIcon className='h-4 w-4' />
      </button>
      {isOpen && (
        <ul
          className={`absolute z-10 right-0 mt-1 w-28 bg-[#0a0a0a] border border-[#262626] rounded-md transition-opacity duration-500 ease ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          role='listbox'
          onKeyDown={handleKeyDown}
        >
          {languages.map(language => (
            <li
              key={language.code}
              className={`px-2 py-1 cursor-pointer flex items-center justify-between text-[#fafafa] geistMono-Regular ${
                i18n.language === language.code ? 'bg-[#1b1b1b] rounded-[4px]' : ''
              }`}
              onClick={() => handleLanguageChange(language.code)}
              role='option'
              aria-selected={i18n.language === language.code}
            >
              <span>{language.name}</span>
              {i18n.language === language.code && <CheckIcon className='h-4 w-4 text-[#fafafa]' />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelect;
