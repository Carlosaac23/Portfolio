import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';

interface Project {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
}

function ProjectsPage() {
  const { t } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Carlosaac23/repos')
      .then(response => response.json())
      .then((data: Project[]) => {
        const filteredProjects = data.map(repo => ({
          name: repo.name,
          description: repo.description || 'No description available',
          html_url: repo.html_url || '#',
          homepage: repo.homepage,
        }));
        setProjects(filteredProjects);
      });
  }, []);

  return (
    <>
      {projects.length >= 1 ? (
        <section className='flex flex-col gap-10 geistMono-Regular text-[#fafafa]'>
          <p className='text-left text-[#d4d4d4]'>{t('projects')} 🤙🏻</p>
          <div>
            <div className='grid md:grid-cols-[1fr_1fr] gap-5 text-sm max-sm:justify-center'>
              {projects.map((project: Project) => (
                <div
                  key={project.name}
                  className='flex items-center p-3 justify-between bg-[#0a0a0a] border border-[#262626] rounded-md hover:border-[#5a5a5a] min-h-[100px] transition-all duration-300 ease max-sm:w-72'
                >
                  <div className='text-left'>
                    <p className='text-[#fafafa] geistMono-Bold'>{project.name}</p>
                    <p className='text-[#d4d4d4] text-sm'>{project.description}</p>
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='A link to this project page'
                        className='text-[#737373] geistMono-Regular hover:underline'
                      >
                        {t('website')}
                      </a>
                    )}{' '}
                    -
                    <a
                      href={project.html_url}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label='A link to this repository page'
                      className='text-[#737373] geistMono-Regular hover:underline ml-2'
                    >
                      {t('github')}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default ProjectsPage;
