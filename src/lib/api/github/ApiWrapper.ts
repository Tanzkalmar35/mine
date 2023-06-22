import {Octokit} from "@octokit/rest";

const octokit = new Octokit();

export async function fetchGithub() {
    const username: string = "Tanzkalmar35";
    const response = await octokit.request(`GET /users/${username}`);
    const data = response.data;
    console.log("Github data: " + data);
}
