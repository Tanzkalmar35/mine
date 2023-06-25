<script context="module" lang="ts">
    import LoginHeroImage from "../../uielements/img/LoginHeroImage.svelte";
    import Alert from "../../uielements/alerts/Alert.svelte";
    import RegistrationStep1 from "./RegistrationStep1.svelte";
    import RegistrationStep2 from "./RegistrationStep2.svelte";

    let registration1Complete = false;

    $: if (localStorage.getItem("registration1Complete") === "true") {
        registration1Complete = true;
    }

</script>

<div class="flex justify-center text-white">
    <div class="w-screen bg-accent text-gray-900 flex justify-center">
        <div
                class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"
        >
            {#if !registration1Complete}
                <RegistrationStep1/>
            {:else}
                <RegistrationStep2/>
            {/if}
            <LoginHeroImage/>
        </div>
        <Alert/>
    </div>
</div>
