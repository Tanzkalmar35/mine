<script lang="ts">
    import CustomTextFieldElement from "../InputElements/CustomTextFieldElement.svelte";

    import CustomInputElement from "../InputElements/CustomInputElement.svelte";
    import {storeProject} from "../../database/DatabaseAccessManager.ts";
    import ChooseFolderButton from "../Buttons/ChooseFolderButton.svelte";

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
            <CustomInputElement bind:textValue={projectTitle} placeHolder="Project Name"/>
            <CustomTextFieldElement bind:textValue={projectDescription} placeHolder="Project Description"/>
            <div class="flex items-center">
                <ChooseFolderButton bind:currentFolderPath={projectPath}/>
                <CustomInputElement bind:disabled={disabled} textValue={projectPath}/>
            </div>
        </div>
        <div class="modal-action">
            <label class="btn" for="my-modal-5" on:click={clearInputs}>Cancel</label>
            <label class="btn" for="my-modal-5" on:click={addProject}>Create</label>
        </div>
    </div>
</div>
