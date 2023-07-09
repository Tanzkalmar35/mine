<script lang="ts">
    import Dashboard from "./lib/appcomponents/Dashboard.svelte";
    import Settings from "./lib/appcomponents/Settings.svelte";
    import HomePage from "./lib/appcomponents/homepage/HomePage.svelte";
    import LoginPage from "./lib/appcomponents/login/LoginPage.svelte";
    import {onMount} from "svelte";
    import {setup} from "./lib/Setup";
    import {startRecordingScreenTime} from "./lib/appcomponents/homepage/CardDataUtils";

    let currentUrl: string = window.location.pathname;

    onMount(async () => {
        if (!localStorage.getItem("setupCompleted")) setup()
        setInterval(startRecordingScreenTime, 60000)
    });
</script>

<main class="w-screen h-screen flex justify-center text-black bg-accent">
    <div class="w-full h-full absolute z-1" id="content">
        {#if currentUrl === "/"}
            <HomePage/>
        {/if}
        {#if currentUrl === "/registration"}
            <LoginPage/>
        {/if}
        {#if currentUrl === "/dashboard"}
            <Dashboard/>
        {/if}
        {#if currentUrl === "/settings"}
            <Settings/>
        {/if}
    </div>
</main>