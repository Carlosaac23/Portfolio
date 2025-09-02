import Balancer from 'react-wrap-balancer';

export default function HomePage() {
  return (
    <div className='flex flex-col gap-10 text-neutral-600 dark:text-neutral-50'>
      <h1 className='text-left text-2xl text-neutral-950 dark:text-neutral-50'>
        Carlos Acosta
      </h1>
      <p className='text-left max-sm:leading-loose'>
        <Balancer>
          I am a{' '}
          <a
            href='https://zajuna.sena.edu.co/pdfs/titulada/tecgnologias/analisis_desarrollo_software.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='font-bold text-neutral-950 dark:text-neutral-50'
          >
            software analysis and development
          </a>{' '}
          student at{' '}
          <a
            href='https://www.sena.edu.co/es-co/Paginas/default.aspx'
            target='_blank'
            rel='noopener noreferrer'
            className='font-bold text-neutral-950 dark:text-neutral-50'
          >
            SENA,
          </a>{' '}
          and I love the tech industry. I&apos;m learning and creating projects
          to improve my skills and enter the tech world. I have a{' '}
          <em className='font-semibold text-neutral-950 dark:text-neutral-50'>
            special taste
          </em>{' '}
          for{' '}
          <a
            href='https://www.vercel.com'
            target='_blank'
            rel='noopener noreferrer'
            className='font-bold text-neutral-950 dark:text-neutral-50'
          >
            Vercel
          </a>{' '}
          products, and it&apos;s a great motivation for me. I&apos;m excited to
          continue growing, facing new challenges, and learning more daily in
          this incredible world of technology.
        </Balancer>
      </p>
    </div>
  );
}
