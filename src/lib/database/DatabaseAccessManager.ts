/**
 * Contains all read and write functionality for the database
 */

import {onValue, push, ref, set} from "firebase/database";
import {database} from "./DatabaseConfig";

/*
 * Type definitions
 */
type Project = {
    name: string,
    description: string,
    path: string,
}

type User = {
    firstname: string,
    lastname: string,
    email: string,
}

/*
 * The only function that directly writes into the database.
 * Every write action that needs to be performed needs to call this function
 */
function writeIntoDatabase(path: string, values: Project | User) {
    const dbRef = ref(database, path);
    const newRef = push(dbRef);

    set(newRef, values);
}

/*
 * Creates a new user. 
 */
export function createNewUser(firstname: string, lastname: string, email: string): void {
    const values: User = {
        firstname,
        lastname,
        email,
    }
    writeIntoDatabase("Users/", values)
}

/*
 * Stores a new project in the database.
 * TODO: automatically make the Project a child of the currently logged in user.
 */

export function storeProject(name: string, description: string, path: string): void {
    const values: Project = {
        name,
        description,
        path
    }
    writeIntoDatabase("Users/Projects/", values)
}

export function getProjectData(): Promise<Array<{ name: string, description: string, path: string }>> {
    return new Promise((resolve) => {

        const projectData: Array<any> = [];

        onValue(ref(database, "Users/Projects/"), (snapshot) => {

            const data = snapshot.val();
            const objectsArray: Array<any> = Object.values(data);
            const projects = objectsArray.map(({description, name, path}) => ({
                name: name,
                description: description,
                path: path,
            }));

            projectData.push(...projects);
            resolve(projectData);
        });
    });
}

