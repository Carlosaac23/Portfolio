'use client';

export default function Footer() {
	return (
		<footer className='mt-10 flex items-center justify-center gap-6 text-neutral-500 max-sm:mt-24'>
			<a
				title='A link to my GitHub'
				href='https://x.com/Carlosaac23'
				target='_blank'
				rel='noopener noreferrer'
				className='text-sm hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50'
			>
				Twitter/X
			</a>
			<a
				title='A link to my GitHub'
				href='https://github.com/Carlosaac23'
				target='_blank'
				rel='noopener noreferrer'
				className='text-sm hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50'
			>
				GitHub
			</a>
			<a
				title='A link to my Linkedin'
				href='https://www.linkedin.com/in/carlos-acosta-7aa448263/'
				target='_blank'
				rel='noopener noreferrer'
				className='text-sm hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50'
			>
				LinkedIn
			</a>
			<a
				title='A link to send me an email'
				href='mailto:carlosaac232001@gmail.com'
				className='text-sm hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50'
			>
				Email
			</a>
		</footer>
	);
}
