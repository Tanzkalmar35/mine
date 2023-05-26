import {invoke} from '@tauri-apps/api/tauri';
import {intellijUltimatePath} from "./OsVariableStore";
import {get} from "svelte/store";

export async function openEditorWithFolder(folderPath): Promise<void> {
    try {
        await invoke('open_editor_with_folder', {
            args: {folder_path: folderPath, editor_path: get(intellijUltimatePath)}
        });
    } catch (error) {
        console.error('Error while calling open_editor_with_folder:', error);
    }
}
