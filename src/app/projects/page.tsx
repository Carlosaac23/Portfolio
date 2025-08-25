import type { Project } from '@/components/ProjectCard';
import ProjectCard from '@/components/ProjectCard';
import projects from '../../../data/projects.json';

export default async function ProjectsPage() {
  return (
    <section className='flex flex-col gap-10 overflow-y-auto max-h-[40rem] text-neutral-950 dark:text-neutral-50 p-3.5 sm:p-0'>
      {projects.length > 0 ? (
        <>
          <p className='text-left'>These are my projects. Feel free to check them.</p>
          <div className='grid md:grid-cols-[1fr_1fr] p-1 gap-5 text-sm max-sm:justify-center'>
            {projects.map((project: Project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </>
      ) : (
        <div className='flex flex-col justify-center items-center'>
          <p className='text-base'>There are no projects.</p>
        </div>
      )}
    </section>
  );
}
