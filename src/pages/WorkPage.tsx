import { useTranslation } from 'react-i18next';

function WorkPage() {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-5 geistMono-Regular text-[#e4e4e7]'>
      <p className='text-left'>{t('workDescription')} 👈🏻</p>
    </div>
  );
}

export default WorkPage;
