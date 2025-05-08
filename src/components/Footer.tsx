export default function Footer() {
  return (
    <footer className='mt-10 flex justify-center gap-6 text-[#9d9d9d] Geist-Regular'>
      <a
        title='A link to my GitHub'
        href='https://x.com/Carlosaac23'
        target='_blank'
        rel='noopener noreferrer'
        className='hover:text-[#fafafa] transition-colors duration-200 ease-in-out'
      >
        Twitter
      </a>
      <a
        title='A link to my GitHub'
        href='https://github.com/Carlosaac23'
        target='_blank'
        rel='noopener noreferrer'
        className='hover:text-[#fafafa] transition-colors duration-200 ease-in-out'
      >
        GitHub
      </a>
      <a
        title='A link to my Linkedin'
        href='https://www.linkedin.com/in/carlos-acosta-7aa448263/'
        target='_blank'
        rel='noopener noreferrer'
        className='hover:text-[#fafafa] transition-colors duration-200 ease-in-out'
      >
        LinkedIn
      </a>
      <a title='A link to send me an email' href='mailto:carlosaac232001@gmail.com' className='hover:text-[#fafafa] transition-colors duration-200 ease-in-out'>
        Email
      </a>
    </footer>
  );
}
