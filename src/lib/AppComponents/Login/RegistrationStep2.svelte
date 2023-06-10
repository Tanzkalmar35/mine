<script lang="ts">

    import AppLogo from "../../UiElements/Img/AppLogo.svelte";
    import SignUpButton from "../../UiElements/Buttons/SignUpButton.svelte";
    import LoginInputElement from "../../UiElements/InputElements/LightMode/LightModeTextInput.svelte";
    import LightModeDropdownElement from "../../UiElements/InputElements/LightMode/LightModeDropdownElement.svelte";
    import {featuredEditors, featuredRoles} from "../../AppConfig";
    import {get} from "svelte/store";
</script>


<div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
    <div class="max-w-[15rem] mx-auto">
        <AppLogo/>
    </div>
    <div class="mt-8 flex flex-col items-center">
        <h1 class="text-2xl xl:text-3xl font-extrabold">
            Welcome to mine. <br/>
        </h1>
        <h2 class="text-lg xl:text-xl mt-4">
            Please answer these few questions to get started.
        </h2>
        <div class="w-full flex-1 mt-8">


            <div class="mx-auto max-w-xs">
                <div class="flex flex-col gap-4">
                    <LoginInputElement description="What is you name?" placeholder="Your name"/>
                    <LightModeDropdownElement options={get(featuredEditors)}
                                              placeholder="What code editor do you use?"/>
                    <LightModeDropdownElement options={get(featuredRoles)} placeholder="What is your role?"/>
                </div>
                <SignUpButton/>
            </div>
        </div>
    </div>
</div>