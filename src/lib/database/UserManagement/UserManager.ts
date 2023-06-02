/**
 * Manages all database operations related to user management.
 */

import {createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import {currentUserId, loggedIn} from "../../AppConfig";
import {auth, provider} from "../DatabaseConfig";
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
                handleError(error.code)
            }
        )
    } else {
        setFormError("Please make sure both fields are filled in properly.", "both");
    }
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
    signInWithPopup(auth, provider).then((result): void => {

        const user = result.user;

        currentUserId.set(user.uid);
        loggedIn.set(true);

    }).catch((error) => {

        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

    });
}

/**
 * Creates a new user using Github authentication.
 */
export function createNewUserByGithub(): void {

}