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
      className='flex items-center p-3 justify-between bg-[#fafafa] border border-[#c0c0c0] rounded-md min-h-[100px] hover:border-[#999999] duration-200 ease-in-out max-sm:w-auto shadow-xl dark:bg-[#000000] dark:border-[#262626] dark:hover:border-[#5a5a5a]'
    >
      <div className='text-left'>
        <h2 className='text-[#171717] dark:text-[#ededed] text-lg'>{project.name}</h2>
        <div className='text-[#333333] dark:text-[#eaeaea] text-sm max-h-14 overflow-y-auto'>
          <p className='mr-1 text-left text-pretty'>{project.description || 'No description available'}</p>
        </div>
        <div className='mt-2'></div>
        {project.homepage ? (
          <a
            title='A live page link to this project'
            href={project.homepage}
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#666666] text-sm hover:text-[#171717] dark:text-[#a1a1a1] dark:hover:text-white transition duration-150 ease-in-out'
          >
            {'View website'}
          </a>
        ) : (
          <span className='text-gray-400'>{"Don't have website"}</span>
        )}

        {/* Es una línea que separa ambos links */}
        <span className='mx-2 text-[#5a5a5a] dark:text-[#a1a1a1]'>|</span>

        <a
          title='A repository link to this project'
          href={project.html_url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-[#666666] text-sm hover:text-[#171717] dark:text-[#a1a1a1] dark:hover:text-white transition duration-150 ease-in-out'
        >
          {'View on GitHub'}
        </a>
      </div>
    </div>
  );
}
