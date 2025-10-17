'use client';

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

function capitalize(word: string): string {
  return word
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('-');
}

export default function ProjectCard({ project }: { project: Project }) {
  const { name, html_url, homepage, description, topics } = project;

  return (
    <div
      className='flex max-h-44 flex-col justify-between rounded-md border border-neutral-300 bg-neutral-50 p-2.5 shadow-xs transition-all duration-200 hover:border-neutral-400 max-sm:w-auto lg:p-3 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-600'
      key={name}
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
        <div className='mt-2' />
        {homepage ? (
          <a
            className='text-sm text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50'
            href={homepage}
            rel='noopener noreferrer'
            target='_blank'
            title='A live page link to this project'
          >
            <span className='inline-flex items-center gap-0.5 hover:underline hover:underline-offset-2'>
              {'View website'}
              <SquareArrowOutUpRight size={13} />
            </span>
          </a>
        ) : (
          <span className='text-gray-400'>{"Don't have website"}</span>
        )}

        {/* Es una línea que separa ambos links */}
        <span className='mx-2 text-neutral-600 dark:text-neutral-400'>|</span>

        <a
          className='text-sm text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50'
          href={html_url}
          rel='noopener noreferrer'
          target='_blank'
          title='A repository link to this project'
        >
          <span className='inline-flex items-center gap-0.5 hover:underline hover:underline-offset-2'>
            {'View on GitHub'}
            <SquareArrowOutUpRight size={13} />
          </span>
        </a>
      </div>
      <ul className='mt-2 flex max-h-8 flex-wrap gap-2 overflow-y-auto py-0.5'>
        {topics.map((topic) => (
          <li
            className='rounded-sm border border-neutral-300 bg-neutral-50 px-2 py-1 text-xs shadow-xs transition-all duration-200 dark:border-neutral-700 dark:bg-neutral-950'
            key={topic}
          >
            {capitalize(topic)}
          </li>
        ))}
      </ul>
    </div>
  );
}
