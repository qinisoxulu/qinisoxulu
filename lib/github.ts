import { Octokit } from '@octokit/rest';

interface Project {
  id: number;
  name: string;
  description: string;
  homepage: string;
  html_url: string;
  updated_at: string;
}

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export async function getLatestProjects(username: string): Promise<Project[]> {
  const { data } = await octokit.repos.listForUser({
    username,
    sort: 'updated',
    per_page: 6,
  });

  return data.map((repo) => ({
    id: repo.id || 0,
    name: repo.name || '',
    description: repo.description || '',
    homepage: repo.homepage || '',
    html_url: repo.html_url || '',
    updated_at: repo.updated_at || '1970-01-01T00:00:00Z',
  }));
}

export async function getReadme(owner: string, repo: string) {
  try {
    const { data } = await octokit.repos.getReadme({
      owner,
      repo,
    });

    const content = Buffer.from(data.content, 'base64').toString('utf-8');
    return content;
  } catch (error) {
    return 'Unable to fetch README: ' + error;
  }
}

async function periodicallyFetchProjects(username: string) {
  setInterval(async () => {
    try {
      const projects = await getLatestProjects(username);
      console.log(projects)
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  }, 5000); //Day : 86400000 // Second : 1000
}

const username = 'qinisonhlakaniphoxulu';
periodicallyFetchProjects(username);