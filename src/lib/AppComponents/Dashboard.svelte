<script lang="ts">
    import { onMount } from "svelte";
    import ProjectCard from "../SubComponents/ProjectCard.svelte";
    import AddButton from "../UiElements/Button/AddButton.svelte";
    import AddProjectModal from "../UiElements/Modals/AddProjectModal.svelte";
    import { getProjectData } from "../database/DatabaseAccessManager.ts"; 
    
    let projectData = [];

    onMount(async () => {
      projectData = await getProjectData();
    });
</script>

<div class="flex text-5xl" id="Dashboard">     
  <div>
    {#each projectData as project}
      <ProjectCard projectTitle={project.name} projectDescription={project.description} />
    {/each}
  </div>
  <div class="absolute right-[5vw] mt-7">
      <AddButton/>
  </div>
  <AddProjectModal/>
</div>
