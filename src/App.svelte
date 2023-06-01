<script lang="ts">
    import Dashboard from "./lib/AppComponents/Dashboard.svelte";
    import Settings from "./lib/AppComponents/Settings.svelte";
    import HomePage from "./lib/AppComponents/HomePage.svelte";
    import LoginPage from "./lib/AppComponents/LoginPage.svelte";
    import {loggedIn, registerComplete} from "./lib/AppConfig";
    import PersonalizationProcessPage from "./lib/AppComponents/PersonalizationProcessPage.svelte";

    const currentUrl = window.location.pathname;

</script>

<main class="w-screen h-screen flex justify-center text-black bg-accent">
    <div class="w-full h-full absolute z-1" id="content">
        {#if !$loggedIn}
            <LoginPage/>
        {/if}
        {#if $loggedIn && !$registerComplete}
            <PersonalizationProcessPage/>
        {/if}
        {#if $loggedIn && $registerComplete}
            {#if currentUrl === "/"}
                <HomePage/>
            {/if}
            {#if currentUrl === "/Dashboard"}
                <Dashboard/>
            {/if}
            {#if currentUrl === "/Settings"}
                <Settings/>
            {/if}
        {/if}
    </div>
</main>