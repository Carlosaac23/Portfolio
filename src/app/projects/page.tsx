'use client';

import type { Project } from '@/components/ProjectCard';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import projects from '../../../data/projects.json';

export default function ProjectsPage() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 4);
  const hasMoreProjects = projects.length > 4;

  return (
    <section className='flex flex-col gap-10 text-neutral-950 dark:text-neutral-50'>
      {projects.length > 0 ? (
        <>
          <p className='text-left'>These are my projects. Feel free to check them.</p>
          <div className='grid sm:grid-cols-[1fr_1fr] gap-5 text-sm'>
            {displayedProjects.map((project: Project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>

          {hasMoreProjects && (
            <div className='flex justify-center'>
              <Button variant='outline' onClick={() => setShowAll(!showAll)} className='px-6 py-2 cursor-pointer'>
                {showAll ? 'Show less' : `Show more (${projects.length - 4} more)`}
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className='flex flex-col justify-center items-center'>
          <p className='text-base'>There are no projects.</p>
        </div>
      )}
    </section>
  );
}
