<script lang="ts">
    let input;
    export let placeHolder: string;

</script>

<input bind:this={input} class="input input-bordered input-primary w-full max-w-xs m-7" placeholder={placeHolder}
       type="text"/>