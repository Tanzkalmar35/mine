import {Octokit} from '@octokit-next/core';

const octokit = new Octokit();

export async function fetchGithubUser(username: string): Promise<any> {
    try {
        const response = await octokit.request(`GET /users/${username}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching GitHub data: ", error);
        throw error;
    }
}

export async function fetchGithubRepo(username: string): Promise<void> {
    const data = await fetchGithubUser(username);

}
