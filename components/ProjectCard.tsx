import { GeistMono } from 'geist/font/mono';
import { SquareArrowOutUpRight } from 'lucide-react';

export interface Project {
  name: string;
  html_url: string;
  homepage: string;
  description: string;
  topics: string[];
  fork: boolean;
  stargazers_count: number;
}

export default function ProjectCard({ project }: { project: Project }) {
  const { name, html_url, homepage, description, topics } = project;

  return (
    <article className='flex max-h-44 flex-col justify-between rounded-md border border-neutral-300 p-2.5 shadow-xs transition-all duration-100 hover:border-neutral-400 hover:shadow-sm max-sm:w-auto lg:p-3 dark:border-neutral-700 dark:shadow-none dark:hover:border-neutral-600'>
      <div>
        <h3 className='text-lg text-neutral-950 dark:text-neutral-50'>
          {name}
        </h3>
        <div className='max-h-14 overflow-y-auto text-sm text-neutral-800 dark:text-neutral-200'>
          <p className='mr-1 mb-1 text-pretty'>
            {description || 'No description available'}
          </p>
        </div>
        {homepage ? (
          <a
            className='text-xs text-neutral-500 hover:text-neutral-900 sm:text-sm dark:text-neutral-400 dark:hover:text-neutral-50'
            href={homepage}
            rel='noopener noreferrer'
            target='_blank'
            title='A live page link to this project'
          >
            <span
              className={`${GeistMono.className} inline-flex items-center gap-0.5 text-xxs hover:underline hover:underline-offset-2`}
            >
              {'View website'}
              <SquareArrowOutUpRight size={13} />
            </span>
          </a>
        ) : (
          <span className='text-neutral-500 dark:text-neutral-400'>
            No live demo available
          </span>
        )}

        <span className='mx-2 text-neutral-600 dark:text-neutral-400'>|</span>

        {html_url ? (
          <a
            className='text-xs text-neutral-500 hover:text-neutral-900 sm:text-sm dark:text-neutral-400 dark:hover:text-neutral-50'
            href={html_url}
            rel='noopener noreferrer'
            target='_blank'
            title='A repository link to this project'
          >
            <span
              className={`${GeistMono.className} inline-flex items-center gap-0.5 text-xxs hover:underline hover:underline-offset-2`}
            >
              {'View on GitHub'}
              <SquareArrowOutUpRight size={13} />
            </span>
          </a>
        ) : (
          <span className='text-neutral-500 dark:text-neutral-400'>
            No live demo available
          </span>
        )}
      </div>
      <ul className='mt-2 flex max-h-8 flex-wrap gap-2 overflow-y-auto py-0.5 pr-2'>
        {topics.map(topic => (
          <li
            className='rounded-sm border border-neutral-300 px-2 py-1 text-xs text-neutral-800 capitalize shadow-xs transition-all duration-100 dark:border-neutral-700 dark:text-neutral-200'
            key={topic}
          >
            {topic}
          </li>
        ))}
      </ul>
    </article>
  );
}
