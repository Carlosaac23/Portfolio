import type { Project } from '@/components/ProjectCard';

export default async function getProjects(): Promise<Project[]> {
  const url = process.env.GITHUB_API_URL as string;
  const token = process.env.GITHUB_TOKEN;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
      next: {
        revalidate: 3600,
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
