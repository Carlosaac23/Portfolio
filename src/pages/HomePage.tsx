import { useTranslation } from 'react-i18next';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-10 geistMono-Regular text-[#fafafa]'>
      <p className='text-left text-2xl geistMono-Bold'>{t('presentation')} 👋🏻</p>
      <p className='text-left text-[#d4d4d4] max-sm:leading-loose'>{t('description')} 💪🏻</p>
      <div className='flex flex-col gap-5'>
        <div className='flex w-[100%] justify-between gap-5'>
          <img title='A image of PC' loading='lazy' src='images/vertical-2.webp' alt='Vertical Image 1' className='w-[35%] rounded-md' />
          <img title='A image of a hand writing' loading='lazy' src='/images/horizontal-2.webp' alt='Horizontal Image 1' className='w-[65%] rounded-md' />
        </div>
        <div className='flex w-[100%] justify-between gap-5'>
          <img title='A image of some plants' loading='lazy' src='/images/horizontal-1.webp' alt='Horizontal Image 2' className='w-[65%] rounded-md' />
          <img title='A image of a keyboard' loading='lazy' src='/images/vertical-1.webp' alt='Vertical Image 2' className='w-[35%] rounded-md' />
        </div>
      </div>
      <p className='text-left text-[#d4d4d4] max-sm:leading-loose'>{t('social')} 👇🏻</p>

      <div className='grid gap-5 text-sm md:grid-cols-[1fr_1fr_1fr] max-sm:place-items-center'>
        <a title='A link to my GitHub' href='https://github.com/Carlosaac23' target='_blank' rel='noopener noreferrer' aria-label='A link to my GitHub'>
          <div className='flex items-center p-3 justify-between bg-[#111111] border border-[#262626] hover:border-[#5a5a5a] transition-all duration-300 ease rounded-md max-sm:w-52'>
            <img src='/images/github.svg' alt='GitHub Logo' className='w-7 h-7' />
            <div className='text-left'>
              <p className='geistMono-Regular'>@Carlosaac23</p>
            </div>
            <FaArrowUpRightFromSquare className='fill-[#fafafa]' />
          </div>
        </a>
        <a title='A link to my personal X' href='https://x.com/Carlosaac23' target='_blank' rel='noopener noreferrer' aria-label='A link to my personal X'>
          <div className='flex items-center p-3 justify-between bg-[#111111] border border-[#262626] hover:border-[#5a5a5a] transition-all duration-300 ease rounded-md max-sm:w-52'>
            <img src='/images/x.svg' alt='X Logo' className='w-7 h-7' />
            <div className='text-left'>
              <p className='geistMono-Regular'>@Carlosaac23</p>
            </div>
            <FaArrowUpRightFromSquare className='fill-[#fafafa]' />
          </div>
        </a>
        <a
          title='A link to my Linkedin'
          href='https://www.linkedin.com/in/carlos-acosta-7aa448263/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='A link to my Linkedin'
        >
          <div className='flex items-center p-3 justify-between bg-[#111111] border border-[#262626] hover:border-[#5a5a5a] transition-all duration-300 ease rounded-md max-sm:w-52'>
            <img src='/images/linkedin.svg' alt='Linkeding Logo' className='w-7 h-7' />
            <div className='text-left'>
              <p className='geistMono-Regular'>Carlos Acosta</p>
            </div>

            <FaArrowUpRightFromSquare className='fill-[#fafafa]' />
          </div>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
