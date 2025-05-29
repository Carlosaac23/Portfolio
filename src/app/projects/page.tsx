import ProjectCard from '@/components/ProjectCard';
import getProjects from '@/lib/githubService';

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className='flex flex-col gap-10'>
      {projects.length > 0 ? (
        <>
          <p className='text-left text-[#333333] dark:text-[#fafafa]'>These are my projects. Feel free to check them.</p>
          <div className='grid md:grid-cols-[1fr_1fr] gap-5 text-sm max-sm:justify-center'>
            {projects.map(project => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </>
      ) : (
        <div className='flex flex-col justify-center items-center'>
          <p className='text-[#333333] text-base'>There are no projects.</p>
        </div>
      )}
    </section>
  );
}
