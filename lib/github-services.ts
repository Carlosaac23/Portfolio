'use server';

import type { Project } from '@/components/ProjectCard';

export default async function getProjects(): Promise<Project[]> {
  const url = 'https://api.github.com/users/carlosaac23/repos';
  const { GITHUB_TOKEN } = process.env;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
      next: {
        revalidate: 1800,
      },
    });

    if (!res.ok) {
      console.error(`Error fetching projects: ${res.status} ${res.statusText}`);
      return [];
    }

    const data: Project[] = await res.json();
    return data.filter((repo) => repo.stargazers_count >= 1 && !repo.fork);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}
