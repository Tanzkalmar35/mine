<script lang="ts">
    import {alertMessage, alertType} from "../../AppConfig";
</script>

{#if $alertMessage}
    {#if $alertType === "ERROR"}
        <div class="absolute w-screen h-screen flex justify-end z-10">
            <div class="alert alert-error shadow-lg absolute w-fit h-fit bottom-[2vh] right-[2vw]">
                <svg class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"/>
                </svg>
                <span>{$alertMessage}</span>
            </div>
        </div>
    {/if}
    {#if $alertType === "WARNING"}
        <div class="absolute w-screen h-screen flex justify-end z-10">
            <div class="alert alert-warning shadow-lg absolute w-fit h-fit bottom-[2vh] right-[2vw] text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                     viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
                <span>Warning: Invalid email address!</span>
            </div>
        </div>
    {/if}
    {#if $alertType === "SUCCESS"}
        <div class="absolute w-screen h-screen flex justify-end z-10">
            <div class="alert alert-success shadow-lg absolute w-fit h-fit bottom-[2vh] right-[2vw] text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                     viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>{$alertMessage}</span>
            </div>
        </div>
    {/if}
    {#if $alertType === "INFO"}
        <div class="absolute w-screen h-screen flex justify-end z-10">
            <div class="alert alert-info shadow-lg absolute w-fit h-fit bottom-[2vh] right-[2vw] text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     class="stroke-current flex-shrink-0 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>New software update available.</span>
            </div>
        </div>
    {/if}
{/if}
