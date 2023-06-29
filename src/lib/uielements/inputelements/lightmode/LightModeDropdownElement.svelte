<script lang="ts">
    import {selectedEditor, selectedRole} from "../../../AppConfig";

    export let placeholder: string;
    export let options: string[];
    export let description: string;
    export let id: string;
    export let type: string = "";
    let currentSelectedOption: string;

    function setEditor() {
        if (type === "editor") {
            selectedEditor.set(currentSelectedOption)
        } else if (type === "role") {
            selectedRole.set(currentSelectedOption)
        }
    }

</script>

<div>

    <label class="mb-2 text-sm font-bold text-gray-700" for={id}>
        {description}
    </label>
    <select bind:value={currentSelectedOption}
            class="w-full px-8 py-4 mb-4 rounded-lg font-medium bg-gray-100 border placeholder-gray-500 text-sm
                focus:outline-none focus:border-gray-400 focus:bg-white"
            id={id}
            on:change={setEditor}>
        <option disabled selected>{placeholder}</option>
        {#each options as option}
            <option>{option}</option>
        {/each}
    </select>
</div>
