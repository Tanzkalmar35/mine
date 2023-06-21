<script lang="ts">
    import Dashboard from "./lib/appcomponents/Dashboard.svelte";
    import Settings from "./lib/appcomponents/Settings.svelte";
    import HomePage from "./lib/appcomponents/HomePage.svelte";
    import LoginPage from "./lib/appcomponents/login/LoginPage.svelte";
    import {onMount} from "svelte";

    let currentUrl: string = window.location.pathname;

    onMount(function () {
        //setup();
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
        {#if currentUrl === "/Dashboard"}
            <Dashboard/>
        {/if}
        {#if currentUrl === "/Settings"}
            <Settings/>
        {/if}
    </div>
</main>