<script lang="ts">
    import Dashboard from "./lib/appcomponents/Dashboard.svelte";
    import Settings from "./lib/appcomponents/Settings.svelte";
    import HomePage from "./lib/appcomponents/HomePage.svelte";
    import LoginPage from "./lib/appcomponents/login/LoginPage.svelte";
    import {onMount} from "svelte";
    import {setup} from "./lib/osoperations/Setup";

    let currentUrl: string = window.location.pathname;

    onMount(async () => {
        if (localStorage.getItem("setupCompleted") === "true") setup()

        async function fetchGithubStats(username) {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            // Display the user's GitHub stats, e.g., total commits.
            console.log(data);
        }

        // Call the function with a sample username
        await fetchGithubStats('Tanzkalmar35');
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