import {writable} from "svelte/store";

export const currentUserId = writable("");

export const defaultEditor = writable("IntellIJ"); //TODO: Ask on log in
