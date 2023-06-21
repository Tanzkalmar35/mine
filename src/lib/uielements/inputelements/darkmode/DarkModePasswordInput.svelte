<script lang="ts">
    export let textValue: string;
    export let disabled: boolean = false;
    export let placeHolder: string;

</script>

<input bind:value={textValue} class="input input-bordered input-primary w-full max-w-xs m-7 text-lg"
       disabled={disabled}
       placeholder={placeHolder}
       type="password"/>
