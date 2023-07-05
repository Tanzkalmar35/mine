<script lang="ts">
    export let title;
    export let value;
</script>

<div class="w-[calc(100vw/4)] h-[calc(50vh/3)] bg-base-100 rounded-[2vh] p-3">
    <p class="absolute">{title}</p>
    <div class="w-full h-full flex justify-center items-center">
        <p class="text-6xl italic">{value}</p>
    </div>
</div>
