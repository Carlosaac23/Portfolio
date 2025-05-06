export default function HomePage() {
  return (
    <div className='flex flex-col gap-10 text-[#fafafa]'>
      <h1 className='text-left text-xl'>Carlos Acosta</h1>
      <p className='text-justify text-[#d4d4d4] max-sm:leading-loose'>
        I am a{' '}
        <a
          href='https://zajuna.sena.edu.co/pdfs/titulada/tecgnologias/analisis_desarrollo_software.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='font-bold'
        >
          software analysis and development
        </a>{' '}
        student at{' '}
        <a href='https://www.sena.edu.co/es-co/Paginas/default.aspx' target='_blank' rel='noopener noreferrer' className='font-bold'>
          SENA,
        </a>{' '}
        and I love the tech industry. I&apos;m learning and creating projects to improve my skills and enter the tech world. I have a special taste for products
        from{' '}
        <a href='https://www.vercel.com' target='_blank' rel='noopener noreferrer' className='font-bold'>
          Vercel,
        </a>{' '}
        and it&apos;s a great motivation for me. I am excited for the opportunity to work and continue learning about this vast and beautiful world.
      </p>
    </div>
  );
}
