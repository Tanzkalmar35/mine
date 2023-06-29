/**
 * Manages all database operations related to user management.
 */

import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import {ALERT_TYPE, displayAlert} from "../../AppConfig";
import {auth, githubAuthProvider, googleAuthProvider} from "../DatabaseConfig";
import {handleError, setFormError} from "./UserCreationErrorHandler";
import {writeIntoDatabase} from "../DatabaseAccessManager";

type UserDetails = {
    name: string,
    role: string,
    editor: string,
    //editorPath: string,
    githubUser: string,
}

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
 * Personalizes the user's account.
 *
 * @param user the user's name.
 * @param role the user's role / job title.
 * @param editor the user's preferred editor.
 * @param githubUser the user's GitHub username.
 */
export function setUserDetails(user: string, role: string, editor: string, githubUser: string): void {
    if (!hasValidSyntax(user) || !hasValidSyntax(githubUser)) return;

    let userDetails: UserDetails = {
        name: user,
        editor: editor,
        //editorPath: getDefaultEditorPath(),
        role: role,
        githubUser: githubUser,
    };

    localStorage.setItem("name", user);
    localStorage.setItem("defaultEditor", editor);
    localStorage.setItem("role", role);
    localStorage.setItem("githubUsername", githubUser);

    localStorage.setItem("loggedIn", "true");
    window.location.pathname = "/";

    writeIntoDatabase("Users/" + localStorage.getItem("userId") + "/Details/", userDetails, false);
    console.log("User details saved to database.");
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
