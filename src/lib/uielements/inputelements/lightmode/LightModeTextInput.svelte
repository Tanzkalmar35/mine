<script lang="ts">
    import {userDetailGitHubName, userDetailName} from "../../../AppConfig";
    import {defaultEditorPath} from "../../../AppConfig.js";

    export let description: string;
    export let placeholder: string;
    export let disabled: boolean = false;
    export let useCase: string = "";

    let textValue: string;

    function setValue() {
        if (useCase === "name") {
            userDetailName.set(textValue);
        } else if (useCase === "githubName") {
            userDetailGitHubName.set(textValue);
        } else if (useCase === "editorPath") {
            defaultEditorPath.set(textValue);
        }
    }

</script>

<div>
    <label class="mb-2 text-sm font-bold text-gray-700" for="loginTextElement">
        {description}
    </label>
    <input
            bind:value={textValue}
            class="w-full px-8 py-4 mb-4 rounded-lg font-medium bg-gray-100 border placeholder-gray-500 text-sm
                focus:outline-none focus:border-gray-400 focus:bg-white"
            disabled={disabled}
            id="loginTextElement"
            on:change={setValue}
            placeholder={placeholder}
            type="text"
    />
</div>
