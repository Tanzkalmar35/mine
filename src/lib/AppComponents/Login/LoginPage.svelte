<script context="module" lang="ts">
    import LoginHeroImage from "../../UiElements/Img/LoginHeroImage.svelte";
    import Alert from "../../UiElements/Alerts/Alert.svelte";
    import RegistrationStep1 from "./RegistrationStep1.svelte";
</script>
<script>
    import {loggedIn, registrationComplete} from "../../AppConfig";
    import RegistrationStep2 from "./RegistrationStep2.svelte";
</script>

<div class="flex justify-center text-white">
    {window.location.pathname}
    <div class="w-screen bg-accent text-gray-900 flex justify-center">
        <div
                class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"
        >

            {#if window.location.pathname === "/registration"}
                <RegistrationStep1/>
            {:else if window.location.pathname === "/registration?Step=2"}
                <RegistrationStep2/>
            {/if}

            <LoginHeroImage/>
        </div>
        <Alert/>
    </div>
</div>
