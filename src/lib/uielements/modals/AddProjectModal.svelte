<script lang="ts">
    import DarkModeTextField from "../inputelements/darkmode/DarkModeTextField.svelte";
    import DarkModeTextInput from "../inputelements/darkmode/DarkModeTextInput.svelte";
    import {storeProject} from "../../database/DatabaseAccessManager.ts";
    import ChooseFolderButton from "../buttons/OpenFileExplorerButton.svelte";

    let disabled = true;

    let projectTitle: string;
    let projectDescription: string;
    let projectPath: string = "";

    function addProject(): void {
        storeProject(projectTitle, projectDescription, projectPath)
        clearInputs();
    }

    function clearInputs(): void {
        projectTitle = "";
        projectDescription = "";
        projectPath = "";

    }

</script>

<input class="modal-toggle" id="my-modal-5" type="checkbox"/>
<div class="modal">
    <div class="modal-box w-11/12 max-w-5xl text-white">
        <h3 class="font-bold text-lg mb-7">Add a project</h3>
        <div class="flex flex-col">
            <DarkModeTextInput bind:textValue={projectTitle} placeHolder="Project Name"/>
            <DarkModeTextField bind:textValue={projectDescription} placeHolder="Project Description"/>
            <div class="flex items-center">
                <ChooseFolderButton bind:currentFolderPath={projectPath} type="Folder"/>
                <DarkModeTextInput bind:disabled={disabled} textValue={projectPath}/>
            </div>
        </div>
        <div class="modal-action">
            <label class="btn" for="my-modal-5" on:click={clearInputs}>Cancel</label>
            <label class="btn" for="my-modal-5" on:click={addProject}>Create</label>
        </div>
    </div>
</div>
