<script lang="ts">
    import {onMount} from "svelte";
    import ProjectCard from "../SubComponents/ProjectCard.svelte";
    import AddButton from "../UiElements/Button/AddButton.svelte";
    import AddProjectModal from "../UiElements/Modals/AddProjectModal.svelte";
    import {getProjectData} from "../database/DatabaseAccessManager.ts";

    let projectData = [];

    onMount(async () => {
        projectData = await getProjectData();
    });

    let disableScroll = false;

    $: {
        if (disableScroll) {
            window.addEventListener('scroll', preventScroll);
        } else {
            window.removeEventListener('scroll', preventScroll);
        }
    }

    function preventScroll(e) {
        e.preventDefault();
    }

</script>

<div class="flex text-5xl" id="Dashboard">
    <div class="flex flex-wrap mt-[12vh] justify-center">
        {#if projectData.length === 0}
            <div class="text-3xl text-white">
                <p>You have no projects yet. Click the "Add Project" to add one.</p>
            </div>
        {/if}
        {#each projectData as project}
            <ProjectCard projectTitle={project.name} projectDescription={project.description}/>
        {/each}
    </div>
    <div class="absolute right-[5vw] mt-[4vh]">
        <AddButton/>
    </div>
    <AddProjectModal/>
</div>
