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
      className='flex max-h-44 flex-col justify-between rounded-md border border-neutral-300 bg-neutral-50 p-3 shadow-xs hover:border-neutral-400 max-sm:w-auto dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-600'
    >
      <div className='text-left'>
        <h2 className='text-lg text-neutral-950 dark:text-neutral-50'>
          {name}
        </h2>
        <div className='max-h-14 overflow-y-auto text-sm text-neutral-700 dark:text-neutral-200'>
          <p className='mr-1 text-left text-pretty'>
            {description || 'No description available'}
          </p>
        </div>
        <div className='mt-2'></div>
        {homepage_url ? (
          <a
            title='A live page link to this project'
            href={homepage_url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm text-neutral-600 hover:text-neutral-950 hover:underline hover:underline-offset-2 dark:text-neutral-400 dark:hover:text-neutral-50'
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
          className='text-sm text-neutral-600 hover:text-neutral-950 hover:underline hover:underline-offset-2 dark:text-neutral-400 dark:hover:text-neutral-50'
        >
          {'View on GitHub'}
        </a>
      </div>
      <ul className='mt-2 flex flex-wrap gap-2 overflow-y-auto py-0.5'>
        {stack.map((t) => (
          <li
            key={t}
            className='rounded-sm border border-neutral-300 bg-neutral-50 px-2 py-1 text-xs shadow-xs dark:border-neutral-700 dark:bg-neutral-950'
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
