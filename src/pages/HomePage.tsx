import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

function HomePage() {
  return (
    <div className='flex flex-col gap-10 geistMono-regular text-white'>
      <p className='text-left text-2xl'>Hi, I'm Carlos 👋🏻</p>
      <p className='text-left text-[#fafafa]'>
        I am a front-end developer who loves the tech industry. I am currently learning and creating projects to enhance my skills and enter the programming
        world. I am excited about the opportunity to work with you and continue to explore this vast and beautiful world.💪🏻
      </p>
      <div className='flex flex-col gap-5'>
        <div className='flex w-[100%] justify-between gap-5'>
          <img src='/images/vertical-2.png' alt='' className='w-[35%] rounde-md' />
          <img src='/images/horizontal-2.png' alt='' className='w-[65%] rounded-md' />
        </div>
        <div className='flex w-[100%] justify-between gap-5'>
          <img src='/images/horizontal-1.png' alt='' className='w-[65%] rounded-md' />
          <img src='/images/vertical-1.png' alt='' className='w-[35%] rounde-md' />
        </div>
      </div>
      <p className='text-left text-[#f4f4f4]'>
        You can get to know me better by connecting with me on my preferred social network. Additionally, you can view my professional profiles here.👇🏻
      </p>

      <div className='grid md:grid-cols-[1fr_1fr_1fr] gap-5 text-[14px]'>
        <a href='https://github.com/Carlosaac23' target='_blank'>
          <div className='flex items-center p-3 justify-between bg-[#0A0A0A] border border-[#262626] rounded-lg hover:bg-[#171717] transition-all duration-500'>
            <img src='/images/github.svg' alt='GitHub Logo' className='w-7 h-7' />
            <div className='text-left'>
              <p>@Carlosaac23</p>
            </div>
            <FaArrowUpRightFromSquare />
          </div>
        </a>
        <a href='https://x.com/Carlosaac23' target='_blank'>
          <div className='flex items-center p-3 justify-between bg-[#0A0A0A] border border-[#262626] rounded-lg hover:bg-[#171717] transition-all duration-500'>
            <img src='/images/x.svg' alt='X Logo' className='w-7 h-7' />
            <div className='text-left'>
              <p>@Carlosaac23</p>
            </div>
            <FaArrowUpRightFromSquare />
          </div>
        </a>
        <a href='https://www.linkedin.com/in/carlos-acosta-7aa448263/' target='_blank'>
          <div className='flex items-center p-3 justify-between bg-[#0A0A0A] border border-[#262626] rounded-lg hover:bg-[#171717] transition-all duration-500 '>
            <img src='/images/linkedin.svg' alt='Linkeding Logo' className='w-7 h-7' />
            <div className='text-left'>
              <p>Carlos Acosta</p>
            </div>

            <FaArrowUpRightFromSquare />
          </div>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
