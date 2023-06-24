import {Octokit} from '@octokit-next/core';

const octokit = new Octokit();

export async function fetchGithubUsername(username: string): Promise<string> {
    try {
        const response = await octokit.request(`GET /users/${username}`);
        const data: any = response.data;
        console.log("Github data: " + data.login);
        //return data;
        return ""
    } catch (error) {
        console.error("Error fetching GitHub data:", error);
        throw error;
    }
}

export async function fetchGithubRepo(username: string): Promise<void> {
    await fetchGithubUsername(username);
}
