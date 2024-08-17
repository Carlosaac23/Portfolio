import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className='w-full text-center py-5 text-white geistMono-Regular'>
      <p>
        &#169; 2024 {t('copyright')} | <a>Carlos Acosta</a>
      </p>
    </footer>
  );
}

export default Footer;
