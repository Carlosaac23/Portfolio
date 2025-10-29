import Links from '@/components/Links';
import ProjectCard from '@/components/ProjectCard';
import getProjects from '@/lib/github-services';
import Balancer from 'react-wrap-balancer';

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <main className='flex flex-col'>
      <h1 className='mb-3 text-2xl font-bold text-neutral-950 dark:text-neutral-50'>
        Carlos Acosta
      </h1>
      <p className='mb-1 leading-loose text-neutral-800 lg:mb-2 dark:text-neutral-200'>
        <Balancer>
          I&apos;m a self-taught Full Stack Developer focused on the{' '}
          <strong className='text-neutral-950 dark:text-neutral-50'>
            backend
          </strong>{' '}
          and a passionate tech enthusiast. I&apos;m constantly learning and
          building projects to sharpen my skills and grow as a professional.
          I&apos;m excited to keep evolving, tackling new challenges, and
          expanding my knowledge every day in this amazing world. Reach me out
          here.
        </Balancer>
      </p>

      <Links />

      <section className='flex flex-col gap-6'>
        {projects.length > 0 ? (
          <>
            <h2 className='text-xl font-bold tracking-wide text-neutral-950 dark:text-neutral-50'>
              Projects
            </h2>
            <div className='grid gap-5 text-sm sm:grid-cols-[1fr_1fr]'>
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </>
        ) : (
          <div className='flex flex-col items-center justify-center'>
            <p className='text-base'>There are no projects</p>
          </div>
        )}
      </section>
    </main>
  );
}
