<script lang="ts">

    import CustomTextFieldElement from "../InputElements/CustomTextFieldElement.svelte";
    import CustomInputElement from "../InputElements/CustomInputElement.svelte";
    import CustomFolderInput from "../InputElements/CustomFolderInput.svelte";
    import { storeProject } from "../../database/DatabaseAccessManager.ts"; 
  

    let projectTitle: string;
    let projectDescription: string;

    function addProject(): void {
      storeProject(projectTitle, projectDescription)
    }
</script>

<input class="modal-toggle" id="my-modal-5" type="checkbox"/>
<div class="modal">
    <div class="modal-box w-11/12 max-w-5xl">
        <h3 class="font-bold text-lg mb-7">Add a project</h3>
        <div class="flex flex-col">
            <CustomInputElement bind:textValue={projectTitle} placeHolder="Project Name"/>
            <CustomTextFieldElement bind:textValue={projectDescription} placeHolder="Project Description"/>
            <CustomFolderInput label="Choose project location"/>
        </div>
        <div class="modal-action">
            <label class="btn" for="my-modal-5">Cancel</label>
            <label class="btn" for="my-modal-5" on:click={addProject}>Create</label>
        </div>
    </div>
</div>
