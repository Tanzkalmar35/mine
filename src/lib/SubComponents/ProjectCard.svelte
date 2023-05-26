<script lang="ts">
    import {openEditorWithFolder} from "../OsOperations/OpenApplication";
    import {defaultEditor} from "../AppConfig";

    export let projectTitle: string;
    export let projectDescription: string;
    export let projectPath: string;

    function openProject() {
        // TODO: Do not forget to update the currently shown projects
        openEditorWithFolder(projectPath)
    }

</script>

<div class="card w-[20vw] h-[35vh] bg-base-100 text-primary-content m-[1rem]">
    <div class="card-body break-words overflow-hidden">
        <h2 class="card-title text-3xl italic text-white">{projectTitle}</h2>
        <p class="text-lg overflow-hidden text-gray-400">{projectDescription}</p>
        <div class="card-actions justify-end">
            <button class="btn" on:click={openProject}>Open in {$defaultEditor}</button>
        </div>
    </div>
</div>
