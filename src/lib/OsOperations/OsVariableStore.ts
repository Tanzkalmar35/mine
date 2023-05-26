import {writable} from "svelte/store";

function convertPath(input: string): string {
    const components: string[] = input.split(/\\/);
    return components
        .map((component: string) => component.replace(/\\/g, '/'))
        .map((component: string) => component.replace(/;/g, ''))
        .join('/');
}

// The path to the IntelliJ IDEA ultimate executable
export const intellijUltimatePath = writable(convertPath(process.env.intellij + "/idea64.exe"));
