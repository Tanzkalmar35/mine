import {ALERT_TYPE, displayAlert} from "../../AppConfig";
import {loginToExistingUser} from "./UserManager";

let errorElement: HTMLElement;
let errorTextElement: HTMLElement;

/**
 * Handles errors that occur when creating a user.
 * @param errorCode
 * @param login
 * @param email
 * @param password
 */

export function handleError(errorCode: string, login: boolean, email: string, password: string): void {
    console.log(errorCode)
    switch (errorCode) {
        case "auth/invalid-email":
            setFormError("Invalid email address", "email")
            break;
        case "auth/email-already-in-use":
            !login ? setFormError("This email is already in use.", "email") : "";
            loginToExistingUser(email, password);
            break;
        case "auth/wrong-password":
            setFormError("The password for the existing account is wrong", "password");
            break;
        case "auth/invalid-password":
            setFormError("Invalid password", "password");
            break;
        case "auth/weak-password":
            setFormError("Password must be at least 6 characters long.", "password");
            break;
        case "auth/internal-error":
            displayAlert("An internal error occurred. Please try again later.", ALERT_TYPE.ERROR, 5000);
            break;
        case "auth/session-cookie-expired":
            displayAlert("Your session has expired. Try restarting your app.", ALERT_TYPE.ERROR, 5000);
            break;
        default:
            displayAlert("Oops! Something went wrong. Please try again.", ALERT_TYPE.ERROR, 5000);
            break;
    }
}

/**
 * Sets the error message and displays it in the login/signup form.
 * @param message
 * @param element
 */
export function setFormError(message: string, element: "email" | "password" | "both"): void {
    if (element === "email") {
        errorElement = document.getElementById("loginEmailInput");
        errorTextElement = document.getElementById("loginEmailErrorText");

        errorElement.classList.add("border-red-500");

        errorTextElement.innerHTML = message;
        errorTextElement.classList.remove("hidden");

    } else if (element === "password") {
        errorElement = document.getElementById("loginPasswordInput");
        errorTextElement = document.getElementById("loginPasswordErrorText");

        errorElement.classList.add("border-red-500");

        errorTextElement.innerHTML = message;
        errorTextElement.classList.remove("hidden");

    } else {
        setFormError(message, "email");
        setFormError(message, "password");
    }
}
