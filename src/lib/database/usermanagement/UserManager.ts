/**
 * Manages all database operations related to user management.
 */

import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import {
    ALERT_TYPE,
    displayAlert,
    selectedEditor,
    selectedRole,
    userDetailGitHubName,
    userDetailName
} from "../../AppConfig";
import {auth, githubAuthProvider, googleAuthProvider} from "../DatabaseConfig";
import {handleError, setFormError} from "./UserCreationErrorHandler";
import {writeIntoDatabaseChangeUrl} from "../DatabaseAccessManager";
import {get} from "svelte/store";

/**
 * Creates a new user using email and password.
 * @param email
 * @param password
 */
export function createNewUserByEmail(email: string, password: string): void {
    if (hasValidSyntax(email, password)) {
        createUserWithEmailAndPassword(auth, email, password).then((result) => {
            const user = result.user;

            localStorage.setItem("userId", user.uid);
            localStorage.setItem("registration1Complete", "true");

        }).catch((error): void => {
                handleError(error.code, true, email, password);
            }
        )
    } else {
        setFormError("Please make sure both fields are filled in properly.", "both");
    }

}

/**
 * Logs in an existing user using email and password.
 * @param email
 * @param password
 */
export function loginToExistingUser(email: string, password: string): void {
    signInWithEmailAndPassword(auth, email, password).then((result): void => {
        const user = result.user;

        localStorage.setItem("userId", user.uid);
        localStorage.setItem("registration1Complete", "true");
        localStorage.setItem("loggedIn", "true");

    }).catch((error): void => {
        handleError(error.code, false, email, password);
    });
}


/**
 * Creates a new user using Google authentication.
 */
export function createNewUserByGoogle(): void {
    signInWithPopup(auth, googleAuthProvider).then((result): void => {

        const user = result.user;

        localStorage.setItem("userId", user.uid);
        localStorage.setItem("registration1Complete", "true");
        window.location = location;

    }).catch((error): void => {
        // Handle Errors here.
        displayAlert(error.message, ALERT_TYPE.ERROR, 5000);
    });
}

/**
 * Personalizes the user's account.
 */
export function setUserDetails(): void {

    const username: string = get(userDetailName);
    const editor: string = get(selectedEditor);
    const editorPath: string = localStorage.getItem("defaultEditorPath");
    const userGitHubName: string = get(userDetailGitHubName);
    const role: string = get(selectedRole);

    if (!hasValidSyntax(username) || !hasValidSyntax(userGitHubName)) return;

    let userDetails = {
        "username": username,
        "editor": editor,
        "defaultEditorPath": editorPath,
        "role": role,
        "userGitHubName": userGitHubName,
    }

    localStorage.setItem("name", username);
    localStorage.setItem("defaultEditor", editor);
    localStorage.setItem("role", role);
    localStorage.setItem("githubUsername", userGitHubName);

    writeIntoDatabaseChangeUrl("Users/" + localStorage.getItem("userId") + "/Details/", userDetails, false, "/");

    localStorage.setItem("loggedIn", "true");

    console.log("User details saved to database.");
}

/**
 * Creates a new user using GitHub authentication.
 */
export function createNewUserByGithub(): void {
    signInWithPopup(auth, githubAuthProvider)
        .then((result): void => {
            const user = result.user;

            localStorage.setItem("userId", user.uid);
            localStorage.setItem("registration1Complete", "true");
            window.location = location;

        }).catch((error): void => {
        // Handle Errors here.
        displayAlert(error.message, ALERT_TYPE.ERROR, 5000);
    });
}

/**
 * Checks if the email and password have a valid syntax.
 * @param args the arguments that should be checked.
 * @returns true if the syntax is valid, false otherwise.
 */
function hasValidSyntax(...args: string[]): boolean {
    let isValid: boolean = true;
    args.forEach((arg: string): void => {
        if (!arg) {
            isValid = false;
        }
    })
    return isValid;
}
