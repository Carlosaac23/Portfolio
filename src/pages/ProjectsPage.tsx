import { useTranslation } from 'react-i18next';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';

interface project {
  name: string;
  description: string;
  html_url: string;
}

function ProjectsPage() {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Carlosaac23/repos')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <>
      {projects.length >= 1 ? (
        <section className='flex flex-col gap-10 geistMono-regular text-white'>
          <p className='text-left text-[#f4f4f4]'>{t('projects')} 🤙🏻</p>
          <div>
            <div className='grid md:grid-cols-[1fr_1fr] gap-5 text-[14px]'>
              {projects.map((project: project) => (
                <a key={project.name} href={project.html_url} target='_blank'>
                  <div className='flex items-center p-3 justify-between bg-[#0a0a0a] border border-[#262626] rounded-lg hover:border-[#767676] min-h-[100px] transition-all duration-300'>
                    <div className='text-left'>
                      <p className='text-white geistMono-bold'>{project.name}</p>
                      <p className='text-[#a3a3a3] text-sm geistMono-regular'>{project.description}</p>
                    </div>
                    <FaArrowUpRightFromSquare />
                  </div>
                </a>
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
