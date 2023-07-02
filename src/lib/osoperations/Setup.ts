/**
 * Sets the app up. This includes preparing the localStorage.
 */
export function setup(): void {
    localStorage.setItem("userId", "");

    localStorage.setItem("registration1Complete", "false");
    localStorage.setItem("loggedIn", "false");

    localStorage.setItem("loginEmail", "");
    localStorage.setItem("loginPassword", "");

    localStorage.setItem("username", "");
    localStorage.setItem("userRole", "");
    localStorage.setItem("defaultEditor", "");
    localStorage.setItem("githubUsername", "");

    localStorage.setItem("setupCompleted", "true");
}