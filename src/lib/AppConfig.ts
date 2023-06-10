import {readable, writable} from "svelte/store";

// Static configs

export const featuredEditors = readable(["intellij", "vscode"])
export const featuredRoles = readable(["developer", "tester", "manager", "student"])

// Current user configs

export const currentPage = writable("");

export const currentUserId = writable("");

// Login/Signup process Management

export const loggedIn = writable(false);

export const registrationStatus = writable(1);

// Login page state management

export const loginEmail = writable("");

export const loginPassword = writable("");

export const username = writable("");

export const userRole = writable("");

export const defaultEditor = writable("");

// Alerts

export const ALERT_TYPE = {
    ERROR: "ERROR",
    WARNING: "WARNING",
    INFO: "INFO",
    SUCCESS: "SUCCESS"
}

export const alertMessage = writable("");
export const alertType = writable("");

export const displayAlert = (message: string, type: string = ALERT_TYPE.INFO, resetTime: number) => {

    alertMessage.set(message);
    alertType.set(type);

    console.log("Alert Type: " + type);

    if (resetTime) {
        setTimeout(() => {
            alertMessage.set("");
        }, resetTime)
    }
}
