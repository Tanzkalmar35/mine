<script lang="ts">
    import Dashboard from "./lib/AppComponents/Dashboard.svelte";
    import Settings from "./lib/AppComponents/Settings.svelte";
    import HomePage from "./lib/AppComponents/HomePage.svelte";

    const currentUrl = window.location.pathname;

</script>

<main class="w-screen h-screen flex justify-center text-black bg-accent" id="mainapp">
    <div class="w-full h-full absolute z-1" id="content">
        {#if currentUrl === "/Home"}
            <HomePage/>
        {/if}
        {#if currentUrl === "/Dashboard"}
            <Dashboard/>
        {/if}
        {#if currentUrl === "/Settings"}
            <Settings/>
        {/if}
    </div>
</main>