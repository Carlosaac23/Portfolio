interface Project {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
}

export default async function getProjects(): Promise<Project[]> {
  const GITHUB_API_LINK = 'https://api.github.com/users/Carlosaac23/repos';

  try {
    const response = await fetch(GITHUB_API_LINK, {
      next: {
        revalidate: 1800,
      },
    });

    if (!response.ok) {
      console.error(`Error fetching projects: ${response.status} ${response.statusText}`);
      return [];
    }

    const data: Project[] = await response.json();
    return data.filter(repo => repo.stargazers_count >= 1);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}
