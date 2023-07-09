import {Octokit} from '@octokit-next/core';
import {invoke} from "@tauri-apps/api/tauri";

/**
 * Returns the memory usage of the device
 */
export async function getMemoryUsage(): Promise<String> {
    let memoryUsage: string = "0";
    try {
        await invoke('get_memory_usage').then((result): void => {
            memoryUsage = result.toString();
        });
    } catch (error) {
        console.error('Error while calling get_memory_usage:', error);
    }
    return memoryUsage;
}

/**
 * Returns the Cpu usage of the device
 */
export async function getSwapUsage(): Promise<String> {
    let cpuUsage: string = "0";
    try {
        await invoke('get_swap_usage').then((result): void => {
            cpuUsage = result.toString();
        });
    } catch (error) {
        console.error('Error while calling get_cpu_usage:', error);
    }
    return cpuUsage;
}

/**
 * Returns the OS type of the device
 */
export async function getOsType(): Promise<String> {
    let osType: string = "0";
    try {
        await invoke('get_os_type').then((result): void => {
            osType = result.toString();
        });
    } catch (error) {
        console.error('Error while calling get_os_type:', error);
    }
    return osType;
}

/**
 * Handles the online time of the device
 */
export function getScreenTime(): string {
    const timeInMinutes: number = Number(localStorage.getItem("dailyOnlineTime"));
    const timeInHours: number = Number(localStorage.getItem("dailyOnlineHours"));

    if (timeInHours === 0) {
        return String(timeInMinutes);
    } else {
        return timeInHours + "h" + timeInMinutes;
    }
}

export function startRecordingScreenTime(): void {
    let currentTimeInMinutes: number = Number(localStorage.getItem("dailyOnlineMinutes"))
    let currentTimeInHours: number = Number(localStorage.getItem("dailyOnlineHours"))
    ++currentTimeInMinutes;

    if (currentTimeInMinutes == 60) {
        localStorage.setItem("dailyOnlineHours", currentTimeInHours.toString());
        currentTimeInMinutes = 0;
    }
    localStorage.setItem("dailyOnlineMinutes", currentTimeInMinutes.toString());
}

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

