/**
 * Contains all read and write functionality for the database
 */

// Internal imports
import {database} from "./DatabaseConfig";
import {ALERT_TYPE, displayAlert} from "../AppConfig";

// Firebase imports
import {onValue, push, ref, set} from "firebase/database";

/*
 * Type definitions
 */
type Project = {
    name: string,
    description: string,
    path: string,
}

/*
 * The only function that directly writes into the database.
 * Every write action that needs to be performed needs to call this function
 */
function writeIntoDatabase(path: string, values: Project) {
    const dbRef = ref(database, path);
    const newRef = push(dbRef);

    set(newRef, values).then(() => {
        displayAlert("Successfully added the project.", ALERT_TYPE.SUCCESS, 5000);
    }).catch(() => {
        displayAlert("Oops! Something went wrong. Please try again.", ALERT_TYPE.ERROR, 5000);
    });
}

/**
 * Stores a new project in the database.
 */
export function storeProject(name: string, description: string, path: string): void {
    const values: Project = {
        name,
        description,
        path
    }
    writeIntoDatabase("Users/" + localStorage.getItem("userId") + "/Projects/", values)
}

/**
 * Returns all project's childs stored in the database.
 */
export function getProjectData(): Promise<Array<{ name: string, description: string, path: string }>> {

    const projectData: Array<any> = [];

    return new Promise((resolve): void => {

        onValue(ref(database, "Users/" + localStorage.getItem("userId") + "/Projects/"), (snapshot): void => {

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

