/**
 * Contains all read and write functionality for the database
 */

// Internal imports
import {database} from "./DatabaseConfig";
import {ALERT_TYPE, displayAlert} from "../AppConfig";

// Firebase imports
import {onValue, push, ref, set} from "firebase/database";

/**
 * Does the actual writing into the database.
 */
export function writeIntoDatabase(path: string, values, withId: boolean): void {
    let dbRef = ref(database, path);
    if (withId) dbRef = push(dbRef);

    console.log("Storing data: " + values);

    set(dbRef, values).then((): void => {
        displayAlert("Successfully stored.", ALERT_TYPE.SUCCESS, 5000);
    }).catch((): void => {
        displayAlert("Oops! Something went wrong. Please try again.", ALERT_TYPE.ERROR, 5000);
    });
}

/**
 * The exact same function as writeIntoDatabase, but with a redirect to a new url.
 */
export function writeIntoDatabaseChangeUrl(path: string, values, withId: boolean, url: string): void {

    let dbRef = ref(database, path);
    if (withId) dbRef = push(dbRef);

    set(dbRef, values).then((): void => {
        displayAlert("Success.", ALERT_TYPE.SUCCESS, 5000);
        window.location.pathname = url;
    }).catch((): void => {
        displayAlert("Oops! Something went wrong. Please try again.", ALERT_TYPE.ERROR, 5000);
    });
}

/**
 * Stores a new project in the database.
 */
export function storeProject(name: string, description: string, path: string): void {
    const dbPath: string = "Users/" + localStorage.getItem("userId") + "/Projects/";
    const values = {
        "name": name,
        "description": description,
        "path": path,
    }
    writeIntoDatabase(dbPath, values, true);
    displayAlert("Success.", ALERT_TYPE.SUCCESS, 5000);
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

