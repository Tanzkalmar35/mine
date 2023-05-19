<script lang="ts">

    export let label: string;

    let files;
    let folderPath;
    let folderName: string = "";

    function updateStats(e) {
        files = e.target.files;
        for (let i = 0; i < files.length; i++) {
            folderPath = files[i].webkitRelativePath;
            if (folderName === "") {
                folderName = folderPath.split('/')[0];
            }
        }
        console.log(files)
        console.log(folderPath)
        console.log(folderName)

    }

</script>

<div class="flex flex-col">
    <span class="label-text ml-7">{label}</span>
    <input class="file-input file-input-bordered w-full max-w-xs mx-7 mb-7" directory multiple on:change={updateStats}
           type="file"
           webkitdirectory/>
</div>
