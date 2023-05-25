<script lang="ts">
    import NavComponent from "../UiElements/Navigation/NavComponent.svelte";

    import MdDashboard from 'svelte-icons/md/MdDashboard.svelte'
    import MdHome from 'svelte-icons/md/MdHome.svelte'
    import MdSettings from 'svelte-icons/md/MdSettings.svelte'
</script>

<div class="w-fit h-fit mt-[4vh] px-5 py-3 flex relative bg-none rounded-[5vh] border-2 border-black gap-5"
     id="navbar">
    <NavComponent imgUrl={MdHome} name="Home"/>
    <NavComponent imgUrl={MdDashboard} name="Dashboard"/>
    <NavComponent imgUrl={MdSettings} name="Settings"/>
</div>
