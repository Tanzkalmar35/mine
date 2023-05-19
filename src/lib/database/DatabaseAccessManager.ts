/**
 * Contains all read and write functionality for the database
 */

import { ref, set } from "firebase/database";
import { database } from "./DatabaseConfig";

/*
 * The only function that directly writes into the database.
 * Every write action that needs to be performed needs to call this function
 */
function writeIntoDatabase(path: string, values: Map<string, string>) {
  set(ref(database, path), {
    values
  });
}

export function createNewUser(firstname: string, lastname: string, email: string) {
  const values = new Map();
  
  values.set("firstname", firstname)
  values.set("lastname", lastname)
  values.set("email", email)

  writeIntoDatabase("Users/", values)
}

