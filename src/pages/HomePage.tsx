import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

function HomePage() {
  return (
    <div className='flex flex-col gap-10 geist-regular text-white'>
      <p className='text-left text-2xl'>Hey, I’m Carlos 💪🏻</p>
      <p className='text-left text-[#d4d4d4]'>
        I am a front-end developer who loves the tech industry. I am currently
        learning and creating projects to enhance my skills and enter the
        programming world. I am excited about the opportunity to work with you
        and continue to explore this vast and beautiful world.
      </p>
      <div className='flex flex-col gap-5'>
        <div className='flex w-[100%] justify-between gap-5'>
          <img
            src='/images/vertical-2.png'
            alt=''
            className='w-[35%] rounde-md'
          />
          <img
            src='/images/horizontal-2.png'
            alt=''
            className='w-[65%] rounded-md'
          />
        </div>
        <div className='flex w-[100%] justify-between gap-5'>
          <img
            src='/images/horizontal-1.png'
            alt=''
            className='w-[65%] rounded-md'
          />
          <img
            src='/images/vertical-1.png'
            alt=''
            className='w-[35%] rounde-md'
          />
        </div>
      </div>
      <p className='text-left text-[#d4d4d4]'>
        You can get to know me better by connecting with me on my preferred
        social network. Additionally, you can view my professional profiles
        here.
      </p>

      <div className='grid md:grid-cols-[1fr_1fr_1fr] gap-5 text-[14px]'>
        <a href='https://www.instagram.com/elrincondeldev/' target='_blank'>
          <div className='flex items-center p-3 justify-between bg-[#0A0A0A] border-2 border-[#0e0e0e] rounded-md'>
            <img src='/images/instagram.png' alt='' />
            <div className='text-left'>
              <p>@elrincondeldev</p>
              <p>125,000 followers</p>
            </div>
            <FaArrowUpRightFromSquare />
          </div>
        </a>
        <a href='https://www.tiktok.com/@elrincondeldev' target='_blank'>
          <div className='flex items-center p-3 justify-between bg-[#0A0A0A] border-2 border-[#0e0e0e] rounded-md'>
            <img src='/images/tiktok.png' alt='' />
            <div className='text-left'>
              <p>@elrincondeldev</p>
              <p>159,000 followers</p>
            </div>
            <FaArrowUpRightFromSquare />
          </div>
        </a>
        <a
          href='https://www.youtube.com/channel/UCWn_0MmgojB711LFX-jaCDQ'
          target='_blank'
        >
          <div className='flex items-center p-3 justify-between bg-[#0A0A0A] border-2 border-[#0e0e0e] rounded-md'>
            <img src='/images/youtube.png' alt='' />
            <div className='text-left'>
              <p>@elrincondeldev</p>
              <p>24,000 subscribers</p>
            </div>

            <FaArrowUpRightFromSquare />
          </div>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
