/**
 * Sets the app up. This includes preparing the localStorage.
 */
export function setup(): void {
    localStorage.setItem("userId", "");

    localStorage.setItem("registration1Complete", "true");
    localStorage.setItem("loggedIn", "true");

    localStorage.setItem("loginEmail", "");
    localStorage.setItem("loginPassword", "");
    localStorage.setItem("username", "");
    localStorage.setItem("userRole", "");
    localStorage.setItem("defaultEditor", "");

    localStorage.setItem("setupCompleted", "true");
}