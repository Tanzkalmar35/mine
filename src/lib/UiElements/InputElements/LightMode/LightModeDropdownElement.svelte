<script lang="ts">
    export let placeholder: string;
    export let options: string[];

</script>

<div>
    <select class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border placeholder-gray-500 text-sm
                focus:outline-none focus:border-gray-400 focus:bg-white">
        <option disabled selected>{placeholder}</option>
        {#each options as option}
            <option>{option}</option>
        {/each}
    </select>
</div>
