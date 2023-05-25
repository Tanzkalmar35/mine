<script lang="ts">
    export let textValue;
    export let placeHolder: string;
</script>

<textarea bind:value={textValue} class="textarea textarea-primary m-7 text-lg" placeholder={placeHolder}></textarea>
