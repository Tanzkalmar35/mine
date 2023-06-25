import {invoke} from '@tauri-apps/api/tauri';
import {intellijUltimatePath} from "./OsVariableStore";
import {get} from "svelte/store";

export async function openFolderInEditor(folderPath): Promise<void> {
    try {
        await invoke('open_editor_with_folder', {
            args: {folder_path: folderPath, editor_path: get(intellijUltimatePath)}
        });
    } catch (error) {
        console.error('Error while calling open_editor_with_folder:', error);
    }
}

export function checkEditorPath(editor: string): boolean {
    if (editor === "IntellIJ Idea Ultimate Edition") {
        return !!get(intellijUltimatePath);
    } else if (editor === "Visual Studio Code") {
        console.log(!!process.env.vscode + " ENV")
        return !!process.env.vscode;
    }
}

export function toggleChooseEditorPath(): void {
    const selectPathDiv: HTMLElement = document.getElementById("manuallyChooseEditorPath");
    const errorMessage: HTMLElement = document.getElementById("userEditorsErrorText");

    errorMessage.classList.remove("hidden");
    selectPathDiv.classList.remove("hidden");
}
