import {readable, writable} from "svelte/store";

export const featuredEditors = readable(["IntellIJ Idea UE", "Visual Studio Code"])
export const featuredRoles = readable(["Developer", "Tester", "Manager"])

export const selectedEditor = writable("");
export const selectedRole = writable("");

export const userDetailName = writable("");
export const userDetailGitHubName = writable("");

export const defaultEditorPath = writable("");

// TODO: editor path currently gets ignored

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
