<script lang="ts">
    import {onMount} from "svelte";
    import ProjectCard from "../subcomponents/ProjectCard.svelte";
    import AddProjectModal from "../uielements/modals/AddProjectModal.svelte";
    import {getProjectData} from "../database/DatabaseAccessManager.ts";
    import DashboardNavigation from "../subcomponents/navigation/DashboardNavigation.svelte";
    import Alert from "../uielements/alerts/Alert.svelte";

    let projectData = [];

    onMount(async () => {
        projectData = await getProjectData();
    });

    //TODO: Only load as many as screen can fit (8) and add a load more button at the bottom that also increases the page's size (App.svelte)

</script>

<div class="flex text-5xl justify-center" id="Dashboard">
    <Alert/>
    <div class="absolute z-10">
        <DashboardNavigation/>
    </div>
    <div class="flex flex-wrap mt-[12vh] justify-center">
        {#if projectData.length === 0}
            <div class="text-3xl text-white">
                <p>You have no projects yet. Click the "Add Project" to add one.</p>
            </div>
        {/if}
        {#each projectData as project}
            <ProjectCard projectTitle={project.name} projectDescription={project.description}
                         projectPath={project.path}/>
        {/each}
    </div>
    <AddProjectModal/>
</div>
