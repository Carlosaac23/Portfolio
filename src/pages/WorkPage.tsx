import { useTranslation } from 'react-i18next';

function WorkPage() {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-5 geistMono-Regular text-white'>
      <p className='text-left text-[#e4e4e7] border-b-2 border-white pb-4'>{t('workDescription')} 👈🏻</p>
    </div>
  );
}

export default WorkPage;
