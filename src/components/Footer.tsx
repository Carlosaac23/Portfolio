import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className='w-full mt-8 text-center text-[#fafafa] geistMono-Regular'>
      <p>
        {t('madeBy')} <span className='geistMono-Bold'>Carlos Acosta</span>
      </p>
    </footer>
  );
}

export default Footer;
