<script lang="ts">
    import NavComponent from "../../UiElements/Navigation/NavComponent.svelte";

    import MdDashboard from 'svelte-icons/md/MdDashboard.svelte'
    import MdHome from 'svelte-icons/md/MdHome.svelte'
    import MdSettings from 'svelte-icons/md/MdSettings.svelte'
</script>

<div class="w-fit h-fit px-5 py-3 flex relative bg-none gap-5 border-2 border-[#212121] rounded-[1vh] text-[#212121]"
     id="navbar">
    <NavComponent imgUrl={MdHome} name="Home" url="/"/>
    <NavComponent imgUrl={MdDashboard} name="Dashboard" url="/Dashboard"/>
    <NavComponent imgUrl={MdSettings} name="Settings" url="/Settings"/>
</div>
