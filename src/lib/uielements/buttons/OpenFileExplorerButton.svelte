<script lang="ts">
    import {open} from '@tauri-apps/api/dialog';

    export let currentPath: string = "";
    export let type: "Folder" | "File";

    async function setPath() {
        try {
            const path = await open({
                directory: type === "Folder",
                multiple: false,
            });
            console.log('Selected folder path:', path);
            currentPath = path + "";
        } catch (error) {
            console.error('Error selecting %d: %d', type, error);
        }
    }

</script>

<button class="btn flex items-center w-fit h-fit px-5 py-3 border-1 border-[var(--tw-border-opacity)] rounded-[1vh]
              cursor-pointer bg-transparent gap-2 hover:text-white color-inherit mb-3 text-lg"
        on:click={setPath}>
    Select {type}
</button>
