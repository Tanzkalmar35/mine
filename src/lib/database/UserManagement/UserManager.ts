/**
 * Manages all database operations related to user management.
 */

import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import {ALERT_TYPE, currentUserId, displayAlert, loggedIn} from "../../AppConfig";
import {auth, githubAuthProvider, googleAuthProvider} from "../DatabaseConfig";
import {handleError, setFormError} from "./UserCreationErrorHandler";

/**
 * Creates a new user using email and password.
 * @param email
 * @param password
 */
export function createNewUserByEmail(email: string, password: string): void {
    if (hasValidSyntax(email, password)) {
        createUserWithEmailAndPassword(auth, email, password).then((result) => {
            const user = result.user;

            currentUserId.set(user.uid);
            loggedIn.set(true);

        }).catch((error) => {
                handleError(error.code, true, email, password);
            }
        )
    } else {
        setFormError("Please make sure both fields are filled in properly.", "both");
        // go on with personalization
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

        currentUserId.set(user.uid);
        loggedIn.set(true);

    }).catch((error) => {
        handleError(error.code, false, email, password);
    });
}

/**
 * Checks if the email and password have a valid syntax.
 * @param email
 * @param password
 */
function hasValidSyntax(email: string, password: string): boolean {
    return !!(email && password);
}

/**
 * Creates a new user using Google authentication.
 */
export function createNewUserByGoogle(): void {
    signInWithPopup(auth, googleAuthProvider).then((result): void => {

        const user = result.user;

        currentUserId.set(user.uid);
        loggedIn.set(true);

    }).catch((error) => {
        // Handle Errors here.
        displayAlert(error.message, ALERT_TYPE.ERROR, 5000);
    });
}

/**
 * Creates a new user using GitHub authentication.
 */
export function createNewUserByGithub(): void {
    signInWithPopup(auth, githubAuthProvider)
        .then((result) => {
            const user = result.user;

            currentUserId.set(user.uid);
            loggedIn.set(true);

            console.log("User ID: " + user.uid)

        }).catch((error) => {
        // Handle Errors here.
        displayAlert(error.message, ALERT_TYPE.ERROR, 5000);
    });
}