<script lang="ts">
    import ProjectCard from "../SubComponents/ProjectCard.svelte";
    import AddButton from "../UiElements/AddButton.svelte";
    import AddProjectModal from "../Modals/AddProjectModal.svelte";
</script>

<div class="flex text-5xl" id="Dashboard">
    <div>
        <ProjectCard projectTitle="mine"/>
    </div>
    <div class="absolute right-[5vw] mt-7">
        <AddButton/>
    </div>
    <AddProjectModal/>
</div>
