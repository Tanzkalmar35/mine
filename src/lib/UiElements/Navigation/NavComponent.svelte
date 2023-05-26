<script lang="ts">
    export let name: string;
    export let url: string;
    export let imgUrl: string;
</script>

<a class="flex items-center gap-1 cursor-pointer" href="/{url}">
    <div class="w-[1.5rem]">
        <svelte:component this={imgUrl}/>
    </div>
    <h1 class="text-lg">{name}</h1>
</a>



