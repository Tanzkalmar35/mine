<script lang="ts">
    import Navbar from "./lib/SubComponents/Navbar.svelte";
    import Dashboard from "./lib/AppComponents/Dashboard.svelte";
    import Settings from "./lib/AppComponents/Settings.svelte";
    import HomePage from "./lib/AppComponents/HomePage.svelte";

    const currentUrl = window.location.pathname;

</script>

<main class="w-screen h-screen flex justify-center text-black" data-theme="mytheme" id="mainapp">
    <div class="absolute z-10">
        <Navbar/>
    </div>
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