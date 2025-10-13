import { ArrowUpRight } from 'lucide-react';
import Balancer from 'react-wrap-balancer';
import ProjectCard from '@/components/ProjectCard';
import getProjects from '@/lib/github-services';

export default async function HomePage() {
	const projects = await getProjects();

	return (
		<main className='flex flex-col text-neutral-700 dark:text-neutral-50'>
			<h1 className='mb-3 font-bold text-2xl text-neutral-950 dark:text-neutral-50'>
				Carlos Acosta
			</h1>
			<p className='mb-1 leading-loose lg:mb-2'>
				<Balancer>
					I&apos;m a Full Stack Developer focused on the{' '}
					<strong>backend</strong> and a passionate tech enthusiast. I&apos;m
					constantly learning and building projects to sharpen my skills and
					grow as a professional. I&apos;m excited to keep evolving, tackling
					new challenges, and expanding my knowledge every day in this amazing
					world. Reach me out here.
				</Balancer>
			</p>

			<div className='mb-6 flex gap-2 lg:gap-4'>
				<a
					className='flex items-center text-neutral-600 text-sm hover:text-neutral-950 hover:underline hover:underline-offset-2 dark:text-neutral-400 dark:hover:text-neutral-50'
					href='https://x.com/Carlosaac23'
					rel='noopener noreferrer'
					target='_blank'
					title='A link to my GitHub'
				>
					<span>X</span>
					<ArrowUpRight size={14} />
				</a>

				<a
					className='flex items-center text-neutral-600 text-sm hover:text-neutral-950 hover:underline hover:underline-offset-2 dark:text-neutral-400 dark:hover:text-neutral-50'
					href='https://github.com/Carlosaac23'
					rel='noopener noreferrer'
					target='_blank'
					title='A link to my GitHub'
				>
					<span> GitHub</span>
					<ArrowUpRight size={14} />
				</a>

				<a
					className='flex items-center text-neutral-600 text-sm hover:text-neutral-950 hover:underline hover:underline-offset-2 dark:text-neutral-400 dark:hover:text-neutral-50'
					href='https://www.linkedin.com/in/carlos-acosta-7aa448263/'
					rel='noopener noreferrer'
					target='_blank'
					title='A link to my Linkedin'
				>
					<span>LinkedIn</span>
					<ArrowUpRight size={14} />
				</a>

				<a
					className='flex items-center text-neutral-600 text-sm hover:text-neutral-950 hover:underline hover:underline-offset-2 dark:text-neutral-400 dark:hover:text-neutral-50'
					href='mailto:carlosaac232001@gmail.com'
					title='A link to send me an email'
				>
					<span>Email</span>
					<ArrowUpRight size={14} />
				</a>
			</div>

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
