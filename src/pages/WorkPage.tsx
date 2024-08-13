import { useTranslation } from 'react-i18next';

function WorkPage() {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-5 geistMono-regular text-[#f4f4f4]'>
      <p className='text-left'>{t('workDescription')} 👈🏻</p>
    </div>
  );
}

export default WorkPage;
