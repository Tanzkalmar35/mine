<script lang="ts">
    import {intellijUltimatePath} from "../OsOperations/OsVariableStore";
    import {openEditorWithFolder} from "../OsOperations/OpenApplication";

    export let projectTitle: string;
    export let projectDescription: string;

    function openProject() {
        // TODO: Do not forget to update the currently shown projects
        openEditorWithFolder("C:/Users/fabia/Desktop/coding/Java")
        console.log("Intellij location: " + $intellijUltimatePath)
        console.log("Opening project: " + projectTitle)
    }

</script>

<div class="card w-[20vw] max-h-[35vh] bg-primary text-primary-content m-[1rem]">
    <div class="card-body break-words overflow-hidden">
        <h2 class="card-title text-3xl">{projectTitle}</h2>
        <p class="text-lg overflow-hidden">{projectDescription}</p>
        <div class="card-actions justify-end">
            <button class="btn" on:click={openProject}>Open</button>
        </div>
    </div>
</div>
