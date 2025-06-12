import { describe, it, expect, beforeEach } from 'bun:test';
import getProjects from '../githubService';

describe('getProjects', () => {
  beforeEach(() => {
    // No es necesario limpiar fetch, se sobreescribe en cada test
  });

  it('should fetch projects and filter those with at least 1 star', async () => {
    const mockProjectsData = [
      { name: 'repo-with-stars', description: 'desc1', html_url: 'url1', homepage: 'home1', stargazers_count: 10 },
      { name: 'repo-without-stars', description: 'desc2', html_url: 'url2', homepage: 'home2', stargazers_count: 0 },
      { name: 'another-repo-with-stars', description: 'desc3', html_url: 'url3', homepage: 'home3', stargazers_count: 5 },
    ];

    globalThis.fetch = async () =>
      ({
        ok: true,
        json: async () => mockProjectsData,
      } as Response);

    const projects = await getProjects();

    expect(projects).toHaveLength(2);
    expect(projects).toEqual([
      { name: 'repo-with-stars', description: 'desc1', html_url: 'url1', homepage: 'home1', stargazers_count: 10 },
      { name: 'another-repo-with-stars', description: 'desc3', html_url: 'url3', homepage: 'home3', stargazers_count: 5 },
    ]);
  });

  it('should return an empty array if the fetch fails', async () => {
    globalThis.fetch = async () => {
      throw new Error('Network error');
    };

    const projects = await getProjects();

    expect(projects).toEqual([]);
  });

  it('should return an empty array if the response is not ok', async () => {
    globalThis.fetch = async () =>
      ({
        ok: false,
        status: 404,
        statusText: 'Not Found',
        json: async () => ({}),
      } as Response);

    const projects = await getProjects();

    expect(projects).toEqual([]);
  });
});
