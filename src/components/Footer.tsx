import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className='w-full text-center py-5 text-white geistMono-bold'>
      <p>
        &#169; {t('copyright')} <a className='font-bold'>Carlos Acosta</a>
      </p>
    </footer>
  );
}

export default Footer;
