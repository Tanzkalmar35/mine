import {invoke} from '@tauri-apps/api/tauri';
import {intellijUltimatePath} from "./OsVariableStore";
import {get} from "svelte/store";

/**
 * Opens the given file in the editor
 * @param folderPath the path to the folder to open
 * @param editor the editor to open the folder in
 */
export async function openFolderInEditor(folderPath, editor): Promise<void> {
    try {
        await invoke('open_editor_with_folder', {
            args: {folder_path: folderPath, editor_path: editor}
        });
    } catch (error) {
        console.error('Error while calling open_editor_with_folder:', error);
    }
}

/**
 * Checks if the editor path is available via environment variables
 * TODO: intellij path is never not available
 * @param editor the editor to check for
 */
export function checkEditorPath(editor: string): boolean {
    if (editor === "IntellIJ Idea Ultimate Edition") {
        return !!get(intellijUltimatePath);
    } else if (editor === "Visual Studio Code") {
        console.log(!!process.env.vscode + " ENV")
        return !!process.env.vscode;
    }
}