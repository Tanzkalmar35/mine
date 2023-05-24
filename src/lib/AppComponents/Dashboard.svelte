<script lang="ts">
    import ProjectCard from "../SubComponents/ProjectCard.svelte";
    import AddButton from "../UiElements/Button/AddButton.svelte";
    import AddProjectModal from "../UiElements/Modals/AddProjectModal.svelte";
    import { getProjectNames, getProjectDescription } from "../database/DatabaseAccessManager.ts"; 
  

</script>

<div class="flex text-5xl" id="Dashboard">
    <div>
    {#each getProjectNames() as projectName}
      {#each getProjectDescription() as projectDescription}
         <ProjectCard projectTitle=projectName projcetDescription=projcetDescription/>
      {/each}
    {/each}
    </div>
    <div class="absolute right-[5vw] mt-7">
        <AddButton/>
    </div>
    <AddProjectModal/>
</div>
