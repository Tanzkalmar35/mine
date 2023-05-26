<script lang="ts">
    import {open} from '@tauri-apps/api/dialog';

    export let currentFolderPath: string;

    async function setFolderPath() {
        try {
            const folderPath = await open({
                directory: true,
                multiple: false,
            });
            console.log('Selected folder path:', folderPath);
            currentFolderPath = folderPath + "";
        } catch (error) {
            console.error('Error selecting folder:', error);
        }
    }

</script>

<button class="btn flex items-center w-fit h-fit px-5 py-3 border-1 border-[var(--tw-border-opacity)] rounded-[1vh]
              cursor-pointer bg-transparent gap-2 hover:text-white color-inherit m-7 text-lg"
        on:click={setFolderPath}>
    Select Folder
</button>
