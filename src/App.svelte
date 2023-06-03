<script lang="ts">
    import Dashboard from "./lib/AppComponents/Dashboard.svelte";
    import Settings from "./lib/AppComponents/Settings.svelte";
    import HomePage from "./lib/AppComponents/HomePage.svelte";
    import LoginPage from "./lib/AppComponents/LoginPage.svelte";
    import {currentPage, loggedIn, registerComplete} from "./lib/AppConfig";
    import PersonalizationProcessPage from "./lib/AppComponents/PersonalizationProcessPage.svelte";

    $: currentPage;
    {
        if (!$loggedIn) currentPage.set("login");
        if (!$registerComplete && $loggedIn) currentPage.set("personalization");
        if ($registerComplete && $loggedIn) currentPage.set("home");
    }
</script>

<main class="w-screen h-screen flex justify-center text-black bg-accent">
    <div class="w-full h-full absolute z-1" id="content">
        {#if $currentPage === "login"}
            <LoginPage/>
        {/if}
        {#if $currentPage === "personalization"}
            <PersonalizationProcessPage/>
        {/if}
        {#if $currentPage === "home"}
            <HomePage/>
        {/if}
        {#if $currentPage === "dashboard"}
            <Dashboard/>
        {/if}
        {#if $currentPage === "settings"}
            <Settings/>
        {/if}
    </div>
</main>