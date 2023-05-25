<script lang="ts">
    export let textValue;
    export let placeHolder: string;

</script>

<input bind:value={textValue} class="input input-bordered input-primary w-full max-w-xs m-7 text-lg"
       placeholder={placeHolder}
       type="text"/>
