'use client';

interface Project {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      key={project.name}
      className='flex items-center p-3 justify-between bg-[#0a0a0a] border border-[#262626] rounded-md min-h-[100px] hover:border-[#5a5a5a] duration-200 ease-in-out max-sm:w-72'
    >
      <div className='text-left'>
        <h2 className='text-[#fafafa] text-lg Geist-Regular'>{project.name}</h2>
        <div className='text-[#d4d4d4] text-sm max-h-14 overflow-y-auto'>
          <p className='mr-1'>{project.description || 'No description available'}</p>
        </div>
        <div className='mt-2'></div>
        {project.homepage ? (
          <a
            title='A live page link to this project'
            href={project.homepage}
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#9d9d9d] text-sm Geist-Regular hover:text-[#fafafa] transition duration-150 ease-in-out'
          >
            {'View website'}
          </a>
        ) : (
          <span className='text-gray-400'>{"Don't have website"}</span>
        )}

        {/* Es una línea que separa ambos links */}
        <span className='mx-2 text-gray-500'>|</span>

        <a
          title='A repository link to this project'
          href={project.html_url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-[#9d9d9d] text-sm Geist-Regular hover:text-[#fafafa] transition duration-150 ease-in-out'
        >
          {'View on GitHub'}
        </a>
      </div>
    </div>
  );
}
