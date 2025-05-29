import getProjects from '../githubService';

// Mock the global fetch function
global.fetch = jest.fn();

describe('getProjects', () => {
  // Reset the fetch mock before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch projects and filter those with at least 1 star', async () => {
    // Define a mock response data
    const mockProjectsData = [
      { name: 'repo-with-stars', description: 'desc1', html_url: 'url1', homepage: 'home1', stargazers_count: 10 },
      { name: 'repo-without-stars', description: 'desc2', html_url: 'url2', homepage: 'home2', stargazers_count: 0 },
      { name: 'another-repo-with-stars', description: 'desc3', html_url: 'url3', homepage: 'home3', stargazers_count: 5 },
    ];

    // Mock the fetch response
    const mockResponse = {
      ok: true,
      json: async () => mockProjectsData,
    } as Response;

    (fetch as jest.Mock).mockResolvedValueOnce(mockResponse);

    // Call the function
    const projects = await getProjects();

    // Assert that fetch was called with the correct URL
    expect(fetch).toHaveBeenCalledWith('https://api.github.com/users/Carlosaac23/repos', {
      next: {
        revalidate: 3600,
      },
    });

    // Assert that the function returned the filtered projects
    expect(projects).toHaveLength(2);
    expect(projects).toEqual([
      { name: 'repo-with-stars', description: 'desc1', html_url: 'url1', homepage: 'home1', stargazers_count: 10 },
      { name: 'another-repo-with-stars', description: 'desc3', html_url: 'url3', homepage: 'home3', stargazers_count: 5 },
    ]);
  });

  it('should return an empty array if the fetch fails', async () => {
    // Mock fetch to reject (simulate network error)
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    // Call the function
    const projects = await getProjects();

    // Assert that fetch was called
    expect(fetch).toHaveBeenCalled();
    // Assert that the function returned an empty array
    expect(projects).toEqual([]);
  });

  it('should return an empty array if the response is not ok', async () => {
    // Mock fetch to return a non-ok response (simulate HTTP error like 404 or 500)
    const mockResponse = {
      ok: false,
      status: 404,
      statusText: 'Not Found',
      json: async () => ({}), // Still provide a json method even if not used
    } as Response;

    (fetch as jest.Mock).mockResolvedValueOnce(mockResponse);

    // Call the function
    const projects = await getProjects();

    // Assert that fetch was called
    expect(fetch).toHaveBeenCalled();
    // Assert that the function returned an empty array
    expect(projects).toEqual([]);
  });
});
