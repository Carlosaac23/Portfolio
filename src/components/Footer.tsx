import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className='w-full text-center pt-7 text-[#fafafa] geistMono-Regular'>
      <p>
        {t('madeBy')} <span className='geistMono-Bold'>Carlos Acosta</span>
      </p>
    </footer>
  );
}

export default Footer;
