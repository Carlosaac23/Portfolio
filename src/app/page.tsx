import { TextAnimate } from '@/components/magicui/text-animate';

export default function HomePage() {
  return (
    <div className='flex flex-col gap-10 text-[rgb(51,51,51)] dark:text-white'>
      <TextAnimate animation='blurInUp' by='character' once as='h1' className='text-left text-2xl'>
        Carlos Acosta
      </TextAnimate>
      <p className='text-left text-pretty text-[#333333] max-sm:leading-loose dark:text-[#ededed]'>
        I am a{' '}
        <a
          href='https://zajuna.sena.edu.co/pdfs/titulada/tecgnologias/analisis_desarrollo_software.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='font-bold text-[#171717] dark:text-white'
        >
          software analysis and development
        </a>{' '}
        student at{' '}
        <a
          href='https://www.sena.edu.co/es-co/Paginas/default.aspx'
          target='_blank'
          rel='noopener noreferrer'
          className='font-bold text-[#171717] dark:text-white'
        >
          SENA,
        </a>{' '}
        and I love the tech industry. I&apos;m learning and creating projects to improve my skills and enter the tech world. I have a special taste for{' '}
        <a href='https://www.vercel.com' target='_blank' rel='noopener noreferrer' className='font-bold text-[#171717] dark:text-white'>
          Vercel
        </a>{' '}
        products, and it&apos;s a great motivation for me. I&apos;m excited to continue growing, facing new challenges, and learning more daily in this
        incredible world of technology.
      </p>
    </div>
  );
}
