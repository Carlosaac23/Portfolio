'use client';

export default function Footer() {
  return (
    <footer className='mt-10 flex justify-center items-center gap-6 text-[#666666] max-sm:mt-24'>
      <a
        title='A link to my GitHub'
        href='https://x.com/Carlosaac23'
        target='_blank'
        rel='noopener noreferrer'
        className='hover:text-[#171717] text-sm transition-colors duration-200 ease-in-out dark:text-[#a1a1a1] dark:hover:text-white'
      >
        Twitter/X
      </a>
      <a
        title='A link to my GitHub'
        href='https://github.com/Carlosaac23'
        target='_blank'
        rel='noopener noreferrer'
        className='hover:text-[#171717] text-sm transition-colors duration-200 ease-in-out dark:text-[#a1a1a1] dark:hover:text-white'
      >
        GitHub
      </a>
      <a
        title='A link to my Linkedin'
        href='https://www.linkedin.com/in/carlos-acosta-7aa448263/'
        target='_blank'
        rel='noopener noreferrer'
        className='hover:text-[#171717] text-sm transition-colors duration-200 ease-in-out dark:text-[#a1a1a1] dark:hover:text-white'
      >
        LinkedIn
      </a>
      <a
        title='A link to send me an email'
        href='mailto:carlosaac232001@gmail.com'
        className='hover:text-[#171717] text-sm transition-colors duration-200 ease-in-out dark:text-[#a1a1a1] dark:hover:text-white'
      >
        Email
      </a>
    </footer>
  );
}
