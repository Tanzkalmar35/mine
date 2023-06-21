<script lang="ts">
    export let placeholder: string;
    export let options: string[];
    export let description: string;
    export let id: string;

</script>

<div>

    <label class="mb-2 text-sm font-bold text-gray-700" for={id}>
        {description}
    </label>
    <select class="w-full px-8 py-4 mb-4 rounded-lg font-medium bg-gray-100 border placeholder-gray-500 text-sm
                focus:outline-none focus:border-gray-400 focus:bg-white"
            id={id}>
        <option disabled selected>{placeholder}</option>
        {#each options as option}
            <option>{option}</option>
        {/each}
    </select>
</div>
