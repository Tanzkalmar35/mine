/**
 * GitHub API call to fetch various public data from a user such as
 * - followers count (with _url)
 * - public repos count
 * - bio
 * - blog
 * - company
 * - created_at
 * - email
 * - following count (with _url)
 * - gists_url (whatever this is)
 * - hireable
 * - id
 * - location
 * - login
 * - name
 * - organizations_url
 * - public_gists
 * - public_repos
 * - repos_url
 * - twitter_username
 * - updated_at
 * - url (to the user's GitHub profile)
 * - starred_url
 * - type
 */

import {Octokit} from "@octokit-next/core";

/**
 * Fetches the number of followers of a GitHub user
 * @param username the GitHub username
 */
export async function fetchGithubFollowers(username: string): Promise<number> {
    return await fetchGithubData(username).then((data: any) => {
        return data.followers;
    });
}

/**
 * Fetches the number of public repositories of a GitHub user
 * @param username the GitHub username
 */
export async function fetchPublicGithubRepositories(username: string): Promise<number> {
    return await fetchGithubData(username).then((data: any) => {
        return data.public_repos;
    });
}

/**
 * Fetches the number of public repositories of a GitHub user
 * @param username the GitHub username
 */
export async function fetchUserGithubBio(username: string): Promise<string> {
    return await fetchGithubData(username).then((data: any): string => {
        if (data.bio === null) {
            return "User has no bio.";
        } else return data.bio;
    });
}

/**
 * Handles the actual http request to get the data from the GitHub API
 * @param username the GitHub username
 */
async function fetchGithubData(username: string): Promise<any> {
    const octokit = new Octokit();
    let result: any;
    try {
        const response: any = await octokit.request(`GET /users/${username}`);
        result = response.data
    } catch (error) {
        console.error("Error fetching GitHub data: ", error);
        throw error;
    }
    return result;
}

/**
 * Tests that all functions work as expected. If not, you see it in the console.
 * Only for debugging purposes.
 * @param username the GitHub username
 */
export async function fetchGithubRepo(username: string): Promise<void> {
    console.log(await fetchGithubFollowers(username));
    console.log(await fetchPublicGithubRepositories(username));
    console.log(await fetchUserGithubBio(username));
}