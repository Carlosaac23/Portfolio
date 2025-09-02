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
          <p className='text-left'>
            These are my projects. Feel free to check them.
          </p>
          <div className='grid gap-5 text-sm sm:grid-cols-[1fr_1fr]'>
            {displayedProjects.map((project: Project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>

          {hasMoreProjects && (
            <div className='flex justify-center'>
              <Button
                variant='outline'
                onClick={() => setShowAll(!showAll)}
                className='cursor-pointer px-6 py-2'
              >
                {showAll
                  ? 'Show less'
                  : `Show more (${projects.length - 4} more)`}
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className='flex flex-col items-center justify-center'>
          <p className='text-base'>There are no projects.</p>
        </div>
      )}
    </section>
  );
}
