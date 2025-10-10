import ProjectCard from '@/components/ProjectCard';
import getProjects from '@/lib/github-services';

export default async function ProjectsPage() {
	const projects = await getProjects();

	return (
		<section className='flex flex-col gap-10 text-neutral-950 dark:text-neutral-50'>
			{projects.length > 0 ? (
				<>
					<p className='text-left'>
						These are my projects. Feel free to check them.
					</p>
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
	);
}
