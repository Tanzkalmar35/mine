<script lang="ts">
    import AppLogo from "../uielements/img/AppLogo.svelte";
    import HomePageNavbar from "../navigation/HomePageNavbar.svelte";
    import {onMount} from "svelte";
    import GitHubStatCard from "../uielements/cards/GitHubStatCard.svelte";
    import InvisibleCard from "../uielements/cards/InvisibleCard.svelte";
    import PlaceholderCard from "../uielements/cards/PlaceholderCard.svelte";

    onMount(function () {
        if (localStorage.getItem("loggedIn") === "false") {
            window.location.href = "/registration";
        }
    })

</script>

<div id="home">
    <div class="absolute z-10 w-full flex justify-center mt-[2vh]">
        <HomePageNavbar/>
    </div>
    <div class="mx-[.5vw] mt-3 relative w-[99vw] h-[40vh] z-0 rounded-[5vh] bg-primary">
        <div class="absolute scale-50 left-[-5rem]">
            <AppLogo/>
        </div>
        <p class="absolute bottom-0 left-[2vh] text-[6rem]">Hello {localStorage.getItem("name").split(" ")[0]}</p>
        <div>
            <p class="flex absolute bottom-[1vh] right-[20%] text-5xl">Daily online time (chart)</p>
        </div>
    </div>
    <div class="h-[56vh] mt-5 mx-[.5vw] flex-grow-[1] text-white">
        <div class="flex gap-5">
            <!--<GitHubStatCard title="Total hours spent coding" value="500"/>-->
            <PlaceholderCard color="secondary"/>
            <!--<GitHubStatCard title="Number of friends" value="Coming soon..."/>-->
            <InvisibleCard/>
            <!--<GitHubStatCard title="Placeholder" value="000"/>-->
            <InvisibleCard/>
            <GitHubStatCard title="CPU usage" value="200%"/>
        </div>
        <div class="flex gap-5 mt-3">
            <!--<GitHubStatCard title="Hours spent coding today" value="200"/>-->
            <InvisibleCard/>
            <GitHubStatCard title="Favourite code editor" value={localStorage.getItem("defaultEditor")}/>
            <GitHubStatCard title="Connected GitHub account" value={localStorage.getItem("githubUsername")}/>
            <GitHubStatCard title="RAM usage" value="200%"/>
        </div>
        <div class="flex gap-5 mt-3">
            <!--<GitHubStatCard title="Screen time today" value="200"/>-->
            <InvisibleCard/>
            <!--<GitHubStatCard title="Friends online" value="Coming soon..."/>-->
            <PlaceholderCard color="primary"/>
            <!--<GitHubStatCard title="Commits today" value="20"/>-->
            <InvisibleCard/>
            <GitHubStatCard title="Disk usage" value="200%"/>
        </div>
    </div>
</div>
