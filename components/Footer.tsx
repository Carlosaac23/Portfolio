'use client';

export default function Footer() {
	return (
		<footer className='mt-10 flex items-center justify-center gap-6 text-neutral-500 max-sm:mt-24'>
			<a
				className='text-sm hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50'
				href='https://x.com/Carlosaac23'
				rel='noopener noreferrer'
				target='_blank'
				title='A link to my GitHub'
			>
				Twitter/X
			</a>
			<a
				className='text-sm hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50'
				href='https://github.com/Carlosaac23'
				rel='noopener noreferrer'
				target='_blank'
				title='A link to my GitHub'
			>
				GitHub
			</a>
			<a
				className='text-sm hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50'
				href='https://www.linkedin.com/in/carlos-acosta-7aa448263/'
				rel='noopener noreferrer'
				target='_blank'
				title='A link to my Linkedin'
			>
				LinkedIn
			</a>
			<a
				className='text-sm hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50'
				href='mailto:carlosaac232001@gmail.com'
				title='A link to send me an email'
			>
				Email
			</a>
		</footer>
	);
}
