<script>
    import TiPlusOutline from 'svelte-icons/ti/TiPlusOutline.svelte'
</script>

<label class="btn flex items-center w-fit h-fit px-5 py-3 border-2 border-[#212121] rounded-[1vh]
              cursor-pointer bg-transparent text-[#212121] gap-2 hover:text-white"
       for="my-modal-5">
    <div class="w-[1.5rem]">
        <svelte:component this={TiPlusOutline}/>
    </div>
    <h2 class="text-lg">Add Project</h2>
</label>
