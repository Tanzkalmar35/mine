<script lang="ts">
    import {currentPage} from "../../AppConfig";

    export let name: string;
    export let url: string;
    export let imgUrl: string;

</script>

<div class="flex items-center gap-1 cursor-pointer" on:click={() => currentPage.set(url)}>
    <div class="w-[1.5rem]">
        <svelte:component this={imgUrl}/>
    </div>
    <h1 class="text-lg">{name}</h1>
</div>