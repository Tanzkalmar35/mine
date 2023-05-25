<script lang="ts">
   export let projectTitle: string;
   export let projectDescription: string;

  function openProject() {}  

</script>

<div class="card w-96 bg-primary text-primary-content">
  <div class="card-body">
    <h2 class="card-title text-2xl">{projectTitle}</h2>
    <p class="text-lg" >{projectDescription}</p>
    <div class="card-actions justify-end">
      <button on:click={openProject} class="btn">Open</button>
    </div>
  </div>
</div>
