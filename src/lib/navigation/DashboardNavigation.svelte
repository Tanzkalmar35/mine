<script lang="ts">
    import HomePageNavbar from "./HomePageNavbar.svelte";
    import AddProjectButton from "../uielements/buttons/AddProjectButton.svelte";
    import AppLogo from "../uielements/img/AppLogo.svelte";
</script>

<div class="h-fit w-[95vw] py-[1vh] mt-[2vh] flex items-center justify-center rounded-[.5rem] bg-primary">
    <div class="absolute scale-50 left-[-5rem]">
        <AppLogo/>
    </div>
    <div class="justify-center">
        <HomePageNavbar/>
    </div>
    <div class="absolute right-[5vw]">
        <AddProjectButton/>
    </div>
</div>
