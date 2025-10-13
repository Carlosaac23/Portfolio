import Balancer from 'react-wrap-balancer';
import ProjectCard from '@/components/ProjectCard';
import getProjects from '@/lib/github-services';

export default async function HomePage() {
	const projects = await getProjects();

	return (
		<main className='flex flex-col gap-6 text-neutral-700 dark:text-neutral-50'>
			<h1 className='font-bold text-2xl text-neutral-950 dark:text-neutral-50'>
				Carlos Acosta
			</h1>
			<p className='max-sm:leading-loose'>
				<Balancer>
					I&apos;m a Full Stack Developer focused on the{' '}
					<strong>backend</strong> and a passionate tech enthusiast. I&apos;m
					constantly learning and building projects to sharpen my skills and
					grow as a professional. I&apos;m excited to keep evolving, tackling
					new challenges, and expanding my knowledge every day in this amazing
					world of technology.
				</Balancer>
			</p>

			<section className='flex flex-col gap-6 text-neutral-950 dark:text-neutral-50'>
				{projects.length > 0 ? (
					<>
						<h2 className='font-bold text-xl'>Projects</h2>
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
