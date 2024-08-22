import { useTranslation } from 'react-i18next';

function WorkPage() {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-5 geistMono-Regular text-[#fafafa]'>
      <p className='text-left text-[#d4d4d4] border-b-2 border-[#fafafa] pb-4 max-sm:leading-loose'>{t('workDescription')} 👈🏻</p>
    </div>
  );
}

export default WorkPage;
