<script lang="ts">
    import GoogleLogo from "../img/GoogleLogo.svelte";
    import GithubLogo from "../img/GithubLogo.svelte";
    import {createNewUserByGithub, createNewUserByGoogle} from "../../database/usermanagement/UserManager";

    export let projectLabel: string;
    export let company: "google" | "github";

    function handleThirdPartyAuth() {
        if (company === "google") {
            createNewUserByGoogle();
        } else if (company === "github") {
            createNewUserByGithub();
        }
    }

</script>

<button
        class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
        on:click={handleThirdPartyAuth}
>
    <div class="bg-white p-2 rounded-full">
        {#if company === "google"}
            <GoogleLogo/>
        {/if}
        {#if company === "github"}
            <GithubLogo/>
        {/if}
    </div>
    <span class="ml-4">
        {projectLabel}
    </span>
</button>