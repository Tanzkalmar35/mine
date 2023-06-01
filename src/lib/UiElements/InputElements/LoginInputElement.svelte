<script lang="ts">
    export let placeholder: string;
    export let type: string = 'text';
</script>

<input
        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        placeholder={placeholder}
        type={type}
/>