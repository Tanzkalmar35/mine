<script lang="ts">
    import Dashboard from "./lib/AppComponents/Dashboard.svelte";
    import Settings from "./lib/AppComponents/Settings.svelte";
    import HomePage from "./lib/AppComponents/HomePage.svelte";
    import LoginPage from "./lib/AppComponents/LoginPage.svelte";

    const currentUrl = window.location.pathname;
    let loggedIn = false;

</script>

<main class="w-screen h-screen flex justify-center text-black bg-accent">
    <div class="w-full h-full absolute z-1" id="content">
        {#if loggedIn}
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
        {#if !loggedIn}
            <LoginPage/>
        {/if}
    </div>
</main>