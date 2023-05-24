/**
 * Contains all read and write functionality for the database
 */

import { ref, set, push } from "firebase/database";
import { database } from "./DatabaseConfig";

/*
 * Type definitions
 */
type Project = {
  name: string,
  description: string,
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
 * TODO: add functionality for the project (path).
 * TODO: automatically make the Project a child of the currently logged in user.
 */

export function storeProject(name: string, description: string): void {
  const values: Project = {
    name,
   description
  }
  writeIntoDatabase("Users/Projects/", values)
}

export function getProjectNames(): Array<string> {
  // TODO: getting all project names and returning them as a Array
}

export function getProjectDescriptions(): Array<string> {
  // TODO: getting all project descriptions and returning them as an array
}


