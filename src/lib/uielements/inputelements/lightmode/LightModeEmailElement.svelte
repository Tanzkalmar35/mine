<script lang="ts">
    export let placeholder: string;
    let textValue: string = "";
</script>

<input
        bind:value={textValue}
        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border placeholder-gray-500 text-sm
                focus:outline-none focus:border-gray-400 focus:bg-white"
        id="loginEmailInput"
        on:change={() => localStorage.setItem("loginEmail", textValue)}
        placeholder={placeholder}
        type="email"
/>
