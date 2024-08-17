import { useTranslation } from 'react-i18next';

function WorkPage() {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-5 geistMono-Regular text-white'>
      <p className='text-left'>{t('workDescription')} 👈🏻</p>
    </div>
  );
}

export default WorkPage;
