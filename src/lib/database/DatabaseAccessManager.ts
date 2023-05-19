/**
 * Contains all read and write functionality for the database
 */

import { ref, set, push } from "firebase/database";
import { database } from "./DatabaseConfig";

/*
 * The only function that directly writes into the database.
 * Every write action that needs to be performed needs to call this function
 */
function writeIntoDatabase(path: string, values: Map<string, string>) {
  const dbRef = ref(database, path);
  const newRef = push(dbRef);
  
  set(newRef, values);

}

export function createNewUser(firstname: string, lastname: string, email: string) {
  const values = new Map();
  
  values.set("firstname", firstname)
  values.set("lastname", lastname)
  values.set("email", email)

  writeIntoDatabase("Users/", values)
}

export function storeProject(name: string, description: string) {
  const values = {
    projectname: name,
    projectdescription: description
  }
  writeIntoDatabase("Users/Projects/", values)
}

