<script lang="ts">
    import {onMount} from "svelte";
    import ProjectCard from "../SubComponents/ProjectCard.svelte";
    import AddProjectModal from "../UiElements/Modals/AddProjectModal.svelte";
    import {getProjectData} from "../database/DatabaseAccessManager.ts";
    import DashboardNavigation from "../SubComponents/Navigation/DashboardNavigation.svelte";
    import ErrorAlert from "../UiElements/Alerts/Alert.svelte";

    let projectData = [];

    onMount(async () => {
        projectData = await getProjectData();
    });

    let projectNotCreatedError = "Something went wrong while storing your project. Please try again."

    //TODO: Only load as many as screen can fit (8) and add a load more button at the bottom that also increases the page's size (App.svelte)

</script>

<div class="flex text-5xl justify-center" id="Dashboard">
    <ErrorAlert/>
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
