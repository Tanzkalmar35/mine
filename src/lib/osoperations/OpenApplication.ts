import {invoke} from '@tauri-apps/api/tauri';
import {intellijUltimatePath, vsCodePath} from "./OsVariableStore";
import {get} from "svelte/store";

/**
 * Opens the given file in the editor
 * @param folderPath the path to the folder to open
 * @param editorPath the editor to open the folder in
 */
export async function openFolderInEditor(folderPath: string, editorPath: string): Promise<void> {
    try {
        await invoke('open_editor_with_folder', {
            args: {folder_path: folderPath, editor_path: editorPath}
        });
    } catch (error) {
        console.error('Error while calling open_editor_with_folder:', error);
    }
}

/**
 * Checks if the editor path is available via environment variables
 * @param editor the editor to check for
 */
export function checkEditorPath(editor: string): boolean {
    if (editor === "IntellIJ Idea UE") {
        if (validEnvironmentVariable(editor)) {
            localStorage.setItem("defaultEditorPath", get(intellijUltimatePath));
            return true;
        } else return false;
    } else if (editor === "Visual Studio Code") {
        if (validEnvironmentVariable(editor)) {
            localStorage.setItem("defaultEditorPath", get(vsCodePath));
            return true;
        } else return false;
    }
}

function validEnvironmentVariable(editor: string): boolean {
    if (editor === "IntellIJ Idea UE") {
        return !get(intellijUltimatePath).startsWith("undefined")
            && !get(intellijUltimatePath).startsWith("null")
            && !get(intellijUltimatePath).startsWith("/idea64.exe");
    } else if (editor === "Visual Studio Code") {
        return !get(vsCodePath).startsWith("undefined")
            && !get(vsCodePath).startsWith("null")
            && !get(vsCodePath).startsWith("/code.exe");
    } else return false
}
