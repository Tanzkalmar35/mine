import {invoke} from '@tauri-apps/api/tauri';

export async function openIntellijWithFolder(folderPath) {
    try {
        await invoke('open_intellij_with_folder', {
            args: {folder_path: folderPath}
        });
    } catch (error) {
        console.error('Error while calling open_intellij_with_folder:', error);
    }
}
