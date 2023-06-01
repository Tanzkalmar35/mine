import {writable} from "svelte/store";

export const currentUserId = writable("");

export const defaultEditor = writable("IntellIJ"); //TODO: Ask on log in

// User Management
export const loggedIn = writable(false);
export const registerComplete = writable(false);

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
