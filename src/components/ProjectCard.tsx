'use client';

export interface Project {
  name: string;
  repo_url: string;
  homepage_url: string;
  description: string;
  stack: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  const { name, repo_url, homepage_url, description, stack } = project;

  return (
    <div
      key={name}
      className='flex flex-col p-3 justify-between bg-neutral-50 border border-neutral-300 rounded-md max-h-44 hover:border-neutral-400 max-sm:w-auto shadow-xs dark:bg-neutral-950 dark:border-neutral-800 dark:hover:border-neutral-600'
    >
      <div className='text-left'>
        <h2 className='text-neutral-950 dark:text-neutral-50 text-lg'>{name}</h2>
        <div className='text-neutral-700 dark:text-neutral-200 text-sm max-h-14 overflow-y-auto'>
          <p className='mr-1 text-left text-pretty'>{description || 'No description available'}</p>
        </div>
        <div className='mt-2'></div>
        {homepage_url ? (
          <a
            title='A live page link to this project'
            href={homepage_url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-neutral-600 text-sm hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50 hover:underline hover:underline-offset-2'
          >
            {'View website'}
          </a>
        ) : (
          <span className='text-gray-400'>{"Don't have website"}</span>
        )}

        {/* Es una línea que separa ambos links */}
        <span className='mx-2 text-neutral-600 dark:text-neutral-400'>|</span>

        <a
          title='A repository link to this project'
          href={repo_url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-neutral-600 text-sm hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50 hover:underline hover:underline-offset-2'
        >
          {'View on GitHub'}
        </a>
      </div>
      <ul className='flex flex-wrap gap-2 mt-2 py-0.5 overflow-y-auto'>
        {stack.map(t => (
          <li key={t} className='px-2 py-1 bg-neutral-50 dark:bg-neutral-950 rounded-sm text-xs border border-neutral-300 shadow-xs dark:border-neutral-700'>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
