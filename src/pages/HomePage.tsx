import { useTranslation } from 'react-i18next';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-10 geistMono-Regular text-white'>
      <p className='text-left text-2xl geistMono-Bold'>{t('presentation')} 👋🏻</p>
      <p className='text-left text-[#e4e4e7]'>{t('description')} 💪🏻</p>
      <div className='flex flex-col gap-5'>
        <div className='flex w-[100%] justify-between gap-5'>
          <img src='images/vertical-2.webp' alt='Vertical Image 1' className='w-[35%] rounded-md' />
          <img src='/images/horizontal-2.webp' alt='Horizontal Image 1' className='w-[65%] rounded-md' />
        </div>
        <div className='flex w-[100%] justify-between gap-5'>
          <img src='/images/horizontal-1.webp' alt='Horizontal Image 2' className='w-[65%] rounded-md' />
          <img src='/images/vertical-1.webp' alt='Vertical Image 2' className='w-[35%] rounded-md' />
        </div>
      </div>
      <p className='text-left'>{t('social')} 👇🏻</p>

      <div className='grid md:grid-cols-[1fr_1fr_1fr] gap-5 text-[14px]'>
        <a href='https://github.com/Carlosaac23' target='_blank' rel='noopener noreferrer'>
          <div className='flex items-center p-3 justify-between bg-[#0a0a0a] border border-[#27272a] rounded-md hover:border-[#52525b] transition-all duration-300 ease'>
            <img src='/images/github.svg' alt='GitHub Logo' className='w-7 h-7' />
            <div className='text-left'>
              <p className='geistMono-Regular'>@Carlosaac23</p>
            </div>
            <FaArrowUpRightFromSquare />
          </div>
        </a>
        <a href='https://x.com/Carlosaac23' target='_blank' rel='noopener noreferrer'>
          <div className='flex items-center p-3 justify-between bg-[#0a0a0a] border border-[#27272a] rounded-md hover:border-[#52525b] transition-all duration-300 ease'>
            <img src='/images/x.svg' alt='X Logo' className='w-7 h-7' />
            <div className='text-left'>
              <p className='geistMono-Regular'>@Carlosaac23</p>
            </div>
            <FaArrowUpRightFromSquare />
          </div>
        </a>
        <a href='https://www.linkedin.com/in/carlos-acosta-7aa448263/' target='_blank' rel='noopener noreferrer'>
          <div className='flex items-center p-3 justify-between bg-[#0a0a0a] border border-[#27272a] rounded-md hover:border-[#52525b] transition-all duration-300 ease'>
            <img src='/images/linkedin.svg' alt='Linkeding Logo' className='w-7 h-7' />
            <div className='text-left'>
              <p className='geistMono-Regular'>Carlos Acosta</p>
            </div>

            <FaArrowUpRightFromSquare />
          </div>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
